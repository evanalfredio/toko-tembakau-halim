"use client";

import { Fragment, useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView, usePrefersReducedMotion } from "./hooks";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  distance?: number;
}

// Plain scroll-listener parallax (no motion library) — updates transform directly
// via ref, skipping React re-renders entirely for smooth, cheap scroll-linked motion.
export function Parallax({ children, className, distance = 40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    let frame = 0;
    const update = () => {
      const progress = Math.min(Math.max(window.scrollY / 900, 0), 1);
      el.style.transform = `translateY(${progress * distance}px)`;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [distance, reduceMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const reduceMotion = usePrefersReducedMotion();
  const revealed = isInView || reduceMotion;

  return (
    <div
      ref={ref}
      className={cn("transition-[clip-path] duration-1000 ease-out", className)}
      style={{
        clipPath: revealed ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        transitionDelay: reduceMotion ? "0s" : `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface TextRevealProps {
  children: string;
  className?: string;
}

export function TextReveal({ children, className }: TextRevealProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>(false, "-20px");
  const reduceMotion = usePrefersReducedMotion();
  const revealed = isInView || reduceMotion;
  const words = children.split(" ");

  return (
    <span ref={ref} aria-label={children} className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden align-bottom">
            <span
              aria-hidden="true"
              className={cn(
                "inline-block transition-all duration-700 ease-out",
                revealed ? "translate-y-0 opacity-100" : "translate-y-[105%] opacity-0",
              )}
              style={{ transitionDelay: reduceMotion ? "0s" : `${index * 0.045}s` }}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
