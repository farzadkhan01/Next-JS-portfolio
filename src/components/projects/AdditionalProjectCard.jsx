import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

// Compact, visually secondary card for the "Additional Projects" list:
// small screenshot, title, label, description, stack, and a live-site link.
// These projects have no case-study page.
export default function AdditionalProjectCard({ project }) {
  return (
    <article
      data-reveal
      className="group grid gap-5 rounded-2xl border border-border bg-surface p-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center sm:p-4"
    >
      {project.thumbnail && (
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-secondary">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            sizes="(min-width: 640px) 224px, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 px-2 pb-2 sm:px-0 sm:pb-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-caption text-muted uppercase">{project.category}</p>
          {project.label && <Badge variant="accent">{project.label}</Badge>}
        </div>
        <h4 className="text-h4">{project.title}</h4>
        <p className="text-small text-pretty text-muted">{project.shortDescription}</p>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {project.technologies.length > 0 && (
            <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Badge variant="outline">{tech}</Badge>
                </li>
              ))}
            </ul>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="secondary" size="sm" icon={ArrowUpRight}>
              Live site
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
