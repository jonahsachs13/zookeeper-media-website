import { cn } from "@/lib/utils";

/** White backdrop so transparent PNG marketing shots don't pick up dark-mode page black. */
export function MarketingImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full bg-white py-2 [color-scheme:light] dark:bg-white",
        className,
      )}
    >
      <div className="mx-auto flex justify-center">{children}</div>
    </div>
  );
}
