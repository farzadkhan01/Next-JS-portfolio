# TASKS.md — Farzad Khan Portfolio

This document defines the implementation roadmap for the portfolio.

It establishes the development phases, task priorities, deliverables, testing requirements, and acceptance criteria.

Claude must follow this roadmap sequentially.

Do not skip phases, silently combine major phases, or begin future-phase implementation before the current phase is reviewed and approved.

---

# 1. Development Rules

Before starting implementation:

1. Read `CLAUDE.md`.
2. Read `PROJECT.md`.
3. Read `CONTENT.md`.
4. Read `DESIGN_SYSTEM.md`.
5. Read `ARCHITECTURE.md`.
6. Read this `TASKS.md`.
7. Inspect the existing repository and understand its current configuration.
8. Identify existing assets, dependencies, routes, and reusable code.
9. Do not overwrite working configurations without a technical reason.

## General Rules

- Use JavaScript and JSX only.
- Do not introduce TypeScript.
- Follow the established design system.
- Use the centralized content files.
- Prioritize accessibility and performance.
- Avoid unnecessary dependencies.
- Do not invent personal or professional information.
- Do not use fake testimonials, statistics, or client logos.
- Do not publish placeholder documents as genuine credentials.
- Do not leave broken links or unfinished interactive elements.
- Keep the code understandable and maintainable.

## Phase Execution

For every phase:

1. Review the phase objectives.
2. Inspect the relevant existing code.
3. Implement the required tasks.
4. Test the implementation.
5. Fix discovered issues.
6. Review the acceptance criteria.
7. Update this document's progress status.
8. Report completed work, remaining issues, and blockers.

Do not proceed automatically to the next phase.

Wait for explicit approval before starting another phase.

---

# 2. Project Progress Tracker

Update these statuses as development progresses.

Available statuses:

- `NOT STARTED`
- `IN PROGRESS`
- `BLOCKED`
- `COMPLETED`

| Phase   | Description                       | Status      |
| ------- | --------------------------------- | ----------- |
| Phase 0 | Repository Audit & Preparation    | COMPLETED   |
| Phase 1 | Foundation & Architecture         | COMPLETED   |
| Phase 2 | Design System & Shared Components | COMPLETED   |
| Phase 3 | Homepage Development              | IN PROGRESS |
| Phase 4 | Project Case Studies              | COMPLETED   |
| Phase 5 | Animation & Interaction Polish    | COMPLETED   |
| Phase 6 | SEO, Accessibility & Performance  | COMPLETED   |
| Phase 7 | Final Testing & Deployment        | IN PROGRESS |

---

# PHASE 0 — Repository Audit & Preparation

**Priority:** Critical

## Objective

Understand the existing project before changing anything.

## Tasks

- [x] Inspect the complete repository structure.
- [x] Identify the current Next.js version.
- [x] Inspect the package manager and available scripts.
- [x] Inspect existing dependencies.
- [x] Identify the existing routing structure.
- [x] Inspect current styling and Tailwind configuration.
- [x] Identify existing assets and reusable components.
- [x] Inspect the existing portfolio for accurate content references.
- [x] Identify existing SEO configuration.
- [x] Identify existing deployment configuration.
- [x] Check for existing errors or warnings.
- [x] Identify outdated or unnecessary dependencies.
- [x] Compare the existing project against `ARCHITECTURE.md`.
- [x] Identify any conflicts between documentation and existing configuration.

## Important

Do not immediately rebuild the application.

First understand what already works and what should be preserved.

Do not assume that every proposed folder or dependency needs to be created.

## Deliverables

- Repository audit summary.
- Existing architecture overview.
- List of required changes.
- List of potential risks or conflicts.

## Acceptance Criteria

- [x] Existing project structure is understood.
- [x] Current configuration is documented.
- [x] Existing functionality is identified.
- [x] No unnecessary files or dependencies have been modified.
- [x] A clear implementation approach is established.

---

# PHASE 1 — Foundation & Architecture

**Priority:** Critical

## Objective

Establish a clean, scalable, and production-ready application foundation.

## Tasks

### Project Configuration

- [x] Configure the existing Next.js App Router project.
- [x] Verify JavaScript and JSX configuration.
- [x] Configure the `@/` import alias if appropriate.
- [x] Verify Tailwind CSS integration.
- [x] Configure ESLint.
- [x] Configure Prettier if required. _(Not required — owner decision, 2026-11-15.)_
- [x] Verify all package scripts.
- [x] Remove genuinely unnecessary dependencies.
- [x] Verify the development server works.

### Folder Structure

- [x] Establish the application folder structure.
- [x] Create the required component directories.
- [x] Create centralized data directories.
- [x] Create animation utility directories where needed.
- [x] Create styling and design-token locations.
- [x] Keep the structure simple and understandable.

### Application Foundation

- [x] Implement the root layout.
- [x] Configure global styles.
- [x] Configure optimized font loading.
- [x] Establish semantic HTML defaults.
- [x] Configure basic metadata.
- [x] Create the custom not-found page.
- [x] Establish reusable container and layout utilities.

### Rendering Strategy

- [x] Use Server Components by default.
- [x] Establish small Client Component boundaries. _(No Client Components exist yet; the first, ThemeProvider/ThemeToggle, arrives in Phase 2.)_
- [x] Avoid unnecessary client-side providers.
- [x] Verify the application renders without hydration errors.

## Acceptance Criteria

- [x] Development server starts successfully.
- [x] Production build succeeds.
- [x] Folder structure follows `ARCHITECTURE.md`.
- [x] JavaScript is used throughout.
- [x] No unnecessary dependencies are installed.
- [x] No critical configuration errors remain.
- [x] Application foundation is ready for UI development.

## Phase 0–1 Decisions (approved 2026-11-15)

