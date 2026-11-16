// Primary site navigation (DESIGN_SYSTEM.md §12).
// Links point at homepage section ids defined in src/data/sections.js.

import { experience } from "@/data/experience";
import { IS_DEVELOPMENT } from "@/lib/content";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  // The Experience section is hidden in production until entries are verified,
  // so its link is hidden too (no anchor without a target).
  { label: "Experience", href: "/#experience", hidden: !IS_DEVELOPMENT && experience.length === 0 },
  { label: "Contact", href: "/#contact" },
];

export const navigationLinks = links.filter((link) => !link.hidden);

// Primary conversion action (PROJECT.md §8).
export const navigationCta = { label: "Hire Me", href: "/#contact" };
