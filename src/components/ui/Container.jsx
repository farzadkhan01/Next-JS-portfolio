import { cn } from "@/lib/utils/cn";

// Centered content wrapper: 1320px content width with responsive gutters
// (20 / 24 / 32 / 40 / 48px — DESIGN_SYSTEM.md §6).
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-site px-5 xs:px-6 sm:px-8 lg:px-10 2xl:px-12", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
