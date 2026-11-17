import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, experience } from "@/data/experience";
import { sections } from "@/data/sections";
import { withRequiredFields } from "@/lib/content";

// Dates are shown only when provided; otherwise the confirmed duration.
function period(entry) {
  if (entry.startDate) return `${entry.startDate} — ${entry.current ? "Present" : entry.endDate || ""}`;
  return entry.duration ?? "";
}

function SubHeading({ icon: Icon, children }) {
  return (
    <h3 data-reveal className="flex items-center gap-3 text-h4">
      <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-secondary">
        <Icon aria-hidden="true" className="size-[18px] text-accent" strokeWidth={1.75} />
      </span>
      {children}
    </h3>
  );
}

export default function ExperienceSection() {
  const { id, eyebrow, title, experienceHeading, educationHeading } = sections.experience;
  const jobs = withRequiredFields(experience, ["company", "position"]);
  const schools = withRequiredFields(education, ["qualification"]);

  if (jobs.length === 0 && schools.length === 0) return null;

  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
        {jobs.length > 0 && (
          <div className="flex flex-col gap-6 lg:col-span-6">
            <SubHeading icon={BriefcaseBusiness}>{experienceHeading}</SubHeading>
            <ul className="flex flex-col gap-4">
              {jobs.map((job) => (
                <li key={`${job.company}-${job.position}`}>
                  <Card data-reveal padding="lg" className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-h3">{job.position}</p>
                        <p className="mt-1 text-body-lg text-muted">{job.company}</p>
                      </div>
                      {period(job) && <Badge variant="accent">{period(job)}</Badge>}
                    </div>
                    {job.summary && <p className="text-pretty text-muted">{job.summary}</p>}
                    {job.responsibilities?.length > 0 && (
                      <ul className="list-disc space-y-1.5 pl-5 text-muted marker:text-border">
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {job.technologies?.length > 0 && (
                      <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
                        {job.technologies.map((tech) => (
                          <li key={tech}>
                            <Badge variant="outline">{tech}</Badge>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        )}

        {schools.length > 0 && (
          <div className="flex flex-col gap-6 lg:col-span-6">
            <SubHeading icon={GraduationCap}>{educationHeading}</SubHeading>
            <ol className="flex flex-col">
              {schools.map((school, i) => (
                <li
                  key={school.qualification}
                  data-reveal
                  className="relative border-l border-border pb-8 pl-8 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className={
                      "absolute top-1.5 -left-[5px] size-2.5 rounded-full ring-4 ring-background " +
                      (school.status === "in-progress" ? "bg-accent" : "bg-muted")
                    }
                  />
                  <p className="text-small font-medium text-accent tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h4 className="text-h4">{school.qualification}</h4>
                    {school.status === "in-progress" && <Badge variant="accent">In progress</Badge>}
                  </div>
                  {(school.institution || school.location) && (
                    <p className="mt-1.5 text-muted">
                      {[school.institution, school.location].filter(Boolean).join(", ")}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </Section>
  );
}
