import "server-only";

import { get } from "@vercel/blob";

import { CONTENT_BLOB_PATHNAME } from "./constants";

/**
 * Reads whatever the admin has saved. No blob yet (nothing saved) or a
 * transient read error both fall through to `{}`, which is exactly the
 * "use the defaults" case `buildResolvedContent` already handles — a
 * fresh clone with no admin edits should render identically to the
 * original static copy, not throw.
 *
 * The content blob is stored with `access: "private"`, so it's read with
 * `get()` (server-only) rather than a public URL fetch.
 *
 * `useCache: false` is required: private blob reads are otherwise served
 * through a CDN cache, so a save in the admin editor could read back
 * stale content for a while afterward. This is admin-authored copy read
 * on every request, not high-traffic asset delivery, so paying for a
 * fresh read every time is the right trade-off.
 *
 * Deliberately NOT wrapped in React's `cache()`: that memoizes for the
 * lifetime of a request-scoped render pass, but this is also called from
 * plain Route Handlers (`/api/admin/content`), which don't get that
 * per-request reset — it would otherwise memoize the very first read
 * forever for the life of the server process, hiding every later save.
 */
export async function getContentOverrides(): Promise<Record<string, string>> {
  try {
    const result = await get(CONTENT_BLOB_PATHNAME, { access: "private", useCache: false });
    if (!result) return {};

    const text = await new Response(result.stream).text();
    const data = JSON.parse(text);
    if (typeof data !== "object" || data === null || Array.isArray(data)) return {};
    return data as Record<string, string>;
  } catch (error) {
    console.error("[content] Failed to read stored content:", error);
    return {};
  }
}
