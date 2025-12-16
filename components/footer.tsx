import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  kurumsal: [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Tarihçemiz", href: "/tarihcemiz" },
    { name: "Vizyonumuz", href: "/vizyonumuz" },
    { name: "Kalite Politikası", href: "/kalite" },
  ],
  hizmetler: [
    { name: "Proje Yönetimi", href: "/hizmetler/proje-yonetimi" },
    { name: "İnşaat Mühendisliği", href: "/hizmetler/muhendislik" },
    { name: "Mimari Tasarım", href: "/hizmetler/mimari" },
    { name: "Danışmanlık", href: "/hizmetler/danismanlik" },
  ],
  projeler: [
    { name: "Konut Projeleri", href: "/projeler/konut" },
    { name: "Ticari Projeler", href: "/projeler/ticari" },
    { name: "Altyapı Projeleri", href: "/projeler/altyapi" },
    { name: "Yenileme Projeleri", href: "/projeler/yenileme" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-heading font-bold text-primary">
                Barut Yapı İnşaat
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              30 yılı aşkın tecrübesiyle Türkiye&apos;nin önde gelen inşaat
              firmalarından biri. Kurumsal kalite standartları ile hizmet
              veriyoruz.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Atatürk Bulvarı No:123, Çankaya, Ankara</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+90 (312) 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@barutyapi.com</span>
              </div>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projeler */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Projeler</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.projeler.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Barut Yapı İnşaat. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/gizlilik"
              className="text-muted-foreground transition-all duration-200 hover:text-primary hover:underline underline-offset-4"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kvkk"
              className="text-muted-foreground transition-all duration-200 hover:text-primary hover:underline underline-offset-4"
            >
              KVKK
            </Link>
            <Link
              href="/cerez"
              className="text-muted-foreground transition-all duration-200 hover:text-primary hover:underline underline-offset-4"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
