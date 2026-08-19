"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "animate-fade-slide-down fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300",
          isScrolled
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Container
          size="wide"
          className={cn(
            "flex items-center justify-between transition-[height] duration-300",
            isScrolled ? "h-16" : "h-20 sm:h-24",
          )}
        >
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-wide text-foreground"
          >
            {siteConfig.shortName}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground-muted transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/kontak" className={buttonVariants({ size: "sm" })}>
              Hubungi Kami
            </Link>
          </div>

          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="dialog"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
