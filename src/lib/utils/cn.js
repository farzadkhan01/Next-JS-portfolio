// Joins class names, skipping falsy values. It does NOT resolve conflicts
// (no tailwind-merge): never pass a class that overrides a component's own
// display/size/colour utility — wrap the component instead.
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
