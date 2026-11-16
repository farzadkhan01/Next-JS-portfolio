// Project data — source: CONTENT.md §7 (initial project candidates).
//
// Only facts documented in CONTENT.md, or visible in the project's own source
// code, are included. Every case-study section renders only when its field
// has content, so empty fields are safe. Final inclusion of every project
// still needs owner confirmation.
//
// Fields
// ─ Summary (homepage cards + case-study hero)
//   slug, title, category, shortDescription, technologies[], thumbnail,
//   liveUrl, repositoryUrl, featured, order, hasCaseStudy, highlights[]
// ─ Case study (/projects/[slug])
//   overview      Longer introduction (only if it adds to shortDescription)
//   problem       The problem or purpose
//   solution      How the project addresses it
//   role          e.g. "Frontend / Full-Stack Development"
//   contributions[]  What the owner personally built
//   features[]    Confirmed features
//   decisions[]   { title, description } — important implementation decisions
//   challenges[]  { title, description } — technical challenges
//   learnings[]   What was learned
//   scopeNotes[]  Honest notes on scope (e.g. features intentionally postponed)
//   gallery[]     { src, alt, width, height, caption? } — real screenshots only
//   status        "" | "completed" | "in-development"
//   devNotes[]    Review notes shown ONLY in development
//
// Technologies: Nationwide Financial, Review Top Lawyers and California
// Personal Injury Lawyer list only the frontend stack confirmed from their
// package.json files. Backend services are omitted until verified.
// Never use AI-generated images as screenshots.

const emptyCaseStudy = {
  overview: "",
  problem: "",
  solution: "",
  role: "",
  contributions: [],
  features: [],
  decisions: [],
  challenges: [],
  learnings: [],
  scopeNotes: [],
  gallery: [],
  status: "",
  devNotes: [],
};

export const projects = [
  {
    ...emptyCaseStudy,
    slug: "tutorhub",
    title: "TutorHub",
    category: "SaaS / Full-Stack Web Application",
    shortDescription:
      "A tutoring platform that simplifies the relationship between students and tutors through discovery, booking, and session management.",
    highlights: [
      "Google and role-based authentication",
      "Student and tutor dashboards",
      "Tutor search and filtering",
      "Booking, scheduling, and rescheduling",
      "Google Meet integration",
      "Notifications, profiles, and settings",
    ],
    // Known features — CONTENT.md §7.
    features: [
      "Google authentication",
      "Role-based authentication",
      "Student and tutor dashboards",
      "Tutor search and filtering",
      "Booking workflow",
      "Session scheduling",
      "Google Meet integration",
      "Session rescheduling",
      "Profile management",
      "Notifications",
      "Settings",
    ],
    scopeNotes: [
      "Payment processing was intentionally postponed and is not part of the current build.",
    ],
    technologies: [],
    thumbnail: "",
    liveUrl: "",
    repositoryUrl: "",
    featured: true,
    order: 1,
    hasCaseStudy: true,
    devNotes: ["Technologies are not verified yet — the source code is not available locally."],
  },
  {
    ...emptyCaseStudy,
    slug: "the-wild-oasis",
    title: "The Wild Oasis",
    category: "Hospitality / Booking Application",
    shortDescription: "A cabin booking application focused on the booking experience and user interface.",
    highlights: [],
    technologies: [],
    thumbnail: "",
    liveUrl: "",
    repositoryUrl: "",
    featured: true,
    order: 2,
    hasCaseStudy: true,
    devNotes: [
      "Confirm the project's origin. If it was built from a course, the case study must say so rather than present it as an independent product.",
      "Verify exact features and the distinction between the dashboard and marketing website (CONTENT.md §7).",
    ],
  },
  {
    ...emptyCaseStudy,
    slug: "review-top-lawyers",
    title: "Review Top Lawyers",
    category: "Professional Services / Lawyer Directory",
    shortDescription:
      "A professional lawyer directory built around structured content and lawyer discovery.",
    highlights: [],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    thumbnail: "",
    liveUrl: "",
    repositoryUrl: "",
    featured: true,
    order: 3,
    hasCaseStudy: true,
    devNotes: [
      "Verify the backend technology and completed administrative features before adding them (CONTENT.md §7).",
    ],
  },
  {
    ...emptyCaseStudy,
    slug: "nationwide-financial",
    title: "Nationwide Financial",
    category: "Business / Financial Consulting Website",
    shortDescription:
      "A financial consulting website with professional service presentation, clear navigation, and conversion-focused pages.",
    highlights: [],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    thumbnail: "",
    liveUrl: "",
    repositoryUrl: "",
    featured: true,
    order: 4,
    hasCaseStudy: true,
  },
  {
    ...emptyCaseStudy,
    slug: "california-personal-injury-lawyer",
    title: "California Personal Injury Lawyer",
    category: "Legal Services Website",
    shortDescription:
      "A legal services website with a professional visual direction and a responsive experience.",
    highlights: [],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    thumbnail: "",
    liveUrl: "",
    repositoryUrl: "",
    featured: true,
    order: 5,
    hasCaseStudy: true,
    devNotes: ["Verify deployment and completion status before publishing (CONTENT.md §7)."],
  },
];
