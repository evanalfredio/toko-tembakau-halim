import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { getEmailLink, getWhatsAppLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-ink-800 to-ink-900">
      <Container size="wide" className="flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-2">
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

          <div className="flex flex-col gap-2 text-sm text-foreground-muted">
            <p>{siteConfig.contact.address}</p>
            <p>{siteConfig.contact.whatsapp}</p>
            <p>{siteConfig.contact.hours}</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-foreground-subtle">
              &copy; {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.
            </p>
            <Link
              href="/privacy-policy"
              className="text-xs text-foreground-subtle underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Kebijakan Privasi
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={getEmailLink(siteConfig.contact.email)}
              aria-label="Email"
              className="text-foreground-muted transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={getWhatsAppLink(siteConfig.contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-foreground-muted transition-colors hover:text-accent"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
