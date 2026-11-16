import Image from "next/image";

import { cn } from "@/lib/utils/cn";

const ASPECTS = {
  card: { image: "aspect-[16/10]", fallback: "aspect-[16/7]" },
  hero: { image: "aspect-[16/10] lg:aspect-[16/8]", fallback: "aspect-[16/8] sm:aspect-[21/6]" },
};

// Project visual. Uses the real screenshot when provided; otherwise renders a
// decorative numbered cover — never a fake screenshot. The fallback is
// aria-hidden because the surrounding heading already names the project.
export default function ProjectCover({
  project,
  index,
  variant = "card",
  priority = false,
  sizes,
  className,
}) {
  const aspect = ASPECTS[variant] ?? ASPECTS.card;

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border bg-surface-secondary",
        variant === "hero" ? "rounded-2xl sm:rounded-3xl" : "rounded-xl",
        project.thumbnail ? aspect.image : aspect.fallback,
        className,
      )}
    >
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt={`${project.title} — project screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0">
          <div className="cover-grid absolute inset-0" />
          <span
            className={cn(
              "absolute -bottom-[0.18em] left-4 leading-none font-semibold tracking-tighter text-foreground/[0.07] tabular-nums sm:left-6",
              variant === "hero"
                ? "text-[length:clamp(6rem,16vw,14rem)] sm:left-10"
                : "text-[length:clamp(5rem,12vw,9rem)]",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute top-5 right-5 size-2 rounded-full bg-accent sm:top-6 sm:right-6" />
        </div>
      )}
    </div>
  );
}
