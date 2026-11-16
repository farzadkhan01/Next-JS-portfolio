import { ImageResponse } from "next/og";

import { OG_IMAGE_SIZE } from "@/lib/seo/metadata";

// next/og renders outside the browser, so CSS variables are unavailable.
// These literals mirror the light-theme tokens in src/styles/design-tokens.css.
const COLORS = {
  background: "#f7f7f5",
  foreground: "#171717",
  muted: "#6b6b6b",
  border: "#e5e5e5",
  accent: "#2563eb",
};

// Editorial 1200×630 social card: eyebrow, large title, supporting line, and
// a footer rule. Typographic only — no screenshots or invented imagery.
export function renderOgImage({ eyebrow, title, subtitle, footer }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: COLORS.background,
          backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          color: COLORS.foreground,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: COLORS.muted }}>
          <div style={{ width: 40, height: 2, backgroundColor: COLORS.accent }} />
          {eyebrow.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: title.length > 28 ? 76 : 96, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1000 }}>
            {title}
            <span style={{ color: COLORS.accent }}>.</span>
          </div>
          {subtitle && <div style={{ fontSize: 32, color: COLORS.muted, maxWidth: 900 }}>{subtitle}</div>}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `2px solid ${COLORS.border}`,
            paddingTop: 24,
            fontSize: 24,
            color: COLORS.muted,
          }}
        >
          <span>{footer}</span>
          <span style={{ color: COLORS.accent }}>●</span>
        </div>
      </div>
    ),
    OG_IMAGE_SIZE,
  );
}
