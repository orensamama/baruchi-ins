import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CreditCard,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  ScrollText,
  Stamp,
  UploadCloud,
} from "lucide-react";
import { SiteHeader, FloatingActions } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useSubmitForm, FormStatusMessage, SubmitButton } from "@/components/form-helpers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type DocGuideGroup = {
  heading?: string;
  steps: string[];
};

type DocGuide = {
  icon: typeof CreditCard;
  title: string;
  content: string;
  groups: DocGuideGroup[];
  note?: string;
  link?: { href: string; label: string };
};

const DOCUMENT_GUIDES: DocGuide[] = [
  {
    icon: CreditCard,
    title: `דו"ח ריכוז נתוני אשראי (בנק ישראל)`,
    content: `הדו"ח הרשמי המציג את היסטוריית האשראי, ההלוואות והצ'קים שלכם ב-3 השנים האחרונות. הוא מסמך חובה לכל תיק משכנתא.`,
    groups: [
      {
        steps: [
          `היכנסו לאתר הרשמי של מערכת נתוני אשראי של בנק ישראל: https://www.creditdata.org.il/`,
          `לחצו על כפתור "התחברות לקבלת מידע" בראש העמוד.`,
          `המערכת תעביר אתכם אוטומטית למערכת ההזדהות הלאומית הממשלתית (gov.il) - הזדהו עם הפרטים האישיים שלכם.`,
          `לאחר הכניסה, בחרו באפשרות "הפקת דו"ח ריכוז נתוני אשראי" והורידו את הקובץ המלא כ-PDF.`,
        ],
      },
    ],
    note: `הערה: השירות ניתן בחינם לגמרי פעם אחת בשנה קלנדרית. (לחילופין בנייד, ניתן להוריד ולהפיק גם דרך אפליקציית 'קפטן קרדיט').`,
    link: { href: "https://www.creditdata.org.il/", label: "מעבר לאתר נתוני אשראי" },
  },
  {
    icon: ScrollText,
    title: `נוסח טאבו מעודכן (נסח רישום מקרקעין)`,
    content: `תעודת הזהות של הנכס המוכיחה מי הבעלים האמיתיים של הדירה והאם קיימים עליה עיקולים, שעבודים או הערות אזהרה.`,
    groups: [
      {
        steps: [
          `כדי להפיק נסח טאבו יש צורך במספרי הגוש והחלקה של הדירה. אם אינכם יודעים אותם, היכנסו למפת Govmap הרשמית, הקלידו את הכתובת שלכם בשורת החיפוש העליונה ותראו מיד את מספרי הגוש והחלקה שלכם: https://www.govmap.gov.il/`,
          `לאחר שיש בידיכם גוש וחלקה, היכנסו לאתר הממשלתי להפקת נסח טאבו: https://www.gov.il/he/service/land_registration_extract`,
          `לחצו על כפתור ההפקה, מזינים את נתוני הגוש והחלקה, ומשלמים אגרה ממשלתית אונליין (כ-17 ש"ח).`,
          `קובץ ה-PDF הרשמי יישלח מיד ישירות לתיבת המייל שלכם.`,
        ],
      },
    ],
  },
  {
    icon: Stamp,
    title: `אישור זכויות (רמ"י או חברה משכנת)`,
    content: `מסמך המחליף את נסח הטאבו במקרים בהם הדירה או הקרקע עדיין אינן רשומות בטאבו הרשמי, אלא מנוהלות על ידי רשות מקרקעי ישראל או החברה הקבלנית שבנתה את הפרויקט.`,
    groups: [
      {
        heading: `במידה והנכס מנוהל ברשות מקרקעי ישראל (רמ"י):`,
        steps: [
          `היכנסו לאתר הרשמי של רשות מקרקעי ישראל: https://www.land.gov.il`,
          `לחצו על כפתור הכניסה לאזור האישי ובצעו כניסה באמצעות מערכת ההזדהות הלאומית.`,
          `המערכת תזהה את הנכס הרשום על שמכם. הגישו בקשה דיגיטלית להפקת "אישור זכויות". המסמך יופק חינם תוך מספר דקות.`,
        ],
      },
      {
        heading: `במידה והנכס מנוהל בחברה משכנת (חברה קבלנית כמו עמידר, שיכון ובינוי וכו׳):`,
        steps: [
          `יש לפנות ישירות לשירות הלקוחות או לאתר החברה המשכנת הספציפית.`,
          `הגישו בקשה ל'אישור זכויות לצורך משכנתא'. ההפקה עשויה לעלות אגרה קבועה בחוק (כ-80-90 ש"ח) ולהימשך מספר ימים.`,
        ],
      },
    ],
  },
];

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

