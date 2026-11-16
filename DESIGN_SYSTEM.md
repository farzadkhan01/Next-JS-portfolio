# DESIGN_SYSTEM.md — Farzad Khan Portfolio

This document defines the complete visual identity, design language, layout rules, component standards, themes, and interaction principles for the portfolio.

It is the authoritative source of truth for all UI and visual decisions.

Every page and component must follow this design system.

Do not introduce arbitrary colors, spacing values, typography styles, radii, shadows, or visual patterns without a justified design decision.

---

# 1. Creative Direction

## Design Concept

**Minimalist Editorial × Bento Grid × Subtle Glassmorphism**

The visual identity should combine:

- Swiss-inspired editorial layouts.
- Modern minimalist interfaces.
- Contemporary Google-style product design.
- Carefully structured Bento grids.
- Subtle glass surfaces.
- Confident typography.
- Generous whitespace.
- Purposeful motion.

## Brand Personality

The website should feel:

- Modern.
- Intelligent.
- Confident.
- Creative.
- Professional.
- Approachable.
- Technically sophisticated.

## Design Objective

Create a portfolio that feels like a professionally art-directed digital product rather than a prebuilt developer template.

The design should attract attention through composition, typography, spacing, visual storytelling, and interactions.

Avoid visual complexity that reduces clarity.

---

# 2. Reference & Inspiration Direction

Use the following references for design thinking, not direct copying.

### Google

https://about.google/

https://design.google/

https://store.google.com/

Study:

- Typography hierarchy.
- Product storytelling.
- Whitespace.
- Responsive compositions.
- Subtle transitions.
- Clean navigation.
- Consistent design language.

### GSAP

https://gsap.com/

Study:

- Scroll-triggered animations.
- Timeline sequencing.
- Image reveals.
- Scroll storytelling.

### Motion

https://motion.dev/

Study:

- Layout transitions.
- Interactive components.
- Micro-interactions.
- Component-level animation.

### Awwwards

https://www.awwwards.com/

Study contemporary award-winning portfolio and agency websites for creative layout and interaction inspiration.

Do not reproduce other websites. Build an original visual identity.

---

# 3. Color System

Use a restrained palette with a distinctive accent.

The palette must work consistently across light and dark themes.

## Primary Brand Accent

Electric Blue:

- Primary: `#2563EB`
- Hover: `#1D4ED8`
- Soft: `#DBEAFE`
- Dark Theme Accent: `#60A5FA`

Use the accent for:

- Primary buttons.
- Important links.
- Selected states.
- Small visual highlights.
- Interactive indicators.

Do not use the accent on every element.

## Light Theme

| Token             | Value     | Purpose                |
| ----------------- | --------- | ---------------------- |
| Background        | `#F7F7F5` | Main page background   |
| Surface           | `#FFFFFF` | Cards and surfaces     |
| Surface Secondary | `#F0F1EF` | Secondary sections     |
| Foreground        | `#171717` | Main text              |
| Muted             | `#6B6B6B` | Secondary text         |
| Border            | `#E5E5E5` | Borders and separators |
| Accent            | `#2563EB` | Brand accent           |
| Accent Hover      | `#1D4ED8` | Interactive hover      |

## Dark Theme

| Token             | Value     | Purpose                |
| ----------------- | --------- | ---------------------- |
| Background        | `#111214` | Main page background   |
| Surface           | `#1A1C20` | Cards and surfaces     |
| Surface Secondary | `#22252A` | Secondary sections     |
| Foreground        | `#F5F5F5` | Main text              |
| Muted             | `#A1A1AA` | Secondary text         |
| Border            | `#303238` | Borders and separators |
| Accent            | `#60A5FA` | Brand accent           |
| Accent Hover      | `#93C5FD` | Interactive hover      |

## Color Rules

1. Use semantic design tokens.
2. Never scatter arbitrary hex values across components.
3. Maintain sufficient contrast.
4. Avoid excessive gradients.
5. Use accent colors sparingly.
6. Use the same semantic tokens in both themes.
7. Do not rely on color alone to communicate status.

---

# 4. Typography System

Typography should be one of the strongest elements of the visual identity.

## Recommended Font

Primary: **Inter**

https://fonts.google.com/specimen/Inter

