"use client";

import { m } from "motion/react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils/cn";

const ICON_WRAPPER =
  "absolute inline-flex transition-[opacity,rotate,scale] duration-300 ease-out-soft";

// Icon visibility is pure CSS via the `dark:` variant (driven by data-theme),
// so it is correct on first paint, before and after hydration, and costs no
// JavaScript on click. `data-theme-icon` exempts the icons from the
// transition freeze applied while the theme switches (globals.css).
// Motion only adds tap feedback. Requires the LazyMotion provider in NavbarShell.
export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <m.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Dark theme"
      aria-pressed={theme === null ? undefined : theme === "dark"}
      title="Toggle dark theme"
      className={cn(
        "relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md text-foreground",
        "transition-colors duration-200 hover:bg-surface-secondary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        data-theme-icon
        className={cn(ICON_WRAPPER, "opacity-100 dark:rotate-90 dark:scale-60 dark:opacity-0")}
      >
        <Moon className="size-[18px]" strokeWidth={1.75} />
      </span>
      <span
        aria-hidden="true"
        data-theme-icon
        className={cn(ICON_WRAPPER, "rotate-[-90deg] scale-60 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100")}
      >
        <Sun className="size-[18px]" strokeWidth={1.75} />
      </span>
    </m.button>
  );
}
