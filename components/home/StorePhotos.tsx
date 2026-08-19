import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImageReveal } from "@/components/motion/parallax";
import { MapCard } from "@/components/ui/map-card";

const storePhotos = [
  { src: "/images/toko/ruko-4.jpg", alt: "Tampak depan Toko Tembakau Halim" },
  { src: "/images/toko/ruko-1.jpg", alt: "Etalase Toko Tembakau Halim dari luar" },
  { src: "/images/toko/ruko-2.jpg", alt: "Rak dan wadah tembakau di dalam toko" },
  { src: "/images/toko/ruko-3.jpg", alt: "Meja racik dan koleksi tembakau di toko" },
];

export function StorePhotos() {
  return (
    <Section tone="base">
      <SectionHeading
        eyebrow="Toko Kami"
        title="Kunjungi Toko Kami"
        description="Begini rupa Toko Tembakau Halim — datang langsung untuk melihat dan memilih sendiri."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {storePhotos.map((photo, index) => (
          <ImageReveal
            key={photo.src}
            delay={index * 0.08}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
            />
          </ImageReveal>
        ))}
      </div>

      <MapCard className="mt-4 aspect-[21/9] sm:mt-5" />
    </Section>
  );
}
