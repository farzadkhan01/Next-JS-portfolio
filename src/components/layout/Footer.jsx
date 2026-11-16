import Container from "@/components/ui/Container";
import SmartLink from "@/components/ui/SmartLink";
import { navigationLinks } from "@/data/navigation";
import { contact, personal } from "@/data/personal";
import { socialLinks } from "@/data/social-links";
import { withRequiredFields } from "@/lib/content";

// Social links and email render only once verified (CONTENT.md §14–15).
export default function Footer() {
  const year = new Date().getFullYear();
  const profiles = withRequiredFields(socialLinks, ["label", "url"]);
  const externalLinks = [
    ...(contact.email ? [{ id: "email", label: "Email", url: `mailto:${contact.email}` }] : []),
    ...profiles,
  ];

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-12 sm:py-16">
        <div data-reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <p className="text-h4">{personal.name}</p>
            <p className="mt-2 text-small text-muted">{personal.positioning}</p>
            {externalLinks.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                {externalLinks.map((link) => {
                  const isWeb = link.url.startsWith("http");
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex min-h-10 items-center text-small font-medium underline-offset-4 hover:text-accent hover:underline"
                      >
                        {link.label}
                        {isWeb && <span className="sr-only"> (opens in a new tab)</span>}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1 xs:grid-cols-3 md:flex md:gap-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    className="inline-flex min-h-10 items-center rounded-md text-small text-muted transition-colors duration-200 hover:text-foreground md:px-3"
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          data-reveal
          className="flex flex-col gap-2 border-t border-border pt-6 text-small text-muted sm:flex-row sm:justify-between"
        >
          <p>
            © {year} {personal.name}
          </p>
          <p>Designed with intention. Built with JavaScript.</p>
        </div>
      </Container>
    </footer>
  );
}
