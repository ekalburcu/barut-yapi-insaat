import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Ruler, Hammer, FileCheck, Building, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "30 yılı aşkın deneyimimizle Türkiye'nin en prestijli konut, ticari ve altyapı projelerini hayata geçiriyoruz. ISO 9001 belgeli, güvenilir inşaat çözümleri.",
  openGraph: {
    title: "Barut Yapı İnşaat | İnşaatta Güvenin Adresi",
    description:
      "30 yılı aşkın deneyimimizle Türkiye'nin en prestijli konut, ticari ve altyapı projelerini hayata geçiriyoruz.",
    url: "https://barutyapi.com",
    type: "website",
  },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 -mt-16 pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container">
            <div className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
              <div className="max-w-4xl space-y-12">
                <div className="space-y-6">
                  <h1 className="text-6xl font-heading font-medium tracking-tight sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[0.95] text-white">
                    İnşaatta Güvenin Adresi
                  </h1>
                  <p className="mx-auto max-w-2xl text-xl text-gray-200 md:text-2xl leading-relaxed">
                    30 yılı aşkın tecrübemizle Türkiye&apos;nin en prestijli
                    projelerini hayata geçiriyoruz.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
                  <Button size="xl" className="group" asChild>
                    <Link href="/projeler" className="flex items-center gap-3">
                      Projelerimizi Görün
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Link
                    href="/iletisim"
                    className="text-lg font-medium text-white/90 hover:text-white transition-colors border-b border-white/30 hover:border-white/60 pb-1"
                  >
                    İletişime Geçin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="border-b border-border/40 bg-secondary/20">
        <div className="container py-16 md:py-20">
          <div className="grid gap-12 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <div className="text-6xl font-heading font-light tabular-nums text-foreground md:text-7xl text-center">
                  30+
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
                  Yıllık Tecrübe
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <div className="text-6xl font-heading font-light tabular-nums text-foreground md:text-7xl text-center">
                  250+
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
                  Tamamlanan Proje
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <div className="text-6xl font-heading font-light tabular-nums text-foreground md:text-7xl text-center">
                  2M+
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
                  m² İnşaat Alanı
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-b border-border/40">
        <div className="container max-w-screen-2xl py-20 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-heading font-medium tracking-tight sm:text-5xl md:text-6xl mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proje planlamadan teslim sonrası hizmetlere kadar, inşaat sürecinizin her aşamasında yanınızdayız.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border/50 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-200">
                  <Ruler className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">Mimari Tasarım</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fonksiyonel ve estetik çözümlerle projelerinizi hayata geçiriyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border/50 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-200">
                  <FileCheck className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">Proje Yönetimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deneyimli ekibimizle projenizi baştan sona yönetiyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border/50 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-200">
                  <Hammer className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">İnşaat Mühendisliği</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Teknik uzmanlık ve kalite standartlarıyla inşa ediyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border/50 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-200">
                  <Building className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">Danışmanlık</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Uzman kadromuzla stratejik çözümler sunuyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-b border-border/40 bg-secondary/20">
        <div className="container max-w-screen-2xl py-20 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-heading font-medium tracking-tight sm:text-5xl md:text-6xl mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Şeffaf ve sistematik yaklaşımımızla, projeniz en yüksek standartlarda teslim edilir.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-heading font-medium text-primary">01</span>
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl font-heading font-medium">Keşif & Analiz</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Projenizi detaylı inceliyor, ihtiyaçlarınızı belirliyoruz.
                  </p>
                </div>
              </div>
              <div className="absolute left-5 top-12 hidden h-full w-px bg-border/50 lg:block" />
            </div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-heading font-medium text-primary">02</span>
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl font-heading font-medium">Planlama</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detaylı proje planı ve zaman çizelgesi oluşturuyoruz.
                  </p>
                </div>
              </div>
              <div className="absolute left-5 top-12 hidden h-full w-px bg-border/50 lg:block" />
            </div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-heading font-medium text-primary">03</span>
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl font-heading font-medium">Uygulama</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kalite kontrol ile planı titizlikle hayata geçiriyoruz.
                  </p>
                </div>
              </div>
              <div className="absolute left-5 top-12 hidden h-full w-px bg-border/50 lg:block" />
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-heading font-medium text-primary">04</span>
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl font-heading font-medium">Teslim</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Projenizi zamanında ve eksiksiz teslim ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-b border-border/40">
        <div className="container max-w-screen-2xl py-20 md:py-24">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-heading font-medium tracking-tight sm:text-5xl md:text-6xl mb-4">
                Öne Çıkan Projeler
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Başarıyla tamamladığımız ve devam eden prestijli projelerimizden örnekler.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link href="/projeler">
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projeler/${project.slug}`}
                className="group"
              >
                <Card className="h-full transition-all duration-200 hover:border-primary/50">
                  {project.slug === "kalamis-konut-projesi" && (
                    <div className="aspect-video w-full overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      >
                        <source src="/kalamis-proje.mp4" type="video/mp4" />
                      </video>
                    </div>
                  )}
                  {project.slug === "yamac-apartmani-bostanci" && (
                    <div className="aspect-video w-full overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      >
                        <source src="/yamac-apartmani.mp4" type="video/mp4" />
                      </video>
                    </div>
                  )}
                  {project.slug === "sile-villa-projesi" && (
                    <div className="aspect-video w-full overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      >
                        <source src="/sile-villa.mp4" type="video/mp4" />
                      </video>
                    </div>
                  )}
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <Badge variant="outline" className="shrink-0">
                        {project.meta.category === "konut" && "Konut"}
                        {project.meta.category === "ticari" && "Ticari"}
                        {project.meta.category === "altyapi" && "Altyapı"}
                        {project.meta.category === "yenileme" && "Yenileme"}
                      </Badge>
                      {project.meta.status === "devam-ediyor" && (
                        <Badge variant="secondary" className="shrink-0">
                          Devam Ediyor
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.meta.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.meta.description}
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span>{project.meta.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span>{project.metrics.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-2 text-sm">
                      <div>
                        <span className="font-heading font-medium text-foreground">
                          {project.metrics.area.toLocaleString("tr-TR")}
                        </span>
                        <span className="text-muted-foreground"> m²</span>
                      </div>
                      <div className="h-4 w-px bg-border" />
                      <div>
                        <span className="font-heading font-medium text-foreground">
                          {project.metrics.duration}
                        </span>
                        <span className="text-muted-foreground"> ay</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/projeler">
                Tüm Projeler
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
