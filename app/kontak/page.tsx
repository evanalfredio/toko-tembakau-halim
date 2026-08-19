import type { Metadata } from "next";
import { MapPin, MessageCircle, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { MapCard } from "@/components/ui/map-card";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/data/site";
import { getWhatsAppLink, cn } from "@/lib/utils";

const description = "Hubungi Toko Tembakau Halim atau kunjungi toko kami langsung.";

export const metadata: Metadata = {
  title: "Kontak",
  description,
  alternates: { canonical: "/kontak" },
  openGraph: { title: "Kontak", description },
};

const contactRows = [
  { icon: MapPin, label: "Alamat", value: siteConfig.contact.address },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.contact.whatsapp },
  { icon: Mail, label: "Email", value: siteConfig.contact.email },
  { icon: Clock, label: "Jam Operasional", value: siteConfig.contact.hours },
];

export default function KontakPage() {
  const whatsappLink = getWhatsAppLink(siteConfig.contact.whatsapp);

  return (
    <>
      <PageHeader
        eyebrow="Kunjungi Kami"
        title="Kontak"
        description="Datang langsung ke toko kami atau hubungi melalui kanal berikut."
      />

      <Section tone="base" className="pt-0 pb-20 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col gap-8">
            <dl className="flex flex-col gap-6 rounded-lg border border-border bg-surface-raised p-8">
              {contactRows.map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <row.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <dt
                      className="text-xs font-semibold uppercase text-foreground-muted"
                      style={{ letterSpacing: "var(--tracking-eyebrow)" }}
                    >
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-base text-foreground">{row.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-4">
            <MapCard className="aspect-[4/3]" />
            <a
              href={siteConfig.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "self-start")}
            >
              Buka di Google Maps
            </a>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
