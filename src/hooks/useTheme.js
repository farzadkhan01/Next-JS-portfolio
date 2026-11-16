"use client";

import { useCallback, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, applyTheme, readTheme } from "@/lib/theme";

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Keep other open tabs in sync with a change made in this one.
  function handleStorage(event) {
    if (event.key === THEME_STORAGE_KEY) {
      document.documentElement.dataset.theme = event.newValue === "dark" ? "dark" : "light";
    }
  }
  window.addEventListener("storage", handleStorage);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", handleStorage);
  };
}

// The server cannot know the visitor's stored theme, so it reports `null`.
// React re-renders with the real value right after hydration, which avoids a
// hydration mismatch without needing a context provider.
const getServerSnapshot = () => null;

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    applyTheme(readTheme() === "dark" ? "light" : "dark");
  }, []);

  return { theme, setTheme: applyTheme, toggleTheme };
}
