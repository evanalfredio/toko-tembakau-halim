import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Benefits } from "@/components/home/Benefits";
import { BrandStatement } from "@/components/home/BrandStatement";
import { StorePhotos } from "@/components/home/StorePhotos";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
      <Benefits />
      <BrandStatement />
      <StorePhotos />
      <ContactCTA />
    </>
  );
}
