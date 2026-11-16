// Builds page metadata in one consistent shape. URL-based fields (canonical,
// og:url, og:image, twitter:image) are added only when a production domain is
// configured — see src/lib/site.js.

import { personal } from "@/data/personal";
import { HAS_SITE_URL } from "@/lib/site";

export const SITE_NAME = `${personal.name} — ${personal.title}`;
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/**
 * @param {object} options
 * @param {string} [options.title]        Page title (the layout template appends the name).
 * @param {string} options.description
 * @param {string} options.path           Site path, e.g. "/" or "/projects/tutorhub".
 * @param {string} options.image          Site path of the social image, e.g. "/og".
 * @param {string} [options.imageAlt]
 * @param {"website"|"article"} [options.type]
 */
export function buildMetadata({ title, description, path, image, imageAlt, type = "website" }) {
  const socialTitle = title ? `${title} — ${personal.name}` : SITE_NAME;
  const images = HAS_SITE_URL ? [{ url: image, ...OG_IMAGE_SIZE, alt: imageAlt ?? socialTitle }] : undefined;

  return {
    ...(title ? { title } : {}),
    description,
    ...(HAS_SITE_URL ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      title: socialTitle,
      description,
      ...(HAS_SITE_URL ? { url: path, images } : {}),
    },
    twitter: {
      card: HAS_SITE_URL ? "summary_large_image" : "summary",
      title: socialTitle,
      description,
      ...(HAS_SITE_URL ? { images } : {}),
    },
  };
}
