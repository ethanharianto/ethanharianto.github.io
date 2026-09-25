"use client";

import { createContext, useContext } from "react";

import type { ResolvedContent } from "@/lib/content/shape";

const ContentContext = createContext<ResolvedContent | null>(null);

/**
 * Populated once, in the root layout, from whatever's saved in Blob
 * merged over the static defaults in `lib/copy` / `lib/site` /
 * `lib/experience` / `lib/projects`. Every client component under it —
 * on every route, since the root layout wraps all of them — reads the
 * same resolved copy instead of importing the static modules directly.
 */
export function ContentProvider({
  value,
  children,
}: {
  value: ResolvedContent;
  children: React.ReactNode;
}) {
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useSiteContent(): ResolvedContent {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useSiteContent must be used within a ContentProvider");
  }
  return ctx;
}
