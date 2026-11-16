// Read-side helpers for project data. Components never filter or sort
// src/data/projects.js themselves.

import { projects } from "@/data/projects";
import { withRequiredFields } from "@/lib/content";

const REQUIRED_FIELDS = ["slug", "title", "category", "shortDescription"];
const GALLERY_FIELDS = ["src", "alt", "width", "height"];

// Valid projects in display order.
export function getProjects() {
  return withRequiredFields(projects, REQUIRED_FIELDS).sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured);
}

// Projects that have a /projects/[slug] page.
export function getCaseStudyProjects() {
  return getProjects().filter((project) => project.hasCaseStudy);
}

export function getCaseStudyBySlug(slug) {
  return getCaseStudyProjects().find((project) => project.slug === slug) ?? null;
}

// Position in the overall project order (used for numbered covers).
export function getProjectIndex(slug) {
  return getProjects().findIndex((project) => project.slug === slug);
}

export function getAdjacentCaseStudies(slug) {
  const list = getCaseStudyProjects();
  const index = list.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? list[index - 1] : null,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : null,
  };
}

// Other case studies, preferring the same category, then display order.
export function getRelatedCaseStudies(slug, limit = 2) {
  const current = getCaseStudyBySlug(slug);
  if (!current) return [];
  const others = getCaseStudyProjects().filter((project) => project.slug !== slug);
  const sameCategory = others.filter((project) => project.category === current.category);
  const rest = others.filter((project) => project.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

// Only screenshots with dimensions (prevents layout shift) and alt text.
export function getGallery(project) {
  return withRequiredFields(project.gallery ?? [], GALLERY_FIELDS);
}

// Case-study content still missing — listed in the development placeholder.
export function getMissingCaseStudyContent(project) {
  const checks = [
    ["Screenshots", project.thumbnail || getGallery(project).length > 0],
    ["Live URL", project.liveUrl],
    ["Repository URL (if public)", project.repositoryUrl],
    ["Technologies", project.technologies.length > 0],
    ["Role", project.role],
    ["Contributions", project.contributions.length > 0],
    ["Problem / purpose", project.problem],
    ["Solution", project.solution],
    ["Confirmed features", project.features.length > 0],
    ["Implementation decisions", project.decisions.length > 0],
    ["Challenges", project.challenges.length > 0],
    ["Learnings", project.learnings.length > 0],
    ["Completion status", project.status],
  ];
  return checks.filter(([, present]) => !present).map(([label]) => label);
}
