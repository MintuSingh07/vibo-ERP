"use client";

import { ReactLenis, useLenis } from "lenis/react";
import React, { useEffect } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useLenis();

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        if (anchor.hash === "#" || anchor.getAttribute("href") === "#") {
          e.preventDefault();
          lenis?.scrollTo(0, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          return;
        }

        if (anchor.hash && anchor.hash.startsWith("#")) {
          const targetElement = document.querySelector(anchor.hash) as HTMLElement;
          if (targetElement) {
            e.preventDefault();
            lenis?.scrollTo(targetElement, {
              offset: -100, // Perfect offset to center the view and clear the floating navbar
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious custom exponential ease-out
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
