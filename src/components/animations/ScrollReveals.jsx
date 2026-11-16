"use client";

import { usePathname } from "next/navigation";

import { DURATION, EASE, REVEAL } from "@/lib/animations/animation-config";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/animations/gsap";

// One client island (mounted once in the root layout) that animates every
// server-rendered element marked with:
//   data-reveal           fade + rise when scrolled into view (batched stagger)
//   data-reveal="cover"   subtle scale-in for project covers/screenshots
//   data-parallax         gentle scroll-linked drift for decorative layers
//
// Re-runs on every route change (revertOnUpdate kills the previous page's
// tweens and ScrollTriggers first). gsap.matchMedia skips everything for
// reduced-motion visitors. Elements are hidden with opacity only — never
// visibility — so they stay keyboard-focusable.
export default function ScrollReveals() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = document.documentElement;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray("[data-reveal]:not([data-reveal='cover'])");
        const covers = gsap.utils.toArray("[data-reveal='cover']");

        if (items.length) gsap.set(items, { opacity: 0, y: REVEAL.distance });
        if (covers.length) gsap.set(covers, { opacity: 0, scale: 1.03 });
        root.dataset.revealState = "ready";

        const show = (targets) =>
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: DURATION.reveal,
            ease: EASE.gsap,
            stagger: REVEAL.stagger,
            overwrite: true,
          });

        // Elements near the very end of the page (e.g. the footer's last row)
        // can never scroll up to the normal threshold; reveal those as soon
        // as they enter the viewport instead.
        const startFor = (self) => {
          const top = self.trigger.getBoundingClientRect().top + window.scrollY;
          const reachable = top - window.innerHeight * REVEAL.startRatio <= ScrollTrigger.maxScroll(window);
          return reachable ? REVEAL.start : "top bottom";
        };

        if (items.length + covers.length > 0) ScrollTrigger.batch([...items, ...covers], {
          start: startFor,
          once: true,
          onEnter: show,
        });

        // Anything above the fold when the page loads at an anchor (e.g. /#contact)
        // has already been passed: reveal it immediately.
        const passed = [...items, ...covers].filter(
          (el) => el.getBoundingClientRect().bottom < 0,
        );
        if (passed.length) gsap.set(passed, { opacity: 1, y: 0, scale: 1 });

        // Keyboard users: reveal an element instantly when focus moves into it.
        const onFocusIn = (event) => {
          const target = event.target.closest?.("[data-reveal]");
          if (target && Number(gsap.getProperty(target, "opacity")) < 1) {
            gsap.to(target, { opacity: 1, y: 0, scale: 1, duration: DURATION.ui, overwrite: true });
          }
        };
        document.addEventListener("focusin", onFocusIn);

        return () => document.removeEventListener("focusin", onFocusIn);
      });

      // Decorative parallax only on tablet and larger: small screens get the
      // cheaper opacity/translate reveals alone.
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
        gsap.utils.toArray("[data-parallax]").forEach((layer) => {
          gsap.to(layer, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: layer.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        root.dataset.revealState = "ready";
      });

      // Web-font swaps change layout; recalculate trigger positions once fonts settle.
      let cancelled = false;
      document.fonts?.ready.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
