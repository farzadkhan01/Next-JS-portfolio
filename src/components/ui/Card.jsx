import { cn } from "@/lib/utils/cn";

const VARIANTS = {
  surface: "border-border bg-surface shadow-soft",
  secondary: "border-border bg-surface-secondary",
  glass: "glass shadow-float",
};

const PADDING = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-7",
  lg: "p-6 sm:p-8",
};

const RADIUS = {
  md: "rounded-xl",
  lg: "rounded-2xl",
};

// Base surface for all card-like UI. `interactive` adds a subtle lift for
// cards that contain a link or button (the card itself is not clickable).
export default function Card({
  as: Tag = "div",
  variant = "surface",
  padding = "md",
  radius = "lg",
  interactive = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden border",
        VARIANTS[variant],
        PADDING[padding],
        RADIUS[radius],
        interactive &&
          "transition-[translate,box-shadow,border-color] duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-raised focus-within:shadow-raised",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