/** Renders step text as plain text, auto-linking any raw URL so it opens cleanly in a new tab. */
function StepText({ text }: { text: string }): ReactNode {
  const parts = text.split(URL_PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        // text.split() with a capturing group alternates [text, match, text, match, ...],
        // so odd indices are always the captured URLs.
        i % 2 === 1 ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline decoration-gold decoration-2 underline-offset-2 transition hover:text-gold"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function DocumentGuideStation() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            תחנת המדריכים
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            מדריך הפקת מסמכים שלב אחר שלב
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            לחצו על שם המסמך כדי לראות מה זה, איך משיגים אותו ולאן פונים — צעד אחר צעד.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {DOCUMENT_GUIDES.map((doc, index) => (
            <AccordionItem
              key={doc.title}
              value={`doc-${index}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-6 shadow-md transition hover:shadow-lg md:px-8"
            >
              <AccordionTrigger className="py-6 text-right hover:no-underline [&[data-state=open]>svg]:text-gold">
                <span className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <doc.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-lg font-bold text-primary md:text-xl">
                    {doc.title}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="border-t border-border pt-5 md:pr-16">
                  <p className="leading-relaxed text-muted-foreground">{doc.content}</p>

                  {doc.groups.map((group, gi) => (
                    <div key={gi} className={gi > 0 ? "mt-6" : "mt-5"}>
                      {group.heading && (
                        <p className="mb-2.5 flex items-center gap-1.5 font-semibold text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          {group.heading}
                        </p>
                      )}
                      <ol className="list-decimal space-y-2 pr-5 text-sm leading-relaxed text-foreground/85 marker:font-semibold marker:text-gold">
                        {group.steps.map((step, si) => (
                          <li key={si}>
                            <StepText text={step} />
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}

                  {doc.note && (
                    <p className="mt-5 rounded-xl bg-secondary/70 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                      {doc.note}
                    </p>
                  )}

                  {doc.link && (
                    <a
                      href={doc.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-sm transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {doc.link.label}
                    </a>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/mortgage")({
  head: () => ({
    meta: [
      { title: "בדיקת מיחזור משכנתא | ברוכי סוכנות לביטוח" },
      {
        name: "description",
        content:
          "בדיקת כדאיות מיחזור משכנתא ללא עלות — מדריך שלב אחר שלב להפקת דוח יתרות לסילוק, והעלאת הדוח לבדיקה מקצועית של צוות ברוכי.",
      },
    ],
  }),
  component: MortgagePage,
});

function MortgagePage() {
  const { status, errorMessage, submitFields, fail } = useSubmitForm("mortgage");
  const [fields, setFields] = useState({ name: "", phone: "" });
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) {
      fail("נא לצרף את דוח היתרות לסילוק.");
      return;
    }
    const ok = await submitFields(fields, file);
    if (ok) {
      setFields({ name: "", phone: "" });
      setFile(null);
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20 font-sans text-foreground md:pb-0" dir="rtl">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[oklch(0.18_0.04_258)] py-20 text-primary-foreground md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-gold opacity-[0.12] blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/70 transition hover:text-gold"
            >
              חזרה לעמוד הבית
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              בדיקת מיחזור משכנתא — ללא עלות
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              בודקים עבורכם כדאיות
              <span className="mt-1 block bg-gradient-to-l from-gold via-[oklch(0.86_0.08_85)] to-gold bg-clip-text text-transparent">
                מיחזור משכנתא
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              לקוחות משכנתא קיימים — העלו את דוח היתרות שלכם ונבדוק בחינם, ללא עלות וללא התחייבות,
              אם מגיע לכם מסלול משתלם יותר.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-md md:p-10">
              <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-primary">
                <FileSpreadsheet className="h-6 w-6 text-gold" />
                איך מפיקים דוח יתרות לסילוק?
              </h2>
              <ol className="mt-5 list-decimal space-y-3 pr-5 text-base leading-relaxed text-foreground/80">
                <li>היכנסו לאתר או לאפליקציה של הבנק שבו לקוחה המשכנתא שלכם.</li>
                <li>אתרו את אזור "המשכנתאות שלי" או "ניהול הלוואות".</li>
                <li>בחרו באפשרות "דוח יתרות לסילוק" והפיקו אותו לתאריך הנוכחי.</li>
                <li>
                  שמרו את הקובץ (PDF) והעלו אותו כאן — ונבדוק עבורכם את כדאיות המיחזור, ללא עלות
                  וללא התחייבות.
                </li>
              </ol>
              <a
                href="/mortgage-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2.5 rounded-xl bg-gold px-6 py-4 text-center font-semibold text-gold-foreground shadow-md transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
              >
                <FileText className="h-5 w-5" />
                לחצו כאן לצפייה במדריך המלא להפקת הדוח (שלב אחר שלב)
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-md md:p-10">
              <h2 className="font-display text-xl font-bold text-primary">שליחת הדוח לבדיקה</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                מלאו את פרטיכם וצרפו את דוח היתרות — נחזור אליכם עם תוצאות הבדיקה.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="mortgage-name">שם מלא</Label>
                  <Input
                    id="mortgage-name"
                    required
                    value={fields.name}
                    onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="mortgage-phone">טלפון</Label>
                  <Input
                    id="mortgage-phone"
                    type="tel"
                    required
                    value={fields.phone}
                    onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="mortgage-file" className="flex items-center gap-1.5">
                    <UploadCloud className="h-3.5 w-3.5" /> העלה את דוח היתרות שלך כאן
                  </Label>
                  <Input
                    id="mortgage-file"
                    type="file"
                    accept=".pdf,image/*"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                </div>
                <div className="space-y-3 pt-2">
                  <SubmitButton status={status} variant="gold">
                    שליחת הדוח לבדיקה
                  </SubmitButton>
                  <FormStatusMessage
                    status={status}
                    errorMessage={errorMessage}
                    successMessage="הדוח נשלח בהצלחה! ניצור איתכם קשר עם תוצאות הבדיקה."
                  />
                </div>
              </form>
            </div>
          </div>
        </section>

        <DocumentGuideStation />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
