# ARCHITECTURE.md — Farzad Khan Portfolio

This document defines the technical architecture, folder structure, component organization, data management, routing, rendering strategy, and integration rules for the portfolio.

It is the authoritative source of truth for architectural decisions.

All implementation must follow this document alongside:

- `PROJECT.md`
- `CONTENT.md`
- `DESIGN_SYSTEM.md`
- `CLAUDE.md`

If a technical decision needs to change, update this document rather than introducing inconsistent patterns.

---

# 1. Technology Stack

## Core Framework

- Next.js — App Router.
- React.
- JavaScript (ES6+).
- JSX.
- Tailwind CSS.

## Animation

- GSAP.
- GSAP ScrollTrigger.
- Motion (formerly Framer Motion).
- CSS transitions for simple interactions.

## Icons

- Lucide React.

## Fonts

- Inter using an optimized font-loading strategy.

## Deployment

- Vercel preferred.
- Existing deployment may remain on Netlify if the project configuration supports it.

## Development Tools

- ESLint (flat config, `eslint-config-next/core-web-vitals`).
- npm.
- Prettier is not used (owner decision).

## Installed Versions (Phase 1)

| Package                          | Version |
| -------------------------------- | ------- |
| next / eslint-config-next        | 16.4.2  |
| react / react-dom                | 19.2.8  |
| tailwindcss / @tailwindcss/postcss | 4.x   |
| eslint                           | 9.x     |
| gsap                             | 3.15.1  |
| @gsap/react                      | 2.1.2   |
| motion                           | 14.14.0 |
| lucide-react                     | 1.73.0  |

Node.js `>=20.9.0` is required by Next.js 16 (developed on Node 24).

## Important Rules

1. JavaScript only. Do not introduce TypeScript.
2. Use `.js` for JavaScript and `.jsx` for React components.
3. Use current stable, mutually compatible package versions.
4. Avoid unnecessary dependencies.
5. Do not install libraries for functionality already supported by the existing stack.
6. Verify official documentation before using unfamiliar or version-sensitive APIs.
7. Keep the application lightweight and production-ready.

---

# 2. Application Architecture

Use a feature-oriented but simple architecture.

The application should separate:

- Routes and pages.
- Reusable UI components.
- Section components.
- Data and content.
- Hooks.
- Utilities.
- Animation logic.
- Styling and design tokens.
- Public assets.

Do not put the entire application inside a few oversized components.

Do not create unnecessary abstraction layers.

The goal is a clean architecture that is understandable, maintainable, and easy to extend.

---

# 3. Recommended Folder Structure

Use the following structure as the starting architecture.

```text
farzad-portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── thumbnails/
│   │   └── og/
│   │
│   ├── icons/
│   │
│   ├── documents/
│   │   ├── farzad-khan-resume.pdf
│   │   └── farzad-khan-experience-certificate.pdf
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   ├── not-found.js
│   │   ├── sitemap.js
│   │   ├── robots.js
│   │   │
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   │
│   │   └── api/
│   │       └── contact/
│   │           └── route.js
│   │
│   ├── components/
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── SectionHeading.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── WorkflowSection.jsx
│   │   │   └── ContactSection.jsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectGallery.jsx
│   │   │   ├── ProjectOverview.jsx
│   │   │   └── ProjectNavigation.jsx
│   │   │
│   │   └── providers/
│   │       └── ThemeProvider.jsx
│   │
│   ├── data/
│   │   ├── personal.js
│   │   ├── navigation.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── testimonials.js
│   │   ├── social-links.js
│   │   └── documents.js
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useReducedMotion.js
│   │
│   ├── lib/
│   │   ├── animations/
│   │   │   ├── gsap.js
│   │   │   ├── motion.js
│   │   │   └── animation-config.js
│   │   │
│   │   ├── seo/
│   │   │   └── metadata.js
│   │   │
│   │   └── utils/
│   │       ├── cn.js
│   │       └── format.js
│   │
│   └── styles/
│       └── design-tokens.css
│
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
│
├── PROJECT.md
├── CONTENT.md
├── DESIGN_SYSTEM.md
├── ARCHITECTURE.md
├── TASKS.md
└── CLAUDE.md
```

