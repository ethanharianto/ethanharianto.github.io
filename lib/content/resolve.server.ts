import "server-only";

import { cache } from "react";
import { list } from "@vercel/blob";

import { CONTENT_BLOB_PATHNAME } from "./constants";

/**
 * Reads whatever the admin has saved. No blob yet (nothing saved) or a
 * transient read error both fall through to `{}`, which is exactly the
 * "use the defaults" case `buildResolvedContent` already handles — a
 * fresh clone with no admin edits should render identically to the
 * original static copy, not throw.
 *
 * Wrapped in `cache()` so `generateMetadata`, the root layout, and any
 * page that needs resolved content each get one shared read per request
 * instead of one Blob list + fetch apiece.
 */
export const getContentOverrides = cache(async (): Promise<Record<string, string>> => {
  try {
    const { blobs } = await list({ prefix: CONTENT_BLOB_PATHNAME });
    const match = blobs.find((b) => b.pathname === CONTENT_BLOB_PATHNAME);
    if (!match) return {};

    const res = await fetch(match.url, { cache: "no-store" });
    if (!res.ok) return {};

    const data = await res.json();
    if (typeof data !== "object" || data === null || Array.isArray(data)) return {};
    return data as Record<string, string>;
  } catch (error) {
    console.error("[content] Failed to read stored content:", error);
    return {};
  }
});
