"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import SmartLink from "@/components/ui/SmartLink";
import { DURATION, EASE } from "@/lib/animations/animation-config";

const DESKTOP_QUERY = "(min-width: 64rem)";

const panelVariants = {
  closed: { opacity: 0, y: -8, transition: { duration: DURATION.ui * 0.8, ease: EASE.motion } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.ui, ease: EASE.motion, staggerChildren: 0.04, delayChildren: 0.04 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -6 },
  open: { opacity: 1, y: 0, transition: { duration: DURATION.ui, ease: EASE.motion } },
};

// Disclosure-pattern menu for < 1024px. Closes on Escape, link selection,
// outside click, focus leaving the menu, and resize to desktop.
// Motion provider (LazyMotion + reduced-motion config) comes from NavbarShell.
export default function MobileMenu({ links, cta }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

  const close = useCallback((restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    firstLinkRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") close(true);
    }
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) close();
    }
    const desktop = window.matchMedia(DESKTOP_QUERY);
    function handleBreakpoint(event) {
      if (event.matches) close();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleBreakpoint);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleBreakpoint);
    };
  }, [isOpen, close]);

  function handleBlur(event) {
    if (isOpen && !rootRef.current?.contains(event.relatedTarget)) close();
  }

  return (
    <div ref={rootRef} onBlur={handleBlur} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="relative inline-flex size-10 items-center justify-center overflow-hidden rounded-md text-foreground transition-colors duration-200 hover:bg-surface-secondary active:bg-border"
      >
        {/* Both icons stay mounted and cross-fade (no layout measurement on click). */}
        <m.span
          aria-hidden="true"
          initial={false}
          animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
          transition={{ duration: DURATION.ui, ease: EASE.motion }}
          className="absolute inline-flex"
        >
          <Menu className="size-5" strokeWidth={1.75} />
        </m.span>
        <m.span
          aria-hidden="true"
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
          transition={{ duration: DURATION.ui, ease: EASE.motion }}
          className="absolute inline-flex"
        >
          <X className="size-5" strokeWidth={1.75} />
        </m.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <m.nav
            id={panelId}
            aria-label="Mobile"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute inset-x-0 top-full mt-2 rounded-2xl border border-border bg-surface p-3 shadow-float"
          >
            <ul className="flex flex-col">
              {links.map((link, index) => (
                <m.li key={link.href} variants={itemVariants}>
                  <SmartLink
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => close()}
                    className="flex min-h-12 items-center justify-between rounded-xl px-4 text-h4 transition-colors duration-200 hover:bg-surface-secondary"
                  >
                    {link.label}
                    <ArrowRight aria-hidden="true" className="size-4 text-muted" strokeWidth={1.75} />
                  </SmartLink>
                </m.li>
              ))}
            </ul>
            <m.div variants={itemVariants} className="mt-2 border-t border-border px-1 pt-3 sm:hidden">
              <Button href={cta.href} size="lg" className="w-full" onClick={() => close()}>
                {cta.label}
              </Button>
            </m.div>
          </m.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