This is the proposed structure, not a requirement to create every file immediately.

Only create files that have an actual purpose in the implementation.

If the existing Next.js setup uses a different valid configuration, adapt it without breaking the project.

---

# 4. Routing Architecture

Use Next.js App Router.

## Homepage

Route:

`/`

Contains the main portfolio sections.

Suggested composition:

- Navbar.
- Hero.
- About.
- Bento overview.
- Skills.
- Selected projects.
- Experience.
- Workflow.
- Testimonials (only when approved testimonials exist).
- Contact.
- Footer.

This matches the section order in `PROJECT.md` §6.

The homepage should remain a composition of smaller section components.

## Project Details

Route:

`/projects/[slug]`

Each project should have its own detailed case-study page.

Examples:

- `/projects/tutorhub`
- `/projects/the-wild-oasis`
- `/projects/review-top-lawyers`

Use a dynamic route powered by centralized project data.

### Implementation (Phase 4)

- `src/app/projects/[slug]/page.js` — Server Component. `generateStaticParams` pre-renders every project with `hasCaseStudy: true`; `dynamicParams = false` returns 404 for any other slug; `generateMetadata` gives each page a unique title and description. `params` is a Promise in Next.js 16 (`const { slug } = await params`).
- Data access goes through `src/lib/projects.js` (validation, ordering, previous/next, related projects, missing-content list). Components never filter `src/data/projects.js` directly.
- Page structure: `CaseStudyHero` → numbered `CaseStudySection` chapters → `ProjectNavigation` (previous/next) → related `ProjectCard`s.
- Chapters render only when their data exists (overview, problem/solution, role, features, technologies, decisions, gallery, challenges/learnings, scope). Numbering is computed from the chapters that render, so there are no gaps.
- Missing content is listed in a `DevPlaceholder` (development only) together with the project's `devNotes`.
- Screenshots use `next/image` and require `width`/`height` (no layout shift). Without a screenshot, `ProjectCover` renders a decorative numbered cover — never a fake screenshot.

### Navigation and scrolling

