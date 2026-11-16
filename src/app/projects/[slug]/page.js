import { notFound } from "next/navigation";
import { Check, Info } from "lucide-react";

import CaseStudyHero from "@/components/projects/CaseStudyHero";
import CaseStudySection from "@/components/projects/CaseStudySection";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import Container from "@/components/ui/Container";
import DevPlaceholder from "@/components/ui/DevPlaceholder";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { graph, projectSchema } from "@/lib/seo/structured-data";
import {
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
  getCaseStudyProjects,
  getGallery,
  getMissingCaseStudyContent,
  getProjectIndex,
  getRelatedCaseStudies,
} from "@/lib/projects";

// Only slugs from src/data/projects.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudyProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.title} Case Study`,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
    image: `/og/projects/${project.slug}`,
    imageAlt: `${project.title} — ${project.category} case study`,
    type: "article",
  });
}

function Paragraph({ children }) {
  return <p className="max-w-prose text-body-lg text-pretty text-muted">{children}</p>;
}

// `reveal`: items animate in individually (use with a `staggered` chapter).
function CheckList({ items, reveal = false }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} data-reveal={reveal || undefined} className="flex gap-3 border-b border-border pb-3">
          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Builds the chapters that have verified content, in reading order.
function getChapters(project) {
  const gallery = getGallery(project);

  return [
    project.overview && {
      id: "overview",
      title: "Overview",
      content: <Paragraph>{project.overview}</Paragraph>,
    },
    (project.problem || project.solution) && {
      id: "problem-solution",
      title: project.problem && project.solution ? "Problem & solution" : project.problem ? "The problem" : "The solution",
      content: (
        <div className="grid gap-8 md:grid-cols-2">
          {project.problem && (
            <div>
              <h3 className="text-h4">Problem</h3>
              <p className="mt-3 text-pretty text-muted">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h3 className="text-h4">Solution</h3>
              <p className="mt-3 text-pretty text-muted">{project.solution}</p>
            </div>
          )}
        </div>
      ),
    },
    (project.role || project.contributions.length > 0) && {
      id: "role",
      title: "My role",
      content: (
        <div className="flex flex-col gap-6">
          {project.role && <Paragraph>{project.role}</Paragraph>}
          {project.contributions.length > 0 && <CheckList items={project.contributions} />}
        </div>
      ),
    },
    project.features.length > 0 && {
      id: "features",
      title: "Features & functionality",
      staggered: true,
      content: <CheckList items={project.features} reveal />,
    },
    project.technologies.length > 0 && {
      id: "technologies",
      title: "Technology stack",
      staggered: true,
      content: (
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              data-reveal
              className="rounded-full border border-border bg-surface px-4 py-2 text-small font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      ),
    },
    project.decisions.length > 0 && {
      id: "decisions",
      title: "Implementation decisions",
      content: (
        <div className="flex flex-col gap-8">
          {project.decisions.map((decision) => (
            <div key={decision.title}>
              <h3 className="text-h4">{decision.title}</h3>
              <p className="mt-3 max-w-prose text-pretty text-muted">{decision.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    gallery.length > 0 && {
      id: "gallery",
      title: "Screenshots",
      staggered: true,
      content: <ProjectGallery images={gallery} />,
    },
    (project.challenges.length > 0 || project.learnings.length > 0) && {
      id: "challenges",
      title: "Challenges & learning",
      content: (
        <div className="flex flex-col gap-8">
          {project.challenges.map((challenge) => (
            <div key={challenge.title}>
              <h3 className="text-h4">{challenge.title}</h3>
              <p className="mt-3 max-w-prose text-pretty text-muted">{challenge.description}</p>
            </div>
          ))}
          {project.learnings.length > 0 && <CheckList items={project.learnings} />}
        </div>
      ),
    },
    project.scopeNotes.length > 0 && {
      id: "scope",
      title: "Scope",
      content: (
        <ul className="flex flex-col gap-3">
          {project.scopeNotes.map((note) => (
            <li
              key={note}
              className="flex gap-3 rounded-xl border border-border bg-surface-secondary p-5 text-pretty"
            >
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-muted" strokeWidth={1.75} />
              {note}
            </li>
          ))}
        </ul>
      ),
    },
  ].filter(Boolean);
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) notFound();

  const index = getProjectIndex(project.slug);
  const chapters = getChapters(project);
  const { previous, next } = getAdjacentCaseStudies(project.slug);
  const related = getRelatedCaseStudies(project.slug);
  const missing = getMissingCaseStudyContent(project);

  return (
    <article aria-labelledby="case-study-title">
      <JsonLd data={graph(projectSchema(project))} />
      <CaseStudyHero project={project} index={index} />

      <Container className="mt-16 sm:mt-20">
        {chapters.map((chapter, i) => (
          <CaseStudySection
            key={chapter.id}
            id={chapter.id}
            number={String(i + 1).padStart(2, "0")}
            title={chapter.title}
            staggered={chapter.staggered}
          >
            {chapter.content}
          </CaseStudySection>
        ))}

        {(missing.length > 0 || project.devNotes.length > 0) && (
          <DevPlaceholder title="Case-study content pending" className="mt-4">
            {missing.length > 0 && <p>Missing: {missing.join(", ")}.</p>}
            {project.devNotes.map((note) => (
              <p key={note} className="mt-1">
                {note}
              </p>
            ))}
          </DevPlaceholder>
        )}

        <div className="border-t border-border pt-12 pb-4 sm:pt-16">
          <ProjectNavigation previous={previous} next={next} />
        </div>
      </Container>

      {related.length > 0 && (
        <Section labelledBy="related-title" tone="secondary" className="mt-section">
          <SectionHeading id="related-title" eyebrow="Related" title="More projects" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} index={getProjectIndex(item.slug)} />
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}
