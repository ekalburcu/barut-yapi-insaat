import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar, Ruler, Clock, ArrowLeft } from "lucide-react";
import {
  getProjectBySlug,
  projects,
  getAllProjectSlugs,
} from "@/lib/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  return {
    title: project.meta.title,
    description: project.meta.description,
    openGraph: {
      title: `${project.meta.title} | Barut Yapı İnşaat`,
      description: project.meta.description,
      url: `https://barutyapi.com/projeler/${slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get similar projects (same category, different id)
  const similarProjects = projects
    .filter(
      (p) =>
        p.meta.category === project.meta.category && p.id !== project.id
    )
    .slice(0, 3);

  const categoryLabels = {
    konut: "Konut",
    ticari: "Ticari",
    altyapi: "Altyapı",
    yenileme: "Yenileme",
  };

  const statusLabels = {
    tamamlandi: "Tamamlandı",
    "devam-ediyor": "Devam Ediyor",
    planlama: "Planlama",
  };

  return (
    <div className="container py-12 md:py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/projeler">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tüm Projeler
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-wrap items-start gap-4">
          <Badge variant="outline">{categoryLabels[project.meta.category]}</Badge>
          {project.meta.status !== "tamamlandi" && (
            <Badge variant="secondary">
              {statusLabels[project.meta.status]}
            </Badge>
          )}
          {project.featured && <Badge>Öne Çıkan</Badge>}
        </div>

        <h1 className="text-4xl font-heading font-medium tracking-tight sm:text-5xl md:text-6xl">
          {project.meta.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>{project.meta.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>{project.metrics.year}</span>
          </div>
          {project.meta.client && (
            <div className="flex items-center gap-2">
              <span className="font-medium">Müşteri:</span>
              <span>{project.meta.client}</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Gallery / Video */}
      <div className="mb-16">
        {project.slug === "kalamis-konut-projesi" ? (
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/40">
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
        ) : project.slug === "yamac-apartmani-bostanci" ? (
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/40">
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
        ) : project.slug === "sile-villa-projesi" ? (
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/40">
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
        ) : (
          <div className="aspect-video w-full rounded-lg border border-border/40 bg-secondary/20 flex items-center justify-center">
            <div className="text-center space-y-2">
              <Ruler className="h-12 w-12 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Proje görselleri yakında eklenecek
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-heading font-medium mb-4">
              Proje Hakkında
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.meta.description}
            </p>
          </section>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <section>
              <h2 className="text-2xl font-heading font-medium mb-4">
                Özellikler
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar - Metrics */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Proje Metrikleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Ruler className="h-4 w-4" />
                  <span>İnşaat Alanı</span>
                </div>
                <div className="text-2xl font-heading font-medium">
                  {project.metrics.area.toLocaleString("tr-TR")} m²
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Tamamlanma Süresi</span>
                </div>
                <div className="text-2xl font-heading font-medium">
                  {project.metrics.duration} ay
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Tamamlanma Yılı</span>
                </div>
                <div className="text-2xl font-heading font-medium">
                  {project.metrics.year}
                </div>
              </div>

              {project.metrics.budget && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Bütçe</span>
                  </div>
                  <div className="text-2xl font-heading font-medium">
                    {project.metrics.budget}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Benzer bir projeye mi ihtiyacınız var?
              </p>
              <Button className="w-full" asChild>
                <Link href="/iletisim">Teklif Alın</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Similar Projects */}
      {similarProjects.length > 0 && (
        <section className="mt-20 pt-16 border-t border-border/40">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-medium tracking-tight sm:text-4xl mb-4">
              Benzer Projeler
            </h2>
            <p className="text-lg text-muted-foreground">
              {categoryLabels[project.meta.category]} kategorisindeki diğer
              projelerimiz
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {similarProjects.map((similarProject) => (
              <Link
                key={similarProject.id}
                href={`/projeler/${similarProject.slug}`}
                className="group"
              >
                <Card className="h-full transition-all duration-200 hover:border-primary/50">
                  <CardHeader className="space-y-4">
                    <Badge variant="outline" className="w-fit">
                      {categoryLabels[similarProject.meta.category]}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {similarProject.meta.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {similarProject.meta.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <span className="font-heading font-medium text-foreground">
                          {similarProject.metrics.area.toLocaleString("tr-TR")}
                        </span>
                        <span className="text-muted-foreground"> m²</span>
                      </div>
                      <div className="h-4 w-px bg-border" />
                      <div>
                        <span className="font-heading font-medium text-foreground">
                          {similarProject.metrics.year}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
