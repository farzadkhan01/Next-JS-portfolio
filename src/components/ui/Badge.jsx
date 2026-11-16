import { cn } from "@/lib/utils/cn";

const VARIANTS = {
  neutral: "border-border bg-surface-secondary text-foreground",
  accent: "border-transparent bg-accent-soft text-accent-soft-foreground",
  outline: "border-border bg-transparent text-muted",
};

// Small pill label for technologies, categories, and status (e.g. "Learning").
// Status must be conveyed by the text itself, never by colour alone.
export default function Badge({ variant = "neutral", icon: Icon, className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs leading-none font-medium",
        VARIANTS[variant],
        className,
      )}
    >
      {Icon && <Icon aria-hidden="true" className="size-3.5" strokeWidth={2} />}
      {children}
    </span>
  );
}
