// Project data — the single source for homepage cards, case studies, metadata,
// sitemap and structured data.
//
// Sources (2026-11-17 content update, owner-supplied):
// - Descriptions and highlighted details: supplied by the owner and checked
//   against each live website.
// - Technologies: confirmed from imports in the project's local source code
//   (Cali PI, Review Top Lawyers, World CoMedia, Tour De Swat) or from scripts
//   the live site actually loads (STORI, Printing New York, School B — no local
//   source). Never guessed from appearance.
// - Screenshots: captured from the live public websites (1440×900 WebP). Tour
//   De Swat's were captured inside the live dashboard with an authorised
//   account, with personal data blurred before saving.
//
// Fields
// ─ Visibility & placement
//   visible     false hides the project everywhere (cards, routes, sitemap).
//   showcase    "main" → Selected Projects (case study) | "additional" →
//               Additional Projects (secondary cards, no case study).
//   order       Display order within its showcase group.
// ─ Summary
//   slug, title, category, label (e.g. "Concept project", "Academic project"),
//   shortDescription, technologies[], thumbnail { src, alt }, liveUrl,
//   repositoryUrl, highlights[] (shown on the lead homepage card)
// ─ Case study (/projects/[slug], main showcase only)
//   overview, problem, solution, role, contributions[], features[],
//   decisions[], challenges[], learnings[], scopeNotes[], status,
//   gallery[] { src, alt, width, height, caption? } — real screenshots only,
//   devNotes[] (development only)
//
// Do not add claims about the owner's exact role, business outcomes, users, or
// results unless the owner confirms them.

const emptyCaseStudy = {
  label: "",
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
  highlights: [],
  thumbnail: null,
  liveUrl: "",
  repositoryUrl: "",
};

const SHOT = { width: 1440, height: 900 };
const shot = (slug, file, alt, caption) => ({ src: `/images/projects/${slug}/${file}.webp`, alt, caption, ...SHOT });

