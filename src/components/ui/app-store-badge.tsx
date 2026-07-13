import { cn } from "@/lib/utils";

type AppStoreBadgeProps = {
  href?: string;
  variant: "app-store" | "mac-app-store";
  className?: string;
  comingSoon?: boolean;
};

const BADGE_PATHS = {
  "app-store": {
    light: "/badges/app-store-black.svg",
    dark: "/badges/app-store-white.svg",
    alt: "Download on the App Store",
    width: 120,
    height: 40,
  },
  "mac-app-store": {
    light: "/badges/mac-app-store-black.svg",
    dark: "/badges/mac-app-store-white.svg",
    alt: "Download on the Mac App Store",
    width: 156,
    height: 40,
  },
} as const;

export function AppStoreBadge({
  href,
  variant,
  className,
  comingSoon = false,
}: AppStoreBadgeProps) {
  const badge = BADGE_PATHS[variant];

  const images = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badge.light}
        alt={badge.alt}
        width={badge.width}
        height={badge.height}
        className="h-10 w-auto dark:hidden sm:h-11"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badge.dark}
        alt=""
        width={badge.width}
        height={badge.height}
        aria-hidden
        className="hidden h-10 w-auto dark:block sm:h-11"
      />
    </>
  );

  if (comingSoon) {
    return (
      <span
        className={cn("relative inline-block cursor-not-allowed", className)}
        aria-disabled="true"
        aria-label={`${badge.alt} - Coming Soon`}
      >
        <span className="pointer-events-none grayscale opacity-50">{images}</span>
        <span className="absolute inset-0 flex items-center justify-center rounded bg-black/50 px-2 text-center text-[11px] font-bold uppercase tracking-wide text-white sm:text-xs">
          Coming Soon
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-block transition-transform hover:scale-110", className)}
    >
      {images}
    </a>
  );
}
