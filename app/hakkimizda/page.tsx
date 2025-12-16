import type { Metadata } from "next";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "30 yılı aşkın tecrübesiyle Türkiye'nin önde gelen inşaat firmalarından Barut Yapı İnşaat. Kurumsal değerlerimiz, vizyonumuz ve ekibimiz hakkında bilgi edinin.",
  openGraph: {
    title: "Hakkımızda | Barut Yapı İnşaat",
    description:
      "1993'ten bu yana Türkiye'nin en prestijli inşaat projelerine imza atıyoruz. Güven, kalite ve mükemmeliyet ilkeleriyle büyüyen Barut Yapı İnşaat.",
    url: "https://barutyapi.com/hakkimizda",
    type: "website",
  },
};

const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    description:
      "Yenilikçi mühendislik çözümleri ve kusursuz kalite anlayışıyla, müşterilerimizin hayallerini gerçeğe dönüştürmek. Her projede güvenilirlik ve mükemmellik standartlarını koruyarak, Türkiye'nin inşaat sektöründe öncü konumumuzu sürdürmek.",
  },
  {
    icon: Eye,
    title: "Vizyonumuz",
    description:
      "Sürdürülebilir inşaat uygulamaları ile geleceği şekillendiren, uluslararası standartlarda hizmet sunan, sektörün en güvenilir ve tercih edilen firması olmak. Teknoloji ve insan odaklı yaklaşımımızla öncü projeler gerçekleştirmek.",
  },
  {
    icon: Award,
    title: "Değerlerimiz",
    description:
      "Dürüstlük, şeffaflık ve müşteri memnuniyeti tüm faaliyetlerimizin temelini oluşturur. Kalite, güvenlik ve sürdürülebilirlik ilkelerine bağlı kalarak, çalışanlarımıza ve iş ortaklarımıza değer veririz.",
  },
];

const stats = [
  { value: "30+", label: "Yıllık Deneyim" },
  { value: "250+", label: "Tamamlanan Proje" },
  { value: "2M+", label: "m² İnşaat Alanı" },
  { value: "500+", label: "Uzman Kadro" },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <div className="mb-20 max-w-4xl">
        <h1 className="text-4xl font-heading font-medium tracking-tight sm:text-5xl md:text-6xl mb-6">
          Hakkımızda
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          1993 yılından bu yana Türkiye'nin en prestijli inşaat projelerine imza
          atıyoruz. Güven, kalite ve mükemmeliyet ilkeleriyle büyüyen Babba
          İnşaat, sektörün öncü firmalarından biri olma yolunda emin adımlarla
          ilerlemektedir.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-2">
            <div className="text-5xl font-heading font-light text-primary">
              {stat.value}
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <section className="mb-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-heading font-medium tracking-tight sm:text-4xl mb-4">
            Hikayemiz
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-medium">
                Başlangıç (1993)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Barut Yapı İnşaat, 1993 yılında Ankara'da kuruldu. Kurucu ortakların
                inşaat mühendisliği alanındaki derin bilgi ve deneyimleri,
                şirketin sağlam temellerini oluşturdu. İlk yıllardan itibaren
                kalite ve güvenilirlik odaklı yaklaşımımız, sektördeki
                konumumuzu hızla güçlendirdi.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-medium">
                Büyüme ve Gelişim (2000-2010)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                2000'li yıllarla birlikte faaliyet alanımızı genişlettik. Konut
                projelerinden ticari binalara, altyapı yatırımlarından
                restorasyon çalışmalarına kadar geniş bir yelpazede hizmet
                vermeye başladık. ISO 9001 kalite belgesi ile standartlarımızı
                uluslararası düzeye taşıdık.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-medium">
                Yenilik ve Teknoloji (2010-2020)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Son on yılda teknoloji odaklı yaklaşımımızı güçlendirdik. BIM
                (Building Information Modeling) teknolojisi, yeşil bina
                sertifikaları ve sürdürülebilir inşaat uygulamaları ile
                projelerimizi geleceğe taşıdık. LEED ve BREEAM sertifikalı
                projelerde öncü olduk.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-medium">Bugün</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bugün 500'den fazla uzman kadromuz, yıllık 100,000 m²'yi aşan
                inşaat kapasitemiz ve 250'den fazla tamamlanmış projemiz ile
                Türkiye'nin en büyük inşaat firmalarından biriyiz. Kurumsal
                değerlerimize bağlı kalarak, sektörün geleceğini şekillendirmeye
                devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-heading font-medium tracking-tight sm:text-4xl mb-4">
            Misyon, Vizyon ve Değerlerimiz
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kurumsal kültürümüzün temelini oluşturan değerler ve hedeflerimiz.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border/50">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20 pb-20 border-b border-border/40">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-heading font-medium tracking-tight sm:text-4xl mb-4">
            Ekibimiz
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Barut Yapı İnşaat'ı başarıya taşıyan en büyük değerimiz, alanında uzman ve
            deneyimli kadromuzdur.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Mühendislik Ekibi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                200+ inşaat mühendisi, mimar ve teknik uzman ile projelerinizi en
                yüksek standartlarda hayata geçiriyoruz.
              </p>
              <div className="text-sm">
                <span className="font-medium text-foreground">Uzmanlık Alanları:</span>
                <span className="text-muted-foreground">
                  {" "}
                  Yapı, Statik, Elektrik, Makine
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Proje Yönetimi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Deneyimli proje yöneticilerimiz, her projenin zamanında ve bütçe
                dahilinde tamamlanmasını sağlar.
              </p>
              <div className="text-sm">
                <span className="font-medium text-foreground">Sertifikalar:</span>
                <span className="text-muted-foreground">
                  {" "}
                  PMP, PRINCE2, Agile
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Kalite & Güvenlik</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Kalite kontrol ve iş güvenliği ekiplerimiz, her aşamada en yüksek
                standartları garanti eder.
              </p>
              <div className="text-sm">
                <span className="font-medium text-foreground">Standartlar:</span>
                <span className="text-muted-foreground">
                  {" "}
                  ISO 9001, ISO 45001
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
