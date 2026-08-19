"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, startTransition, type ComponentProps, type MouseEvent } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

// Only one view transition can run at a time. Track it at module scope so a
// second navigation cleanly cancels the first instead of letting the browser
// reject it with an unhandled "transition was aborted" error.
let activeTransition: ViewTransition | null = null;

function navigateWithTransition(run: () => void) {
  if (typeof document === "undefined" || !document.startViewTransition) {
    run();
    return;
  }

  activeTransition?.skipTransition();

  const transition = document.startViewTransition(run);
  activeTransition = transition;
  transition.ready.catch(() => {});
  transition.finished.catch(() => {}).finally(() => {
    if (activeTransition === transition) activeTransition = null;
  });
}

// Wraps next/link with the browser's native View Transitions API for a smooth
// crossfade/morph between routes. Feature-detected — falls back to a plain
// navigation on browsers without support (Safari < 18, older Firefox).
export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink({ href, onClick, ...props }, ref) {
    const router = useRouter();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }
      if (typeof document === "undefined" || !document.startViewTransition) return;

      event.preventDefault();
      const target = typeof href === "string" ? href : (href.pathname ?? "/");

      navigateWithTransition(() => {
        startTransition(() => {
          router.push(target);
        });
      });
    };

    return <Link ref={ref} href={href} onClick={handleClick} {...props} />;
  },
);
