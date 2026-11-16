import { Inter } from "next/font/google";

import ScrollReveals from "@/components/animations/ScrollReveals";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { REVEAL_INIT_SCRIPT } from "@/lib/animations/reveal";
import { buildMetadata, SITE_NAME } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { personal } from "@/data/personal";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Site-wide defaults. Pages override title/description/canonical/social data
// through buildMetadata (src/lib/seo/metadata.js).
export const metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  ...buildMetadata({ description: personal.seoDescription, path: "/", image: "/og" }),
  title: {
    default: SITE_NAME,
    template: `%s — ${personal.name}`,
  },
  applicationName: SITE_NAME,
  authors: [{ name: personal.name }],
  creator: personal.name,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#111214" },
  ],
};

export default function RootLayout({ children }) {
  return (
    // data-theme is set by THEME_INIT_SCRIPT before paint, so the server value
    // may differ from the client — suppressHydrationWarning covers <html> only.
    // data-scroll-behavior="smooth": Next.js 16 then disables CSS smooth
    // scrolling during route changes, so new pages open at the top instantly
    // while in-page anchors still scroll smoothly.
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Static, trusted strings: apply the stored theme and the scroll-reveal
            state before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT + REVEAL_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <ScrollReveals />
      </body>
    </html>
  );
}
