# Farzad Khan — Developer Portfolio

A modern, responsive, and performance-focused personal portfolio showcasing my work, technical skills, professional experience, and development journey.

The portfolio is designed to connect with potential employers, development agencies, and freelance clients while presenting my work through a clean, modern, and memorable digital experience.

**Professional Positioning:** Frontend Engineer with Full-Stack JavaScript Capabilities.

---

# 1. Project Overview

This portfolio is being developed with a focus on:

- Minimalist and editorial design.
- Modern Bento Grid layouts.
- Subtle glassmorphism.
- Light and dark themes.
- Purposeful animations and interactions.
- Responsive layouts across all screen sizes.
- Performance, accessibility, and SEO.
- Maintainable and scalable architecture.

The goal is to create a professional portfolio that can evolve alongside my career.

---

# 2. Technology Stack

| Technology         | Purpose                          |
| ------------------ | -------------------------------- |
| Next.js            | React framework and routing      |
| React              | UI development                   |
| JavaScript         | Application logic                |
| JSX                | Component structure              |
| Tailwind CSS       | Styling                          |
| GSAP               | Advanced animations              |
| GSAP ScrollTrigger | Scroll-based animations          |
| Motion             | React animations and transitions |
| Lucide React       | Icons                            |
| ESLint             | Code quality                     |
| Prettier           | Code formatting, if configured   |
| Vercel             | Recommended deployment platform  |

Use compatible stable versions of all dependencies.

This project intentionally uses JavaScript rather than TypeScript.

---

# 3. Getting Started

## Prerequisites

Install the following before starting:

- Node.js **20.9 or newer** (required by Next.js 16; developed and tested on Node 24.20).
- npm (tested with 11.19).
- A code editor such as VS Code.

Verify your installations:

```bash
node -v
npm -v
```

## Run locally

The project lives at `D:\Projects\08 Next JS Portfolio` and is not connected to any remote repository.

Open a terminal in the project folder:

```bash
cd "D:/Projects/08 Next JS Portfolio"
```

Install dependencies (first time, or after `package.json` changes):

```bash
npm install
```

Development server (hot reload; shows dashed "Dev placeholder" boxes for missing content):

```bash
npm run dev
```

Then open `http://localhost:3000`.

Production build and local production server (what visitors would get; placeholders hidden):

```bash
npm run build
```

```bash
npm run start
```

Then open `http://localhost:3000`. To use another port: `npm run start -- -p 3100`.

Lint:

```bash
npm run lint
```

---

# 4. Available Scripts

Scripts defined in `package.json`:

| Command         | Purpose                                        |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Start the development server                   |
| `npm run build` | Create the production build (`.next/`)         |
| `npm run start` | Serve the production build                     |
| `npm run lint`  | Run ESLint (flat config, Next.js core-web-vitals rules) |

Prettier is not used (owner decision), so there is no `format` script.

---

# 5. Project Structure

The application follows a modular Next.js App Router architecture.

```text
src/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── not-found.js
│   ├── sitemap.js
│   ├── robots.js
│   │
│   └── projects/
│       └── [slug]/
│           └── page.js
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   └── providers/
│
├── data/
│   ├── personal.js
│   ├── navigation.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   ├── testimonials.js
│   ├── social-links.js
│   └── documents.js
│
├── hooks/
│
├── lib/
│   ├── animations/
│   ├── seo/
│   └── utils/
│
└── styles/
    └── design-tokens.css

public/
├── images/
├── icons/
└── documents/
```

This is the intended organization. The actual structure may be adapted to the existing repository and implementation needs.

For complete architectural details, see `ARCHITECTURE.md`.

---

# 6. Main Routes

| Route              | Description                     |
| ------------------ | ------------------------------- |
| `/`                | Main portfolio homepage         |
| `/projects/[slug]` | Individual project case studies |

Additional routes may be introduced in the future when needed.

---

# 7. Content Management

Portfolio content is maintained through centralized JavaScript files.

Location:

`src/data/`

Important files:

| File              | Responsibility                        |
| ----------------- | ------------------------------------- |
| `personal.js`     | Personal information and introduction |
| `projects.js`     | Project descriptions and case studies |
| `skills.js`       | Technical skills                      |
| `experience.js`   | Professional experience               |
| `testimonials.js` | Approved testimonials                 |
| `social-links.js` | Professional social links             |
| `documents.js`    | Downloadable resources                |

## Updating Projects

To add or edit a project:

1. Open `src/data/projects.js`.
2. Add or update the project object (start from `emptyCaseStudy` so every field exists).
3. Provide a unique slug — it becomes the URL `/projects/<slug>`.
4. Add verified project details. Case-study sections (problem, solution, role, features, decisions, challenges, learnings, scope) appear only when filled in.
5. Add real screenshots under `public/images/projects/<slug>/` and list them in `gallery` with `src`, `alt`, `width`, and `height`. Set `thumbnail` for the homepage card and case-study hero.
6. Add live or repository links where available.
7. Set `hasCaseStudy: true` to generate the case-study page, then run `npm run dev` and check `/projects/<slug>`. In development, a dashed "Dev placeholder" box lists any content still missing (it never appears in production builds).

