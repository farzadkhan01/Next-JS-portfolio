import ProjectCard from "@/components/projects/ProjectCard";
import DevPlaceholder from "@/components/ui/DevPlaceholder";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { sections } from "@/data/sections";
import { getFeaturedProjects } from "@/lib/projects";

export default function ProjectsSection() {
  const { id, eyebrow, title } = sections.projects;
  const [lead, ...rest] = getFeaturedProjects();

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

      <DevPlaceholder title="Project details pending verification" className="mt-6">
        Project inclusion, screenshots, live and repository URLs, and confirmed features are pending.
        Numbered covers stand in for screenshots. Technologies are listed only where confirmed from
        each project’s source.
      </DevPlaceholder>
    </Section>
  );
}
