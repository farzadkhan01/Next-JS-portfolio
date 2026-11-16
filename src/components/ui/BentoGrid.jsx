import { cn } from "@/lib/utils/cn";

// Bento layout: 1 column on mobile, 2 on tablet, 4 on desktop.
// Rows size to content (no fixed heights) to avoid overflow.
export default function BentoGrid({ as: Tag = "div", className, children }) {
  return (
    <Tag
      className={cn(
        "grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
