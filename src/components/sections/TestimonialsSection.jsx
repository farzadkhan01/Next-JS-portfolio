import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { sections } from "@/data/sections";
import { testimonials } from "@/data/testimonials";
import { withRequiredFields } from "@/lib/content";

// Rendered only when genuine, approved testimonials exist (CONTENT.md §11).
export default function TestimonialsSection() {
  const items = withRequiredFields(testimonials, ["name", "quote"]);
  if (items.length === 0) return null;

  const { id, eyebrow, title } = sections.testimonials;

  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
        {items.map((item) => (
          <li key={`${item.name}-${item.quote.slice(0, 24)}`} data-reveal>
            <Card as="figure" padding="lg" className="flex h-full flex-col gap-6">
              <blockquote className="text-body-lg text-pretty">“{item.quote}”</blockquote>
              <figcaption className="mt-auto text-small">
                <span className="font-medium">{item.name}</span>
                {(item.role || item.company) && (
                  <span className="text-muted">
                    {" "}
                    · {[item.role, item.company].filter(Boolean).join(", ")}
                  </span>
                )}
              </figcaption>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
