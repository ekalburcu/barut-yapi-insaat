"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Projeler", href: "/projeler" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      console.log("Scrolled:", scrolled, "Position:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        !isScrolled
          ? "backdrop-blur-lg"
          : "bg-[hsl(224,20%,8%)] border-b border-border/40 shadow-2xl"
      }`}
      style={{
        backgroundColor: !isScrolled ? "rgba(0, 0, 0, 0.3)" : "rgb(20, 23, 31)",
        backdropFilter: !isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: !isScrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Barut Yapı İnşaat"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex" asChild>
            <Link href="/iletisim">Teklif Alın</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menüyü Aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-xl">
                  Barut Yapı İnşaat
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-foreground transition-all duration-200 hover:text-primary hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 w-full" asChild>
                  <Link href="/iletisim">Teklif Alın</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