- Project scaffolded manually (no `create-next-app`) to protect existing docs.
- Local Git repository initialized; no remote. Project stays local-only.
- Theme: light by default; system preference is not auto-applied. Custom lightweight provider with an inline no-flash script (no `next-themes`).
- Prettier: not used.
- Known issue: 7 moderate `npm audit` advisories in dev-only lint tooling (minimatch via typescript-eslint, pulled in by `eslint-config-next` 16.4.2). Not shipped to the browser; `npm audit fix` cannot resolve without a breaking change. Re-check when `eslint-config-next` updates.

---

# PHASE 2 — Design System & Shared Components

**Priority:** Critical

## Objective

Implement the visual foundation before building the complete portfolio.

Follow `DESIGN_SYSTEM.md` precisely.

## Tasks

### Design Tokens

- [x] Implement light-theme color variables.
- [x] Implement dark-theme color variables.
- [x] Implement typography tokens.
- [x] Implement spacing tokens.
- [x] Implement border-radius tokens.
- [x] Implement shadow and elevation tokens.
- [x] Configure responsive layout utilities.

### Theme System

- [x] Implement centralized theme management.
- [x] Set light theme as the default.
- [x] Implement dark/light toggle.
- [x] Persist visitor preference.
- [x] Support system preference where appropriate.
- [x] Prevent visible theme flashing.
- [x] Verify theme consistency across components.

### Shared UI Components

- [x] Button.
- [x] Badge.
- [x] Container.
- [x] Section heading.
- [x] Theme toggle.
- [x] Reusable card foundation.
- [x] Reusable section wrapper.

### Navigation Components

- [x] Desktop navigation.
- [x] Mobile navigation.
- [x] Mobile menu interaction.
- [x] Theme toggle integration.
- [x] Contact CTA.
- [x] Accessible navigation states.

### Component Quality

- [x] Verify component consistency.
- [x] Verify hover and focus states.
- [x] Verify keyboard interactions.
- [x] Verify light and dark themes.
- [x] Verify mobile responsiveness.

## Acceptance Criteria

- [x] Design tokens are centralized.
- [x] Components follow the visual identity.
- [x] Theme toggle works correctly.
- [x] Navigation works on mobile and desktop.
- [x] Components are reusable without unnecessary abstraction.
- [x] No inconsistent styling patterns are introduced.

## Phase 2 Notes (2026-11-15)

- Light `--muted` uses `#6B6B6B` instead of the documented `#737373` (4.42:1 on background — fails WCAG AA). Approved by owner 2026-11-15; DESIGN_SYSTEM.md updated.
- Dark-theme primary buttons use dark text on `#60A5FA` (white was 2.54:1).
- No ThemeProvider context: `data-theme` on `<html>` is the single source of truth, read via `useTheme` (`useSyncExternalStore`). Fewer client components, same behaviour.
- `src/app/page.js` is a development-only component preview, replaced in Phase 3.
- Navigation anchors (`/#about`, etc.) have no targets until Phase 3 sections exist.
- Known dev-only console error: editing `layout.js` while `next dev` runs triggers React's "Encountered a script tag" warning via Fast Refresh. Not present on fresh loads, client navigation, or in production.
- Navbar scroll behaviour and active-section states are deferred to Phase 3/5.

---

# PHASE 3 — Homepage Development

**Priority:** Critical

## Objective

Build the complete portfolio homepage with a polished, professional, conversion-focused experience.

Follow `PROJECT.md`, `CONTENT.md`, and `DESIGN_SYSTEM.md`.

## 3.1 Navbar

- [x] Implement the final navigation layout.
- [x] Add personal branding or wordmark.
- [x] Implement desktop navigation.
- [x] Implement responsive mobile navigation.
- [x] Add theme toggle.
- [x] Add primary contact CTA.
- [x] Add appropriate scroll behavior. _(Phase 5: glass on scroll + active-section indicator)_
- [x] Verify all navigation links.

## 3.2 Hero Section

- [x] Implement the hero composition.
- [x] Add the approved professional headline.
- [x] Add supporting introduction.
- [x] Add primary CTA.
- [x] Add secondary CTA.
- [x] Add appropriate visual elements.
- [x] Establish strong typography hierarchy.
- [x] Implement subtle entrance animation. _(Phase 5)_
- [x] Ensure the hero works on small mobile screens.

The hero must communicate professional identity immediately.

Avoid excessive text and unnecessary decorative elements.

## 3.3 About Section

- [x] Implement the About section.
- [x] Introduce personal and professional background.
- [x] Present development approach.
- [ ] Highlight relevant experience. _(Blocked: experience not yet verified)_
- [x] Use Bento Grid composition where appropriate.
- [x] Keep content concise and authentic.

## 3.4 Skills Section

- [x] Implement skills categories.
- [x] Present core technologies clearly.
- [x] Distinguish current strengths from technologies being learned.
- [x] Use appropriate icons.
- [x] Avoid fake proficiency percentages.
- [x] Keep the layout visually balanced.

## 3.5 Selected Projects Section

- [x] Implement featured project presentation.
- [x] Use centralized project data.
- [x] Create reusable project cards.
- [ ] Add project thumbnails. _(Blocked: no verified screenshots; typographic covers used)_
- [x] Display relevant technologies.
- [ ] Add live demo links where available. _(None verified yet; ProjectLinks renders them when added)_
- [ ] Add repository links only when public and approved. _(None approved yet; ProjectLinks renders them when added)_
- [x] Link to detailed case studies. _(Done in Phase 4)_
- [x] Include appropriate hover interactions.

Do not invent project screenshots or results.

## 3.6 Experience Section

- [x] Implement professional experience timeline or layout.
- [ ] Use verified information from `experience.js`. _(Blocked: no verified entries; section hidden in production)_
- [ ] Display accurate company names and dates. _(Blocked: awaiting owner verification)_
- [ ] Present responsibilities clearly. _(Blocked: awaiting owner verification)_
- [x] Avoid exaggerated achievements.

## 3.7 Workflow Section

- [x] Explain the development workflow.
- [x] Show the approach to understanding requirements.
- [x] Present planning, development, refinement, and delivery.
- [x] Use a clean visual composition.

