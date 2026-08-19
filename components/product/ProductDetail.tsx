import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { TransitionLink } from "@/components/ui/transition-link";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/data/site";
import { productCategories } from "@/data/product-categories";
import { getWhatsAppLink } from "@/lib/utils";
import type { Product } from "@/types";

export interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const category = productCategories.find((c) => c.id === product.categoryId);
  const whatsappLink = getWhatsAppLink(
    siteConfig.contact.whatsapp,
    `Halo, saya tertarik dengan ${product.name}.`,
  );

  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950 pb-24 pt-36 sm:pt-44">
      <Container size="wide">
        <FadeIn>
          <TransitionLink
            href="/produk"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Produk
          </TransitionLink>
        </FadeIn>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src={product.image ?? "/images/placeholder.svg"}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ viewTransitionName: `product-image-${product.slug}` }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col items-start gap-6">
            {category ? (
              <span
                className="text-xs font-semibold uppercase text-accent"
                style={{ letterSpacing: "var(--tracking-eyebrow)" }}
              >
                {category.name}
              </span>
            ) : null}
            <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="text-base leading-relaxed text-foreground-muted">
              {product.description}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Tanya via WhatsApp
            </a>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
