import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends ComponentProps<"div"> {
  size?: "default" | "narrow" | "wide";
}

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-10", sizeClasses[size], className)}
      {...props}
    />
  );
}