## 3.8 Contact Section

- [x] Implement a strong contact section.
- [ ] Present clear contact options. _(Blocked: no verified contact method)_
- [ ] Add approved email and professional links. _(Blocked: email and profile URLs unverified)_
- [ ] Add appropriate CTA. _(Blocked: Start a Conversation needs a verified email)_
- [x] Implement a contact form only if its backend is configured and tested. _(No form: no backend configured. A direct email link is used once the address is verified.)_

## 3.9 Footer

- [x] Implement footer layout.
- [x] Add navigation links.
- [ ] Add approved social links. _(Blocked: URLs unverified; Footer renders them when added)_
- [x] Add copyright information.
- [x] Add appropriate visual separation.

## Acceptance Criteria

- [x] All approved homepage sections are implemented.
- [x] Content is accurate.
- [x] Layout is visually consistent.
- [x] Navigation works.
- [ ] CTAs work. _(Hero and nav CTAs work; contact CTA blocked on verified email)_
- [x] Mobile and desktop layouts are polished.
- [x] Both themes work.
- [x] No placeholder content is presented as real information. _(Dev placeholders render only in development; verified in the production build.)_

## Phase 3 Notes (2026-11-16)

**Status:** implementation complete; publication blocked on owner-verified content (see unchecked items above).

**Sections built:** Hero, About (Bento), Skills & Technologies (editorial index), Selected Projects (feature + 2-column grid), Experience (data-driven; hidden in production while empty), Working Process (numbered timeline), Testimonials (renders only with genuine entries — currently omitted), Contact, Footer (verified-link support added).

**Components created:** `sections/` HeroSection, AboutSection, SkillsSection, ProjectsSection, ExperienceSection, WorkflowSection, TestimonialsSection, ContactSection; `projects/` ProjectCard, ProjectCover, ProjectLinks; `ui/` DevPlaceholder, SmartLink. **Reused:** Container, Section, SectionHeading, Button, Badge, Card, BentoGrid, BentoCard, Navbar, MobileMenu, Footer, ThemeToggle.

**Data files:** `personal.js` (hero, about, contact copy added), `projects.js`, `skills.js`, `experience.js` (empty), `workflow.js`, `testimonials.js` (empty), `social-links.js` (URLs empty), `documents.js` (empty), `sections.js` (new: section headings), `navigation.js` (Experience link hidden in production while unverified). Helpers: `src/lib/content.js`.

**Placeholder policy:** `<DevPlaceholder>` renders only when `NODE_ENV !== "production"`. Production build verified: 0 placeholders, no Experience section/link, no unverified email/social links, no "20+ projects" claim.

**Tests:** lint ✓; build ✓; all nav/footer/hero anchors land on their sections (incl. re-clicking the current hash); mobile menu open/close/link navigation ✓; no horizontal overflow or clipped content at 320/375/640/768/1024/1440 in both themes; no hydration or console errors; visual review by screenshot at 1440 (both themes) and 375 (light).

**Fixes made during testing:** hero CTAs clipped at 375–639px (now stack until 640px); same-page hash links did nothing when the URL already had that hash (section anchors now use native `<a>` via SmartLink); wordmark tap target raised to 40px; redundant project-title covers replaced with numbered covers.

**Remaining content placeholders:** biography review; experience entries; email; GitHub/LinkedIn URLs; CV and experience certificate PDFs; availability status; project inclusion, screenshots, live/repo URLs, confirmed features and technologies for TutorHub and The Wild Oasis.

**Outstanding:** in production the Contact section currently has no contact method (blocked on a verified email). Smooth-scroll animation could not be observed in the hidden browser pane (no animation frames); anchor targets were verified with instant scrolling.

---

# PHASE 4 — Project Case Studies

**Priority:** High

## Objective

Create detailed project pages that demonstrate engineering ability, decision-making, and real development experience.

Route:

`/projects/[slug]`

## Tasks

### Dynamic Routing

- [x] Implement dynamic project routing.
- [x] Retrieve projects from centralized data.
- [x] Generate static parameters for known projects where appropriate.
- [x] Handle unknown slugs with not-found behavior.
- [x] Generate project-specific metadata.

### Case Study Layout

Each project should support:

- [x] Project title.
- [x] Short introduction.
- [x] Project category.
- [ ] My role. _(Supported; no verified role yet)_
- [x] Technologies.
- [ ] Project overview. _(Supported; no overview beyond the short description yet)_
- [ ] Problem or requirement. _(Supported; awaiting verified content)_
- [ ] Solution. _(Supported; awaiting verified content)_
- [x] Key features.
- [ ] Technical challenges. _(Supported; awaiting verified content)_
- [ ] Important implementation decisions. _(Supported (decisions field); awaiting verified content)_
- [ ] Screenshots or visual gallery. _(Supported via ProjectGallery with next/image and fixed dimensions; no verified screenshots yet)_
- [ ] Live project link where available. _(Supported; no verified URLs yet)_
- [ ] Repository link where available. _(Supported; none approved yet)_
- [x] Next and previous project navigation.

Only display sections with verified content.

Do not force empty sections into the page.

### Visual Presentation

- [x] Create a strong project hero.
- [x] Use large editorial image layouts.
- [x] Maintain consistent image proportions.
- [ ] Use screenshots that belong to the actual project. _(No verified screenshots yet; numbered editorial covers used instead — never fake screenshots)_
- [ ] Add subtle image interactions. _(Applies once screenshots exist: cover image scales on hover)_
- [x] Ensure image loading does not cause layout shifts.

### Navigation

- [x] Link homepage project cards to case studies.
- [x] Add return-to-projects or homepage navigation.
- [x] Implement previous/next navigation if useful.
- [x] Verify every project route.

## Acceptance Criteria

