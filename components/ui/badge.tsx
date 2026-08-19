import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase text-accent",
        className,
      )}
      style={{ letterSpacing: "var(--tracking-eyebrow)" }}
      {...props}
    >
      <span className="h-px w-6 bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}
