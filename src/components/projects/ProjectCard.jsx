import { Check } from "lucide-react";

import ProjectCover from "@/components/projects/ProjectCover";
import ProjectLinks from "@/components/projects/ProjectLinks";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";

// Project summary card. `layout="feature"` places the cover beside the
// content on large screens and shows highlights; "compact" stacks them.
export default function ProjectCard({ project, index = 0, layout = "compact", headingLevel = "h3" }) {
  const Heading = headingLevel;
  const isFeature = layout === "feature";
  // Hover feedback only when the card actually leads somewhere.
  const hasLinks = Boolean(project.hasCaseStudy || project.liveUrl || project.repositoryUrl);

  return (
    <Card
      as="article"
      data-reveal
      padding="none"
      interactive={hasLinks}
      className={cn(
        "flex flex-col gap-6 p-3 sm:p-4",
        hasLinks && "group",
        isFeature && "lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-10",
      )}
    >
      <ProjectCover
        project={project}
        index={index}
        sizes={isFeature ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        className={cn(isFeature && "lg:col-span-7 lg:self-center")}
      />

      <div
        className={cn(
          "flex flex-1 flex-col gap-4 px-2 pb-3 sm:px-3",
          isFeature && "lg:col-span-5 lg:justify-center lg:px-0 lg:py-6 lg:pr-6",
        )}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-caption text-muted uppercase">
            <span className="text-accent tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            <span aria-hidden="true"> — </span>
            <span className="sr-only">, </span>
            {project.category}
          </p>
          {project.label && <Badge variant="accent">{project.label}</Badge>}
        </div>
        <Heading className={isFeature ? "text-h2" : "text-h3"}>{project.title}</Heading>
        <p className="text-pretty text-muted">{project.shortDescription}</p>

        {isFeature && project.highlights.length > 0 && (
          <ul className="grid gap-2 text-small sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {project.technologies.length > 0 && (
          <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge variant="outline">{tech}</Badge>
              </li>
            ))}
          </ul>
        )}

        <ProjectLinks project={project} />
      </div>
    </Card>
  );
}
