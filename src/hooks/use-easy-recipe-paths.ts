"use client";

import { useEasyRecipeDomain } from "@/components/easy-recipe/domain-context";

export function useEasyRecipePaths() {
  return useEasyRecipeDomain().paths;
}
