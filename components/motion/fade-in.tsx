"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView, usePrefersReducedMotion } from "./hooks";

export interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
  // Animate on mount instead of on scroll-into-view. Use for above-the-fold content.
  immediate?: boolean;
}

const distanceByDirection: Record<NonNullable<FadeInProps["direction"]>, number> = {
  up: 16,
  down: -16,
  none: 0,
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  immediate = false,
}: FadeInProps) {
  const { ref, isInView } = useInView<HTMLDivElement>(immediate);
  const reduceMotion = usePrefersReducedMotion();
  const revealed = isInView || reduceMotion;

  const style: CSSProperties = {
    transitionDelay: reduceMotion ? "0s" : `${delay}s`,
    transform: revealed ? "translateY(0)" : `translateY(${distanceByDirection[direction]}px)`,
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        revealed ? "opacity-100" : "opacity-0",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
