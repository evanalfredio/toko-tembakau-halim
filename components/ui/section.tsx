import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerProps } from "./container";
import { SectionTransition } from "@/components/motion/section-transition";

export interface SectionProps extends ComponentProps<"section"> {
  tone?: "base" | "surface" | "raised";
  containerSize?: ContainerProps["size"];
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  base: "bg-gradient-to-b from-ink-900 to-ink-950",
  surface: "bg-gradient-to-b from-ink-800 to-ink-900",
  raised: "bg-gradient-to-b from-ink-700 to-ink-800",
};

export function Section({
  tone = "base",
  containerSize = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative py-20 sm:py-28", toneClasses[tone], className)} {...props}>
      <SectionTransition />
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
