import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils/cn";

function NavItem({ project, direction }) {
  const isNext = direction === "next";
  const Icon = isNext ? ArrowRight : ArrowLeft;

  return (
    <Link
      href={`/projects/${project.slug}`}
      rel={isNext ? "next" : "prev"}
      data-reveal
      className={cn(
        "group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-soft",
        "transition-[translate,box-shadow] duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-raised sm:p-8",
        isNext && "sm:items-end sm:text-right",
      )}
    >
      <span className="flex items-center gap-2 text-caption text-muted uppercase">
        {!isNext && <Icon aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.75} />}
        {isNext ? "Next project" : "Previous project"}
        {isNext && <Icon aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />}
      </span>
      <span className="text-h4 text-balance">{project.title}</span>
      <span className="text-small text-muted">{project.category}</span>
    </Link>
  );
}

// Previous / next case study, in project display order.
export default function ProjectNavigation({ previous, next }) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="More case studies" className="grid gap-4 sm:grid-cols-2">
      <div>{previous && <NavItem project={previous} direction="previous" />}</div>
      <div className={cn(!previous && "sm:col-start-2")}>
        {next && <NavItem project={next} direction="next" />}
      </div>
    </nav>
  );
}
