"use client";

import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView, usePrefersReducedMotion } from "./hooks";

interface InjectedStaggerProps {
  index?: number;
  isInView?: boolean;
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as ReactElement<InjectedStaggerProps>, { index, isInView });
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
  isInView = true,
}: {
  children: ReactNode;
  className?: string;
} & InjectedStaggerProps) {
  const reduceMotion = usePrefersReducedMotion();
  const revealed = isInView || reduceMotion;
  const delay = index * 0.08;

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        revealed ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0",
        className,
      )}
      style={{ transitionDelay: reduceMotion ? "0s" : `${delay}s` }}
    >
      {children}
    </div>
  );
}
