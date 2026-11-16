// Theme state lives in one place: the `data-theme` attribute on <html>.
// The attribute is set before first paint by THEME_INIT_SCRIPT (no flash),
// persisted in localStorage, and read by the useTheme hook.

export const THEME_STORAGE_KEY = "theme";
export const THEMES = ["light", "dark"];
export const DEFAULT_THEME = "light";

// Inlined in <head> by the root layout. Static string — no user input.
// Light is the default; the OS preference is intentionally not auto-applied
// (owner decision, Phase 1).
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");document.documentElement.dataset.theme=t==="dark"?"dark":"light";}catch(e){document.documentElement.dataset.theme="light";}})();`;

export function readTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function applyTheme(theme) {
  const next = THEMES.includes(theme) ? theme : DEFAULT_THEME;
  // `data-theme-switching` disables colour transitions (globals.css) so the
  // switch is one clean repaint instead of dozens of 200 ms cross-fades.
  // It is cleared after the next painted frame. Nothing here reads layout or
  // computed style, so the browser recalculates styles once, when it paints.
  const root = document.documentElement;
  root.dataset.themeSwitching = "";
  root.dataset.theme = next;
  requestAnimationFrame(() => requestAnimationFrame(() => delete root.dataset.themeSwitching));

  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage may be unavailable (private mode); the theme still applies for this visit.
  }
}
