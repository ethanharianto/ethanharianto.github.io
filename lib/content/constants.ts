/**
 * Shared between the read path (`resolve.server.ts`), the write path
 * (`app/api/admin/content/route.ts`), and the auth cookie
 * (`lib/admin/auth.ts`). Kept isomorphic — no server-only imports here.
 */

/** Fixed pathname in the Blob store. `allowOverwrite` + no random suffix
 * means saves always land at this same URL, so reads never have to guess
 * which blob is current. */
export const CONTENT_BLOB_PATHNAME = "site-content.json";

export const ADMIN_COOKIE_NAME = "admin_session";
