import { Landmark, Phone, Users } from "lucide-react";
import logoImage from "@/assets/baruchi-logo.jpg";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-3.5">
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
          <a href="/#services" className="transition hover:text-primary">
            תחומי התמחות
          </a>
          <a href="/#why-us" className="transition hover:text-primary">
            למה אנחנו
          </a>
          <a href="/#client-portal" className="transition hover:text-primary">
            אזור מבוטחים
          </a>
          <a href="/mortgage" className="transition hover:text-primary">
            מיחזור משכנתא
          </a>
          <a href="/#contact" className="transition hover:text-primary">
            צור קשר
          </a>
        </nav>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">לייעוץ ללא עלות</span>
        </a>
      </div>
    </header>
  );
}

/** Desktop-only floating shortcut to the service portal. Hidden on mobile in favor of MobileActionBar. */
function DesktopServicePortalFab() {
  return (
    <a
      href="/#client-portal"
      className="fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-2xl ring-1 ring-gold/40 transition hover:-translate-y-0.5 hover:bg-primary/90 md:flex"
    >
      <Users className="h-4 w-4 text-gold" />
      אזור מבוטחים
    </a>
  );
}

/** Mobile-only fixed bottom action bar — scrolling is long on mobile, so keep the two key actions always reachable. */
function MobileActionBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-white/10 bg-primary/95 px-3 pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.25)] backdrop-blur-lg md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="/#client-portal"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition active:scale-[0.97] active:bg-white/15"
      >
        <Users className="h-4 w-4 text-gold" />
        אזור מבוטחים
      </a>
      <a
        href="/mortgage"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3.5 text-sm font-semibold text-gold-foreground shadow-md transition active:scale-[0.97] active:brightness-95"
      >
        <Landmark className="h-4 w-4" />
        מיחזור משכנתא
      </a>
    </nav>
  );
}

/** Renders the desktop FAB and the mobile bottom action bar; each hides itself on the other breakpoint. */
export function FloatingActions() {
  return (
    <>
      <DesktopServicePortalFab />
      <MobileActionBar />
    </>
  );
}
