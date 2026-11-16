import SmartLink from "@/components/ui/SmartLink";
import { cn } from "@/lib/utils/cn";

const BASE =
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow,translate] duration-200 ease-out-soft " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const VARIANTS = {
  primary: "bg-accent text-accent-foreground shadow-soft hover:bg-accent-hover",
  secondary:
    "border border-border bg-surface text-foreground shadow-soft hover:border-muted/40 hover:bg-surface-secondary",
  ghost: "text-foreground hover:bg-surface-secondary",
};

const SIZES = {
  sm: "h-9 px-3.5 text-small",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-base",
};

const ICON_SIZES = { sm: "size-4", md: "size-[18px]", lg: "size-5" };

function isExternal(href) {
  return /^(https?:)?\/\//.test(href);
}

/**
 * Renders SmartLink for internal hrefs (Next.js <Link>, or <a> for section
 * anchors), an <a> for external/mailto/file hrefs, and a <button> when no
 * href is given.
 *
 * Props: variant (primary | secondary | ghost), size (sm | md | lg),
 * icon (Lucide component), iconPosition (start | end), href, download.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "end",
  className,
  children,
  type = "button",
  ...props
}) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  const icon = Icon ? (
    <Icon
      aria-hidden="true"
      strokeWidth={1.75}
      className={cn(
        ICON_SIZES[size],
        iconPosition === "end" && "transition-transform duration-200 group-hover:translate-x-0.5",
      )}
    />
  ) : null;

  const content = (
    <>
      {iconPosition === "start" && icon}
      {children}
      {iconPosition === "end" && icon}
    </>
  );

  if (!href) {
    return (
      <button type={type} className={classes} {...props}>
        {content}
      </button>
    );
  }

  const usePlainAnchor =
    isExternal(href) || href.startsWith("mailto:") || href.startsWith("tel:") || props.download;

  if (usePlainAnchor) {
    const externalProps = isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {content}
      </a>
    );
  }

  return (
    <SmartLink href={href} className={classes} {...props}>
      {content}
    </SmartLink>
  );
}
