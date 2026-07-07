import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileSpreadsheet, FileText, UploadCloud } from "lucide-react";
import { SiteHeader, ServicePortalFab } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useSubmitForm, FormStatusMessage, SubmitButton } from "@/components/form-helpers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <div className="min-h-screen bg-background font-sans text-foreground" dir="rtl">
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
      </main>
      <SiteFooter />
      <ServicePortalFab />
    </div>
  );
}
