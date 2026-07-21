"use client";

import { createContext, useContext, useMemo } from "react";
import {
  isPastePleaseDomain,
  normalizePasteHost,
  pastePleasePaths,
} from "@/lib/paste-please/paths";

type PastePleaseDomainValue = {
  host: string;
  onPasteDomain: boolean;
  paths: ReturnType<typeof pastePleasePaths>;
};

const PastePleaseDomainContext = createContext<PastePleaseDomainValue | null>(null);

export function PastePleaseDomainProvider({
  host,
  children,
}: {
  host: string;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      host: normalizePasteHost(host),
      onPasteDomain: isPastePleaseDomain(host),
      paths: pastePleasePaths(host),
    }),
    [host],
  );

  return (
    <PastePleaseDomainContext.Provider value={value}>
      {children}
    </PastePleaseDomainContext.Provider>
  );
}

export function usePastePleaseDomain() {
  const context = useContext(PastePleaseDomainContext);
  if (!context) {
    throw new Error("usePastePleaseDomain must be used within PastePleaseDomainProvider");
  }
  return context;
}
