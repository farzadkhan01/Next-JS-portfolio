const isProduction = process.env.NODE_ENV === "production";

// Content Security Policy (production only; `next dev` needs eval/websockets).
// - script-src 'unsafe-inline': the site is statically pre-rendered, and Next's
//   inline bootstrap scripts plus the theme/reveal init script need it. Nonces
//   would force every page to render dynamically. No third-party scripts load.
// - style-src 'unsafe-inline': GSAP/Motion and CSS custom properties set inline styles.
// - Fonts are self-hosted by next/font; images are same-origin (or data:/blob:).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  // Ignored by browsers over plain HTTP (local testing); applies once served over HTTPS.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  ...(isProduction ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }] : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
