# Project Data Model

Bu klasör, tüm proje verilerinin merkezi kaynağını içerir.

## Kullanım

```typescript
import { projects, getProjectBySlug, getFeaturedProjects } from "@/lib/data/projects";
import { Project } from "@/lib/types/project";

// Tüm projeleri al
const allProjects = projects;

// Slug ile proje bul
const project = getProjectBySlug("residence-ankara-cankaya");

// Öne çıkan projeleri al
const featured = getFeaturedProjects();

// Kategoriye göre filtrele
const housingProjects = getProjectsByCategory("konut");

// Duruma göre filtrele
const ongoingProjects = getProjectsByStatus("devam-ediyor");
```

## Veri Yapısı

### Project
- `id`: Benzersiz proje kimliği
- `slug`: URL-friendly proje tanımlayıcı
- `meta`: Proje meta bilgileri (başlık, açıklama, kategori, vb.)
- `metrics`: Proje metrikleri (alan, süre, bütçe, yıl)
- `image`: Proje görseli (opsiyonel)
- `featured`: Ana sayfada öne çıkarılacak mı?
- `tags`: Ek etiketler

### Kategoriler
- `konut`: Konut projeleri
- `ticari`: Ticari projeler
- `altyapi`: Altyapı projeleri
- `yenileme`: Yenileme/restorasyon projeleri

### Durumlar
- `tamamlandi`: Tamamlanmış projeler
- `devam-ediyor`: Devam eden projeler
- `planlama`: Planlama aşamasındaki projeler

## Yeni Proje Ekleme

`lib/data/projects.ts` dosyasındaki `projects` dizisine yeni bir obje ekleyin:

```typescript
{
  id: "9",
  slug: "yeni-proje-slug",
  featured: false,
  meta: {
    title: "Proje Başlığı",
    description: "Proje açıklaması...",
    category: "konut",
    location: "Şehir, İl",
    status: "tamamlandi",
  },
  metrics: {
    area: 10000,
    duration: 12,
    year: 2024,
  },
  tags: ["Etiket1", "Etiket2"],
}
```

## Type Safety

Tüm veri yapısı TypeScript ile tip güvenliğine sahiptir. Yanlış veri tipi girildiğinde derleme hatası alırsınız.
