import { cn } from "@/lib/utils";

type AppPageIconProps = {
  src: string;
  alt: string;
  className?: string;
};

export function AppPageIcon({ src, alt, className }: AppPageIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={96}
      height={96}
      className={cn(
        "mx-auto mb-6 h-20 w-20 rounded-[22%] sm:mb-8 sm:h-24 sm:w-24",
        className,
      )}
    />
  );
}
