import { Compass, Globe2, Sprout } from "lucide-react";

import Badge from "@/components/ui/Badge";
import BentoCard from "@/components/ui/BentoCard";
import BentoGrid from "@/components/ui/BentoGrid";
import DevPlaceholder from "@/components/ui/DevPlaceholder";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { about, personal } from "@/data/personal";
import { sections } from "@/data/sections";

function CardLabel({ icon: Icon, children }) {
  return (
    <p className="flex items-center gap-2 text-caption text-muted uppercase">
      <Icon aria-hidden="true" className="size-4 text-accent" strokeWidth={1.75} />
      {children}
    </p>
  );
}

export default function AboutSection() {
  const { id, eyebrow, title } = sections.about;

  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />

      <BentoGrid className="mt-12 lg:mt-16">
        <BentoCard size="lg" padding="lg" className="justify-between gap-10">
          <p className="text-caption text-muted uppercase">Overview</p>
          <div className="flex flex-col gap-5">
            <p className="text-h3 text-balance">{about.overview[0]}</p>
            {about.overview.slice(1).map((paragraph) => (
              <p key={paragraph} className="max-w-prose text-pretty text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </BentoCard>

        <BentoCard size="md" variant="secondary" className="gap-6">
          <CardLabel icon={Compass}>Approach</CardLabel>
          <p className="mt-auto text-body-lg text-pretty">{about.approach}</p>
        </BentoCard>

        <BentoCard className="gap-6">
          <CardLabel icon={Sprout}>Currently learning</CardLabel>
          <div className="mt-auto flex flex-col items-start gap-3">
            <Badge variant="accent">In progress</Badge>
            <p className="text-h4">{about.learning.topic}</p>
            <p className="text-small text-pretty text-muted">{about.learning.text}</p>
          </div>
        </BentoCard>

        <BentoCard className="gap-6">
          <CardLabel icon={Globe2}>Location</CardLabel>
          <div className="mt-auto">
            <p className="text-body-lg font-medium text-balance">{personal.location}</p>
            <p className="mt-2 text-small text-muted">{personal.workPreference}</p>
          </div>
        </BentoCard>
      </BentoGrid>

      <DevPlaceholder title="Biography pending review" className="mt-6">
        The biography is the suggested copy from CONTENT.md and needs owner review. The “20+ projects”
        statistic is omitted until verified. Availability status is hidden until confirmed.
      </DevPlaceholder>
    </Section>
  );
}
