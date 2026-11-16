import { ArrowUpRight, Download, Mail } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DevPlaceholder from "@/components/ui/DevPlaceholder";
import { documents } from "@/data/documents";
import { contact } from "@/data/personal";
import { sections } from "@/data/sections";
import { socialLinks } from "@/data/social-links";
import { withRequiredFields } from "@/lib/content";

export default function ContactSection() {
  const { id, eyebrow } = sections.contact;
  const links = withRequiredFields(socialLinks, ["label", "url"]);
  const docs = withRequiredFields(documents, ["label", "href"]);
  const hasMethods = Boolean(contact.email) || links.length > 0;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-section">
      <Container>
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 shadow-soft sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div aria-hidden="true" className="cover-grid absolute inset-0 -z-10" />

          <p className="flex items-center gap-3 text-caption text-muted uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-accent" />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="mt-6 max-w-[16ch] text-h1 text-balance">
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-xl text-body-lg text-pretty text-muted">{contact.description}</p>

          {hasMethods && (
            <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              {contact.email && (
                <Button href={`mailto:${contact.email}`} size="lg" icon={Mail} iconPosition="start">
                  {contact.ctaLabel}
                </Button>
              )}
              {links.map((link) => (
                <Button key={link.id} href={link.url} size="lg" variant="secondary" icon={ArrowUpRight}>
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </Button>
              ))}
            </div>
          )}

          {docs.length > 0 && (
            <ul className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap">
              {docs.map((doc) => (
                <li key={doc.id}>
                  <Button href={doc.href} download variant="ghost" icon={Download} iconPosition="start">
                    {doc.label}
                    <span className="sr-only"> ({doc.fileType})</span>
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <DevPlaceholder title="Contact details pending verification" className="mt-10 max-w-2xl">
            The “{contact.ctaLabel}” email button, GitHub and LinkedIn links, and the CV and experience
            certificate downloads appear here once verified in src/data/personal.js,
            social-links.js, and documents.js. Until then production shows no contact method.
          </DevPlaceholder>
        </div>
      </Container>
    </section>
  );
}
