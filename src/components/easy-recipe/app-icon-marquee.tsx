"use client";

import { APP_ICONS } from "@/lib/easy-recipe/app-icons";

const ICON_CLASS = "h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20";

function IconRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="icon-marquee-row" aria-hidden={hidden}>
      {APP_ICONS.map((icon) => (
        <div key={icon.src} className={ICON_CLASS}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={icon.src}
            alt={hidden ? "" : icon.alt}
            width={80}
            height={80}
            className="h-full w-full rounded-[22.37%] object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function AppIconMarquee() {
  return (
    <div className="icon-marquee-viewport">
      <div className="icon-marquee-track">
        <IconRow />
        <IconRow hidden />
      </div>
    </div>
  );
}
