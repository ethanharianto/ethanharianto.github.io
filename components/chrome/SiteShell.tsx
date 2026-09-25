"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { CommandPalette } from "./CommandPalette";
import { LenisProvider } from "./LenisProvider";
import { Grain } from "./Grain";
import { CurveRail } from "@/components/ui/RewardCurve";

// Only the homepage has this run of sections with matching ids — the rail
// is meaningless (and would silently no-op) anywhere else.
const HOME_SECTIONS = [
  { id: "work", name: "Selected work" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "writing", name: "Writing" },
  { id: "contact", name: "Contact" },
];

export function SiteShell({
  children,
  footer,
}: {
  children: React.ReactNode;
  // Footer is a Server Component (it reads resolved content directly).
  // SiteShell is a Client Component, so Footer must be rendered by a
  // Server Component ancestor (RootLayout) and passed down as a node —
  // importing and rendering it here would pull its server-only code into
  // the client bundle.
  footer: React.ReactNode;
}) {
  const [cmdkOpen, setCmdkOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // The admin editor ships its own header, section nav and Save button.
  // Site chrome is a fixed z-40 bar at the top of the viewport — the same
  // band the admin header occupies — so stacking it here painted over the
  // Save button and swallowed its clicks. Give admin the bare shell.
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <main id="main" className="relative z-[2]">
        {children}
      </main>
    );
  }

  return (
    <LenisProvider>
      <Grain />
      <CommandPalette open={cmdkOpen} setOpen={setCmdkOpen} />
      <Nav onOpenCmdk={() => setCmdkOpen(true)} />
      {isHome && (
        <CurveRail
          sections={HOME_SECTIONS}
          className="fixed left-6 top-1/2 z-[40] hidden -translate-y-1/2 xl:block"
        />
      )}
      <main id="main" className="relative z-[2]">
        {children}
      </main>
      {footer}
    </LenisProvider>
  );
}
