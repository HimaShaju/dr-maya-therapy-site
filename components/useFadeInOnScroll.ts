"use client";

import { useEffect } from "react";

export function useFadeInOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            el.classList.add("show");

            // ✅ stop observing once it's shown (so it won't animate again)
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
}
