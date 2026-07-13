"use client";

import { SiteHeader } from "@/components/layout/site-header";

type EasyRecipeChromeProps = {
  children: React.ReactNode;
};

export function EasyRecipeChrome({ children }: EasyRecipeChromeProps) {
  return (
    <>
      <SiteHeader position="static" />
      {children}
    </>
  );
}
