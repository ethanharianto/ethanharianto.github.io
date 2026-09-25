import { type NextRequest, NextResponse } from "next/server";

import { checkPassword } from "@/lib/admin/auth";
import { ADMIN_COOKIE_NAME } from "@/lib/content/constants";

export async function POST(request: NextRequest) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD isn't configured for this project yet." },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";
  const token = checkPassword(password);

  if (!token) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return res;
}
