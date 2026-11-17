import { ArrowLeft } from "lucide-react";

import ProjectCover from "@/components/projects/ProjectCover";
import ProjectLinks from "@/components/projects/ProjectLinks";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SmartLink from "@/components/ui/SmartLink";

const STATUS_LABELS = {
  completed: "Completed",
  "in-development": "In development",
};

export default function CaseStudyHero({ project, index }) {
  const meta = [
    { label: "Category", value: project.category },
    project.label && { label: "Type", value: project.label },
    project.role && { label: "Role", value: project.role },
    project.status && { label: "Status", value: STATUS_LABELS[project.status] ?? project.status },
  ].filter(Boolean);

  return (
    <header className="pt-10 sm:pt-14 lg:pt-16">
      <Container>
        <SmartLink
          href="/#projects"
          className="group inline-flex min-h-10 items-center gap-2 rounded-md text-small text-muted transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
            strokeWidth={1.75}
          />
          All projects
        </SmartLink>

        {/* Above-the-fold entrance runs in CSS (see HeroSection) — no JS wait. */}
        <p className="enter mt-10 flex items-center gap-3 text-caption text-muted uppercase sm:mt-14">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          Case study {String(index + 1).padStart(2, "0")}
        </p>
        <h1
          id="case-study-title"
          className="enter mt-5 max-w-[18ch] text-h1 text-balance"
          style={{ "--enter-delay": "80ms" }}
        >
          {project.title}
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p
            className="enter max-w-2xl text-body-lg text-pretty text-muted lg:col-span-7"
            style={{ "--enter-delay": "180ms" }}
          >
            {project.shortDescription}
          </p>
          <div className="enter lg:col-span-5 lg:flex lg:justify-end" style={{ "--enter-delay": "260ms" }}>
            <ProjectLinks project={project} includeCaseStudy={false} size="md" />
          </div>
        </div>

        <dl
          className="enter mt-12 grid gap-6 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ "--enter-delay": "320ms" }}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-caption text-muted uppercase">{item.label}</dt>
              <dd className="mt-1.5 font-medium text-pretty">{item.value}</dd>
            </div>
          ))}
          {project.technologies.length > 0 && (
            <div className="sm:col-span-2">
              <dt className="text-caption text-muted uppercase">Technologies</dt>
              <dd className="mt-2">
                <ul className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <li key={tech} className="enter" style={{ "--enter-delay": `${420 + i * 60}ms` }}>
                      <Badge variant="outline">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
        </dl>

        <div className="enter-cover mt-10 sm:mt-14" style={{ "--enter-delay": "400ms" }}>
          <ProjectCover
            project={project}
            index={index}
            variant="hero"
            priority
            sizes="(min-width: 1320px) 1240px, 100vw"
          />
        </div>
      </Container>
    </header>
  );
}
