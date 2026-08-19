import { MapPin, MessageCircle, Mail, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/data/site";
import { getWhatsAppLink } from "@/lib/utils";

const contactRows = [
  { icon: MapPin, label: "Alamat", value: siteConfig.contact.address },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.contact.whatsapp },
  { icon: Mail, label: "Email", value: siteConfig.contact.email },
  { icon: Clock, label: "Jam Operasional", value: siteConfig.contact.hours },
];

export function ContactCTA() {
  return (
    <Section id="kontak" tone="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeIn className="flex flex-col items-start gap-8">
          <SectionHeading
            eyebrow="Kunjungi Kami"
            title="Mari Berbincang Soal Tembakau Pilihan"
            description="Datang langsung ke toko kami atau hubungi melalui kanal berikut."
          />
          <a
            href={getWhatsAppLink(siteConfig.contact.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Hubungi via WhatsApp
          </a>
        </FadeIn>

        <FadeIn delay={0.1}>
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
        </FadeIn>
      </div>
    </Section>
  );
}
