import type { Metadata } from "next";

import { isAdminAuthorized } from "@/lib/admin/auth";
import { getContentOverrides } from "@/lib/content/resolve.server";
import { contentFields, contentGroups } from "@/lib/content/schema";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminEditor } from "@/components/admin/AdminEditor";

export const metadata: Metadata = {
  title: "Admin — Site content",
  robots: { index: false, follow: false },
};

// Always re-check the cookie and re-read Blob — this page cannot be
// statically cached without either leaking a stale login gate or
// serving stale content after a save.
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authed = await isAdminAuthorized();

  if (!authed) {
    return <AdminLogin configured={!!process.env.ADMIN_PASSWORD} />;
  }

  const overrides = await getContentOverrides();
  const initialContent: Record<string, string> = {};
  for (const field of contentFields) {
    initialContent[field.key] = overrides[field.key] ?? field.default;
  }

  return (
    <AdminEditor initialContent={initialContent} fields={contentFields} groups={contentGroups} />
  );
}
