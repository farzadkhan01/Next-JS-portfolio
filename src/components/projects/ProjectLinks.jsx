import { ArrowRight, ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";

// Renders only links that exist: case study, live site, and source code.
// Visible labels stay short; screen readers get the project name too.
export default function ProjectLinks({ project, includeCaseStudy = true, size = "sm" }) {
  const newTab = " (opens in a new tab)";
  const links = [
    includeCaseStudy &&
      project.hasCaseStudy && {
        label: "Read case study",
        href: `/projects/${project.slug}`,
        variant: "primary",
        icon: ArrowRight,
        srSuffix: `: ${project.title}`,
      },
    project.liveUrl && {
      label: project.liveLabel || "Live site",
      href: project.liveUrl,
      variant: includeCaseStudy ? "secondary" : "primary",
      icon: ArrowUpRight,
      srSuffix: ` for ${project.title}${newTab}`,
    },
    project.repositoryUrl && {
      label: "Source code",
      href: project.repositoryUrl,
      variant: "secondary",
      icon: ArrowUpRight,
      srSuffix: ` for ${project.title}${newTab}`,
    },
  ].filter(Boolean);

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Button key={link.label} href={link.href} variant={link.variant} size={size} icon={link.icon}>
          {link.label}
          <span className="sr-only">{link.srSuffix}</span>
        </Button>
      ))}
    </div>
  );
}
