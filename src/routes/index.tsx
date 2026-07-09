import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import asherImg from "@/assets/asher.png";
import yonatanImg from "@/assets/yonatan.png";
import orenImg from "@/assets/oren.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiteHeader, FloatingActions } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useSubmitForm, FormStatusMessage, SubmitButton } from "@/components/form-helpers";
import { MORTGAGE_SITE_URL } from "@/lib/constants";
import {
  ShieldCheck,
  Heart,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  PiggyBank,
  LineChart,
  Car,
  Landmark,
  Compass,
  Wallet,
  Swords,
  ArrowLeft,
  ExternalLink,
  UploadCloud,
  IdCard,
  MessageSquareText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ברוכי סוכנות לביטוח | ביטוח, פנסיה ומשכנתאות" },
      {
        name: "description",
        content:
          "סוכנות ברוכי - שירות אישי, מקצועי ומשפחתי בתחומי הביטוח, הפנסיה, המשכנתאות וניהול הסיכונים. ליווי צמוד לאורך כל הדרך.",
      },
      { property: "og:title", content: "ברוכי סוכנות לביטוח" },
      {
        property: "og:description",
        content: "שירות אישי ומשפחתי בתחומי הביטוח, הפנסיה והמשכנתאות.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-20 font-sans text-foreground md:pb-0" dir="rtl">
      <SiteHeader />
      <main>
        <Hero />
        <Team />
        <Mission />
        <Services />
        <WhyUs />
        <ClientPortal />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.16_0.045_258)] text-primary-foreground">
      {/* atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[oklch(0.78_0.09_82)] opacity-[0.14] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[oklch(0.35_0.08_258)] opacity-70 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 md:py-28 lg:py-32">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            סוכנות משפחתית • מאז 1991
          </span>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.4rem]">
            <span className="block">ברוכי</span>
            <span className="mt-2 block bg-gradient-to-l from-gold via-[oklch(0.86_0.08_85)] to-gold bg-clip-text text-transparent">
              סוכנות לביטוח
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg md:text-xl md:leading-[1.75]">
            נלחמים ועומדים על שלכם מול חברות הביטוח, חוסכים לכם כספים מיותרים ומונעים כפילויות ביטוח
            וכפלי תשלום — כדי שתקבלו את כל מה שמגיע לכם, בלי להתפשר.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[0_10px_30px_-12px_oklch(0.78_0.09_82/0.6)] transition hover:brightness-[1.05]"
            >
              קבעו פגישת ייעוץ
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground/90 transition hover:border-white/40 hover:bg-white/5"
            >
              תחומי ההתמחות שלנו
            </a>
          </div>

          <dl className="mx-auto grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { k: "35+", v: "שנות ניסיון" },
              { k: "5,000+", v: "לקוחות מרוצים" },
              { k: "100%", v: "יחס אישי" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-gold sm:text-3xl">{s.k}</dt>
                <dd className="mt-1.5 text-xs font-medium text-primary-foreground/65 sm:text-sm">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      icon: Heart,
      title: "יחס אישי ומשפחתי",
      desc: "כל לקוח מקבל ליווי אישי וזמין — לא מספר בתור, אלא חלק מהמשפחה.",
    },
    {
      icon: Award,
      title: "מקצועיות ללא פשרות",
      desc: "צוות מומחים בעל הסמכות מלאות ומעל 35 שנות ניסיון בשוק הישראלי.",
    },
    {
      icon: Users,
      title: "אובייקטיביות מלאה",
      desc: "אנו עובדים עבורכם — לא עבור חברות הביטוח. ההמלצה שלנו תמיד לטובתכם.",
    },
    {
      icon: ShieldCheck,
      title: "ליווי לאורך כל הדרך",
      desc: "מהיום הראשון ובמיוחד ברגעי האמת — אנחנו לצידכם בתביעות ובהחלטות.",
    },
  ];
  return (
    <section id="why-us" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              למה ברוכי
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
              סוכנות משפחתית
              <br />
              שמתייחסת אליכם
              <span className="block text-gold">כמו למשפחה</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              שלושה דורות של מומחיות, אלפי משפחות מלוות, ומחויבות אחת בלתי מתפשרת — לעמוד לצידכם בכל
              רגע משמעותי בחיים.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { status, errorMessage, submitFields } = useSubmitForm("callback");
  const [fields, setFields] = useState({ name: "", phone: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = await submitFields(fields);
    if (ok) setFields({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            נשמח לעזור
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            מוכנים לעשות סדר בעולם הפיננסי שלכם?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            השאירו פרטים ונחזור אליכם, או פנו ישירות לאיש הקשר המתאים — ללא עלות וללא התחייבות.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-border bg-card p-8 shadow-lg sm:grid-cols-2 md:p-10"
          >
            <div className="space-y-1.5">
              <Label htmlFor="lead-name">שם מלא</Label>
              <Input
                id="lead-name"
                required
                value={fields.name}
                onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                placeholder="שם מלא"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lead-phone">טלפון</Label>
              <Input
                id="lead-phone"
                type="tel"
                required
                value={fields.phone}
                onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
                placeholder="050-0000000"
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="lead-email">אימייל</Label>
              <Input
                id="lead-email"
                type="email"
                value={fields.email}
                onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                placeholder="name@example.com"
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="lead-message">הודעה</Label>
              <Textarea
                id="lead-message"
                rows={4}
                value={fields.message}
                onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                placeholder="איך נוכל לעזור?"
              />
            </div>
            <div className="space-y-3 sm:col-span-2">
              <SubmitButton status={status}>שליחה</SubmitButton>
              <FormStatusMessage
                status={status}
                errorMessage={errorMessage}
                successMessage="הפרטים נשלחו בהצלחה! נחזור אליכם בהקדם."
              />
            </div>
          </form>

          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground shadow-2xl md:p-10">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-xl font-bold">יצירת קשר ישירה</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                מעדיפים לדבר עכשיו? פנו ישירות לאיש הצוות המתאים.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="https://wa.me/972544289164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#25D366] px-5 py-3.5 font-semibold text-white transition hover:brightness-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  אשר ברוכי: 054-428-9164
                </a>
                <a
                  href="https://wa.me/972543913343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-gold px-5 py-3.5 font-semibold text-gold-foreground transition hover:brightness-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  יהונתן ברוכי: 054-391-3343
                </a>
                <a
                  href="https://wa.me/972542008230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/25 px-5 py-3.5 font-medium transition hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  אורן טל סממה: 054-200-8230
                </a>
                <a
                  href="mailto:officeasher@shaham-orlan.co.il"
                  className="flex items-center gap-3 rounded-xl border border-white/25 px-5 py-3.5 font-medium transition hover:bg-white/10"
                >
                  <Mail className="h-5 w-5" />
                  מייל משרד: officeasher@shaham-orlan.co.il
                </a>
                <div className="flex items-center gap-3 px-5 text-sm text-primary-foreground/75">
                  <MapPin className="h-5 w-5 text-gold" />
                  היצירה 3, פתח תקווה
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const pillars = [
    {
      icon: Compass,
      title: "אופטימיזציה של תיק הביטוח",
      desc: "מיפוי מקיף של כל הפוליסות, החסכונות וההתחייבויות — וייעול התיק לכדי כיסוי מיטבי וחכם.",
    },
    {
      icon: Wallet,
      title: "מניעת תשלומי כפל וכפילויות מיותרות",
      desc: "בדיקה מעמיקה שמונעת כפילויות ביטוח וכפלי תשלום — כדי שתשלמו רק על מה שבאמת צריך.",
    },
    {
      icon: Swords,
      title: "התייצבות חסרת פשרות מול חברות הביטוח",
      desc: "עומדים על שלכם מול חברות הביטוח בנחישות ובמקצועיות — כדי להבטיח שתקבלו כל שקל שמגיע לכם.",
    },
  ];
  return (
    <section id="mission" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            השליחות שלנו
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
            מצוינות פיננסית — <span className="text-gold">לטובת הלקוח</span>
          </h2>
          <p className="mt-6 text-lg leading-[1.85] text-muted-foreground">
            המחויבות שלנו פשוטה: אופטימיזציה של תיק הביטוח, מניעת תשלומי כפל וכפילויות מיותרות,
            והתייצבות חסרת פשרות מול חברות הביטוח — כדי שתקבלו את כל מה שמגיע לכם, בלי לבזבז כסף
            מיותר.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/30">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const services = [
    {
      icon: HeartPulse,
      title: "סיכונים",
      desc: "ביטוחי חיים, בריאות, ביטוח משכנתא, אובדן כושר עבודה ונכות.",
      items: ["ביטוח חיים", "ביטוח בריאות", "ביטוח משכנתא", "אובדן כושר עבודה"],
      team: "asher" as const,
    },
    {
      icon: PiggyBank,
      title: "פנסיוני",
      desc: "בניית עתיד פנסיוני יציב — קרנות פנסיה, ביטוחי מנהלים וקופות גמל.",
      items: ["קרנות פנסיה", "ביטוחי מנהלים", "קופות גמל", "תכנון פרישה"],
      team: "asher" as const,
    },
    {
      icon: LineChart,
      title: "פיננסים",
      desc: "פתרונות חיסכון והשקעה לטווח קצר וארוך, בהתאמה אישית מלאה.",
      items: ["גמל להשקעה", "קרנות השתלמות", "השקעות", "ניהול נזילות"],
      team: "yonatan" as const,
    },
    {
      icon: Car,
      title: "אלמנטרי",
      desc: "ביטוחי רכב, דירה, מבנה ותכולה — הגנה מלאה על כל מה שיקר לכם.",
      items: ["ביטוח רכב", "ביטוח דירה", "ביטוח מבנה", "ביטוח עסק"],
      team: "yonatan" as const,
    },
    {
      icon: Landmark,
      title: "משכנתאות",
      desc: "ייעוץ משכנתאות אסטרטגי — מרכישת דירה ועד מיחזור ואיחוד הלוואות.",
      items: ["רכישת דירה", "מיחזור משכנתא", "משכנתא הפוכה", "איחוד הלוואות"],
      team: "oren" as const,
      href: MORTGAGE_SITE_URL,
    },
  ];

  return (
    <section id="services" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            השירותים שלנו
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            פתרון שלם לכל עולמות הפיננסים
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            חמישה תחומי מומחיות תחת קורת גג אחת — לליווי מלא לאורך כל שלבי החיים.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const cardClassName =
              "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-md transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";
            const cardContent = (
              <>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-gold/0 via-gold to-gold/0 opacity-0 transition group-hover:opacity-100" />
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition group-hover:text-gold">
                  {s.href ? "מעבר לאתר המשכנתאות" : "לפרטים נוספים"}
                  {s.href ? (
                    <ExternalLink className="h-4 w-4" />
                  ) : (
                    <ArrowLeft className="h-4 w-4" />
                  )}
                </span>
              </>
            );

            if (s.href) {
              return (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <article
                key={s.title}
                role="button"
                tabIndex={0}
                onClick={() => setActiveMember(TEAM_MEMBERS.find((m) => m.slug === s.team) ?? null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveMember(TEAM_MEMBERS.find((m) => m.slug === s.team) ?? null);
                  }
                }}
                className={cardClassName}
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
      <Dialog open={!!activeMember} onOpenChange={(open) => !open && setActiveMember(null)}>
        <DialogContent className="max-w-sm">
          {activeMember && (
            <>
              <DialogHeader>
                <div className="flex flex-col items-center gap-3 text-center">
                  <img
                    src={activeMember.img}
                    alt={activeMember.name}
                    className="h-16 w-16 rounded-full object-cover object-top ring-[1.5px] ring-border"
                  />
                  <div>
                    <DialogTitle className="font-display text-lg font-bold text-primary">
                      {activeMember.name}
                    </DialogTitle>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold">
                      {activeMember.title}
                    </p>
                  </div>
                </div>
              </DialogHeader>
              <p className="text-center text-sm leading-[1.65] text-muted-foreground">
                {activeMember.desc}
              </p>
              <div className="flex flex-col items-center gap-1">
                <TeamContactActions m={activeMember} />
                <div className="mt-1 text-[11px] font-medium text-muted-foreground">
                  {activeMember.phone}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ClientPortal() {
  const { status, errorMessage, submitFields } = useSubmitForm("portal");
  const [fields, setFields] = useState({
    name: "",
    idNumber: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = await submitFields(fields, file);
    if (ok) {
      setFields({ name: "", idNumber: "", phone: "", topic: "", message: "" });
      setFile(null);
    }
  }

  return (
    <section id="client-portal" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            שירות למבוטחים
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            אזור מבוטחים — פנייה לשירות
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            כבר לקוחות שלנו? שלחו לנו פנייה מסודרת ונטפל בה בהקדם האפשרי.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-5 rounded-2xl border border-border bg-card p-8 shadow-lg sm:grid-cols-2 md:p-10"
        >
          <div className="space-y-1.5">
            <Label htmlFor="portal-name">שם מלא</Label>
            <Input
              id="portal-name"
              required
              value={fields.name}
              onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="portal-id" className="flex items-center gap-1.5">
              <IdCard className="h-3.5 w-3.5" /> תעודת זהות
            </Label>
            <Input
              id="portal-id"
              required
              inputMode="numeric"
              value={fields.idNumber}
              onChange={(e) => setFields((f) => ({ ...f, idNumber: e.target.value }))}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="portal-phone">טלפון</Label>
            <Input
              id="portal-phone"
              type="tel"
              required
              value={fields.phone}
              onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="portal-topic">נושא הפנייה</Label>
            <Input
              id="portal-topic"
              required
              placeholder="לדוגמה: ביטוח בריאות, פנסיה, קופות גמל..."
              value={fields.topic}
              onChange={(e) => setFields((f) => ({ ...f, topic: e.target.value }))}
            />
          </div>

          <div className="rounded-xl border border-border bg-secondary/50 p-5 sm:col-span-2">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
              <MessageSquareText className="h-4 w-4 text-gold" />
              פירוט הפנייה ו/או אפשרות להעלאת קובץ
            </p>
            <div className="mt-4 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="portal-message">פירוט הפנייה / הודעה</Label>
                <Textarea
                  id="portal-message"
                  rows={4}
                  placeholder="ספרו לנו בקצרה במה תרצו שנעזור..."
                  value={fields.message}
                  onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="portal-file" className="flex items-center gap-1.5">
                  <UploadCloud className="h-3.5 w-3.5" /> העלאת מסמך או תמונה (אופציונלי)
                </Label>
                <Input
                  id="portal-file"
                  type="file"
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:col-span-2">
            <SubmitButton status={status}>שליחת הפנייה</SubmitButton>
            <FormStatusMessage
              status={status}
              errorMessage={errorMessage}
              successMessage="הפנייה נשלחה בהצלחה! ניצור איתכם קשר בהקדם."
            />
          </div>
        </form>
      </div>
    </section>
  );
}

const TEAM_MEMBERS = [
  {
    slug: "asher",
    name: "אשר ברוכי (אושי)",
    title: "מייסד וסוכן ביטוח בכיר",
    img: asherImg,
    desc: "סוכן ביטוח למעלה מ-35 שנה. ותיק ומנוסה, נלחם בנחישות על כל מבוטח ומבוטח. חברות הביטוח יודעות שאושי לא מוותר על שום זכות המגיעה ללקוח.",
    phone: "054-428-9164",
    phoneLink: "tel:0544289164",
    whatsappLink: "https://wa.me/972544289164",
    email: "asherb@shaham-orlan.co.il",
  },
  {
    slug: "yonatan",
    name: "יהונתן ברוכי",
    title: "מומחה לביטוח אלמנטרי ופיננסים",
    img: yonatanImg,
    desc: "סוכן ביטוח מומחה עם ניסיון בליווי מאות משפחות ותיקי ביטוח מורכבים.",
    phone: "054-391-3343",
    phoneLink: "tel:0543913343",
    whatsappLink: "https://wa.me/972543913343",
    email: "yehonatanb@shaham.co.il",
  },
  {
    slug: "oren",
    name: "אורן טל סממה",
    title: "יועץ משכנתאות אסטרטגי",
    img: orenImg,
    desc: "מומחה בבניית תמהילי משכנתא חכמים, מיחזור ואיחוד הלוואות, המלווה את הלקוח יד ביד מול המערכת הבנקאית.",
    phone: "054-200-8230",
    phoneLink: "tel:0542008230",
    whatsappLink: "https://wa.me/972542008230",
    email: "officeasher@shaham-orlan.co.il",
  },
] as const;

type TeamMember = (typeof TEAM_MEMBERS)[number];

function TeamContactActions({ m }: { m: TeamMember }) {
  return (
    <div className="mt-5 flex items-center gap-3.5">
      <a
        href={m.phoneLink}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground"
        title={`טלפון: ${m.phone}`}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={m.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
        title={`וואטסאפ: ${m.phone}`}
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href={`mailto:${m.email}`}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground"
        title={`מייל: ${m.email}`}
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            האנשים שלנו
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            פאנל המומחים שעומד לצידכם
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            צוות מקצועי, חם ומסור — שלוקח אחריות אישית על כל לקוח.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((m) => (
            <article
              key={m.name}
              id={`team-${m.slug}`}
              className="group flex scroll-mt-24 flex-col items-center rounded-2xl border border-border bg-card px-8 py-10 shadow-md transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-2xl target:-translate-y-1 target:border-gold/60 target:shadow-2xl target:ring-2 target:ring-gold/40"
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold/50 to-gold/0 opacity-0 transition group-hover:opacity-100" />
                <img
                  src={m.img}
                  alt={m.name}
                  className="relative h-24 w-24 rounded-full object-cover object-top ring-2 ring-border"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-display text-xl font-bold leading-tight text-primary">
                  {m.name}
                </h3>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
                  {m.title}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
              <TeamContactActions m={m} />
              <div className="mt-3 text-sm font-medium text-muted-foreground">{m.phone}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
