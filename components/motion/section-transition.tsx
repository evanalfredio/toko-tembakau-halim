"use client";

import { cn } from "@/lib/utils";
import { useInView } from "./hooks";

export function SectionTransition() {
  const { ref, isInView } = useInView<HTMLDivElement>(false, "-120px");

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-border-strong to-transparent transition-all duration-1000 ease-out",
        isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
      )}
    />
  );
}