Avoid hardcoding project information inside UI components.

## Updating Skills

Edit:

`src/data/skills.js`

Keep skill descriptions accurate.

Do not exaggerate proficiency.

## Updating Experience

Edit:

`src/data/experience.js`

Verify company names, titles, dates, and responsibilities before publishing.

---

# 8. Design System

The portfolio follows the visual guidelines defined in:

`DESIGN_SYSTEM.md`

Core design principles:

- Minimalism.
- Editorial typography.
- Bento Grid composition.
- Subtle glass surfaces.
- Consistent spacing.
- Restrained color usage.
- Responsive layouts.
- Accessible interactions.

Light mode is the default theme.

Dark mode is also supported.

Do not introduce unrelated visual styles or arbitrary design tokens.

---

# 9. Animation Strategy

The application uses three animation approaches.

**GSAP**

For advanced timelines, hero sequences, scroll-triggered animations, and visual storytelling.

**Motion**

For React component interactions, layout transitions, and interface animations.

**CSS**

For simple hover effects, focus states, and lightweight transitions.

Animations must remain purposeful, accessible, and performant.

Respect reduced-motion preferences.

To animate a new element on scroll, add `data-reveal` to it in any component — no extra code needed. Use `data-reveal="cover"` for images. Do not put `data-reveal` on both a list and its items.

In development, `window.__portfolioDebug.ScrollTrigger.getAll().length` in the browser console shows the active ScrollTriggers (this handle is removed from production builds).

See `ARCHITECTURE.md` for implementation details.

---

# 10. Downloadable Documents

The portfolio may provide:

- Resume / CV.
- Experience Certificate.

Location:

`public/documents/`

Only approved, genuine PDF documents should be published.

Never replace missing documents with fake or placeholder credentials.

Update `src/data/documents.js` when adding or changing downloadable files.

---

# 11. Environment Variables

## Production domain (required before deployment)

The site's public domain is configured in **one place**: the `SITE_URL` environment variable, read by `src/lib/site.js`.

```bash
SITE_URL=https://your-domain.com
```

- Locally: create `.env.production.local` (git-ignored) from `.env.example`.
- On the hosting provider: add `SITE_URL` in its environment-variable settings, then rebuild.

It powers canonical URLs, Open Graph/Twitter URLs and share images, `sitemap.xml`, the sitemap line in `robots.txt`, and structured-data URLs. If it is missing (or set to localhost), production builds print a warning and **omit** all of those rather than publish a wrong domain — the site still works, it just isn't fully SEO-ready.

Check after building: `.next/server/app/index.html` should contain `<link rel="canonical" href="https://your-domain.com"/>`, and `/sitemap.xml` should list the homepage and every case study.

## Other variables

Only introduce environment variables when an actual feature requires them.

If the contact form uses an email delivery provider, configure its credentials through the hosting platform's environment-variable settings.

Maintain an `.env.example` file containing variable names and safe example values.

Never commit real secrets, API keys, or credentials to Git.

---

# 12. Quality Standards

Before considering any feature complete, verify:

- Responsive behavior.
- Light and dark themes.
- Accessibility.
- SEO.
- Performance.
- Correct navigation.
- Working links.
- Error-free interactions.
- No broken images.
- No unnecessary dependencies.

Before deployment, run the configured lint and production build commands.

Do not publish unfinished or unverified functionality.

## Pre-launch checks that need a person or a real device

These could not be fully automated during development:

- **Lighthouse / PageSpeed Insights** on the deployed URL (Lighthouse was not installed locally; Web Vitals were measured with headless Chrome instead).
- **Real mid-range phone:** loading speed, scrolling, first theme toggle, and touch interaction.
- **Screen reader pass** (NVDA on Windows or VoiceOver on macOS/iOS): navigation, mobile menu, theme toggle, case studies.
- **Contrast over the decorative grid** in the hero and contact panel — automated tools mark these as "needs review" (the colour pairs themselves pass AA).
- **Social previews:** share a page URL in a messaging app or a card validator once `SITE_URL` is set and the site is live.
- **Content:** confirm no `Dev placeholder` text appears in the production build, and that every published fact has been verified.

---

# 13. Development Workflow

The project is implemented in controlled phases.

See `TASKS.md` for the complete implementation roadmap.

Development workflow:

1. Inspect the existing project.
2. Understand the documentation.
3. Establish the foundation.
4. Implement the design system.
5. Build homepage sections.
6. Build project case studies.
7. Add animation and interactions.
8. Optimize SEO, accessibility, and performance.
9. Test thoroughly.
10. Deploy and verify production.