- [x] Dynamic project routes work.
- [x] Project content comes from centralized data.
- [x] Invalid slugs return not-found behavior.
- [x] Metadata is unique per project.
- [x] Images are optimized. _(All project images go through next/image with responsive `sizes` and fixed dimensions; none supplied yet)_
- [x] Project navigation works.
- [x] All published claims are accurate.

## Phase 4 Notes (2026-11-16)

**Status:** implementation and tests pass. Case-study depth depends on owner content (unchecked items above are supported by the template but have no verified content yet).

**Routes:** `/projects/[slug]` — statically generated for tutorhub, the-wild-oasis, review-top-lawyers, nationwide-financial, california-personal-injury-lawyer. `dynamicParams = false`, so unknown slugs return 404 (root `not-found.js`).

**Components created:** `projects/` CaseStudyHero, CaseStudySection, ProjectGallery, ProjectNavigation. **Updated:** ProjectCover (`variant="hero"`), ProjectLinks (`includeCaseStudy`, `size`, per-project screen-reader labels). **Reused:** ProjectCard (related projects), Container, Section, SectionHeading, DevPlaceholder, SmartLink, Badge.

**Data:** `src/data/projects.js` extended with case-study fields (overview, problem, solution, role, contributions, features, decisions, challenges, learnings, scopeNotes, gallery, status, devNotes); `hasCaseStudy: true` for all five. New `src/lib/projects.js` accessors (validation, ordering, adjacency, related, missing-content list).

**Content rendered per project:** TutorHub — 11 documented features + scope note (payments postponed). Review Top Lawyers, Nationwide Financial, California Personal Injury Lawyer — technology stack confirmed from their package.json. The Wild Oasis — hero only (origin and features unverified).

**Fixes during testing:** route changes kept the previous scroll position because CSS smooth scrolling animated Next's reset → added `data-scroll-behavior="smooth"` to `<html>` (Next 16 opt-in); hero cover numeral rendered at 16px because Tailwind didn't treat `text-[clamp(...)]` as a font size → `text-[length:clamp(...)]`; page titles simplified to "<Project> Case Study — Farzad Khan".

