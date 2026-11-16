import { CircleDashed } from "lucide-react";

import { IS_DEVELOPMENT } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

// Marks content still awaiting owner verification. Renders ONLY in
// development; production builds output nothing, so placeholders can never be
// published as real information.
export default function DevPlaceholder({ title, children, className }) {
  if (!IS_DEVELOPMENT) return null;

  return (
    <aside
      aria-label={title ? `Development placeholder: ${title}` : "Development placeholder"}
      className={cn(
        "rounded-xl border border-dashed border-accent/50 bg-accent-soft/40 p-4 text-small text-foreground",
        className,
      )}
    >
      <p className="flex items-center gap-2 font-medium text-accent-soft-foreground">
        <CircleDashed aria-hidden="true" className="size-4" strokeWidth={2} />
        Dev placeholder{title ? ` — ${title}` : ""}
      </p>
      {children && <div className="mt-1.5 text-muted">{children}</div>}
    </aside>
  );
}
