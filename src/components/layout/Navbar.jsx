import Link from "next/link";

import MobileMenu from "@/components/layout/MobileMenu";
import NavbarShell from "@/components/layout/NavbarShell";
import PrimaryNav from "@/components/layout/PrimaryNav";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navigationCta, navigationLinks } from "@/data/navigation";
import { personal } from "@/data/personal";

// Server Component. Client islands: NavbarShell (scroll state + Motion
// provider), PrimaryNav (active section), ThemeToggle, MobileMenu.
export default function Navbar() {
  return (
    <NavbarShell>
      <Container>
        {/* Transparent at the top of the page; a glass surface once scrolled. */}
        <div
          className={
            "relative flex h-14 items-center justify-between gap-4 rounded-2xl border border-transparent pr-2 pl-4 sm:h-16 sm:pl-5 " +
            "transition-[background-color,border-color,box-shadow] duration-300 ease-out-soft " +
            "group-data-[scrolled=true]/header:glass group-data-[scrolled=true]/header:shadow-float"
          }
        >
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-sm text-[0.9375rem] font-semibold tracking-tight whitespace-nowrap"
          >
            {personal.name}
            <span aria-hidden="true" className="text-accent">
              .
            </span>
          </Link>

          <PrimaryNav links={navigationLinks} />

          <div className="flex items-center gap-1">
            <ThemeToggle />
            {/* Visibility is set on a wrapper: Button owns its display value. */}
            <div className="ml-1 hidden sm:block">
              <Button href={navigationCta.href} size="sm">
                {navigationCta.label}
              </Button>
            </div>
            <MobileMenu links={navigationLinks} cta={navigationCta} />
          </div>
        </div>
      </Container>
    </NavbarShell>
  );
}