Each phase requires review and approval before the next phase begins.

---

# Manual Deployment Checklist

Nothing has been deployed. The project is local-only by the owner's decision. When you decide to publish, work through this list in order. Steps marked **(you)** need your decision, accounts, or content.

## 1. Content (blocking — the site should not go live without these)

- [ ] **(you)** Verified contact email → `src/data/personal.js` › `contact.email`. Without it the Contact section has no way to reach you.
- [ ] **(you)** GitHub and LinkedIn URLs → `src/data/social-links.js`.
- [ ] **(you)** Verified experience (company, title, dates, responsibilities) → `src/data/experience.js`. The Experience section and its nav link appear automatically once an entry exists.
- [ ] **(you)** Approve or edit the About biography (`src/data/personal.js` › `about`) and decide on the "20+ projects" statistic.
- [ ] **(you)** Availability: set `personal.availability` only if you want a status shown.
- [ ] **(you)** CV and experience certificate PDFs → `public/documents/`, then add entries to `src/data/documents.js`.
- [ ] **(you)** Projects: confirm which to include; add real screenshots (`public/images/projects/<slug>/`, listed in `gallery` with `width`/`height`/`alt`, plus `thumbnail`), live URLs, public repository URLs, role, and verified features → `src/data/projects.js`.
- [ ] **(you)** The Wild Oasis: confirm its origin and describe it accordingly (course-based work must be labelled as such).
- [ ] **(you)** TutorHub: confirm its technologies.
- [ ] Run `npm run dev` and confirm no dashed "Dev placeholder" box remains on any page.

## 2. Repository (optional but recommended)

- [ ] **(you)** Make a first commit of the working tree (nothing has been committed yet; `.env*` files other than `.env.example` are git-ignored).
- [ ] **(you)** If you host from Git, create a private or public repository and push — only when you decide to.

## 3. Hosting setup

- [ ] **(you)** Choose a host (Vercel is recommended in PROJECT.md; any Node.js host that runs `next start`, or a host with native Next.js support, works).
- [ ] **(you)** Choose and connect the domain; enable HTTPS (HSTS is already sent and only takes effect over HTTPS).
- [ ] Set the environment variable `SITE_URL=https://your-domain.com` in the host's settings (no trailing slash). See section 11 "Production domain".
- [ ] Build settings: install `npm install`, build `npm run build`, start `npm run start` (or the host's Next.js preset). Node 20.9+.

## 4. Before the first public deploy

- [ ] `npm run lint` and `npm run build` pass locally with `SITE_URL` set.
- [ ] In the build output, `.next/server/app/index.html` has `<link rel="canonical" href="https://your-domain.com"/>`.
- [ ] `/sitemap.xml` lists the homepage and every case study; `/robots.txt` includes the sitemap line.

## 5. After deploying

- [ ] Open every route on the live domain: `/`, each `/projects/<slug>`, and an unknown URL (should show the 404 page).
- [ ] Check HTTPS, and that response headers include `Content-Security-Policy` and `Strict-Transport-Security`.
- [ ] Test the email link, social links, and document downloads.
- [ ] Run Lighthouse or PageSpeed Insights on the live URL (mobile and desktop).
- [ ] Test on a real phone: loading, scrolling animations, mobile menu, theme toggle, and touch.
- [ ] Quick screen-reader pass (NVDA / VoiceOver).
- [ ] Share a page link in a messaging app (or a card validator) to confirm the social preview image and text.
- [ ] Optionally submit `/sitemap.xml` in Google Search Console.

---

# 14. Project Documentation

The root directory contains the following documentation:

| File               | Purpose                              |
| ------------------ | ------------------------------------ |
| `PROJECT.md`       | Project vision and requirements      |
| `CONTENT.md`       | Portfolio content and copywriting    |
| `DESIGN_SYSTEM.md` | Visual identity and design rules     |
| `ARCHITECTURE.md`  | Technical architecture               |
| `TASKS.md`         | Implementation roadmap               |
| `CLAUDE.md`        | AI development instructions          |
| `README.md`        | Project overview and developer guide |

These documents should remain consistent.

Update the relevant documentation whenever an important project decision changes.

---

# 15. Future Development

The architecture should support future improvements such as:

- Additional project case studies.
- Dedicated project listing page.
- Technical blog.
- Development articles.
- Genuine testimonials.
- Additional professional resources.
- Improved project storytelling.

These additions should only be implemented when they provide real value.

---

# 16. Project Philosophy

This portfolio is more than a collection of projects.

It represents my development journey, engineering approach, professional growth, and ability to build useful digital products.

The implementation should prioritize:

- Clear communication.
- Strong engineering fundamentals.
- Thoughtful design.
- Reliable functionality.
- Performance.
- Maintainability.
- Continuous improvement.

**Build something that represents the developer I am today and remains relevant as I grow into the engineer I want to become.**
