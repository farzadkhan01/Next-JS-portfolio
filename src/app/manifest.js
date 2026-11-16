import { personal } from "@/data/personal";

// /manifest.webmanifest — basic web app metadata (name, colours, icons).
// display "browser": a portfolio has no reason to install as an app.
export default function manifest() {
  return {
    name: `${personal.name} — ${personal.title}`,
    short_name: personal.name,
    description: personal.seoDescription,
    start_url: "/",
    display: "browser",
    background_color: "#f7f7f5",
    theme_color: "#f7f7f5",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
