"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Parallax, TextReveal } from "@/components/motion/parallax";
import { usePrefersReducedMotion } from "@/components/motion/hooks";

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <Parallax className="absolute inset-0 h-[calc(100%+80px)]" distance={48}>
        <Image
          src="/images/hero/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/45" />

      <div className="relative z-10 w-full">
        <Container size="wide" className="flex flex-col gap-6">
          <FadeIn immediate>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
              <TextReveal>Rasa yang Berasal dari Pilihan</TextReveal>
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.12}>
            <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
              Toko Tembakau Halim menghadirkan pilihan tembakau berkualitas dengan
              pengalaman dan kepercayaan yang dibangun dari waktu ke waktu.
            </p>
          </FadeIn>
          <FadeIn immediate delay={0.24} className="flex flex-wrap gap-4 pt-4">
            <Link href="/produk" className={buttonVariants({ size: "lg" })}>
              Jelajahi Produk
            </Link>
            <Link href="/kontak" className={buttonVariants({ size: "lg", variant: "secondary" })}>
              Hubungi Kami
            </Link>
          </FadeIn>
        </Container>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.9, duration: reduceMotion ? 0 : 0.6 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-foreground-subtle"
      >
        <span
          className="text-[11px] font-medium uppercase text-foreground-subtle"
          style={{ letterSpacing: "var(--tracking-eyebrow)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={reduceMotion ? { y: 0 } : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
