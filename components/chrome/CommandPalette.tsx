"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Search,
  Home as HomeIcon,
  FolderGit2,
  Mail,
  FileText,
  Github,
  Linkedin,
  Pen,
  Clock,
  Wrench,
} from "lucide-react";

import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandPalette({ open, setOpen }: CommandPaletteProps) {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const go = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-xl border border-[var(--color-hairline-strong)] bg-[rgba(17,17,20,0.85)] backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden z-50"
    >
      <div className="flex items-center gap-3 border-b border-[var(--color-hairline)] px-4">
        <Search size={16} className="text-[var(--color-muted)]" />
        <Command.Input
          placeholder="Type a command or jump anywhere…"
          className="flex-1 bg-transparent border-none outline-none py-4 text-sm font-mono text-[var(--color-ink)] placeholder:text-[var(--color-subtle)]"
        />
        <span className="hidden sm:inline font-mono text-[10px] text-[var(--color-subtle)] uppercase tracking-wider">
          Esc to close
        </span>
      </div>

      <Command.List className="max-h-[420px] overflow-y-auto overflow-x-hidden py-3 px-2">
        <Command.Empty className="py-10 text-center text-sm text-[var(--color-muted)]">
          No results.
        </Command.Empty>

        <Command.Group
          heading="Pages"
          className="text-[10px] text-[var(--color-subtle)] font-mono uppercase tracking-widest mb-1 px-2"
        >
          <Item
            icon={<HomeIcon size={14} />}
            label="Home"
            onSelect={() => go(() => router.push("/"))}
          />
          <Item
            icon={<FolderGit2 size={14} />}
            label="Work"
            onSelect={() => go(() => router.push("/work"))}
          />
          <Item
            icon={<Pen size={14} />}
            label="Writing"
            onSelect={() => go(() => router.push("/writing"))}
          />
          <Item
            icon={<Clock size={14} />}
            label="Now"
            onSelect={() => go(() => router.push("/now"))}
          />
          <Item
            icon={<Wrench size={14} />}
            label="Uses"
            onSelect={() => go(() => router.push("/uses"))}
          />
          <Item
            icon={<FileText size={14} />}
            label="CV"
            onSelect={() => go(() => router.push("/cv"))}
          />
        </Command.Group>

        <Command.Separator className="my-2 h-px bg-[var(--color-hairline)]" />

        <Command.Group
          heading="Featured work"
          className="text-[10px] text-[var(--color-subtle)] font-mono uppercase tracking-widest mb-1 px-2"
        >
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <Item
                key={p.slug}
                icon={<FolderGit2 size={14} />}
                label={p.title}
                hint={p.category}
                onSelect={() => go(() => router.push(`/work/${p.slug}`))}
              />
            ))}
        </Command.Group>

        <Command.Separator className="my-2 h-px bg-[var(--color-hairline)]" />

        <Command.Group
          heading="Contact"
          className="text-[10px] text-[var(--color-subtle)] font-mono uppercase tracking-widest mb-1 px-2"
        >
          <Item
            icon={<Mail size={14} />}
            label="Email"
            hint={site.email}
            onSelect={() =>
              go(() => {
                window.location.href = `mailto:${site.email}`;
              })
            }
          />
          <Item
            icon={<Github size={14} />}
            label="GitHub"
            onSelect={() => go(() => window.open(site.social.github, "_blank"))}
          />
          <Item
            icon={<Linkedin size={14} />}
            label="LinkedIn"
            onSelect={() =>
              go(() => window.open(site.social.linkedin, "_blank"))
            }
          />
          <Item
            icon={<FileText size={14} />}
            label="Resume (PDF)"
            onSelect={() => go(() => window.open(site.resume, "_blank"))}
          />
        </Command.Group>
      </Command.List>

      <div className="border-t border-[var(--color-hairline)] px-4 py-2 flex items-center justify-between text-[10px] font-mono text-[var(--color-subtle)] uppercase tracking-widest">
        <span className="inline-flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-hairline)]">
            ↑
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-hairline)]">
            ↓
          </kbd>
          navigate
        </span>
        <span className="inline-flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-hairline)]">
            ↵
          </kbd>
          select
        </span>
      </div>
    </Command.Dialog>
  );
}

function Item({
  icon,
  label,
  hint,
  onSelect,
}: {
  icon: React.ReactNode;
  label: string;
  hint?: string;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--color-ink)] hover:bg-[rgba(250,250,247,0.04)] cursor-pointer transition-colors aria-selected:bg-[rgba(250,250,247,0.06)]"
    >
      <span className="text-[var(--color-muted)]">{icon}</span>
      <span>{label}</span>
      {hint ? (
        <span className="ml-auto font-mono text-[10px] text-[var(--color-subtle)] uppercase tracking-wider">
          {hint}
        </span>
      ) : null}
    </Command.Item>
  );
}
