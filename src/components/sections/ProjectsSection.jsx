import AdditionalProjectCard from "@/components/projects/AdditionalProjectCard";
import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { sections } from "@/data/sections";
import { getAdditionalProjects, getFeaturedProjects } from "@/lib/projects";

export default function ProjectsSection() {
  const { id, eyebrow, title } = sections.projects;
  const [lead, ...rest] = getFeaturedProjects();
  const additional = getAdditionalProjects();

  if (!lead) return null;

  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />

      <div className="mt-12 flex flex-col gap-5 lg:mt-16">
        <ProjectCard project={lead} index={0} layout="feature" />
        {rest.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 1} />
            ))}
          </div>
        )}
      </div>

      {additional.length > 0 && (
        <div className="mt-16 border-t border-border pt-12 lg:mt-20">
          <h3 data-reveal className="text-h4">
            {sections.projects.additionalTitle}
          </h3>
          <p data-reveal className="mt-2 max-w-prose text-small text-muted">
            {sections.projects.additionalDescription}
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {additional.map((project) => (
              <AdditionalProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