Use a variable font where practical.

Fallback:

`system-ui, sans-serif`

Do not introduce multiple unrelated font families.

## Typography Hierarchy

| Element      | Desktop | Mobile  | Weight  |
| ------------ | ------- | ------- | ------- |
| Hero Heading | 64–88px | 40–54px | 600–700 |
| H1           | 52–64px | 36–44px | 600–700 |
| H2           | 40–48px | 30–36px | 600     |
| H3           | 28–32px | 24–28px | 600     |
| H4           | 20–24px | 18–20px | 600     |
| Body Large   | 18–20px | 16–18px | 400     |
| Body         | 16px    | 15–16px | 400     |
| Small        | 14px    | 13–14px | 400     |
| Caption      | 12–13px | 12px    | 500     |

These are design ranges, not mandatory fixed values for every component.

## Typography Rules

- Use tight tracking for large headlines where appropriate.
- Keep body text comfortable to read.
- Avoid excessively long line lengths.
- Maintain clear hierarchy.
- Use responsive typography with `clamp()`.
- Avoid unnecessary uppercase text.
- Use uppercase labels only for small editorial metadata.

Suggested hero typography:

`clamp(2.5rem, 6vw, 5.5rem)`

---

# 5. Spacing System

Consistent spacing is essential to the design.

Use a 4px base spacing system.

| Token    | Value |
| -------- | ----- |
| space-1  | 4px   |
| space-2  | 8px   |
| space-3  | 12px  |
| space-4  | 16px  |
| space-5  | 20px  |
| space-6  | 24px  |
| space-8  | 32px  |
| space-10 | 40px  |
| space-12 | 48px  |
| space-16 | 64px  |
| space-20 | 80px  |
| space-24 | 96px  |
| space-32 | 128px |

## Layout Spacing

- Desktop section spacing: 96–128px.
- Tablet section spacing: 72–96px.
- Mobile section spacing: 56–72px.
- Card padding: 20–32px.
- Grid gap: 16–24px.
- Small component gaps: 8–16px.

Use judgment based on content density.

Do not force large spacing into small components.

---

# 6. Layout & Container System

## Main Container

- Maximum content width: 1440px.
- Recommended desktop content width: 1200–1320px.
- Center the main container.
- Use responsive horizontal padding.

Suggested container padding:

- Small mobile: 20px.
- Large mobile: 24px.
- Tablet: 32px.
- Desktop: 40px.
- Large desktop: 48px.

## Grid System

Use a responsive 12-column grid where appropriate.

The Bento layout should support:

- Equal-width cards.
- Two-column cards.
- Large featured cards.
- Vertical cards.
- Wide horizontal cards.
- Asymmetric compositions.

Maintain consistent gaps and visual alignment.

Avoid forcing every section into a grid.

---

# 7. Bento Grid Design Rules

Bento Grid is a core visual element of the portfolio.

It should create an organized visual story rather than a collection of unrelated boxes.

## Card Characteristics

- Rounded corners.
- Consistent borders.
- Subtle surface contrast.
- Carefully balanced content.
- Appropriate padding.
- Optional image or icon.
- Clear typography hierarchy.

## Card Size Variations

Support:

- Small: 1-column card.
- Medium: 2-column card.
- Large: 2-column and 2-row card.
- Wide: Full-width or multi-column card.

## Bento Composition Rules

1. Prioritize content hierarchy.
2. Use varied card proportions.
3. Avoid excessive fragmentation.
4. Avoid making every card visually identical.
5. Align card edges.
6. Maintain consistent gaps.
7. Use whitespace intentionally.
8. Ensure cards remain readable on mobile.
9. Avoid fixed heights that cause content overflow.

## Mobile Behavior

On small screens:

- Collapse complex grids.
- Reorder cards based on importance.
- Use readable card widths.
- Avoid horizontal overflow.
- Preserve content hierarchy.

Do not simply shrink the desktop grid.

---

# 8. Glassmorphism System

Glassmorphism must be subtle and selective.

It should provide depth without reducing readability.

## Appropriate Uses

- Navigation surface.
- Theme toggle.
- Small floating UI elements.
- Selected interactive overlays.
- Special highlight cards.

## Suggested Styling

Light theme:

