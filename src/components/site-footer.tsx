import { Mail, MapPin } from "lucide-react";
import logoImage from "@/assets/baruchi-logo.jpg";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function SiteFooter() {
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
                <span className="font-display text-sm font-bold tracking-tight text-primary">
                  ברוכי
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  סוכנות לביטוח
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              סוכנות משפחתית מאז 1991. מלווים אלפי משפחות בעולם הביטוח, הפנסיה והמשכנתאות עם מחויבות
              אישית ללא פשרות.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-primary">צרו קשר</h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="https://wa.me/972544289164"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground transition hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                אשר ברוכי: 054-428-9164
              </a>
              <a
                href="https://wa.me/972543913343"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground transition hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                יהונתן ברוכי: 054-391-3343
              </a>
              <a
                href="https://wa.me/972542008230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground transition hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                אורן טל סממה: 054-200-8230
              </a>
              <a
                href="mailto:officeasher@shaham-orlan.co.il"
                className="flex items-center gap-2.5 text-muted-foreground transition hover:text-primary"
              >
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
