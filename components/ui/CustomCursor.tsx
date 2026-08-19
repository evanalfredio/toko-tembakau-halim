"use client";

import { useEffect, useRef, useState } from "react";
import { useHoverCapable, usePrefersReducedMotion } from "@/components/motion/hooks";

type CursorVariant = "default" | "button" | "view" | "link";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], label, input, textarea, select, [data-cursor]";
const FORM_SELECTOR = "input, textarea, select";

function setTransform(el: HTMLElement | null, x: number, y: number) {
  if (el) {
    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }
}

// Reusable, desktop-only custom cursor: a small dot that tracks the pointer
// instantly, plus a soft ring that trails it via a hand-rolled rAF lerp loop
// (not Framer Motion — its motion-value + spring pipeline was found to
// silently desync from real cursor position in this app, so plain
// requestAnimationFrame easing is used instead for guaranteed correctness
// and minimal overhead).
//
// State (button / view / link) is read from the hovered element via
// `pointerover`, which fires far less often than `mousemove`, keeping this
// cheap. Position updates never touch React state — both dot and ring write
// directly to the DOM, so only genuine state changes (hovering a new element
// type) trigger a re-render.
export function CustomCursor() {
  const isEnabled = useHoverCapable();
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState<string | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isEnabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const mouse = { x: -200, y: -200 };
    const ring = { x: -200, y: -200 };
    let frameId = 0;

    const tick = () => {
      const ease = reduceMotion ? 1 : 0.2;
      ring.x += (mouse.x - ring.x) * ease;
      ring.y += (mouse.y - ring.y) * ease;
      setTransform(ringRef.current, ring.x, ring.y);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    const handleMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      setTransform(dotRef.current, mouse.x, mouse.y);
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest(INTERACTIVE_SELECTOR);
      if (!interactive || interactive.matches(FORM_SELECTOR)) {
        setVariant("default");
        setLabel(null);
        return;
      }

      const explicitCursor = interactive.getAttribute("data-cursor");
      if (explicitCursor === "view" || interactive.tagName === "IMG") {
        setVariant("view");
        setLabel(interactive.getAttribute("data-cursor-label") ?? "VIEW");
      } else if (interactive.tagName === "BUTTON" || interactive.getAttribute("role") === "button") {
        setVariant("button");
        setLabel(null);
      } else if (interactive.tagName === "A" || interactive.tagName === "LABEL") {
        setVariant("link");
        setLabel(null);
      } else {
        setVariant("default");
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      cancelAnimationFrame(frameId);
    };
  }, [isEnabled, reduceMotion]);

  if (!isEnabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className={
          variant === "default"
            ? "custom-cursor-dot"
            : `custom-cursor-dot custom-cursor-dot--${variant}`
        }
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={
          variant === "default"
            ? "custom-cursor-ring"
            : `custom-cursor-ring custom-cursor-ring--${variant}`
        }
      >
        {label ? (
          <span className="custom-cursor-label" style={{ opacity: 1 }}>
            {label}
          </span>
        ) : null}
      </div>
    </>
  );
}