- Background: `rgba(255, 255, 255, 0.72)`
- Backdrop blur: 16px.
- Border: subtle white/grey transparency.

Dark theme:

- Background: `rgba(26, 28, 32, 0.72)`
- Backdrop blur: 16px.
- Border: subtle white transparency.

## Glass Rules

- Avoid glass effects on every card.
- Maintain readable text contrast.
- Provide solid fallback backgrounds.
- Avoid excessive blur.
- Consider mobile performance.
- Never use glass to hide poor layout hierarchy.

---

# 9. Border Radius System

Use a consistent radius scale.

| Token       | Value  |
| ----------- | ------ |
| radius-sm   | 8px    |
| radius-md   | 12px   |
| radius-lg   | 16px   |
| radius-xl   | 20px   |
| radius-2xl  | 24px   |
| radius-3xl  | 32px   |
| radius-full | 9999px |

Recommended:

- Buttons: 12–16px.
- Small cards: 16–20px.
- Main Bento cards: 20–28px.
- Large visual sections: 24–32px.
- Pills: full radius.

Avoid inconsistent rounded corners.

---

# 10. Shadows & Elevation

Use subtle shadows.

Light theme:

- Small surfaces: soft neutral shadow.
- Interactive cards: slightly stronger shadow on hover.
- Floating navigation: subtle elevation.

Dark theme:

- Prefer border and surface contrast over large shadows.
- Use minimal glow effects only when necessary.

Avoid heavy shadows, excessive neon glows, and unrealistic floating effects.

---

# 11. Buttons & Interactive Elements

## Primary Button

Characteristics:

- Accent background.
- High-contrast text.
- Clear label.
- Comfortable padding.
- Subtle hover animation.

## Secondary Button

Characteristics:

- Transparent or surface background.
- Visible border.
- High-contrast text.
- Consistent radius.

## Text Links

- Clear hover state.
- Optional arrow animation.
- Visible keyboard focus.

## Interaction States

Every interactive element must support:

- Default.
- Hover.
- Active.
- Focus-visible.
- Disabled where applicable.

Interactions must be consistent across both themes.

---

# 12. Navigation System

The navigation should be minimal and easy to understand.

Suggested items:

- Home.
- About.
- Projects.
- Experience.
- Contact.

Include:

- Logo or personal wordmark.
- Theme toggle.
- Primary contact CTA.

## Navigation Behavior

- Responsive navigation.
- Mobile menu.
- Smooth interactions.
- Clear active states where appropriate.
- Keyboard accessibility.
- Optional subtle glass background on scroll.

Avoid unnecessarily complex navigation.

---

# 13. Animation Design System

Motion is part of the visual identity.

It must feel smooth, deliberate, and professional.

## Animation Philosophy

Use motion to:

- Guide attention.
- Communicate hierarchy.
- Improve interaction feedback.
- Create visual continuity.
- Enhance project storytelling.

Do not animate everything.

## Animation Technologies

### GSAP

Use for:

- Hero entrance sequences.
- Advanced text reveals.
- ScrollTrigger animations.
- Project image reveals.
- Section storytelling.
- Complex coordinated timelines.

### Motion

Use for:

- Component transitions.
- Layout animations.
- Interactive cards.
- Navigation transitions.
- Modal interactions.
- Micro-interactions.

### CSS

Use for:

- Simple hover transitions.
- Button states.
- Theme transitions.
- Lightweight decorative effects.

## Motion Timing Guidelines

| Interaction         | Duration   |
| ------------------- | ---------- |
| Button hover        | 150–250ms  |
| Card hover          | 200–350ms  |
| Small UI transition | 200–300ms  |
| Section reveal      | 500–800ms  |
| Hero entrance       | 700–1200ms |
| Page transition     | 250–450ms  |

These are starting guidelines. Use appropriate easing and avoid unnecessarily long animations.

## Easing

Prefer smooth, natural easing.

Use GSAP's professional easing options where appropriate.

Avoid excessive bouncing, elastic movement, and distracting motion.

## Scroll Animation Rules

- Use ScrollTrigger selectively.
- Avoid excessive scroll hijacking.
- Avoid pinning every section.
- Prevent layout shifts.
- Ensure animations do not block content.
- Clean up animations and event listeners.
- Respect reduced-motion preferences.

