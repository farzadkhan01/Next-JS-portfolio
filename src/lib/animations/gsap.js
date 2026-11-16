"use client";

// Single place that registers GSAP plugins. Import gsap/ScrollTrigger/useGSAP
// from here so plugins are always registered before use.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Development-only debugging handle (e.g. ScrollTrigger.getAll().length in
// the console to check for leaked triggers). Removed from production builds.
if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  window.__portfolioDebug = { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger, useGSAP };
