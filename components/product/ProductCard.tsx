import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TransitionLink } from "@/components/ui/transition-link";
import { productCategories } from "@/data/product-categories";
import type { Product } from "@/types";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = productCategories.find((c) => c.id === product.categoryId);

  return (
    <TransitionLink
      href={`/produk/${product.slug}`}
      className="product-card group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden" data-cursor="view">
        <Image
          src={product.image ?? "/images/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="product-card-image object-cover"
          style={{ viewTransitionName: `product-image-${product.slug}` }}
        />
      </div>

      <div className="product-card-surface flex flex-1 flex-col gap-2 p-5">
        {category ? (
          <span
            className="text-xs font-semibold uppercase text-accent"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            {category.name}
          </span>
        ) : null}
        <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm leading-relaxed text-foreground-muted">{product.description}</p>

        <span className="product-card-reveal mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Lihat Detail
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </TransitionLink>
  );
}
