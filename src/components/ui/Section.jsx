import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const TONES = {
  default: "",
  secondary: "bg-surface-secondary",
};

// Page section with the shared vertical rhythm and container.
// Pass `labelledBy` with the id of the section's heading for an accessible name.
export default function Section({
  id,
  labelledBy,
  tone = "default",
  className,
  containerClassName,
  children,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-section", TONES[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
