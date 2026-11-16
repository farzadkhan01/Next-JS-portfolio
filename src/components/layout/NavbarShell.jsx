"use client";

import { useEffect, useState } from "react";
import { LazyMotion, MotionConfig, domAnimation, useMotionValueEvent, useScroll } from "motion/react";

// Client wrapper for the site header:
// - Provides Motion (LazyMotion + domAnimation keeps the bundle small) and
//   MotionConfig reducedMotion="user" to every Motion component in the header.
// - Exposes data-scrolled so the bar can turn into a glass surface once the
//   page scrolls (DESIGN_SYSTEM.md §12). Only colours/shadow change — no
//   size change, so nothing below shifts.
// - Enables CSS smooth scrolling (html[data-smooth-scroll]) only once the
//   page has loaded, so loading straight into /#section jumps accurately.
//   The header is mounted once in the root layout, so this runs once per load.
export default function NavbarShell({ children }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let frame;
    const enable = () => {
      // Two frames: let the browser finish any initial fragment scroll first.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => (root.dataset.smoothScroll = ""));
      });
    };
    if (document.readyState === "complete") enable();
    else window.addEventListener("load", enable, { once: true });
    return () => {
      window.removeEventListener("load", enable);
      cancelAnimationFrame(frame);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (value) => {
    const next = value > 12;
    if (next !== scrolled) setScrolled(next);
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <header data-scrolled={scrolled} className="group/header sticky top-0 z-40 pt-3 sm:pt-4">
          {children}
        </header>
      </MotionConfig>
    </LazyMotion>
  );
}
