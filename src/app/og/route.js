import { personal } from "@/data/personal";
import { renderOgImage } from "@/lib/seo/og-image";

// Homepage social image (/og). A route handler rather than the
// opengraph-image file convention so that og:image is only referenced when a
// production domain is configured (see src/lib/seo/metadata.js).
export const dynamic = "force-static";

export function GET() {
  return renderOgImage({
    eyebrow: personal.title,
    title: personal.name,
    subtitle: personal.positioning,
    footer: "Portfolio",
  });
}