export const projects = [
  // ─────────────────────────────────────────────────────────── Main showcase
  {
    ...emptyCaseStudy,
    slug: "cali-personal-injury-lawyer",
    title: "Cali Personal Injury Lawyer",
    category: "Legal Services / Website Development",
    label: "Concept project",
    shortDescription:
      "A modern California personal injury law website designed to make legal information easier to navigate. The experience presents practice areas, accident-related services, a guided case inquiry flow, information about the legal process, and consultation calls to action.",
    highlights: [
      "Dedicated personal injury practice areas",
      "Guided case inquiry experience",
      "Accident and injury content by situation",
      "Consultation-focused calls to action",
    ],
    features: [
      "Dedicated personal injury practice-area sections",
      "Car, truck, motorcycle, pedestrian, and workplace accident content",
      "Catastrophic injury and wrongful-death information",
      "Guided case inquiry experience",
      "Consultation-focused navigation and calls to action",
      "Responsive website experience",
    ],
    scopeNotes: [
      "The live website identifies itself as a concept practice. Its statistics and testimonials are illustrative placeholders — not real case results, client testimonials, or attorney achievements.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Motion", "React Hook Form", "EmailJS"],
    thumbnail: { src: "/images/projects/cali-personal-injury-lawyer/hero.webp", alt: "Cali Personal Injury Lawyer homepage hero with a consultation call to action" },
    gallery: [
      shot("cali-personal-injury-lawyer", "hero", "Cali Personal Injury Lawyer homepage hero with the headline and consultation buttons", "Homepage hero and primary consultation actions."),
      shot("cali-personal-injury-lawyer", "inquiry", "Guided inquiry asking 'What happened?' with accident-type choices such as car, truck, motorcycle and pedestrian accidents", "Guided case inquiry: visitors start by choosing their situation."),
      shot("cali-personal-injury-lawyer", "practice-areas", "Practice-areas list with car, truck, motorcycle, pedestrian, workplace, catastrophic injury and wrongful death", "Practice areas with a detail panel for each."),
      shot("cali-personal-injury-lawyer", "process", "Five-step legal process: listen, investigate, build, advocate, move forward", "A clear explanation of the legal process."),
    ],
    liveUrl: "https://calipersonalinjurylawyer.com/",
    visible: true,
    showcase: "main",
    order: 1,
  },
  {
    ...emptyCaseStudy,
    slug: "review-top-lawyers",
    title: "Review Top Lawyers",
    category: "Legal Directory / Web Application",
    shortDescription:
      "A lawyer discovery platform designed to help visitors explore legal professionals through practice areas, locations, lawyer profiles, ratings, and reviews.",
    features: [
      "Lawyer directory and profile presentation",
      "Search by lawyer name, practice area, or location",
      "Practice-area discovery",
      "Ratings and review presentation",
      "Lawyer ranking and discovery interfaces",
      "Structured legal information",
    ],
    scopeNotes: [
      "The public website currently contains sample directory records. Its lawyers, reviews, and rankings are not independently verified.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Appwrite"],
    thumbnail: { src: "/images/projects/review-top-lawyers/hero.webp", alt: "Review Top Lawyers homepage with a lawyer search bar" },
    gallery: [
      shot("review-top-lawyers", "hero", "Review Top Lawyers homepage hero with search by name, practice area, or location", "Homepage hero with directory search."),
      shot("review-top-lawyers", "how-it-works", "Four ways to find legal help: browse by practice area, find lawyers near you, read ratings and reviews, compare profiles", "How the directory helps visitors compare lawyers."),
    ],
    liveUrl: "https://reviewtoplawyers.com/",
    visible: true,
    showcase: "main",
    order: 2,
  },
  {
    ...emptyCaseStudy,
    slug: "tour-de-swat",
    title: "Tour De Swat",
    category: "Tourism / Web Application",
    label: "Internal tool",
    shortDescription:
      "An internal operations dashboard for Tour De Swat, a tour operator in Swat Valley, where staff manage trips and guests, payments, expenses, investment partnerships, and system settings behind a secure sign-in.",
    overview:
      "Tour De Swat is a private, staff-only web application that brings the operator's day-to-day records into one place: trip bookings and guest details, payments, vendor and overhead expenses, investment partnerships, and the routes and vehicles the business works with. Every page sits behind a staff sign-in.",
    // Confirmed by inspecting the live dashboard with an authorised account
    // (2026-11-16) and against the local source (src/routes, src/features).
    features: [
      "Dashboard overview with revenue, expenses, net profit and active-trip cards, a period filter (all time, this month, last 30 days, this year, last year), a monthly revenue-vs-expenses chart, and a recent-activity feed",
      "Trips & Guests CRM: a bookings table with invoice number, guest, dates, route, total price and payment status, plus search, period, status, price-range and date-range filters, sortable columns and pagination",
      "Trip detail drawer with client and itinerary details, trip duration, a financial summary (valuation, amount paid, balance due, internal expenses and margin), a payment ledger with a \"Log new payment\" action, and linked expenses",
      "Trip creation form covering client details, a VIP flag, circuit or custom route, dates with an automatic duration, booking type and category, headcount, accommodation and settlement status",
      "Quick Action hub on the dashboard with tabs to book a trip, log an expense, dispatch a vehicle, or record partner inflow",
      "Expenses hub separating direct trip costs from indirect overhead, with summary cards for direct costs, overhead and unpaid payables, and filters by category, provider and status",
      "Investment fund module with capital invested, capital returned, net profit and liquidity cards, a partnerships table filterable by sector and status, and a transaction ledger of capital calls, dividends and returns of capital",
      "Global search across trips and expenses",
      "Printable views for trip invoices, expenses and investments",
      "System settings for fleet vehicles, circuits and routes, overhead categories, and team access",
      "Responsive layout: a sidebar on desktop and a floating bottom navigation bar on mobile, with wide tables scrolling horizontally",
    ],
    scopeNotes: [
      "This is a private staff tool: the public URL shows only the sign-in screen.",
      "Screenshots were captured from the live dashboard with an authorised account. Guest, partner and account names, emails and phone numbers are blurred, and the account and password screens are not shown.",
      "The dashboard contains test and sample records, so figures visible in the screenshots are not business results.",
    ],
    technologies: ["React", "Vite", "Supabase", "React Router", "Tailwind CSS", "TanStack Table", "Recharts"],
    status: "in-development",
    thumbnail: {
      src: "/images/projects/tour-de-swat/dashboard-overview.webp",
      alt: "Tour De Swat dashboard overview with revenue, expense, profit and active-trip cards, a monthly revenue-vs-expenses chart and a recent-activity feed",
    },
    gallery: [
      shot("tour-de-swat", "trips-guests", "Trips & Guests CRM with booking summary cards, search and filters, and a bookings table with guest names blurred", "Trips & Guests — bookings table with search, filters and payment status."),
      shot("tour-de-swat", "trip-detail", "Trip detail drawer showing itinerary, booking type, duration, a financial summary and the payment ledger, with client contact details blurred", "Trip detail drawer — itinerary, financial summary and payment ledger."),
      shot("tour-de-swat", "quick-action", "Quick Action hub modal with Book Trip, Log Expense, Dispatch Vehicle and Partner Inflow tabs and the trip booking form", "Quick Action hub — book trips, log expenses, dispatch vehicles, record partner inflow."),
      shot("tour-de-swat", "expenses", "Expenses hub with direct, overhead and unpaid-payable cards and a direct expenses table by service type, provider and location", "Expenses hub — direct trip costs and indirect overhead."),
      shot("tour-de-swat", "investments", "Investment fund page with capital and liquidity cards and an active partnerships table with partner names blurred", "Investment fund — partnerships, sectors and payback status."),
      shot("tour-de-swat", "search-results", "Global search results listing matching trips by route and invoice number, with guest names blurred", "Global search across trips and expenses."),
      shot("tour-de-swat", "settings-routes", "System settings on the Circuits & Routes tab, listing configured tour circuits", "System settings — fleet, circuits & routes, overhead categories, team access."),
      { src: "/images/projects/tour-de-swat/mobile-dashboard.webp", alt: "Tour De Swat dashboard on a phone, with stacked summary cards and a floating bottom navigation bar", caption: "Mobile dashboard with bottom navigation.", width: 585, height: 1266 },
      { src: "/images/projects/tour-de-swat/mobile-trips.webp", alt: "Trips & Guests on a phone, with stacked filters and a horizontally scrolling bookings table, guest names blurred", caption: "Mobile filters and scrollable bookings table.", width: 585, height: 1266 },
    ],
    // The public URL is the staff sign-in page, so the link is labelled as such.
    liveUrl: "https://tour-de-swat.vercel.app/",
    liveLabel: "Sign-in page",
    visible: true,
    showcase: "main",
    order: 3,
  },
  {
    ...emptyCaseStudy,
    slug: "stori",
    title: "STORI",
    category: "Healthcare / Rehabilitation Website",
    shortDescription:
      "A professional website for a rehabilitation organization providing therapy services for children and individuals with developmental, physical, communication, and behavioral challenges.",
    features: [
      "Speech and language therapy",
      "Physical therapy and mobility support",
      "Occupational therapy and sensory development",
      "Behavioral and social-emotional support",
      "Service information and appointment navigation",
      "Family-oriented presentation and responsive layouts",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail: { src: "/images/projects/stori/hero.webp", alt: "STORI homepage hero: Supporting Growth, Communication & Independence" },
    gallery: [
      shot("stori", "hero", "STORI homepage hero with a therapist and child during a play-based session", "Homepage hero and service entry point."),
      shot("stori", "about", "STORI about section describing the organization's therapy approach", "About section: the organization and its approach."),
      shot("stori", "services", "Therapy services: communication and language, daily living and sensory, and more", "Therapy services presented for families."),
    ],
    liveUrl: "https://stori.pk/",
    devNotes: ["Technologies come from the live site (static pages loading Bootstrap 5); no local source is available to confirm further detail."],
    visible: true,
    showcase: "main",
    order: 4,
  },
  {
    ...emptyCaseStudy,
    slug: "world-comedia",
    title: "World CoMedia",
    category: "Professional Services / Law Firm Website",
    shortDescription:
      "A professional legal-services website presenting a law firm's services, attorneys, legal insights, and consultation pathways.",
    features: [
      "Corporate and business law",
      "Litigation and dispute resolution",
      "Real estate and employment law",
      "Estate planning and intellectual property",
      "Attorney profile presentation",
      "Legal insights and consultation calls to action",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Motion", "EmailJS"],
    thumbnail: { src: "/images/projects/world-comedia/hero.webp", alt: "World CoMedia homepage hero: Clear counsel. Committed representation." },
    gallery: [
      shot("world-comedia", "hero", "World CoMedia homepage hero with a consultation call to action", "Homepage hero and consultation actions."),
      shot("world-comedia", "firm", "About the firm section beside an image of attorneys reviewing documents", "Firm introduction."),
      shot("world-comedia", "practice-areas", "Practice areas: corporate and business, litigation, real estate, employment, estate planning, intellectual property", "Practice areas overview."),
    ],
    liveUrl: "https://worldcomedia.com/",
    visible: true,
    showcase: "main",
    order: 5,
  },

  // ───────────────────────────────────────────────────── Additional projects
  {
    ...emptyCaseStudy,
    slug: "printing-new-york",
    title: "Printing New York",
    category: "Printing Services Website",
    shortDescription:
      "A printing-services website presenting a broad product catalogue and business printing solutions, including business cards, brochures, flyers, posters, banners, promotional products, packaging, and related services.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail: { src: "/images/projects/printing-new-york/hero.webp", alt: "Printing New York homepage with product categories" },
    liveUrl: "https://printingnewyorkby.netlify.app/",
    visible: true,
    showcase: "additional",
    order: 1,
  },
  {
    ...emptyCaseStudy,
    slug: "school-b",
    title: "School B",
    category: "Educational Resource Website",
    label: "Academic project",
    shortDescription:
      "An educational resource website focused on creativity and early-childhood learning, presenting educational ideas, activities, and curriculum-related content.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail: { src: "/images/projects/school-b/hero.webp", alt: "School B homepage: Welcome to Creative Early Childhood Education" },
    liveUrl: "https://schoolb.netlify.app/",
    visible: true,
    showcase: "additional",
    order: 2,
  },

  // ─────────────────────────────── Previous candidates (hidden, kept for reference)
  // Removed from the showcase in the 2026-11-17 update. Set visible: true and a
  // showcase/order to restore one. Their earlier verified notes are kept.
  {
    ...emptyCaseStudy,
    slug: "tutorhub",
    title: "TutorHub",
    category: "SaaS / Full-Stack Web Application",
    shortDescription:
      "A tutoring platform that simplifies the relationship between students and tutors through discovery, booking, and session management.",
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
    scopeNotes: ["Payment processing was intentionally postponed and is not part of the current build."],
    technologies: [],
    visible: false,
    showcase: "main",
    order: 90,
  },
  {
    ...emptyCaseStudy,
    slug: "the-wild-oasis",
    title: "The Wild Oasis",
    category: "Hospitality / Booking Application",
    shortDescription: "A cabin booking application focused on the booking experience and user interface.",
    technologies: [],
    visible: false,
    showcase: "main",
    order: 91,
  },
  {
    ...emptyCaseStudy,
    slug: "nationwide-financial",
    title: "Nationwide Financial",
    category: "Business / Financial Consulting Website",
    shortDescription:
      "A financial consulting website with professional service presentation, clear navigation, and conversion-focused pages.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    visible: false,
    showcase: "main",
    order: 92,
  },
];
