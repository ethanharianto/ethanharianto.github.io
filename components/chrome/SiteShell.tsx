"use client";

import { useState } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";
import { LenisProvider } from "./LenisProvider";
import { Grain } from "./Grain";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [cmdkOpen, setCmdkOpen] = useState(false);
  return (
    <LenisProvider>
      <Grain />
      <CommandPalette open={cmdkOpen} setOpen={setCmdkOpen} />
      <Nav onOpenCmdk={() => setCmdkOpen(true)} />
      <main id="main" className="relative z-[2]">
        {children}
      </main>
      <Footer />
    </LenisProvider>
  );
}
