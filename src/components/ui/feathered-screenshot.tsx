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

const FEATHER_MASK: Record<FeatherEdge, string> = {
  bottom: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
  top: "linear-gradient(to bottom, transparent 0%, black 10%, black 100%)",
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
    <div
      className={cn("mx-auto w-full", className)}
      style={{
        maskImage: FEATHER_MASK[feather],
        WebkitMaskImage: FEATHER_MASK[feather],
      }}
    >
      <AssetImage
        src={src}
        alt={alt}
        intrinsicWidth={intrinsicWidth}
        intrinsicHeight={intrinsicHeight}
        priority={priority}
        className="w-full"
      />
    </div>
  );
}
