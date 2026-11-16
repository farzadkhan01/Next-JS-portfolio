// schema.org JSON-LD builders. Only verified facts from src/data are used:
// no employment, credentials, reviews, ratings, or results. URL-based
// properties appear only when a production domain is configured.

import { personal } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { socialLinks } from "@/data/social-links";
import { withRequiredFields } from "@/lib/content";
import { SITE_NAME } from "@/lib/seo/metadata";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const PERSON_ID = SITE_URL ? `${SITE_URL}/#person` : undefined;
const WEBSITE_ID = SITE_URL ? `${SITE_URL}/#website` : undefined;

// Established skills shown on the site (technologies marked "learning" are excluded).
function establishedSkills() {
  return skillCategories
    .filter((category) => ["core", "frontend"].includes(category.id))
    .flatMap((category) => category.skills)
    .filter((skill) => skill.status !== "learning")
    .map((skill) => skill.name);
}

function personReference() {
  return PERSON_ID ? { "@id": PERSON_ID } : { "@type": "Person", name: personal.name };
}

export function personSchema() {
  const sameAs = withRequiredFields(socialLinks, ["url"]).map((link) => link.url);
  return {
    "@type": "Person",
    ...(PERSON_ID ? { "@id": PERSON_ID, url: SITE_URL } : {}),
    name: personal.name,
    jobTitle: personal.title,
    description: personal.positioning,
    address: {
      "@type": "PostalAddress",
      addressLocality: personal.address.locality,
      addressRegion: personal.address.region,
      addressCountry: personal.address.countryCode,
    },
    knowsAbout: establishedSkills(),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    ...(WEBSITE_ID ? { "@id": WEBSITE_ID, url: SITE_URL } : {}),
    name: SITE_NAME,
    description: personal.seoDescription,
    inLanguage: "en",
    author: personReference(),
  };
}

export function projectSchema(project) {
  const url = absoluteUrl(`/projects/${project.slug}`);
  return {
    "@type": "CreativeWork",
    ...(url ? { "@id": `${url}#project`, url } : {}),
    name: project.title,
    description: project.shortDescription,
    genre: project.category,
    ...(project.technologies.length > 0 ? { keywords: project.technologies.join(", ") } : {}),
    creator: personReference(),
    ...(WEBSITE_ID ? { isPartOf: { "@id": WEBSITE_ID } } : {}),
    inLanguage: "en",
  };
}

// Wraps nodes in a single @graph document.
export function graph(...nodes) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
