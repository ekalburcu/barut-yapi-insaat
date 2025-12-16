import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Barut Yapı İnşaat ile iletişime geçin. Proje danışmanlığı ve teklif almak için formu doldurun veya doğrudan bizi arayın. Ankara ofisimizden hizmet vermekteyiz.",
  openGraph: {
    title: "İletişim | Barut Yapı İnşaat",
    description:
      "Projeleriniz için teklif almak, danışmanlık hizmeti talep etmek veya sorularınız için bizimle iletişime geçin.",
    url: "https://barutyapi.com/iletisim",
    type: "website",
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Atatürk Bulvarı No:123\nÇankaya, Ankara 06000",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+90 (312) 123 45 67\n+90 (312) 123 45 68",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "info@barutyapi.com\ndestek@barutyapi.com",
  },
];

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero */}
      <div className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-heading font-medium tracking-tight sm:text-5xl md:text-6xl mb-6">
          İletişim
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Projeleriniz için teklif almak, danışmanlık hizmeti talep etmek veya
          herhangi bir sorunuz için bizimle iletişime geçin. Uzman ekibimiz size
          yardımcı olmak için hazır.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-5">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Teklif Formu</CardTitle>
              <p className="text-sm text-muted-foreground">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-heading font-medium mb-6">
              İletişim Bilgileri
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border/50">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{info.title}</div>
                        <div className="text-sm text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Çalışma Saatleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pazartesi - Cuma</span>
                <span className="font-medium">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cumartesi</span>
                <span className="font-medium">09:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pazar</span>
                <span className="font-medium">Kapalı</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
