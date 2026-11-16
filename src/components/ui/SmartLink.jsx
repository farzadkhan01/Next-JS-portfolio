import Link from "next/link";

// Section anchors ("#contact", "/#about") use a native <a>: the browser then
// handles fragment scrolling — including re-scrolling when the URL already
// has that hash (Next.js <Link> treats that click as a no-op) — and applies
// CSS scroll-behavior/scroll-padding and reduced-motion preferences.
// Other internal routes use Next.js <Link> for client-side navigation.
// (React 19 passes `ref` as a regular prop.)
export default function SmartLink({ href, children, ...props }) {
  const Tag = href.includes("#") ? "a" : Link;

  return (
    <Tag href={href} {...props}>
      {children}
    </Tag>
  );
}
