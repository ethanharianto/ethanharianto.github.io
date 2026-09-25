"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Command } from "lucide-react";

import { Wordmark } from "@/components/brand/Wordmark";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

interface NavProps {
  onOpenCmdk: () => void;
}

export function Nav({ onOpenCmdk }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMac(
      typeof navigator !== "undefined" &&
        navigator.platform.toUpperCase().includes("MAC"),
    );
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-[background,backdrop-filter,border-color] duration-500",
        scrolled
          ? "backdrop-blur-xl bg-[rgba(11,13,15,0.72)] border-b border-[var(--color-hairline)]"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-[22px] leading-none tracking-[-0.04em] hover:text-[var(--color-accent)] transition-colors"
          aria-label="Home"
        >
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {site.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-[15px] transition-colors",
                  active
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                )}
              >
                {item.name}
              </Link>
            );
          })}

          <button
            onClick={onOpenCmdk}
            className="ml-2 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-hairline)] text-[var(--color-muted)] hover:border-[var(--color-hairline-strong)] hover:text-[var(--color-ink)] transition-colors"
            aria-label="Open command menu"
          >
            <span className="log">Search</span>
            <span className="inline-flex items-center gap-1 log">
              {isMac ? <Command size={10} /> : "Ctrl"}K
            </span>
          </button>
        </nav>

        <button
          className="md:hidden text-[var(--color-ink)] p-2"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="md:hidden border-t border-[var(--color-hairline)] bg-[rgba(11,13,15,0.95)] backdrop-blur-xl">
          <nav className="shell flex flex-col py-6 gap-1">
            {site.nav.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-baseline gap-3 py-2 text-xl tracking-tight"
              >
                <span className="font-mono text-[10px] text-[var(--color-subtle)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCmdk();
              }}
              className="mt-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-[var(--color-hairline-strong)] text-sm"
            >
              Open command menu
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
