import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { sections } from "@/data/sections";
import { workflowSteps } from "@/data/workflow";

// Numbered editorial sequence: a vertical rail on mobile, five columns on desktop.
export default function WorkflowSection() {
  const { id, eyebrow, title } = sections.workflow;

  return (
    <Section id={id} labelledBy={`${id}-title`} tone="secondary">
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />

      <ol className="mt-12 grid gap-0 lg:mt-16 lg:grid-cols-5 lg:gap-6">
        {workflowSteps.map((step) => (
          <li
            key={step.number}
            data-reveal
            className="relative border-l border-border pb-10 pl-8 last:pb-0 lg:border-t lg:border-l-0 lg:pt-8 lg:pb-0 lg:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-accent ring-4 ring-surface-secondary lg:-top-[5px] lg:left-0"
            />
            <p className="text-small font-medium text-accent tabular-nums">{step.number}</p>
            <h3 className="mt-2 text-h4">{step.title}</h3>
            <p className="mt-3 max-w-sm text-small text-pretty text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
