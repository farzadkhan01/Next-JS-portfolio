// One case-study chapter: a numbered label column (sticky on desktop) and a
// content column. Keeps every chapter on the same editorial grid.
// `staggered` chapters reveal their list items individually (the items carry
// data-reveal), so the content column itself is not revealed as a block.
export default function CaseStudySection({ id, number, title, staggered = false, children }) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="grid gap-6 border-t border-border py-12 sm:py-16 lg:grid-cols-12 lg:gap-10"
    >
      <div className="lg:col-span-4">
        <div data-reveal className="lg:sticky lg:top-28">
          <p className="text-small font-medium text-accent tabular-nums" aria-hidden="true">
            {number}
          </p>
          <h2 id={headingId} className="mt-2 text-h3">
            {title}
          </h2>
        </div>
      </div>
      <div data-reveal={staggered ? undefined : true} className="lg:col-span-8">
        {children}
      </div>
    </section>
  );
}