## Accessibility

When reduced motion is requested:

- Disable nonessential animations.
- Avoid large parallax movements.
- Remove unnecessary scroll transitions.
- Preserve content visibility and usability.

---

# 14. Image & Media Guidelines

Images should support the story.

## Project Images

- Use high-quality project screenshots.
- Maintain consistent image presentation.
- Use appropriate aspect ratios.
- Avoid stretching.
- Use optimized formats where practical.
- Lazy-load below-the-fold images.

## Image Treatments

- Subtle rounded corners.
- Consistent cropping.
- Optional subtle hover scaling.
- Avoid excessive filters.

## Placeholder Rules

- Never invent actual project screenshots.
- Use clearly identifiable placeholders during development.
- Make replacing images straightforward.
- Avoid leaving placeholder assets in production.

---

# 15. Responsive Breakpoints

Use a consistent responsive strategy.

| Device        | Width         |
| ------------- | ------------- |
| Small Mobile  | 320px–374px   |
| Mobile        | 375px–639px   |
| Tablet        | 640px–1023px  |
| Desktop       | 1024px–1439px |
| Large Desktop | 1440px+       |

Use Tailwind's configured breakpoints where appropriate.

Test at:

- 320px.
- 375px.
- 390px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

## Responsive Rules

- No horizontal overflow.
- Maintain readable typography.
- Preserve content hierarchy.
- Adapt grid layouts.
- Simplify animations on mobile when necessary.
- Maintain usable touch targets.
- Avoid desktop-only hover interactions.

---

# 16. Theme System

Implement a centralized theme system.

## Requirements

- Light theme by default.
- Dark theme available through a toggle.
- Persist visitor preference.
- Avoid theme flashing during initial load.
- Support system preferences appropriately.
- Ensure all components use theme-aware tokens.

## Theme Coverage

Every component must be reviewed in both themes:

- Navigation.
- Hero.
- Bento cards.
- Project cards.
- Buttons.
- Forms.
- Contact section.
- Footer.
- Overlays and menus.

Do not implement dark mode as a simple background inversion.

Both themes must feel intentionally designed.

---

# 17. Iconography

Use Lucide React.

Iconography must be:

- Consistent.
- Minimal.
- Meaningful.
- Properly sized.
- Accessible when interactive.

Avoid mixing unrelated icon libraries.

Do not use icons as unnecessary decoration.

---

# 18. Component Consistency

Build reusable components around the design system.

Examples:

- Button.
- SectionHeading.
- BentoCard.
- ProjectCard.
- SkillCard.
- Badge.
- Navigation.
- ThemeToggle.
- Container.
- SectionWrapper.
- ContactForm.

Components should support reusable variants rather than duplicated styling.

Avoid excessive abstraction.

---

# 19. Design Token Implementation

Translate this document into centralized CSS variables and Tailwind-compatible design tokens.

Recommended semantic variables:

- `--background`
- `--foreground`
- `--surface`
- `--surface-secondary`
- `--muted`
- `--border`
- `--accent`
- `--accent-hover`
- `--card-radius`
- `--section-spacing`
- `--container-width`

Use semantic tokens throughout the application.

Avoid duplicating design values in individual components.

---

# 20. Design Quality Checklist

Before considering a section complete, verify:

- [ ] Clear visual hierarchy.
- [ ] Consistent spacing.
- [ ] Correct typography.
- [ ] Proper color contrast.
- [ ] Consistent border radii.
- [ ] Balanced composition.
- [ ] Correct light theme appearance.
- [ ] Correct dark theme appearance.
- [ ] Responsive behavior.
- [ ] Accessible interactions.
- [ ] Smooth purposeful animations.
- [ ] No unnecessary decoration.
- [ ] No horizontal overflow.
- [ ] No layout shifts.
- [ ] No visual inconsistency with other sections.

---

# 21. Final Design Principle

The design should be memorable without being complicated.

Use minimalism for clarity, Bento Grid for structured storytelling, glassmorphism for subtle depth, typography for personality, and animation for meaningful interaction.

Every visual decision must serve usability, professional credibility, or conversion.

**The result should feel like a premium digital product designed by a creative agency and engineered by a professional frontend developer.**
