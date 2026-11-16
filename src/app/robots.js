import { absoluteUrl, HAS_SITE_URL } from "@/lib/site";

// /robots.txt — everything public is crawlable. The sitemap reference is
// added once a production domain is configured (src/lib/site.js).
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    ...(HAS_SITE_URL ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
