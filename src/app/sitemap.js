import { getCaseStudyProjects } from "@/lib/projects";
import { absoluteUrl, HAS_SITE_URL } from "@/lib/site";

// /sitemap.xml — the homepage and every generated case study.
// Sitemap URLs must be absolute, so the list stays empty until a production
// domain is configured (src/lib/site.js) rather than listing a wrong domain.
// No lastModified: the site has no reliable per-page modification dates yet.
export default function sitemap() {
  if (!HAS_SITE_URL) return [];

  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    ...getCaseStudyProjects().map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
