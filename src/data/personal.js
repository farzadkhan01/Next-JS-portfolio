// Personal and introduction content — source: CONTENT.md §1, §2, §4, §5, §13.
//
// Not yet verified by the owner (kept out of the published site):
// - Email, phone, availability status, profile image.
// - The "20+ projects" statistic (removed from the biography until verified).

export const personal = {
  name: "Farzad Khan",
  title: "Frontend Engineer",

  // Optional site-wide notice shown under the hero eyebrow. Set to "" to hide
  // it — nothing renders when empty. Avoid relative times ("today", "by 8 PM"):
  // the site is pre-rendered, so the text does not change until the next build.
  notice: "Portfolio update in progress — some sections are still being finalised.",

  positioning: "Frontend Engineer with Full-Stack JavaScript Capabilities",
  location: "Mingora, Khyber Pakhtunkhwa, Pakistan",
  // Same location, split for structured data (schema.org PostalAddress).
  address: {
    locality: "Mingora",
    region: "Khyber Pakhtunkhwa",
    countryCode: "PK",
  },
  shortLocation: "Pakistan",
  workPreference: "Remote / International Opportunities",
  seoDescription:
    "Farzad Khan is a Frontend Engineer building modern, responsive, and user-focused web experiences with JavaScript, React, and Next.js.",

  // null until the owner confirms availability (CONTENT.md §4).
  availability: null,

  // Owner's portrait (copied from the previous portfolio, re-encoded to WebP).
  profileImage: {
    src: "/images/profile/farzad-khan.webp",
    alt: "Portrait of Farzad Khan",
    width: 800,
    height: 800,
  },
};

export const hero = {
  headline: "Building Thoughtful Digital Experiences",
  description:
    "I'm Farzad Khan, a Frontend Engineer with full-stack JavaScript capabilities and 3+ years of professional frontend experience. I build modern web experiences with JavaScript, React, and Next.js, turning ideas and designs into responsive, polished, and production-ready interfaces.",
  primaryCta: { label: "Let's Work Together", href: "#contact" },
  secondaryCta: { label: "Explore My Work", href: "#projects" },
  meta: [
    { label: "Experience", value: "3+ years in frontend" },
    { label: "Based in", value: "Pakistan" },
    { label: "Open to", value: "Remote opportunities" },
    { label: "Works with", value: "JavaScript, React, Next.js" },
  ],
};

// Suggested biography from CONTENT.md §5 — pending owner review.
export const about = {
  overview: [
    "I'm a JavaScript developer focused on building modern, responsive, and practical web applications.",
    "Over time, I've worked across a range of frontend technologies, progressing from HTML, CSS, and JavaScript to React and Next.js, and exploring everything from interactive interfaces to full-stack web applications.",
  ],
  approach:
    "I enjoy understanding how products work, structuring applications properly, and turning design concepts into experiences that feel intuitive and polished.",
  learning: {
    topic: "Node.js",
    text: "I'm expanding my backend knowledge with Node.js while continuing to improve my frontend engineering and animation skills.",
  },
};

export const contact = {
  headline: "Have a project in mind?",
  description:
    "Whether you're an agency looking for frontend development support or a business planning a new digital experience, I'd be happy to hear about it.",
  ctaLabel: "Start a Conversation",

  // Owner-supplied (2026-11-17).
  email: "devbyfarzad.khan@gmail.com",

  // Phone and WhatsApp stay EMPTY until the owner supplies a real number —
  // the number provided so far was an all-zero placeholder and must not be
  // published. Use international format with country code, e.g. "+923001234567".
  // Each option renders (with its own icon and tel:/wa.me link) only when filled.
  phone: "",
  whatsapp: "",
};
