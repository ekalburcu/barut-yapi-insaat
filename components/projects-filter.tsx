"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";
import { Project, ProjectCategory, ProjectStatus } from "@/lib/types/project";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectsFilterProps {
  projects: Project[];
}

const categoryLabels: Record<ProjectCategory, string> = {
  konut: "Konut",
  ticari: "Ticari",
  altyapi: "Altyapı",
  yenileme: "Yenileme",
};

const statusLabels: Record<ProjectStatus, string> = {
  tamamlandi: "Tamamlandı",
  "devam-ediyor": "Devam Ediyor",
  planlama: "Planlama",
};

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "all">("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === "all" || project.meta.category === selectedCategory;
      const statusMatch =
        selectedStatus === "all" || project.meta.status === selectedStatus;
      return categoryMatch && statusMatch;
    });
  }, [projects, selectedCategory, selectedStatus]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="space-y-6">
        {/* Category Filter */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Kategori
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              Tümü
            </Button>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <Button
                key={value}
                variant={selectedCategory === value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(value as ProjectCategory)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Durum
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedStatus === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedStatus("all")}
            >
              Tümü
            </Button>
            {Object.entries(statusLabels).map(([value, label]) => (
              <Button
                key={value}
                variant={selectedStatus === value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(value as ProjectStatus)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between border-b border-border/40 pb-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-heading font-medium text-foreground">
            {filteredProjects.length}
          </span>{" "}
          proje bulundu
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
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
                      {categoryLabels[project.meta.category]}
                    </Badge>
                    {project.meta.status !== "tamamlandi" && (
                      <Badge variant="secondary" className="shrink-0">
                        {statusLabels[project.meta.status]}
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
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg text-muted-foreground">
            Seçilen filtrelere uygun proje bulunamadı.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedStatus("all");
            }}
          >
            Filtreleri Temizle
          </Button>
        </div>
      )}
    </div>
  );
}
