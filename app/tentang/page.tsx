import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Benefits } from "@/components/home/Benefits";
import { BrandStatement } from "@/components/home/BrandStatement";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: siteConfig.description,
  alternates: { canonical: "/tentang" },
  openGraph: { title: "Tentang Kami", description: siteConfig.description },
};

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Berawal dari Ketelitian, Dipercaya dari Waktu ke Waktu."
        description={siteConfig.description}
      />
      <BrandStatement />
      <Benefits />
    </>
  );
}
