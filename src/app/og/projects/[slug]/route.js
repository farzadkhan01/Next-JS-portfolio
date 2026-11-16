import { personal } from "@/data/personal";
import { getCaseStudyBySlug, getCaseStudyProjects } from "@/lib/projects";
import { renderOgImage } from "@/lib/seo/og-image";

// Per-project social image (/og/projects/<slug>), generated at build time.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudyProjects().map((project) => ({ slug: project.slug }));
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) return new Response("Not found", { status: 404 });

  return renderOgImage({
    eyebrow: "Case study",
    title: project.title,
    subtitle: project.category,
    footer: `${personal.name} — ${personal.title}`,
  });
}
