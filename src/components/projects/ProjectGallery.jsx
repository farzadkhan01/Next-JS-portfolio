import Image from "next/image";

import { cn } from "@/lib/utils/cn";

// Real screenshots only. Width/height are required so images reserve their
// space (no layout shift). The first image spans the full width.
export default function ProjectGallery({ images }) {
  if (images.length === 0) return null;

  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {images.map((image, index) => (
        <li key={image.src} data-reveal="cover" className={cn(index === 0 && "sm:col-span-2")}>
          <figure className="group">
            <div className="overflow-hidden rounded-xl border border-border bg-surface-secondary">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={index === 0 ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                className="h-auto w-full transition-transform duration-500 ease-out-soft group-hover:scale-[1.015]"
              />
            </div>
            {image.caption && (
              <figcaption className="mt-3 text-small text-muted">{image.caption}</figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
