import { Code2, GitBranch, LayoutTemplate, Server, Sparkles } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { sections } from "@/data/sections";
import { skillCategories } from "@/data/skills";

const ICONS = {
  code: Code2,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  server: Server,
  git: GitBranch,
};

// Editorial index layout (category | skills) rather than a logo wall or
// another card grid.
export default function SkillsSection() {
  const { id, eyebrow, title, description } = sections.skills;

  return (
    <Section id={id} labelledBy={`${id}-title`} tone="secondary">
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} description={description} />

      <ol className="mt-12 border-t border-border lg:mt-16">
        {skillCategories.map((category, index) => {
          const Icon = ICONS[category.icon];
          return (
            <li
              key={category.id}
              data-reveal
              className="grid gap-4 border-b border-border py-7 sm:py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="flex items-start gap-4 md:col-span-5 lg:col-span-4">
                <span className="w-7 pt-1 text-small text-muted tabular-nums" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="flex items-center gap-3 text-h4">
                  {Icon && <Icon aria-hidden="true" className="size-5 text-accent" strokeWidth={1.75} />}
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-x-2 gap-y-2.5 pl-11 md:col-span-7 md:pl-0 lg:col-span-8">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-small">
                      {skill.name}
                      {skill.status === "learning" && (
                        <Badge variant="accent" className="-my-0.5 -mr-1.5">
                          {skill.statusLabel}
                        </Badge>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
