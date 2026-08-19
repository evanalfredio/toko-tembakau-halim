import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { productCategories } from "@/data/product-categories";

const description = "Jelajahi pilihan tembakau dan perlengkapan yang kami tawarkan di Toko Tembakau Halim.";

export const metadata: Metadata = {
  title: "Produk",
  description,
  alternates: { canonical: "/produk" },
  openGraph: { title: "Produk", description },
};

export default function ProdukPage() {
  return (
    <>
      <PageHeader
        eyebrow="Koleksi Kami"
        title="Produk"
        description="Jelajahi pilihan tembakau dan perlengkapan yang kami tawarkan."
      />
      <Section tone="base" className="pt-0 pb-20 sm:pb-24">
        <h2 className="sr-only">Daftar Produk</h2>
        <ProductGrid products={products} categories={productCategories} />
      </Section>
    </>
  );
}
