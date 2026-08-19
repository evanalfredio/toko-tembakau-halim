"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

function subscribeHoverCapable(callback: () => void) {
  const query = window.matchMedia("(hover: hover) and (pointer: fine)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getHoverCapableSnapshot() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getHoverCapableServerSnapshot() {
  return false;
}

// True only for real mouse/trackpad devices — used to gate desktop-only
// enhancements (e.g. custom cursor) off entirely on touch devices.
export function useHoverCapable() {
  return useSyncExternalStore(
    subscribeHoverCapable,
    getHoverCapableSnapshot,
    getHoverCapableServerSnapshot,
  );
}

// Native IntersectionObserver instead of motion's whileInView, which was found to
// stall mid-transition in this app (React 19 + motion v13 DOM reconciliation conflict).
export function useInView<T extends HTMLElement>(immediate = false, margin = "-80px") {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate]);

  return { ref, isInView };
}
