import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barutyapi.com"),
  title: {
    default: "Barut Yapı İnşaat | 30+ Yıllık Deneyim ile Türkiye'nin İnşaat Lideri",
    template: "%s | Barut Yapı İnşaat",
  },
  description:
    "30 yılı aşkın deneyimimizle konut, ticari ve altyapı projelerinizde güvenilir iş ortağınızız. ISO 9001 belgeli, 250+ tamamlanmış proje, 2M+ m² inşaat alanı.",
  keywords: [
    "inşaat",
    "inşaat firması",
    "ankara inşaat",
    "konut inşaat",
    "ticari bina",
    "altyapı projeleri",
    "müteahhitlik",
    "proje yönetimi",
  ],
  authors: [{ name: "Barut Yapı İnşaat" }],
  creator: "Barut Yapı İnşaat",
  publisher: "Barut Yapı İnşaat",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://barutyapi.com",
    siteName: "Barut Yapı İnşaat",
    title: "Barut Yapı İnşaat | 30+ Yıllık Deneyim ile Türkiye'nin İnşaat Lideri",
    description:
      "30 yılı aşkın deneyimimizle konut, ticari ve altyapı projelerinizde güvenilir iş ortağınızız.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barut Yapı İnşaat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barut Yapı İnşaat | 30+ Yıllık Deneyim ile Türkiye'nin İnşaat Lideri",
    description:
      "30 yılı aşkın deneyimimizle konut, ticari ve altyapı projelerinizde güvenilir iş ortağınızız.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${playfair.variable} ${inter.variable} font-body antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
