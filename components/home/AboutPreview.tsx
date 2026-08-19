import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ImageReveal } from "@/components/motion/parallax";

export function AboutPreview() {
  return (
    <Section id="tentang" tone="base">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeIn className="flex flex-col items-start gap-8">
          <SectionHeading
            eyebrow="Tentang Kami"
            title="Berawal dari Ketelitian, Dipercaya dari Waktu ke Waktu."
            description="Kami percaya setiap produk menyimpan proses dan perhatian yang layak dihargai. Nilai itu yang terus kami jaga dalam setiap pilihan yang kami tawarkan."
          />
          <Link href="/tentang" className={buttonVariants({ variant: "secondary", size: "md" })}>
            Selengkapnya Tentang Kami
          </Link>
        </FadeIn>

        <ImageReveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
          <Image
            src="/images/about/about.jpg"
            alt="Tembakau rajangan halus Toko Tembakau Halim"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
          />
        </ImageReveal>
      </div>
    </Section>
  );
}
