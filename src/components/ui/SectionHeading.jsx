import { cn } from "@/lib/utils/cn";

const ALIGN = {
  start: "items-start text-left",
  center: "mx-auto items-center text-center",
};

// Editorial section header: small eyebrow label, title, optional description.
// `id` should be passed to the parent Section's `labelledBy`.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  id,
  align = "start",
  className,
}) {
  return (
    <header data-reveal className={cn("flex max-w-3xl flex-col gap-4 sm:gap-5", ALIGN[align], className)}>
      {eyebrow && (
        <p className="flex items-center gap-3 text-caption text-muted uppercase">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {eyebrow}
        </p>
      )}
      <Heading id={id} className="text-h2 text-balance">
        {title}
      </Heading>
      {description && (
        <p className="max-w-prose text-body-lg text-pretty text-muted">{description}</p>
      )}
    </header>
  );
}
