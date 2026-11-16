import Badge from "@/components/ui/Badge";
import DevPlaceholder from "@/components/ui/DevPlaceholder";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { sections } from "@/data/sections";
import { IS_DEVELOPMENT, withRequiredFields } from "@/lib/content";

function formatPeriod(entry) {
  return `${entry.startDate} — ${entry.current ? "Present" : entry.endDate}`;
}

export default function ExperienceSection() {
  const { id, eyebrow, title } = sections.experience;
  const entries = withRequiredFields(experience, ["company", "position", "startDate"]);

  // Hidden in production until verified entries exist (nav link is hidden too).
  if (entries.length === 0 && !IS_DEVELOPMENT) return null;

  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />

      {entries.length > 0 ? (
        <ol className="mt-12 border-t border-border lg:mt-16">
          {entries.map((entry) => (
            <li
              key={`${entry.company}-${entry.position}-${entry.startDate}`}
              data-reveal
              className="grid gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <p className="text-small text-muted tabular-nums">{formatPeriod(entry)}</p>
                {entry.employmentType && (
                  <p className="mt-1 text-small text-muted">{entry.employmentType}</p>
                )}
              </div>
              <div className="flex flex-col gap-3 md:col-span-8">
                <h3 className="text-h4">
                  {entry.position}
                  <span className="text-muted"> · {entry.company}</span>
                </h3>
                {entry.summary && <p className="text-pretty text-muted">{entry.summary}</p>}
                {entry.responsibilities?.length > 0 && (
                  <ul className="list-disc space-y-1.5 pl-5 text-muted marker:text-border">
                    {entry.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {entry.technologies?.length > 0 && (
                  <ul aria-label="Technologies" className="flex flex-wrap gap-1.5 pt-1">
                    {entry.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge variant="outline">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <DevPlaceholder title="Experience pending verification" className="mt-12">
          No verified entries yet. The previous portfolio lists CREATECH (Itsolutions) with overlapping
          titles and dates, so nothing is published. Add verified entries to src/data/experience.js.
          This section and its navigation link are hidden in production until then.
        </DevPlaceholder>
      )}
    </Section>
  );
}
