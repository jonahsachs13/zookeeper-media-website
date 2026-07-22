import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  /** Pixel width of the source file (aspect ratio only). */
  intrinsicWidth: number;
  /** Pixel height of the source file (aspect ratio only). */
  intrinsicHeight: number;
  className?: string;
  priority?: boolean;
  /** CSS sizes hint for srcset; default suits full-bleed marketing shots. */
  sizes?: string;
  style?: CSSProperties;
};

/** Full-resolution local assets — no Next.js image pipeline. */
export function AssetImage({
  src,
  alt,
  intrinsicWidth,
  intrinsicHeight,
  className,
  priority,
  sizes = "100vw",
  style,
}: AssetImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={`${src} ${intrinsicWidth}w`}
      sizes={sizes}
      alt={alt}
      width={intrinsicWidth}
      height={intrinsicHeight}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      draggable={false}
      className={cn("block h-auto max-w-full", className)}
      style={{ aspectRatio: `${intrinsicWidth} / ${intrinsicHeight}`, ...style }}
    />
  );
}
