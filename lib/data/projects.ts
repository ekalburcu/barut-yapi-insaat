import { Project } from "@/lib/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "kalamis-konut-projesi",
    featured: true,
    meta: {
      title: "Kalamış Konut Projesi",
      description:
        "Kalamış Marina'ya yürüme mesafesinde, deniz manzaralı lüks konut projesi. Modern mimari çizgiler, geniş teraslar ve yüksek kalite standartları.",
      category: "konut",
      location: "Kalamış, İstanbul",
      client: "Özel Sektör",
      status: "devam-ediyor",
    },
    metrics: {
      area: 32000,
      duration: 28,
      budget: "Gizli",
      year: 2024,
    },
    tags: ["Lüks Konut", "Deniz Manzaralı", "Marina Yakını"],
  },
  {
    id: "2",
    slug: "yamac-apartmani-bostanci",
    featured: true,
    meta: {
      title: "Yamaç Apartmanı",
      description:
        "Bostancı'nın merkezi konumunda, deniz manzaralı modern yaşam alanı. Yüksek kalite standartları ve şık tasarımıyla öne çıkan prestijli konut projesi.",
      category: "konut",
      location: "Bostancı, İstanbul",
      client: "Özel Sektör",
      status: "devam-ediyor",
    },
    metrics: {
      area: 8500,
      duration: 18,
      budget: "Gizli",
      year: 2024,
    },
    tags: ["Lüks Konut", "Deniz Manzaralı", "Merkezi Konum"],
  },
  {
    id: "3",
    slug: "sile-villa-projesi",
    featured: true,
    meta: {
      title: "Şile Villa Projesi",
      description:
        "Şile'nin eşsiz doğası içinde, deniz ve orman manzaralı lüks villa projesi. Modern mimari ve doğayla iç içe yaşam konsepti.",
      category: "konut",
      location: "Şile, İstanbul",
      client: "Özel Sektör",
      status: "devam-ediyor",
    },
    metrics: {
      area: 6200,
      duration: 16,
      budget: "Gizli",
      year: 2024,
    },
    tags: ["Lüks Villa", "Doğa İçinde", "Deniz Manzaralı"],
  },
  {
    id: "4",
    slug: "residence-ankara-cankaya",
    featured: true,
    meta: {
      title: "Residence Ankara Çankaya",
      description:
        "Modern mimarisi ve yüksek yaşam standartlarıyla öne çıkan 250 daireli prestijli konut projesi. A+ enerji sınıfı ve akıllı ev sistemleri.",
      category: "konut",
      location: "Çankaya, Ankara",
      client: "Özel Sektör",
      status: "tamamlandi",
    },
    metrics: {
      area: 45000,
      duration: 24,
      budget: "Gizli",
      year: 2023,
    },
    tags: ["Lüks Konut", "Akıllı Ev", "Enerji Verimli"],
  },
  {
    id: "5",
    slug: "avm-istanbul-kadikoy",
    featured: true,
    meta: {
      title: "Kadıköy AVM",
      description:
        "İstanbul Anadolu yakasının en büyük alışveriş merkezlerinden biri. 200+ mağaza, sinema kompleksi ve açık alan peyzaj düzenlemesi.",
      category: "ticari",
      location: "Kadıköy, İstanbul",
      status: "tamamlandi",
    },
    metrics: {
      area: 85000,
      duration: 36,
      year: 2022,
    },
    tags: ["AVM", "Ticari Kompleks", "Peyzaj"],
  },
  {
    id: "6",
    slug: "metro-hatti-ankara",
    featured: false,
    meta: {
      title: "Ankara Metro Hattı Genişletme",
      description:
        "12 km yeni metro hattı ve 8 istasyon inşaatı. Çevre dostu teknolojiler ve depreme dayanıklı altyapı.",
      category: "altyapi",
      location: "Ankara",
      client: "Kamu",
      status: "devam-ediyor",
    },
    metrics: {
      area: 95000,
      duration: 48,
      year: 2024,
    },
    tags: ["Altyapı", "Metro", "Kamu Projesi"],
  },
  {
    id: "7",
    slug: "ofis-kompleksi-izmir",
    featured: false,
    meta: {
      title: "İzmir Business Plaza",
      description:
        "LEED Gold sertifikalı, 25 katlı modern ofis binası. Akıllı bina yönetim sistemleri ve enerji verimliliği.",
      category: "ticari",
      location: "Konak, İzmir",
      status: "tamamlandi",
    },
    metrics: {
      area: 38000,
      duration: 30,
      year: 2021,
    },
    tags: ["Ofis", "LEED", "Yeşil Bina"],
  },
  {
    id: "8",
    slug: "konut-yenileme-ankara-ulus",
    featured: false,
    meta: {
      title: "Ulus Tarihi Yapı Restorasyonu",
      description:
        "1930'larda inşa edilmiş tarihi apartman bloğunun deprem güçlendirme ve restorasyon projesi.",
      category: "yenileme",
      location: "Ulus, Ankara",
      client: "Belediye",
      status: "tamamlandi",
    },
    metrics: {
      area: 4500,
      duration: 18,
      year: 2023,
    },
    tags: ["Restorasyon", "Tarihi Yapı", "Deprem Güçlendirme"],
  },
  {
    id: "9",
    slug: "villa-projesi-bodrum",
    featured: true,
    meta: {
      title: "Bodrum Seaside Villalar",
      description:
        "Deniz manzaralı 12 özel villa projesi. Infinity havuz, akıllı ev sistemleri ve özel plaj erişimi.",
      category: "konut",
      location: "Bodrum, Muğla",
      status: "devam-ediyor",
    },
    metrics: {
      area: 18000,
      duration: 20,
      year: 2024,
    },
    tags: ["Lüks Villa", "Deniz Manzaralı", "Özel Proje"],
  },
  {
    id: "10",
    slug: "kopru-projesi-bursa",
    featured: false,
    meta: {
      title: "Bursa Kuzey Çevre Yolu Köprüsü",
      description:
        "750 metre uzunluğunda modern köprü projesi. Çelik taşıyıcı sistem ve sismik izolatör uygulaması.",
      category: "altyapi",
      location: "Bursa",
      client: "Kamu",
      status: "tamamlandi",
    },
    metrics: {
      area: 12000,
      duration: 28,
      year: 2020,
    },
    tags: ["Köprü", "Altyapı", "Çelik Yapı"],
  },
  {
    id: "11",
    slug: "fabrika-yenileme-kocaeli",
    featured: false,
    meta: {
      title: "Kocaeli Endüstriyel Tesis Modernizasyonu",
      description:
        "30 yıllık üretim tesisinin tamamen yenilenmesi. Otomasyon sistemleri ve enerji verimliliği iyileştirmesi.",
      category: "yenileme",
      location: "Gebze, Kocaeli",
      status: "planlama",
    },
    metrics: {
      area: 55000,
      duration: 24,
      year: 2025,
    },
    tags: ["Endüstriyel", "Modernizasyon", "Otomasyon"],
  },
];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(
  category: Project["meta"]["category"]
): Project[] {
  return projects.filter((project) => project.meta.category === category);
}

export function getProjectsByStatus(
  status: Project["meta"]["status"]
): Project[] {
  return projects.filter((project) => project.meta.status === status);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
