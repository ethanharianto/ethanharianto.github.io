import { type NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

import { isAdminAuthorized } from "@/lib/admin/auth";
import { getContentOverrides } from "@/lib/content/resolve.server";
import { contentFields } from "@/lib/content/schema";
import { CONTENT_BLOB_PATHNAME } from "@/lib/content/constants";

const MAX_FIELD_LENGTH = 20000;

export async function GET() {
  if (!(await isAdminAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const overrides = await getContentOverrides();
  const merged: Record<string, string> = {};
  for (const field of contentFields) {
    merged[field.key] = overrides[field.key] ?? field.default;
  }
  return NextResponse.json({ content: merged });
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  // Only known keys get written, and only as strings — this is the
  // difference between "editable text" and "arbitrary JSON someone
  // could point at this route."
  const validKeys = new Set(contentFields.map((f) => f.key));
  const sanitized: Record<string, string> = {};
  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    if (!validKeys.has(key) || typeof value !== "string") continue;
    sanitized[key] = value.slice(0, MAX_FIELD_LENGTH);
  }

  await put(CONTENT_BLOB_PATHNAME, JSON.stringify(sanitized), {
    access: "private",
    contentType: "application/json",
    allowOverwrite: true,
    addRandomSuffix: false,
  });

  return NextResponse.json({ ok: true });
}
