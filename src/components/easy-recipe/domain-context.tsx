"use client";

import { createContext, useContext, useMemo } from "react";
import {
  easyRecipePaths,
  isEasyRecipeDomain,
  normalizeHost,
} from "@/lib/easy-recipe/paths";

type EasyRecipeDomainValue = {
  host: string;
  onEraDomain: boolean;
  paths: ReturnType<typeof easyRecipePaths>;
};

const EasyRecipeDomainContext = createContext<EasyRecipeDomainValue | null>(null);

export function EasyRecipeDomainProvider({
  host,
  children,
}: {
  host: string;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      host: normalizeHost(host),
      onEraDomain: isEasyRecipeDomain(host),
      paths: easyRecipePaths(host),
    }),
    [host],
  );

  return (
    <EasyRecipeDomainContext.Provider value={value}>{children}</EasyRecipeDomainContext.Provider>
  );
}

export function useEasyRecipeDomain() {
  const context = useContext(EasyRecipeDomainContext);
  if (!context) {
    throw new Error("useEasyRecipeDomain must be used within EasyRecipeDomainProvider");
  }
  return context;
}
