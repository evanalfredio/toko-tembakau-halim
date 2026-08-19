"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { ProductCard } from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";
import type { Product, ProductCategory } from "@/types";

export interface ProductGridProps {
  products: Product[];
  categories: ProductCategory[];
}

export function ProductGrid({ products, categories }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.categoryId === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "-mb-px border-b-2 pb-3 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "border-accent text-foreground"
              : "border-transparent text-foreground-muted hover:text-foreground",
          )}
        >
          Semua
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "-mb-px border-b-2 pb-3 text-sm font-medium transition-colors",
              activeCategory === category.id
                ? "border-accent text-foreground"
                : "border-transparent text-foreground-muted hover:text-foreground",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="product-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <FadeIn key={product.id} delay={(index % 6) * 0.06}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <p className="text-sm text-foreground-muted">Belum ada produk pada kategori ini.</p>
      )}
    </div>
  );
}