**Tests:** lint ✓; build ✓ (5 SSG pages); every route 200 with unique title/description; unknown slug 404; homepage → case study → next/previous → "All projects" verified (new pages open at top, back link lands on #projects); keyboard order and focus ring ✓; no overflow/clipping/broken images at 320/375/640/768/1024/1440 on TutorHub and The Wild Oasis, and at 320/375/768/1440 on the other three and the homepage; no console or hydration errors; production HTML contains 0 dev placeholders/notes; visual review by screenshot at 1440 (light and dark) and 375 (light).

---

# PHASE 5 — Animation & Interaction Polish

**Priority:** High

## Objective

Add purposeful motion and interaction after the main structure is stable.

The website should feel alive without becoming distracting.

## GSAP Tasks

- [x] Implement the hero entrance timeline. _(CSS keyframes: server-split word mask + staggered entrances, so the hero never waits for JavaScript)_
- [x] Implement selected text reveals.
- [x] Implement selected scroll-triggered animations.
- [x] Implement project image reveals.
- [x] Add advanced animation only where it improves storytelling.
- [x] Verify proper GSAP cleanup.
- [x] Verify ScrollTrigger behavior on route changes.

## Motion Tasks

- [x] Implement interactive card transitions.
- [x] Implement navigation interactions.
- [x] Add layout transitions where useful. _(Evaluated: none needed; layout animations would require Motion's larger domMax bundle)_
- [x] Add subtle hover feedback.
- [x] Implement appropriate presence transitions.

## CSS Interaction Tasks

- [x] Button hover effects.
- [x] Link hover effects.
- [x] Focus-visible states.
- [x] Theme transition. _(Instant colour switch by design — transitions are suppressed for one frame to avoid staggered repaints; the toggle icon animates)_
- [x] Lightweight decorative interactions.

## Quality Requirements

- [x] Respect reduced-motion preferences.
- [x] Avoid unnecessary scroll hijacking.
- [x] Avoid excessive parallax.
- [x] Avoid animation conflicts between GSAP and Motion.
- [x] Avoid unnecessary re-renders.
- [x] Ensure content remains accessible without animation.
- [x] Simplify expensive animations on mobile. _(Parallax limited to ≥768px; reveals use opacity/transform only)_
- [ ] Test interactions with touch input. _(Not tested on a physical touch device; mobile emulation sends mouse events)_

## Acceptance Criteria

- [x] Animations feel intentional and consistent.
- [x] No duplicate or broken animations.
- [x] No animation-related console errors.
- [x] No layout shifts caused by animation.
- [x] Reduced-motion behavior works. _(JS path verified with simulated reduced motion; CSS block verified in built CSS; no runtime CSS emulation available)_
- [ ] Mobile performance remains acceptable. _(Not measured on a real low-powered device; animations are transform/opacity only)_

## Phase 5 Notes (2026-11-16)

**Status:** implementation complete; all requested tests pass. Two items need a real device (touch input, low-powered phone performance).

**Animations:** hero headline word-mask reveal + staggered intro/CTAs/meta (CSS); case-study hero entrance + technology badge stagger + cover scale-in (CSS); scroll reveals with batched stagger for section headings, Bento cards, skills rows, project cards, experience entries, workflow steps, testimonials, contact panel, footer, case-study chapters, feature lists, tech stack, gallery and previous/next cards (GSAP ScrollTrigger); hero grid parallax ≥768px (GSAP scrub); navbar transparent → glass on scroll; active-section indicator; theme-toggle icon rotation; mobile-menu panel + staggered links + icon swap (Motion).

**Files:** new `components/animations/ScrollReveals.jsx`, `components/layout/NavbarShell.jsx`, `components/layout/PrimaryNav.jsx`, `lib/animations/{gsap,reveal,animation-config}.js`. Modified: layout.js, globals.css, Navbar, MobileMenu, ThemeToggle, HeroSection, CaseStudyHero, CaseStudySection, ProjectGallery, ProjectNavigation, SectionHeading, BentoCard, ProjectCard, Skills/Experience/Workflow/Testimonials/Contact sections, Footer, Card, Button, `projects/[slug]/page.js`.

**Fixes during testing:** footer's last row could never reach the reveal threshold (adaptive start); active indicator lagged with IntersectionObserver and never reached Contact (replaced by frame-batched scroll measurement); CSS `transition: transform` on GSAP-animated elements would have fought GSAP (transitions retargeted to `translate`/`scale`); setState-in-effect lint error.

**Tests:** lint ✓; build ✓; 27 homepage reveal elements → 28 ScrollTriggers (27 + parallax), all revealed after scrolling; no trigger leaks across 7 client navigations incl. browser back (trigger count = page's reveal elements; 0 detached); deep link `/#projects` reveals everything above; no horizontal overflow/clipping at 320/375/640/768/1024/1440 on `/`, `/projects/tutorhub`, `/projects/the-wild-oasis`; CLS 0 while scrolling a case study; theme toggle, mobile menu (focus, Escape) and active indicator verified; no console or hydration errors; reduced motion (simulated matchMedia): 0 triggers, all content visible, no inline styles; dev-only debug handle absent from production JS; screenshots reviewed at 1440 (light).

**Testing caveat:** the in-app browser pane throttles animation frames when hidden, which slows GSAP; end states were verified with lag smoothing disabled during tests only.

---

# PHASE 6 — SEO, Accessibility & Performance

**Priority:** Critical

## Objective

Prepare the portfolio for professional discovery, accessibility, and production performance.

## SEO Tasks

- [x] Add complete homepage metadata.
- [x] Add unique project metadata.
- [x] Configure canonical URLs.
- [x] Configure Open Graph metadata.
- [x] Configure social sharing images.
- [x] Implement sitemap.
- [x] Implement robots configuration.
- [x] Add appropriate structured data.
- [x] Verify page titles and descriptions.
- [x] Ensure semantic heading hierarchy.
- [x] Add meaningful image alt text. _(Project images get "<title> — project screenshot" alt; gallery requires alt; decorative covers are aria-hidden)_

## Accessibility Tasks

- [x] Test keyboard navigation. _(Tab order, skip link, menu focus/Escape; focus never obscured by the sticky header forwards or backwards — WCAG 2.2 2.4.11)_
- [x] Verify visible focus states.
- [x] Verify accessible mobile navigation.
- [x] Verify button and link labels.
- [x] Verify form accessibility if a form exists. _(No form exists; contact uses a direct email link once verified)_
- [x] Verify color contrast. _(axe color-contrast: 0 violations in both themes; 24 checks over the decorative grid are 'incomplete' (known-passing token pairs) — quick manual look recommended)_
- [x] Verify reduced-motion support. _(Real prefers-reduced-motion emulation in headless Chrome: no animations, no GSAP inline styles, all content visible)_
- [x] Check semantic HTML.
- [x] Ensure no essential content depends on hover.

## Performance Tasks

- [x] Optimize images. _(No project images exist yet; ProjectCover/ProjectGallery use next/image with sizes and fixed dimensions)_
- [x] Verify font loading. _(Inter variable via next/font, self-hosted, display swap, one 47 KB woff2)_
- [x] Reduce unnecessary client-side JavaScript.
- [x] Remove unused dependencies and imports.
- [x] Review third-party scripts.
- [x] Verify lazy loading. _(next/image lazy-loads by default; only the case-study hero image is priority)_
- [x] Review layout shifts. _(CLS 0 on every page, desktop and throttled mobile)_
- [x] Review animation performance.
- [x] Test Core Web Vitals where practical.
- [ ] Run Lighthouse audits. _(Lighthouse is not installed and was not downloaded; equivalent measurements taken with headless Chrome over the DevTools protocol)_

## Security Tasks

- [x] Check for exposed secrets.
- [x] Review environment variables.
- [x] Review external links.
- [x] Review contact form security if implemented. _(No form implemented)_
- [x] Review dependencies for known vulnerabilities. _(Production dependencies: 0 vulnerabilities. Dev tooling: 7 moderate (eslint-config-next transitive), unchanged since Phase 1)_
- [x] Verify safe rendering of dynamic content.
- [x] Check security headers where appropriate.

## Acceptance Criteria

- [x] SEO metadata is complete.
- [x] Sitemap and robots configuration work.
- [x] Accessibility issues are addressed.
- [ ] No critical performance issues remain. _(Mobile LCP 2.2–2.7 s and first theme-toggle latency measured under 4× CPU throttle in headless (software-rendered) Chrome; needs a real-device check — see Phase 6 notes)_
- [x] No exposed credentials.
- [x] No unnecessary scripts or dependencies.
- [x] Security review is complete.

## Phase 6 Notes (2026-11-16)

**Status:** implementation complete; all requested tests pass. Lighthouse was unavailable (equivalent headless-Chrome measurements used). Mobile performance needs a real-device check before launch.

**Production domain:** set `SITE_URL=https://your-domain.com` (see `.env.example`, `src/lib/site.js`). Without it, production omits canonical/og:url/og:image/sitemap entries instead of publishing a wrong or localhost URL; verified both ways (test build with `https://example.com`, then rebuilt without).

**SEO added:** `lib/site.js` (domain), `lib/seo/metadata.js` (`buildMetadata`), `lib/seo/og-image.jsx` + routes `/og` and `/og/projects/[slug]` (1200×630 PNG, build-time), `lib/seo/structured-data.js` + `components/seo/JsonLd.jsx` (Person, WebSite, CreativeWork — verified facts only), `app/robots.js`, `app/sitemap.js`, `app/manifest.js`, `app/apple-icon.js`, `app/favicon.ico` (built from the site icon), theme-color per colour scheme.

**Security:** `next.config.mjs` headers — X-Content-Type-Options, Referrer-Policy, X-Frame-Options DENY, Permissions-Policy, HSTS, and a production CSP (`'self'` everywhere; `'unsafe-inline'` for scripts/styles because pages are statically pre-rendered — nonces would force dynamic rendering). No CSP violations observed. `app/error.js` added (generic message, retry).

**Accessibility (axe-core 4.14, WCAG 2.0/2.1/2.2 A+AA + best practices):** 0 violations on all 7 pages in light and dark at 1024/1440 and at 375 with the mobile menu open. Fixed: duplicate landmark labels on dev placeholders (development only). Manual: focus not obscured; reduced motion via real media emulation.

**Performance — measured (local production server, headless Chrome):**

| Page | Desktop LCP | Mobile LCP (4× CPU, slow 4G) | CLS |
| ---- | ----------- | ---------------------------- | --- |
| Home | 0.73 s | 2.45 s | 0 |
| Case studies | 0.20–0.32 s | 2.20–2.71 s | 0 |
| 404 | 0.24 s | 2.30 s (0.73–3.46 s across runs) | 0 |

JS 241 KB transferred (all routes); CSS 8.4 KB; one 47 KB font. Mobile numbers vary by seconds between identical runs on this machine — treat as indicative.

**Performance fixes:** theme toggle no longer forces synchronous style recalculation (click handler 740 → 111 ms at 4× CPU): `applyTheme` sets the attribute only and freezes transitions via `data-theme-switching`; toggle and menu icons no longer use AnimatePresence `popLayout` (which measured layout on click); toggle icons are pure CSS (also fixed both icons showing before the first click). GSAP "target not found" warning on pages without covers fixed.

**Known limitations:** first theme toggle still takes ~2.8–3.8 s to paint under 4× CPU in software-rendered headless Chrome (full-page restyle + repaint); second toggle ~0.55–0.7 s; opening the mobile menu ~0.5–1.0 s. `content-visibility: auto` on below-the-fold sections halved theme-switch cost in testing but interacts with ScrollTrigger positions and deep-link anchors — not applied (owner decision 2026-11-16: move on without it; revisit only if real-device testing shows a problem).

**Manual checks still recommended:** real-device performance (mid-range Android) and touch; screen reader pass (NVDA/VoiceOver); the 24 contrast checks axe marks "incomplete" over the decorative grid; Lighthouse/PageSpeed Insights once deployed.

---

# PHASE 7 — Final Testing & Deployment

**Priority:** Critical

## Objective

Complete final quality assurance and prepare the portfolio for public release.

## 7.1 Functional Testing

- [x] Test all navigation links. _(Nav, footer, hero, Hire Me anchors land at the header offset in Chrome and Edge, incl. re-clicking the current hash; active-section indicator verified)_
- [x] Test all project links. _(Homepage cards, previous/next, related projects, "All projects" back link, deep links /#projects, /#contact, /#process)_
- [ ] Test all external links. _(None exist yet — no verified GitHub/LinkedIn/live/repository URLs. Link rendering code adds rel="noopener noreferrer")_
- [x] Test all CTAs. _(Hero, Hire Me, mobile-menu CTA. The contact "Start a Conversation" button cannot render until an email is verified)_
- [x] Test theme switching.
- [x] Test theme persistence. _(Across reload and routes; icons correct before and after hydration)_
- [x] Test mobile navigation. _(Open, focus to first link, Escape returns focus, link closes menu, outside click closes)_
- [ ] Test document downloads. _(No approved CV or certificate yet)_
- [x] Test contact functionality if implemented. _(No form; email link pending verified address)_
- [x] Test not-found behavior. _(Unknown routes, unknown project slugs and unknown OG slugs return 404 with the custom page)_
- [x] Test every project route.

## 7.2 Responsive Testing

Test at the following widths:

- [x] 320px.
- [x] 375px.
- [x] 390px.
- [x] 768px.
- [x] 1024px.
- [x] 1280px.
- [x] 1440px.
- [x] 1920px.

_(Plus 640px. Every width × light/dark × all 7 page types, in Chrome and Edge: 126 combinations per browser, 0 failures for overflow, clipped text, overlapping text/controls, touch targets under 24 px, or broken images. Desktop nav ↔ menu button switch exactly at 1024 px.)_

Verify:

- No horizontal overflow.
- No clipped text.
- No broken grids.
- No overlapping elements.
- No unusable navigation.
- No inaccessible buttons.
- No unexpected layout shifts.

## 7.3 Browser Testing

Test the latest available versions of:

- [x] Chrome. _(157.0.8103.51 — full suite)_
- [ ] Firefox. _(Not installed on this machine; not installed for testing)_
- [x] Edge. _(157.0.4341.60 — full suite)_
- [ ] Safari where available. _(Not available on Windows)_

## 7.4 Error & Build Checks

- [x] Run ESLint. _(0 problems)_
- [x] Run production build. _(Clean build from an empty .next; only the expected SITE_URL warning)_
- [x] Resolve build errors.
- [x] Resolve runtime errors.
- [x] Resolve hydration errors.
- [x] Resolve console errors. _(0 unexpected console messages across all suites in both browsers; only the intentional 404 document responses)_
- [x] Check broken asset requests. _(0 failed requests)_
- [x] Check missing images. _(No content images exist yet; icons/OG images return 200)_
- [x] Check missing routes. _(21 routes checked: pages, robots, sitemap, manifest, OG images, icons)_
- [x] Review dependency warnings. _(Production deps: 0 vulnerabilities; dev tooling: 7 moderate, unchanged)_

Do not suppress real errors just to produce a clean console.

## 7.5 Final Content Review

- [ ] Verify professional title. _(From CONTENT.md; owner confirmation pending)_
- [ ] Verify biography. _(Suggested copy from CONTENT.md; owner review pending)_
- [ ] Verify skills. _(From CONTENT.md with honest learning labels; owner confirmation pending)_
- [ ] Verify experience dates and titles. _(Company, title and 3+ years set by owner; dates/responsibilities not provided, so none shown)_
- [x] Verify project descriptions. _(Owner-supplied descriptions; features cross-checked against source/live sites — see Content Update notes)_
- [x] Verify project links. _(7 live URLs return 200; no public repository URLs provided)_
- [x] Verify social links. _(GitHub, Facebook, Instagram — exact owner URLs; LinkedIn hidden until provided)_
- [x] Verify contact information. _(Email published; phone/WhatsApp hidden because only a placeholder number was supplied)_
- [ ] Verify CV PDF. _(Not provided)_
- [ ] Verify experience certificate PDF. _(Not provided)_
- [x] Remove all development placeholders. _(0 in every production page; they render only in `npm run dev`)_

Do not publish any unverified professional information or documents.

## 7.6 Deployment

_Not performed — the project is local-only by owner decision. See README.md › "Manual Deployment Checklist"._

- [ ] Confirm production environment configuration.
- [ ] Verify build output.
- [ ] Deploy to the approved hosting provider.
- [ ] Verify the production domain.
- [ ] Verify HTTPS.
- [ ] Test production routes.
- [ ] Test document downloads.
- [ ] Test metadata and social previews.
- [ ] Perform a final production smoke test.

## Final Acceptance Criteria

- [x] Production build succeeds.
- [x] All essential functionality works. _(Email contact now works via `mailto:`)_
- [ ] All published content is verified. _(See 7.5)_
- [x] Desktop and mobile layouts work.
- [x] Light and dark themes work.
- [x] No critical accessibility issues remain. _(axe: 0 violations in 56 audits across Chrome and Edge; manual screen-reader pass still recommended)_
- [x] No critical security issues remain.
- [x] No broken links or assets.
- [x] No unresolved console errors.
- [ ] Production deployment is verified. _(Not deployed — local-only)_

## Phase 7 Notes (2026-11-17)

**Status:** local QA complete; phase **not** complete — deployment is intentionally not performed and required content is missing.

**Method:** headless Chrome 157 and Edge 157 driven over the DevTools protocol from a local script (real mouse and keyboard input, viewport and `prefers-reduced-motion` emulation, axe-core 4.14 from `node_modules`), against the local production server only. Firefox is not installed; Safari is unavailable on Windows. Screenshots of the production build were reviewed (light/dark, 375–1440 px).

**Bug found and fixed:** loading straight into a section (`/#projects`, deep links, the case study's "All projects" link) landed in the wrong place or stalled near the top, because CSS smooth scrolling animated the initial fragment jump while the page was still settling. Smooth scrolling is now enabled only after load (`html[data-smooth-scroll]`, set by NavbarShell). Verified: all deep links land exactly at the header offset in Chrome and Edge. Also removed three stale `.gitkeep` files.

**Results:** routes 21/21 correct; anchors 8/8; responsive 126/126 per browser; axe 0 violations (28 audits per browser); keyboard order logical with visible focus and no obscured stops; reduced motion fully static; 0 unexpected console messages or failed requests.

**Temporary notice (owner request, 2026-11-17):** the hero shows an optional notice, `personal.notice` in `src/data/personal.js`: "Portfolio update in progress — some sections are still being finalised." It renders as its own sentence below the eyebrow (small, muted, accent dot) and **renders nothing when the field is `""`** — verified with a build using an empty field. It replaced an earlier hand-edit that put a time-relative message ("by 8:00 PM today") inside the eyebrow with `<br />` tags; that text no longer exists in source or build. The eyebrow now stays on one line at every width from 320 to 1920 px (measured); below 375 px its accent rule is 16 px with an 8 px gap instead of 24/12 px. Checked by screenshot in light and dark at 320, 375 and 1440 px. **Remove or empty the notice before launch.**

**Final re-run on the build with the notice (Chrome 157.0.8103.51 + Edge 157.0.4341.60, 9 widths 320–1920):** identical results in both browsers — routes 21/21; responsive 126/126 (9 widths × 2 themes × 7 pages) with 0 overflow, clipping, overlap, sub-24 px targets or broken images; anchors 8/8, back link and 3 deep links land at the header offset; active indicator correct; 26/26 reveals complete; theme toggle, icons and persistence correct; mobile menu (focus, Escape, link, outside click) correct; 5 case studies with prev/next and 2 related each; 404s correct; keyboard: 3 layouts, every stop visible, outlined and unobscured, skip link focuses `main`; axe 28/28 audits with 0 violations, one h1 and no skipped levels; reduced motion fully static; 0 unexpected console messages or failed requests.

**Test-harness false positives identified (not site bugs):**
- "Related projects: none" — the harness selector expected the grid to be a sibling of the heading, but the heading sits inside a `<header>`; with the correct selector every case study shows 2 related projects.
- "Skip link obscured by header" — the skip link is intentionally fixed above the header when focused.
- "Focused card out of view / opacity 0.99" — sampled 450 ms after a long smooth focus-scroll or fade; with a 1.1 s wait every focus stop is in view and fully visible.
- "26/26 reveals hidden" and stalled icons in the in-app browser pane — that pane is frame-throttled (1 frame/s) when unfocused; full-frame-rate headless Chrome and Edge show all reveals complete.
- "Back link didn't scroll" in the first run was **real** (fixed above), confirmed by isolating smooth scrolling.

**Performance (local, headless Chrome; 3 runs, median [range]):** LCP desktop — home 0.94 s, case study 0.22 s, 404 0.21 s; LCP throttled mobile (4× CPU, slow 4G) — home 2.47 s [2.09–5.70], case study 1.96 s [1.27–2.53], 404 1.04 s. CLS ≤ 0.0011 everywhere. JS 241 KB transferred per route; one 47 KB preloaded font; no content images yet. Interaction latency (throttled mobile): theme toggle and menu 0.17–0.70 s, first theme toggle up to 3.4 s in one run — high variance; real-device check needed. Lighthouse not available.

## Portfolio Content & Projects Update (2026-11-17)

_Owner-requested content update within Phase 7 — not a new phase. Local only: nothing deployed, uploaded, pushed or committed._

**Projects.** Selected Projects, in order: Cali Personal Injury Lawyer (Concept project), Review Top Lawyers, Tour De Swat (Internal tool, in development), STORI, World CoMedia — each with a case study at `/projects/<slug>`. A visually secondary "Additional Projects" block shows Printing New York and School B (Academic project), with no case studies. TutorHub, The Wild Oasis and Nationwide Financial are `visible: false`; their routes and OG images return 404 and they are absent from the build output. New data fields: `visible`, `showcase`, `order`, `label`, `liveLabel`, `thumbnail: { src, alt }`; new selector `getAdditionalProjects()`; new component `AdditionalProjectCard`.

**Verification of facts.** Technologies come from actual imports in the local source (Cali, Review Top Lawyers, World CoMedia, Tour De Swat) or from the scripts the live site loads (STORI, Printing New York, School B: Bootstrap). Tour De Swat features are limited to those confirmed in its local source; its public URL is only a sign-in page, so it has no screenshot (designed cover) and its link is labelled "Sign-in page". Screenshots avoid Review Top Lawyers' sample/test records and STORI's contact details.

**Images.** 16 real screenshots (WebP 1440×900, 27–123 KB) under `public/images/projects/<slug>/`; portrait `public/images/profile/farzad-khan.webp` (800×800, 36 KB; source PNG left untouched — checksum verified). All have alt text and fixed aspect ratios (no layout shift).

**Experience & Education.** Frontend Developer — CreaTech IT Solutions — 3+ years. Education: Matriculation (Al-Madina Model School & College, Swat), FSc — Computer Science (Jahanzeb College), BS IT (in progress). No dates or responsibilities invented.

**Contact.** Email published (`mailto:`); GitHub, Facebook, Instagram icons (Simple Icons paths, `target="_blank" rel="noopener noreferrer"`, accessible labels). Phone (`tel:`), WhatsApp (`wa.me`) and LinkedIn are configurable but hidden — the supplied number was a placeholder and no LinkedIn URL was given.

**Bugs found and fixed during this update:**
- Jumping from the top straight to `#contact` left the Contact panel invisible for 1.5–3 s: the reveal batch staggered ~30 elements. Passed elements are now set instantly and the stagger is capped (panel visible within ~0.5 s on mobile, fully by ~1.5 s on desktop).
- The feature project card cropped the left of its screenshot on large screens (`lg:aspect-auto`); covers now keep 16:10.
- The Tour De Swat designed cover used a different ratio than its grid neighbour; now 16:10.

**QA re-run (Chrome 157 + Edge 157, local production server):** identical results in both browsers — routes 27/27 correct (5 case studies 200, 5 old/additional slugs 404); responsive 112/112 rows (7 pages × 8 widths × 2 themes) with 0 overflow, clipping or overlap; 0 failed images or failed requests after a full scroll at 375 and 1440 px; theme toggle and persistence correct; 37/37 reveals complete; prev/next and related links correct on all 5 case studies; deep links and back link land at the header offset; axe 0 violations in 28 audits per browser, one h1 and no skipped heading levels; reduced motion fully static; console errors only from the intentional 404 probes. `npm run lint` and `npm run build` pass.

**Tour De Swat dashboard inspection (2026-11-16, owner-requested).** The owner signed in to the live dashboard in the in-app browser (credentials were never entered or stored by the assistant). Inspected 7 pages — Dashboard, Trips & Guests, Expenses (direct + indirect overhead tabs), Investments (partnerships + transaction ledger tabs), Settings (fleet, circuits & routes, overhead categories, team & access), global search, and the printable invoice — plus the trip detail drawer, the New Trip form and the Quick Action hub (opened only; nothing was submitted, edited or deleted). Captured 12 views; published 10 to `public/images/projects/tour-de-swat/` (8 desktop 1440×900, stitched from 2× magnified quarters for sharp text; 2 mobile 585×1266). Excluded: the New Trip form (duplicate of the Quick Action booking form), Team & Access (signed-in account and password form) and the print invoice (company and guest contact details). All guest, partner and account names, emails and phone numbers are blurred. The case study now uses the dashboard screenshot as its cover, a confirmed feature list, an overview and a 9-image gallery; `ProjectGallery` shows portrait screenshots at phone width. The "no screenshot" dev placeholder was removed. Lint and build pass; the case study and homepage card were checked at 1440 (light) and 375 (dark): 0 failed images or requests, 0 console errors, no overflow.

---

# 3. Optional Future Improvements

These are not part of the initial release.

Do not implement them unless explicitly approved.

- [ ] Dedicated `/projects` listing page.
- [ ] Technical blog.
- [ ] Detailed development articles.
- [ ] Additional case studies.
- [ ] Genuine client testimonials.
- [ ] Privacy-conscious analytics.
- [ ] Additional downloadable resources.
- [ ] More advanced project storytelling.
- [ ] Additional language support.

---

# 4. Final Development Rules

Claude must follow these rules throughout the project:

1. Work on one phase at a time.
2. Do not begin another phase without approval.
3. Read relevant documentation before implementation.
4. Inspect existing code before modifying it.
5. Never rewrite working code without a reason.
6. Never invent personal or professional information.
7. Never introduce unnecessary dependencies.
8. Prioritize security, accessibility, and performance.
9. Keep the application JavaScript-based.
10. Follow the established design system.
11. Keep code clean and understandable.
12. Test changes before marking tasks complete.
13. Update this progress tracker honestly.
14. Report blockers instead of hiding them.
15. Do not claim something works without testing it.

## Phase Completion Report

At the end of every phase, provide:

- Phase completed.
- Main files created or modified.
- Features implemented.
- Tests performed.
- Build and lint results.
- Remaining issues.
- Any decisions requiring approval.
- Recommended next phase.

Do not start the next phase automatically.

**Final objective:** Deliver a polished, credible, high-performance developer portfolio that can grow alongside Farzad's professional career without requiring unnecessary rewrites.
