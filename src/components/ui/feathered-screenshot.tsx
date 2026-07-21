import { cn } from "@/lib/utils";
import { AssetImage } from "./asset-image";

type FeatherEdge = "top" | "bottom";

type FeatheredScreenshotProps = {
  src: string;
  alt: string;
  intrinsicWidth: number;
  intrinsicHeight: number;
  feather: FeatherEdge;
  className?: string;
  priority?: boolean;
};

/**
 * Soft edge via gradient overlay — not CSS mask.
 * Safari rasterizes masked <img> soft until zoom; overlays stay sharp.
 */
const FEATHER_OVERLAY: Record<FeatherEdge, string> = {
  bottom:
    "pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-white to-transparent dark:from-black",
  top: "pointer-events-none absolute inset-x-0 top-0 h-[14%] bg-gradient-to-b from-white to-transparent dark:from-black",
};

export function FeatheredScreenshot({
  src,
  alt,
  intrinsicWidth,
  intrinsicHeight,
  feather,
  className,
  priority,
}: FeatheredScreenshotProps) {
  return (
    <div className={cn("relative mx-auto w-full", className)}>
      <AssetImage
        src={src}
        alt={alt}
        intrinsicWidth={intrinsicWidth}
        intrinsicHeight={intrinsicHeight}
        priority={priority}
        className="w-full"
      />
      <div aria-hidden className={FEATHER_OVERLAY[feather]} />
    </div>
  );
}
