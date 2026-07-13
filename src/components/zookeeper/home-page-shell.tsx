"use client";

import { useEffect } from "react";

type HomePageShellProps = {
  children: React.ReactNode;
};

function setHomePageBackground(active: boolean) {
  document.documentElement.classList.toggle("home-page", active);
  document.body.classList.toggle("home-page", active);
}

export function HomePageShell({ children }: HomePageShellProps) {
  useEffect(() => {
    setHomePageBackground(true);
    return () => setHomePageBackground(false);
  }, []);

  return <div className="flex min-h-dvh flex-col">{children}</div>;
}