- Section anchors (`#contact`, `/#projects`) render as native `<a>` via `SmartLink`, so the browser handles fragment scrolling, including re-clicking the current hash. Route links use Next.js `<Link>`.
- `<html data-scroll-behavior="smooth">` tells Next.js 16 to disable CSS smooth scrolling during route changes, so new pages open at the top instantly while in-page anchors still scroll smoothly.
- CSS smooth scrolling is enabled only after the page has loaded (`html[data-smooth-scroll]`, set by `NavbarShell` two frames after `load`). Loading straight into `/#section` (deep links, the case study's "All projects" link) must jump instantly: a smooth initial scroll was interrupted while the page settled and landed in the wrong place (found in Phase 7).

## Not Found

Implement a custom `not-found.js` page.

It should:

- Match the design system.
- Clearly explain that the requested page does not exist.
- Provide a link back to the homepage.
- Remain responsive and accessible.

## Future Routes

Keep the architecture open to future additions such as:

- `/about`
- `/projects`
- `/blog`

Do not build these routes unless they provide actual value.

---

# 5. Server Components & Client Components

This is an important architectural rule.

Use React Server Components by default.

## Server Components

Keep these as Server Components wherever possible:

- Homepage.
- Project detail pages.
- Static section components.
- Project cards.
- Experience content.
- Skills content.
- Footer.
- SEO metadata.

Server Components should render static content and receive data through props.

## Client Components

Use `"use client"` only when browser-side interaction is required.

Examples:

- Theme provider.
- Theme toggle.
- Mobile navigation.
- Interactive menus.
- Motion-based components.
- GSAP animation components.
- Interactive contact form.

## Rules

1. Do not add `"use client"` to the entire application.
2. Do not make a parent component client-side just because one child needs interactivity.
3. Keep client boundaries as small as practical.
4. Avoid passing non-serializable values across Server/Client Component boundaries.
5. Do not access browser APIs directly inside Server Components.
6. Keep static content server-rendered whenever possible.

---

# 6. Data Management Architecture

Portfolio content must be separated from UI components.

Use centralized JavaScript data files inside:

`src/data/`

This makes future updates easy without editing multiple components.

## personal.js

Contains:

- Full name.
- Professional title.
- Short introduction.
- Location.
- Availability statement, if accurate.
- Email and contact links.
- Profile image path.
- SEO description.

## projects.js

Contains project information.

Recommended structure:

```js
export const projects = [
  {
    slug: "tutorhub",
    title: "TutorHub",
    shortDescription: "A tutoring platform connecting students and tutors.",
    description: "A detailed overview of the project.",
    category: "SaaS Platform",
    role: "Frontend / Full-Stack Development",
    technologies: ["Next.js", "React", "JavaScript", "Supabase"],
    thumbnail: "/images/projects/tutorhub/thumbnail.webp",
    images: [
      "/images/projects/tutorhub/dashboard.webp",
      "/images/projects/tutorhub/booking.webp",
    ],
    liveUrl: "",
    repositoryUrl: "",
    featured: true,
    status: "completed",
    overview: "",
    problem: "",
    solution: "",
    keyFeatures: [],
    challenges: [],
    outcomes: [],
  },
];
```

This is a schema example.

Only include fields supported by verified project information.

Do not invent project outcomes, performance metrics, client results, or features.

## skills.js

Organize skills into categories.

Possible categories:

- Core Web Technologies.
- Frontend Development.
- Frameworks and Libraries.
- Backend Development.
- Animation and Interaction.
- Tools and Workflow.

Represent proficiency honestly.

Do not create arbitrary percentage-based skill bars.

## experience.js

Store professional experience separately.

Suggested fields:

- Company.
- Position.
- Start date.
- End date.
- Description.
- Responsibilities.
- Technologies.

All details must be verified before publication.

## testimonials.js

Store only genuine testimonials with permission to publish.

If there are no approved testimonials, do not display this section.

## documents.js

Store downloadable document information.

Suggested fields:

- Label.
- Description.
- File path.
- File type.

Never link a placeholder document as an actual CV or certificate.

## social-links.js

Centralize social media and professional profile URLs.

## Data Management Rules

1. Keep content out of large JSX components.
2. Use named exports.
3. Use consistent field names.
4. Avoid duplicate project information.
5. Validate required fields before rendering.
6. Do not store secrets or private credentials in public data files.
7. Make content updates possible without modifying unrelated components.

---

# 7. Component Architecture

Components should have clear responsibilities.

## UI Components

Location:

`src/components/ui/`

These are small reusable building blocks.

Examples:

- Button.
- Badge.
- Container.
- SectionHeading.
- ThemeToggle.

They should not contain unrelated business logic.

## Layout Components

Location:

`src/components/layout/`

Responsible for application-wide structure.

Examples:

- Navbar.
- MobileMenu.
- Footer.

## Section Components

Location:

`src/components/sections/`

Each homepage section should have its own component.

Each section should:

- Have one clear responsibility.
- Use centralized data.
- Follow the design system.
- Remain independently understandable.
- Avoid unnecessary client-side rendering.

## Project Components

Location:

`src/components/projects/`

Responsible for project presentation and case-study layouts.

Reuse components where the structure is genuinely shared.

Do not force every project to have identical content if its story requires a different presentation.

---

# 8. Animation Architecture

Animations must remain organized and isolated from application content.

## GSAP

Use GSAP for complex animation sequences.

Recommended use cases:

- Hero entrance.
- Text reveals.
- Scroll-triggered reveals.
- Project image transitions.
- Advanced visual storytelling.

Create reusable animation utilities only when they simplify repeated behavior.

## Motion

Use Motion for React-oriented interactions.

Recommended use cases:

- Interactive cards.
- Navigation transitions.
- Layout changes.
- Small component animations.
- Presence transitions.

## CSS

Use CSS for simple hover and focus effects.

## Animation Lifecycle Rules

1. Initialize browser-dependent animations only on the client.
2. Use the appropriate React integration and cleanup patterns.
3. Kill or revert GSAP animations and ScrollTriggers when components unmount.
4. Avoid duplicate ScrollTrigger instances.
5. Do not animate hidden or unmounted elements unnecessarily.
6. Prevent layout shifts.
7. Respect reduced-motion preferences.
8. Avoid unnecessary animation dependencies.
9. Keep animations performant on mobile devices.

## Implementation (Phase 5)

**Who animates what**

| Layer | Tool | Where |
| ----- | ---- | ----- |
| Above-the-fold entrances (hero, case-study hero) | CSS keyframes (`.enter`, `.enter-cover`, `.word-mask` in `globals.css`) | Runs at first paint — never waits for JavaScript |
| Scroll reveals, parallax | GSAP + ScrollTrigger via `components/animations/ScrollReveals.jsx` | One client island in the root layout |
| Stateful UI (mobile menu, theme toggle, navbar scroll state, active section) | Motion (`motion/react`, `LazyMotion` + `domAnimation`) | Provider in `layout/NavbarShell.jsx` |
| Hover / focus / press | CSS transitions | Components |

**Scroll reveals**

- Mark any server-rendered element with `data-reveal` (fade + rise) or `data-reveal="cover"` (scale-in). Decorative layers use `data-parallax`. No client component is needed in the section itself.
- Never nest reveals: a list reveals either as a block or item by item (`CaseStudySection staggered`).
- `REVEAL_INIT_SCRIPT` (`lib/animations/reveal.js`) sets `<html data-reveal-state="pending">` before paint only when JS runs and motion is allowed; CSS hides `[data-reveal]` only in that state. A 3 s timeout restores visibility if GSAP never takes over.
- `ScrollReveals` re-runs per route (`useGSAP` with `dependencies: [pathname]`, `revertOnUpdate: true`), so each page's tweens and triggers are killed on navigation. `gsap.matchMedia` skips everything for reduced-motion visitors.
- Elements are hidden with `opacity` only (never `visibility`), so they stay keyboard-focusable; a `focusin` listener reveals them immediately.
- Elements GSAP animates must not have a CSS `transition` on `transform`. Tailwind v4 hover lifts use the separate `translate`/`scale` properties, so transition those instead.
- Timing constants live in `lib/animations/animation-config.js`; plugins are registered once in `lib/animations/gsap.js`.

**Navigation**

- `NavbarShell` sets `data-scrolled` from Motion's `useScroll`; the bar is transparent at the top and a glass surface once scrolled (colour/shadow only, no size change → no layout shift).
- `PrimaryNav` marks the section whose top has crossed 40% of the viewport (`aria-current="location"`); case-study pages mark Projects (`aria-current="page"`).

## Animation Separation

Do not mix complex animation timelines directly into large content components.

Prefer small, focused client components or reusable animation hooks where appropriate.

Avoid creating abstractions for one-off animations unless they improve readability.

---

# 9. Theme Architecture

The website must support light and dark themes.

## Requirements

- Light theme by default.
- Dark theme toggle.
- Persistent visitor preference.
- System preference support where appropriate.
- No visible theme flash during initial rendering.
- Consistent theme across routes.

## Implementation

Use a centralized theme mechanism.

Implemented (Phase 2): the `data-theme` attribute on `<html>` is the single source of truth. An inline script in `<head>` (`src/lib/theme.js`) applies the stored preference before first paint; `useTheme` (`src/hooks/useTheme.js`) reads it with `useSyncExternalStore`, so no React context provider is required. Tailwind's `dark:` variant targets `[data-theme="dark"]`.

Use CSS variables for colors and other theme-dependent values.

Do not hardcode theme colors across components.

Use a reliable initialization strategy to avoid hydration mismatches and flashing.

Theme state should not be duplicated across multiple unrelated components.

Keep the theme implementation compatible with Server Components.

---

# 10. Styling Architecture

## Tailwind CSS

Use Tailwind CSS for component layout and styling.

## Global CSS

`src/app/globals.css`

Responsible for:

- CSS resets.
- Global base styles.
- Typography defaults.
- Global accessibility styles.
- Theme initialization styles.
- Global utility styles.

## Tailwind CSS v4

The project uses Tailwind CSS v4, which has no `tailwind.config.js`.

- `globals.css` imports Tailwind and `design-tokens.css`.
- Raw values live as CSS variables in `design-tokens.css` (`:root` and dark-theme overrides).
- `globals.css` maps them to Tailwind utilities with `@theme inline` (e.g. `--color-accent: var(--accent)` → `bg-accent`), so components never hardcode hex values.

## Design Tokens

`src/styles/design-tokens.css`

Responsible for:

- Color variables.
- Typography tokens.
- Spacing tokens.
- Radius tokens.
- Shadow tokens.
- Theme-specific variables.

Refer to `DESIGN_SYSTEM.md` for exact visual specifications.

## Styling Rules

1. Avoid large amounts of arbitrary inline styling.
2. Avoid duplicating class combinations.
3. Keep class names readable.
4. Use reusable components for repeated UI patterns.
5. Avoid unnecessary custom CSS.
6. Do not create a separate styling system that conflicts with Tailwind.
7. Keep responsive behavior explicit and predictable.

---

# 11. Contact Form Architecture

The contact form is optional until a reliable delivery method is configured.

If implemented, use a clear architecture.

Frontend:

- Client-side form interaction.
- Basic validation.
- Loading state.
- Success and error feedback.
- Accessible labels and error messages.

Backend:

- Next.js Route Handler.
- Server-side validation.
- Secure email delivery provider if configured.
- Rate limiting.
- Spam protection.
- Environment-based configuration.

Route:

`/api/contact`

Security requirements:

- Never expose email provider API keys.
- Never trust client-side validation alone.
- Validate and sanitize input on the server.
- Apply reasonable rate limits.
- Avoid logging sensitive submitted information.
- Do not claim that the form works until real delivery is tested.

If no backend service is configured, use a direct email link instead of a fake working form.

---

# 12. SEO Architecture

Use Next.js metadata capabilities.

## Metadata

Create reusable metadata helpers where appropriate.

Homepage metadata:

- Title.
- Description.
- Canonical URL.
- Open Graph.
- Twitter/X card metadata.

Project metadata:

- Unique title.
- Unique description.
- Appropriate Open Graph image.
- Canonical URL.

## Additional SEO

Implement:

- `sitemap.js`.
- `robots.js`.
- Semantic HTML.
- Descriptive headings.
- Image alt text.
- Structured data where appropriate.
- Correct canonical URLs.

Do not add misleading structured data or unsupported claims.

## Implementation (Phase 6)

**Production domain — one place:** `src/lib/site.js` reads the `SITE_URL` environment variable (see `.env.example`).

- Development falls back to `http://localhost:3000`.
- Production without a valid domain (or with a localhost value) sets `SITE_URL` to `null`: canonical URLs, `og:url`, `og:image`, Twitter images, the sitemap's entries, the robots sitemap line, and JSON-LD `@id`/`url` are all omitted, and the build prints a warning. Nothing publishes a wrong domain.
- `metadataBase` is set in the root layout only when the domain exists (Next.js 16 fails the build on relative metadata URLs without it).

**Metadata:** every page uses `buildMetadata()` (`src/lib/seo/metadata.js`) for title, description, canonical, Open Graph and Twitter. The root layout adds the title template (`%s — Farzad Khan`), robots, application name, and per-scheme `theme-color`.

**Social images:** route handlers `/og` and `/og/projects/[slug]` render 1200×630 PNGs with `next/og` at build time (statically generated). They are route handlers — not the `opengraph-image` file convention — so `og:image` is only referenced when a domain is configured.

**Structured data:** `src/lib/seo/structured-data.js` builds a single `@graph` per page: `Person` + `WebSite` on the homepage, `CreativeWork` on each case study. Only verified data from `src/data/` is used (name, title, positioning, location, established skills, project name/description/category/technologies). No employment, credentials, ratings, reviews, or results. Rendered by `components/seo/JsonLd.jsx` with `<` escaped.

**Search engine files:** `app/robots.js`, `app/sitemap.js` (homepage + every case study), `app/manifest.js`, `app/icon.svg`, `app/apple-icon.js` (180×180 PNG), `app/favicon.ico`.

---

# 13. Performance Architecture

Performance is a core requirement.

## Rendering

- Prefer Server Components.
- Minimize client-side JavaScript.
- Avoid unnecessary providers.
- Keep third-party scripts minimal.

## Images

- Use Next.js Image where appropriate.
- Optimize image dimensions and formats.
- Set dimensions or aspect ratios to avoid layout shifts.
- Lazy-load non-critical images.
- Prioritize the hero image only when necessary.

## Fonts

- Use optimized font loading.
- Avoid unnecessary font weights and families.

## Animation

- Animate transform and opacity where possible.
- Avoid expensive layout animations.
- Reduce animation complexity on mobile.
- Avoid excessive scroll listeners.

## Performance Targets

Aim for strong Core Web Vitals and Lighthouse results.

Do not sacrifice accessibility, visual quality, or functionality merely to achieve a numerical score.

---

# 14. Accessibility Architecture

Accessibility must be considered throughout development.

Requirements:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Accessible navigation menus.
- Appropriate color contrast.
- Descriptive image alt text.
- Accessible button labels.
- Form labels and error messages.
- Reduced-motion support.
- Logical heading hierarchy.

Do not use clickable `div` elements when a semantic button or link is appropriate.

---

# 15. Security & Reliability

Even a portfolio should follow good security practices.

Requirements:

- No secrets in client-side code.
- No API keys committed to Git.
- Use environment variables for private configuration.
- Validate server-side inputs.
- Keep dependencies updated responsibly.
- Avoid unsafe HTML rendering.
- Use safe external link attributes when needed.
- Configure security headers where appropriate.
- Do not expose private personal information unnecessarily.
- Keep error handling predictable.

Create `.env.example` only for environment variables actually required by the application.

Never put real credentials inside it.

## Implementation (Phase 6)

- **Headers** (`next.config.mjs`, all routes): `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Permissions-Policy` (camera, microphone, geolocation, browsing-topics disabled), `Strict-Transport-Security` (effective over HTTPS only). `X-Powered-By` is removed.
- **Content Security Policy** (production builds only — `next dev` needs eval and websockets): `default-src 'self'`; scripts and styles allow `'unsafe-inline'` because pages are statically pre-rendered (Next's inline bootstrap, the theme/reveal init script, and GSAP/Motion inline styles); nonces would force every page to render dynamically. No third-party origins. `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`. If a third-party service is ever added, extend the matching directive deliberately.
- **Inline HTML:** only two `dangerouslySetInnerHTML` uses, both static trusted strings — the init script in the root layout and JSON-LD (serialised with `<` escaped).
- **Errors:** `app/not-found.js` (404) and `app/error.js` (generic runtime error with retry; never shows error details).
- **Environment:** `SITE_URL` is the only variable; it is not a secret and is read on the server only. `.env*` files are git-ignored except `.env.example`.
- **Debugging:** the GSAP debug handle (`window.__portfolioDebug`) exists in development only and is stripped from production bundles; dev placeholders render nothing in production.

## Performance notes (Phase 6)

- Theme switching sets one attribute and lets the browser restyle once at the next frame; `data-theme-switching` freezes colour transitions for two frames. Do not read layout or computed style in the toggle path, and do not use Motion `AnimatePresence mode="popLayout"` for small icon swaps — it measures layout on every change.
- `content-visibility: auto` on below-the-fold sections halved theme-switch cost in testing but is not applied: it changes the size estimates ScrollTrigger and deep-link anchors rely on. Evaluate separately with full reveal/anchor testing.

---

# 16. Naming Conventions

Use consistent naming.

## Components

PascalCase:

- `HeroSection.jsx`
- `ProjectCard.jsx`
- `ThemeToggle.jsx`

## Hooks

camelCase with `use` prefix:

- `useTheme.js`
- `useReducedMotion.js`

## Utilities

camelCase:

- `formatDate.js`
- `cn.js`

## Data Files

Use lowercase kebab-case or the established project convention consistently.

Examples:

- `projects.js`
- `social-links.js`
- `personal.js`

## Variables and Functions

Use camelCase.

## Constants

Use UPPER_SNAKE_CASE for true application constants where appropriate.

---

# 17. Import & Code Organization

Use consistent import ordering:

1. React and Next.js imports.
2. External packages.
3. Internal components.
4. Hooks and utilities.
5. Data.
6. Styles or other resources.

Use the configured `@/` alias if supported by the project.

Avoid unnecessarily deep relative imports.

Keep modules focused and avoid circular dependencies.

---

# 18. Error Handling & Quality

The application must remain stable.

Requirements:

- No React hydration errors.
- No console errors.
- No missing keys in mapped elements.
- No broken image references.
- No broken navigation links.
- No unhandled runtime errors.
- No unused imports.
- No unnecessary dependency warnings.
- No failed production build.

Handle missing project slugs gracefully.

Do not hide genuine application errors simply to make the console appear clean.

---

# 19. Future Scalability

The architecture should allow future growth without requiring a complete rewrite.

Possible future additions:

- Dedicated project listing page.
- Blog or technical writing.
- Detailed project case studies.
- New downloadable resources.
- Additional animation experiences.
- More professional experience entries.
- Testimonials.
- Privacy-conscious analytics.

Do not implement these features prematurely.

Keep the current application simple and extensible.

---

# 20. Architecture Decision Rules

When making implementation decisions:

1. Prefer the simplest solution that satisfies the requirement.
2. Prefer native Next.js and React capabilities.
3. Prefer Server Components unless interactivity requires Client Components.
4. Keep data separate from presentation.
5. Reuse components when reuse improves consistency.
6. Avoid premature abstraction.
7. Avoid unnecessary dependencies.
8. Preserve performance.
9. Follow the design system.
10. Update this document when significant architectural decisions change.

---

# 21. Definition of Done

The architecture is considered correctly implemented when:

- [ ] Folder structure is clear and organized.
- [ ] Routes work correctly.
- [ ] Homepage sections are separated into components.
- [ ] Project pages use centralized data.
- [ ] JavaScript is used throughout.
- [ ] Server and Client Components are used appropriately.
- [ ] Theme state is centralized.
- [ ] Animation code is organized and cleaned up correctly.
- [ ] Styling follows design tokens.
- [ ] Contact functionality is real if presented as functional.
- [ ] SEO metadata is implemented.
- [ ] Accessibility requirements are addressed.
- [ ] Security requirements are addressed.
- [ ] No unnecessary dependencies are introduced.
- [ ] Production build succeeds.

**Final principle:** Build a portfolio that is visually ambitious but technically simple, fast, secure, and maintainable.
