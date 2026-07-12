import { createServerFn } from "@tanstack/react-start";

const DESTINATION_EMAIL = "main.baruchi@gmail.com";

const FORM_TITLES: Record<string, string> = {
  callback: "פנייה חדשה מהאתר - בקשה לחזרה",
  portal: "פנייה חדשה - אזור מבוטחים",
  mortgage: "מסמך משכנתא חדש הועלה מהאתר",
};

const TOPIC_LABELS: Record<string, string> = {
  health: "בריאות",
  life: "חיים",
  pension: "פנסיה",
  mortgage: "משכנתא",
};

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Maps a submitted form's fields onto the office's Supabase `leads` table columns. */
function buildLeadRecord(formType: string, data: FormData) {
  const name = String(data.get("name") ?? "");
  const phone = String(data.get("phone") ?? "");
  const email = data.get("email");
  const topic = data.get("topic");
  const idNumber = data.get("idNumber");
  const messageRaw = data.get("message");

  let serviceType: string;
  let message: string;

  if (formType === "mortgage") {
    serviceType = "מיחזור משכנתא";
    message = "בקשה לבדיקת מיחזור משכנתא — דוח יתרות לסילוק צורף לבדיקה.";
  } else if (formType === "portal") {
    serviceType = typeof topic === "string" && topic.trim() ? topic.trim() : "פנייה כללית";
    const parts: string[] = [];
    if (typeof idNumber === "string" && idNumber.trim()) parts.push(`ת"ז: ${idNumber.trim()}`);
    if (typeof messageRaw === "string" && messageRaw.trim()) parts.push(messageRaw.trim());
    message = parts.join("\n");
  } else {
    serviceType = "פנייה כללית / יצירת קשר";
    message = typeof messageRaw === "string" ? messageRaw : "";
  }

  return {
    full_name: name,
    phone,
    email: typeof email === "string" && email.trim() ? email.trim() : null,
    service_type: serviceType,
    message,
  };
}

/** Inserts the submission into the office's internal Supabase `leads` table. */
async function saveLeadToSupabase(formType: string, data: FormData) {
  const supabaseUrl = typeof process !== "undefined" ? process.env.SUPABASE_URL : undefined;
  const supabaseKey = typeof process !== "undefined" ? process.env.SUPABASE_ANON_KEY : undefined;
  if (!supabaseUrl || !supabaseKey) {
    console.error("SUPABASE_URL / SUPABASE_ANON_KEY are not configured — lead was not saved.");
    throw new Error("שירות שמירת הפניות אינו מוגדר כרגע. אנא צרו קשר טלפוני.");
  }

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase.from("leads").insert(buildLeadRecord(formType, data));
  if (error) {
    console.error("Supabase leads insert error:", error);
    throw new Error("שמירת הפנייה נכשלה. אנא נסו שוב או צרו קשר טלפוני.");
  }
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: FormData) => data)
  .handler(async ({ data }) => {
    const formType = String(data.get("formType") ?? "callback");
    const fieldLabels: Record<string, string> = {
      name: "שם מלא",
      idNumber: "תעודת זהות",
      phone: "טלפון",
      email: "אימייל",
      topic: "נושא הפנייה",
      message: "הודעה",
    };

    const rows: string[] = [];
    for (const key of ["name", "idNumber", "phone", "email", "topic", "message"]) {
      const value = data.get(key);
      if (typeof value === "string" && value.trim()) {
        const label = fieldLabels[key];
        const displayValue = key === "topic" ? (TOPIC_LABELS[value] ?? value) : value;
        rows.push(
          `<tr><td style="padding:6px 12px;color:#6b7280;font-weight:600;">${label}</td><td style="padding:6px 12px;">${escapeHtml(displayValue)}</td></tr>`,
        );
      }
    }

    const attachments: Array<{ filename: string; content: string }> = [];
    for (const value of data.getAll("file")) {
      if (value instanceof File && value.size > 0) {
        const buffer = await value.arrayBuffer();
        attachments.push({
          filename: value.name,
          content: arrayBufferToBase64(buffer),
        });
      }
    }

    const apiKey = typeof process !== "undefined" ? process.env.RESEND_API_KEY : undefined;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured — form submission was not emailed.");
      throw new Error("שירות שליחת הטפסים אינו מוגדר כרגע. אנא צרו קשר טלפוני.");
    }
    const fromEmail =
      (typeof process !== "undefined" ? process.env.RESEND_FROM_EMAIL : undefined) ||
      "אתר ברוכי <onboarding@resend.dev>";

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const replyTo = data.get("email");
    const html = `
      <div style="font-family:sans-serif;direction:rtl;text-align:right;">
        <h2>${FORM_TITLES[formType] ?? "פנייה חדשה מהאתר"}</h2>
        <table style="border-collapse:collapse;">${rows.join("")}</table>
        ${attachments.length ? `<p>מצורפים ${attachments.length} קבצים.</p>` : ""}
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: DESTINATION_EMAIL,
      subject: FORM_TITLES[formType] ?? "פנייה חדשה מהאתר",
      html,
      replyTo: typeof replyTo === "string" && replyTo ? replyTo : undefined,
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("Resend send error:", error);
      throw new Error("שליחת הטופס נכשלה. אנא נסו שוב או צרו קשר טלפוני.");
    }

    await saveLeadToSupabase(formType, data);

    return { success: true };
  });
