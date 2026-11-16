"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";

import SmartLink from "@/components/ui/SmartLink";
import { cn } from "@/lib/utils/cn";

const ACTIVATION_LINE = 0.4; // a section is active once its top passes 40% of the viewport

// "/" → "top" (hero), "/#about" → "about", …
function sectionIdFor(href) {
  return href.includes("#") ? href.split("#")[1] : "top";
}

// Desktop navigation with an active-section indicator.
// Homepage: the last section whose top has crossed the activation line is
// active; at the very bottom of the page the last section wins (short final
// sections can never reach the line). Reads are batched to animation frames
// by Motion's useScroll. Case-study pages mark "Projects".
// Requires the LazyMotion provider in NavbarShell.
export default function PrimaryNav({ links }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [activeId, setActiveId] = useState(null);
  const isHome = pathname === "/";

  const update = useCallback(() => {
    if (!isHome) return;
    const sections = links
      .map((link) => document.getElementById(sectionIdFor(link.href)))
      .filter(Boolean);
    if (sections.length === 0) return;

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    let current = sections[0];
    if (atBottom) {
      current = sections[sections.length - 1];
    } else {
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * ACTIVATION_LINE) current = section;
      }
    }
    setActiveId(current.id);
  }, [isHome, links]);

  useMotionValueEvent(scrollY, "change", update);

  // Initial measurement (e.g. page loaded mid-scroll or at an anchor), on the
  // next frame once layout is available.
  useEffect(() => {
    const frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [update]);

  const currentId = pathname.startsWith("/projects/") ? "projects" : isHome ? activeId : null;

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {links.map((link) => {
          const isActive = currentId === sectionIdFor(link.href);
          return (
            <li key={link.href}>
              <SmartLink
                href={link.href}
                aria-current={isActive ? (isHome ? "location" : "page") : undefined}
                className={cn(
                  "relative inline-flex h-9 items-center rounded-md px-3.5 text-small transition-colors duration-200 hover:bg-surface-secondary hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent transition-[opacity,scale] duration-300 ease-out-soft",
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                />
              </SmartLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
