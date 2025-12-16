import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectsFilter } from "@/components/projects-filter";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Barut Yapı İnşaat tarafından tamamlanan ve devam eden konut, ticari, altyapı ve yenileme projelerimizi inceleyin. 30+ yıllık tecrübe, 250+ tamamlanmış proje.",
  openGraph: {
    title: "Projelerimiz | Barut Yapı İnşaat",
    description:
      "30 yılı aşkın tecrübemizle hayata geçirdiğimiz konut, ticari, altyapı ve yenileme projelerimizi keşfedin.",
    url: "https://barutyapi.com/projeler",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-heading font-medium tracking-tight sm:text-5xl md:text-6xl mb-4">
          Projelerimiz
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          30 yılı aşkın tecrübemizle hayata geçirdiğimiz konut, ticari, altyapı
          ve yenileme projelerimizi keşfedin.
        </p>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
