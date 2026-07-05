import { createFileRoute } from "@tanstack/react-router";
import logoImage from "@/assets/baruchi-logo.jpg";
import asherImg from "@/assets/asher.png";
import yonatanImg from "@/assets/yonatan.png";
import orenImg from "@/assets/oren.png";
import {
  ShieldCheck,
  Home,
  TrendingUp,
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
  Sparkles,
  ArrowLeft,
} from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.502c3.246 0 5.892 2.647 5.892 5.892 0 3.247-2.646 5.893-5.892 5.893-1.03 0-2.005-.264-2.86-.733l-2.322.76.759-2.27a5.858 5.858 0 01-.799-2.935c0-3.245 2.646-5.892 5.892-5.892m0-1.106a7 7 0 00-7 7c0 1.36.39 2.63 1.065 3.71l-1.39 4.15 4.243-1.39a6.982 6.982 0 003.082.712 7 7 0 007-7 7 7 0 00-7-7z" />
    </svg>
  );
}

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
    <div className="min-h-screen bg-background font-sans text-foreground" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Team />
        <Mission />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-3.5">
          <img
            src={logoImage}
            alt="ברוכי סוכנות לביטוח"
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg object-cover shadow-sm ring-1 ring-border"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-tight text-primary">
              ברוכי
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              סוכנות לביטוח
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-sm font-medium text-foreground/75 lg:flex">
          <a href="#expertise" className="transition hover:text-primary">תחומי התמחות</a>
          <a href="#why-us" className="transition hover:text-primary">למה אנחנו</a>
          <a href="#contact" className="transition hover:text-primary">צור קשר</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">לייעוץ ללא עלות</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.18_0.04_258)] text-primary-foreground">
      {/* atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[oklch(0.78_0.09_82)] opacity-[0.10] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[oklch(0.35_0.08_258)] opacity-60 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
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
            נלחמים ועומדים על שלכם מול חברות הביטוח, חוסכים לכם כספים מיותרים
            ומונעים כפילויות ביטוח וכפלי תשלום — כדי שתקבלו את כל מה שמגיע לכם, בלי להתפשר.
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
              { k: "25+", v: "שנות ניסיון" },
              { k: "5,000+", v: "לקוחות מרוצים" },
              { k: "100%", v: "יחס אישי" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-gold sm:text-3xl">
                  {s.k}
                </dt>
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

function Expertise() {
  const items = [
    {
      icon: ShieldCheck,
      title: "ביטוח ופנסיה",
      desc: "פתרונות ביטוח אישיים ועסקיים, תכנון פנסיוני מותאם וניהול תיק חיסכון ארוך טווח לעתיד בטוח.",
      points: ["ביטוחי חיים ובריאות", "תכנון פנסיוני", "ביטוחי רכוש ועסק"],
    },
    {
      icon: Home,
      title: "משכנתאות",
      desc: "ייעוץ משכנתאות אובייקטיבי לבחירת המסלול הטוב ביותר — חיסכון של עשרות אלפי שקלים על פני חיי ההלוואה.",
      points: ["מחזור משכנתא", "ליווי רוכשי דירה ראשונה", "מסלולים מותאמים אישית"],
    },
    {
      icon: TrendingUp,
      title: "ניהול סיכונים",
      desc: "מיפוי מקצועי של הסיכונים הפיננסיים והאישיים שלכם, ובניית מענה חכם שמגן עליכם ועל המשפחה.",
      points: ["סקר ביטוחי מקיף", "אופטימיזציה של פוליסות", "הגנה על נכסים"],
    },
  ];
  return (
    <section id="expertise" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            תחומי התמחות
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            פתרון מקצועי לכל צורך פיננסי
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            צוות ברוכי מלווה אתכם בכל החלטה משמעותית — מהביטוח הראשון ועד לתכנון העתיד.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">{it.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{it.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                {it.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
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
      desc: "צוות מומחים בעל הסמכות מלאות ומעל 25 שנות ניסיון בשוק הישראלי.",
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
              שלושה דורות של מומחיות, אלפי משפחות מלוות, ומחויבות אחת בלתי מתפשרת —
              לעמוד לצידכם בכל רגע משמעותי בחיים.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">
                  {r.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground shadow-2xl md:px-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                מוכנים לעשות סדר בעולם הפיננסי שלכם?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85">
                השאירו פרטים או חייגו עכשיו — נחזור אליכם תוך שעה לפגישת ייעוץ ראשונית
                ללא עלות וללא התחייבות.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/972549111656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-[#25D366] px-5 py-3.5 font-semibold text-white transition hover:brightness-105"
              >
                <WhatsAppIcon className="h-5 w-5" />
                וואטסאפ משרד: 054-911-1656
              </a>
              <a
                href="tel:039206652"
                className="flex items-center gap-3 rounded-xl bg-gold px-5 py-3.5 font-semibold text-gold-foreground transition hover:brightness-105"
              >
                <Phone className="h-5 w-5" />
                טלפון משרד: 03-9206652
              </a>
              <a
                href="tel:039206610"
                className="flex items-center gap-3 rounded-xl border border-white/25 px-5 py-3.5 font-medium transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                טלפון משרד אלמנטרי: 03-9206610
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
    </section>
  );
}

function Footer() {
  return FooterImpl();
}

function MissionHidden() {} // placeholder removed

function Mission() {
  const pillars = [
    { icon: Compass, title: "אופטימיזציה של תיק הביטוח", desc: "מיפוי מקיף של כל הפוליסות, החסכונות וההתחייבויות — וייעול התיק לכדי כיסוי מיטבי וחכם." },
    { icon: Wallet, title: "מניעת תשלומי כפל וכפילויות מיותרות", desc: "בדיקה מעמיקה שמונעת כפילויות ביטוח וכפלי תשלום — כדי שתשלמו רק על מה שבאמת צריך." },
    { icon: Swords, title: "התייצבות חסרת פשרות מול חברות הביטוח", desc: "עומדים על שלכם מול חברות הביטוח בנחישות ובמקצועיות — כדי להבטיח שתקבלו כל שקל שמגיע לכם." },
  ];
  return (
    <section id="mission" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">השליחות שלנו</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">
            מצוינות פיננסית — <span className="text-gold">לטובת הלקוח</span>
          </h2>
          <p className="mt-6 text-lg leading-[1.85] text-muted-foreground">
            המחויבות שלנו פשוטה: אופטימיזציה של תיק הביטוח, מניעת תשלומי כפל וכפילויות מיותרות,
            והתייצבות חסרת פשרות מול חברות הביטוח — כדי שתקבלו את כל מה שמגיע לכם, בלי לבזבז כסף מיותר.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-gold/30">
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
  const services = [
    { icon: HeartPulse, title: "סיכונים", desc: "ביטוחי חיים, בריאות, ביטוח משכנתא, אובדן כושר עבודה ונכות.", items: ["ביטוח חיים", "ביטוח בריאות", "ביטוח משכנתא", "אובדן כושר עבודה"] },
    { icon: PiggyBank, title: "פנסיוני", desc: "בניית עתיד פנסיוני יציב — קרנות פנסיה, ביטוחי מנהלים וקופות גמל.", items: ["קרנות פנסיה", "ביטוחי מנהלים", "קופות גמל", "תכנון פרישה"] },
    { icon: LineChart, title: "פיננסים", desc: "פתרונות חיסכון והשקעה לטווח קצר וארוך, בהתאמה אישית מלאה.", items: ["גמל להשקעה", "קרנות השתלמות", "השקעות", "ניהול נזילות"] },
    { icon: Car, title: "אלמנטרי", desc: "ביטוחי רכב, דירה, מבנה ותכולה — הגנה מלאה על כל מה שיקר לכם.", items: ["ביטוח רכב", "ביטוח דירה", "ביטוח מבנה", "ביטוח עסק"] },
    { icon: Landmark, title: "משכנתאות", desc: "ייעוץ משכנתאות אסטרטגי — מרכישת דירה ועד מיחזור ואיחוד הלוואות.", items: ["רכישת דירה", "מיחזור משכנתא", "משכנתא הפוכה", "איחוד הלוואות"] },
  ];
  return (
    <section id="services" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">השירותים שלנו</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            פתרון שלם לכל עולמות הפיננסים
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            חמישה תחומי מומחיות תחת קורת גג אחת — לליווי מלא לאורך כל שלבי החיים.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
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
              <a href="#contact" className="mt-7 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition hover:text-gold">
                לפרטים נוספים
                <ArrowLeft className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    {
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
      name: "אורן טל סממה",
      title: "יועץ משכנתאות אסטרטגי",
      img: orenImg,
      desc: "מומחה בבניית תמהילי משכנתא חכמים, מיחזור ואיחוד הלוואות, המלווה את הלקוח יד ביד מול המערכת הבנקאית.",
      phone: "054-200-8230",
      phoneLink: "tel:0542008230",
      whatsappLink: "https://wa.me/972542008230",
      email: "officeasher@shaham-orlan.co.il",
    },
  ];
  return (
    <section id="team" className="relative overflow-hidden bg-secondary py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">האנשים שלנו</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            פאנל המומחים שעומד לצידכם
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            צוות מקצועי, חם ומסור — שלוקח אחריות אישית על כל לקוח.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {members.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-md sm:w-[340px]"
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-gold/50 to-gold/0 opacity-0 transition group-hover:opacity-100" />
                <img
                  src={m.img}
                  alt={m.name}
                  className="relative h-14 w-14 rounded-full object-cover object-top ring-[1.5px] ring-border"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-display text-sm font-bold leading-tight text-primary">
                  {m.name}
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold">{m.title}</p>
                <p className="mt-2 text-xs leading-[1.65] text-muted-foreground">{m.desc}</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={m.phoneLink}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground"
                  title={`טלפון: ${m.phone}`}
                >
                  <Phone className="h-3.5 w-3.5" />
                </a>
                <a
                  href={m.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
                  title={`וואטסאפ: ${m.phone}`}
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`mailto:${m.email}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground"
                  title={`מייל: ${m.email}`}
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-2 text-[11px] font-medium text-muted-foreground">
                {m.phone}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterImpl() {
  return (
    <footer id="contact-footer" className="border-t border-border bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="ברוכי סוכנות לביטוח"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-cover ring-1 ring-border"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-sm font-bold tracking-tight text-primary">ברוכי</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">סוכנות לביטוח</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              סוכנות משפחתית מאז 1991. מלווים אלפי משפחות בעולם הביטוח, הפנסיה והמשכנתאות עם מחויבות אישית ללא פשרות.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-primary">צרו קשר</h4>
            <div className="space-y-2.5 text-sm">
              <a href="https://wa.me/972549111656" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground transition hover:text-[#25D366]">
                <WhatsAppIcon className="h-4 w-4" />
                וואטסאפ משרד: 054-911-1656
              </a>
              <a href="tel:039206652" className="flex items-center gap-2.5 text-muted-foreground transition hover:text-primary">
                <Phone className="h-4 w-4" />
                טלפון משרד: 03-9206652
              </a>
              <a href="tel:039206610" className="flex items-center gap-2.5 text-muted-foreground transition hover:text-primary">
                <Phone className="h-4 w-4" />
                טלפון משרד אלמנטרי: 03-9206610
              </a>
              <a href="mailto:officeasher@shaham-orlan.co.il" className="flex items-center gap-2.5 text-muted-foreground transition hover:text-primary">
                <Mail className="h-4 w-4" />
                מייל משרד: officeasher@shaham-orlan.co.il
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-primary">כתובת המשרד</h4>
            <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>היצירה 3, פתח תקווה</span>
            </div>
            <p className="pt-2 text-xs text-muted-foreground/70">
              מורשי רישוי משרד האוצר • שירות אישי. מקצועי. משפחתי.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground/60">
          <p>© {new Date().getFullYear()} ברוכי סוכנות לביטוח. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
