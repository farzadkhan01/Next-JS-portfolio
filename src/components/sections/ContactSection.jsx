import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";

import BrandIcon from "@/components/ui/BrandIcon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DevPlaceholder from "@/components/ui/DevPlaceholder";
import { documents } from "@/data/documents";
import { contact } from "@/data/personal";
import { sections } from "@/data/sections";
import { socialLinks } from "@/data/social-links";
import { withRequiredFields } from "@/lib/content";

const digitsOnly = (value) => value.replace(/[^\d]/g, "");

// Contact methods built from src/data/personal.js — each appears only when its
// value is set. Phone and WhatsApp use separate, visually distinct icons.
function getContactMethods() {
  return [
    contact.email && {
      id: "email",
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail aria-hidden="true" className="size-5" strokeWidth={1.75} />,
    },
    contact.phone && {
      id: "phone",
      label: "Phone",
      value: contact.phone,
      href: `tel:+${digitsOnly(contact.phone)}`,
      icon: <Phone aria-hidden="true" className="size-5" strokeWidth={1.75} />,
    },
    contact.whatsapp && {
      id: "whatsapp",
      label: "WhatsApp",
      value: contact.whatsapp,
      href: `https://wa.me/${digitsOnly(contact.whatsapp)}`,
      external: true,
      icon: <BrandIcon name="whatsapp" className="size-5" />,
    },
  ].filter(Boolean);
}

export default function ContactSection() {
  const { id, eyebrow } = sections.contact;
  const methods = getContactMethods();
  const profiles = withRequiredFields(socialLinks, ["label", "url"]);
  const docs = withRequiredFields(documents, ["label", "href"]);
  const missing = [!contact.phone && "phone", !contact.whatsapp && "WhatsApp", ...socialLinks.filter((l) => !l.url).map((l) => l.label), docs.length === 0 && "CV / certificate"].filter(Boolean);

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-section">
      <Container>
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 shadow-soft sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          <div aria-hidden="true" className="cover-grid absolute inset-0 -z-10" />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-caption text-muted uppercase">
                <span aria-hidden="true" className="h-px w-6 bg-accent" />
                {eyebrow}
              </p>
              <h2 id={`${id}-title`} className="mt-6 max-w-[16ch] text-h1 text-balance">
                {contact.headline}
              </h2>
              <p className="mt-6 max-w-xl text-body-lg text-pretty text-muted">{contact.description}</p>
              {contact.email && (
                <div className="mt-10">
                  <Button href={`mailto:${contact.email}`} size="lg" icon={Mail} iconPosition="start">
                    {contact.ctaLabel}
                  </Button>
                </div>
              )}
            </div>

            {(methods.length > 0 || profiles.length > 0) && (
              <div className="flex flex-col gap-8 lg:col-span-5 lg:justify-end">
                {methods.length > 0 && (
                  <ul className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-background/60">
                    {methods.map((method) => (
                      <li key={method.id}>
                        <a
                          href={method.href}
                          {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group flex min-h-16 items-center gap-4 px-4 py-3 transition-colors duration-200 hover:bg-surface-secondary sm:px-5"
                        >
                          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                            {method.icon}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-caption text-muted uppercase">{method.label}</span>
                            <span className="block font-medium break-all">{method.value}</span>
                          </span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            strokeWidth={1.75}
                          />
                          {method.external && <span className="sr-only"> (opens in a new tab)</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {profiles.length > 0 && (
                  <div>
                    <p className="text-caption text-muted uppercase">Find me online</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {profiles.map((profile) => (
                        <li key={profile.id}>
                          <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${profile.label} (opens in a new tab)`}
                            title={profile.label}
                            className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                          >
                            <BrandIcon name={profile.icon} className="size-5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

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

          {missing.length > 0 && (
            <DevPlaceholder title="Contact details still to add" className="mt-10 max-w-2xl">
              Hidden until supplied: {missing.join(", ")}. Add them in src/data/personal.js,
              social-links.js, and documents.js — each appears automatically once filled.
            </DevPlaceholder>
          )}
        </div>
      </Container>
    </section>
  );
}
