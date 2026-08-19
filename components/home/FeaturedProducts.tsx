import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featured = products.filter((product) => product.featured).slice(0, 3);

  return (
    <Section id="produk" tone="base">
      <SectionHeading
        eyebrow="Koleksi Kami"
        title="Produk Pilihan"
        description="Sebagian dari produk yang kami tawarkan. Data di bawah masih contoh dan dapat diganti kapan saja."
      />

      <Stagger className="product-grid mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 flex justify-center">
        <Link href="/produk" className={buttonVariants({ variant: "secondary", size: "md" })}>
          Lihat Semua Produk
        </Link>
      </div>
    </Section>
  );
}
