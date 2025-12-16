export interface ProjectMetrics {
  area: number; // m²
  duration: number; // months
  budget?: string; // optional for privacy
  year: number;
}

export interface ProjectMeta {
  title: string;
  description: string;
  category: "konut" | "ticari" | "altyapi" | "yenileme";
  location: string;
  client?: string; // optional for privacy
  status: "tamamlandi" | "devam-ediyor" | "planlama";
}

export interface Project {
  id: string;
  slug: string;
  meta: ProjectMeta;
  metrics: ProjectMetrics;
  image?: string; // optional project image
  featured?: boolean; // highlight on homepage
  tags?: string[]; // additional categorization
}

export type ProjectCategory = Project["meta"]["category"];
export type ProjectStatus = Project["meta"]["status"];
