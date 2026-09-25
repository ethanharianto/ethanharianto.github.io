import "server-only";

import { createHash } from "node:crypto";
import { cookies } from "next/headers";

import { ADMIN_COOKIE_NAME } from "@/lib/content/constants";

/**
 * No session store — the cookie value IS the session, verified by
 * recomputing it from `ADMIN_PASSWORD` on every request. Stateless, and
 * with no database this is the whole point: nothing to provision, and
 * rotating the password (a new env var value) invalidates every
 * existing cookie for free.
 */
function expectedToken(): string | null {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) return null;
  return createHash("sha256").update(secret).digest("hex");
}

export async function isAdminAuthorized(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;
  const jar = await cookies();
  return jar.get(ADMIN_COOKIE_NAME)?.value === expected;
}

/** Returns the session token to set as the cookie value, or null if the
 * password is wrong (or `ADMIN_PASSWORD` isn't configured at all). */
export function checkPassword(password: string): string | null {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret || password !== secret) return null;
  return expectedToken();
}
