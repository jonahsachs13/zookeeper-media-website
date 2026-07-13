import { cn } from "@/lib/utils";

/** Centers marketing screenshots; transparent PNGs inherit the page background. */
export function MarketingImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full justify-center", className)}>{children}</div>
  );
}
