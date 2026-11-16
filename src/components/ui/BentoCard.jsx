import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";

// Size variants from DESIGN_SYSTEM.md §7, on the BentoGrid's 4-column layout.
const SIZES = {
  sm: "col-span-1",
  md: "sm:col-span-2",
  tall: "lg:row-span-2",
  lg: "sm:col-span-2 lg:row-span-2",
  wide: "sm:col-span-2 lg:col-span-4",
};

// A Card placed in a BentoGrid. Use `order` classes in `className` to reorder
// cards by importance on small screens when needed.
export default function BentoCard({ size = "sm", className, children, ...cardProps }) {
  return (
    <Card
      data-reveal
      className={cn("flex min-h-44 flex-col", SIZES[size], className)}
      {...cardProps}
    >
      {children}
    </Card>
  );
}
