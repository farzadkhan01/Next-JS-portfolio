// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTION DOMAIN — set the SITE_URL environment variable before deploying:
//
//   SITE_URL=https://your-domain.com
//
// (in .env.production.local locally, or in the hosting provider's environment
// variable settings). See .env.example and README.md › "Production domain".
//
// Until it is set:
// - Development falls back to http://localhost:3000.
// - Production builds emit NO absolute URLs (no canonical, og:url, og:image,
//   or sitemap entries) rather than publishing a wrong or localhost domain,
//   and the build prints a warning.
// ─────────────────────────────────────────────────────────────────────────────

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const DEVELOPMENT_FALLBACK = "http://localhost:3000";

function normalizeSiteUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const isLocal = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    if (IS_PRODUCTION && isLocal) return null; // never publish localhost URLs
    return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
  } catch {
    return null;
  }
}

export const SITE_URL =
  normalizeSiteUrl(process.env.SITE_URL) ?? (IS_PRODUCTION ? null : DEVELOPMENT_FALLBACK);

export const HAS_SITE_URL = SITE_URL !== null;

// Absolute URL for a site path, or null when no domain is configured.
export function absoluteUrl(path = "/") {
  return SITE_URL ? new URL(path, `${SITE_URL}/`).toString() : null;
}

if (IS_PRODUCTION && !HAS_SITE_URL) {
  console.warn(
    "\n[site] SITE_URL is not set (or is invalid/localhost). Canonical URLs, Open Graph URLs/images " +
      "and sitemap entries are omitted. Set SITE_URL=https://your-domain.com before deploying.\n",
  );
}
