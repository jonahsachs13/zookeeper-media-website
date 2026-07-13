import Link from "next/link";
import { AssetImage } from "@/components/ui/asset-image";
import type { AppListing } from "@/lib/apps";

export function AppCard({ name, tagline, description, href, icon, accentClass, brandClass, hoverBorderClass }: AppListing) {
  const cardClassName = `group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors dark:border-zinc-800 dark:bg-zinc-900 ${hoverBorderClass}`;
  const inner = (
    <>
      <div className={`${accentClass} px-8 py-10`}>
        <AssetImage src={icon} alt={name} intrinsicWidth={1024} intrinsicHeight={1024} className="h-16 w-16 rounded-2xl" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className={`mb-1 text-sm font-medium ${brandClass}`}>{name}</p>
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">{tagline}</h3>
        <p className="mb-6 flex-1 text-gray-600 dark:text-gray-400">{description}</p>
        <span className={`text-sm font-semibold ${brandClass} group-hover:underline`}>Learn more →</span>
      </div>
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={cardClassName}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClassName}>
      {inner}
    </Link>
  );
}

export function AppsGrid({ apps }: { apps: AppListing[] }) {
  return (
    <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
      {apps.map((app) => (
        <AppCard key={app.name} {...app} />
      ))}
    </div>
  );
}
