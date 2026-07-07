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

    return { success: true };
  });
