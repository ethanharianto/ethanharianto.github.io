"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type { ContentField } from "@/lib/content/schema";
import { cn } from "@/lib/cn";

interface AdminEditorProps {
  initialContent: Record<string, string>;
  fields: ContentField[];
  groups: string[];
}

type SaveState = "idle" | "saving" | "saved" | "error";

export function AdminEditor({ initialContent, fields, groups }: AdminEditorProps) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState(groups[0]);
  const [loggingOut, setLoggingOut] = useState(false);

  const dirty = useMemo(
    () => fields.some((f) => content[f.key] !== initialContent[f.key]),
    [content, initialContent, fields],
  );

  const fieldsByGroup = useMemo(() => {
    const map = new Map<string, ContentField[]>();
    for (const field of fields) {
      const list = map.get(field.group) ?? [];
      list.push(field);
      map.set(field.group, list);
    }
    return map;
  }, [fields]);

  function setValue(key: string, value: string) {
    setContent((prev) => ({ ...prev, [key]: value }));
    if (saveState !== "idle") setSaveState("idle");
  }

  function resetField(key: string, fallback: string) {
    setValue(key, fallback);
  }

  async function onSave() {
    setSaveState("saving");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error ?? "Save failed.");
        setSaveState("error");
        return;
      }
      setSaveState("saved");
      router.refresh();
    } catch {
      setErrorMessage("Save failed.");
      setSaveState("error");
    }
  }

  async function onLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/login", { method: "DELETE" });
      window.location.reload();
    } finally {
      setLoggingOut(false);
    }
  }

  const activeFields = fieldsByGroup.get(activeGroup) ?? [];

  return (
    <main className="min-h-screen pb-32">
      <header className="sticky top-0 z-10 border-b border-[var(--color-hairline)] bg-[rgba(11,13,15,0.92)] backdrop-blur-xl">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <div>
            <p className="log">Admin</p>
            <h1 className="text-[17px] tracking-[-0.01em] leading-none">Site content</h1>
          </div>

          <div className="flex items-center gap-3">
            {saveState === "saved" ? <span className="log">Saved</span> : null}
            {saveState === "error" ? (
              <span className="log text-[var(--color-accent)]">{errorMessage}</span>
            ) : null}
            <button
              onClick={onSave}
              disabled={!dirty || saveState === "saving"}
              className="btn btn-primary disabled:opacity-40 disabled:pointer-events-none"
            >
              {saveState === "saving" ? "Saving…" : "Save changes"}
            </button>
            <button onClick={onLogout} disabled={loggingOut} className="btn">
              Log out
            </button>
          </div>
        </div>
      </header>

      <div className="shell mt-8 flex gap-10">
        <nav className="hidden md:flex flex-col gap-1 w-44 shrink-0 sticky top-24 self-start">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={cn(
                "text-left px-3 py-2 text-[14px] rounded-[var(--radius-md)] transition-colors",
                group === activeGroup
                  ? "text-[var(--color-ink)] bg-[var(--color-surface)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
              )}
            >
              {group}
            </button>
          ))}
        </nav>

        <div className="flex-1 min-w-0 max-w-2xl">
          <div className="md:hidden mb-6 flex flex-wrap gap-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={cn(
                  "px-3 py-1.5 text-[13px] rounded-full border",
                  group === activeGroup
                    ? "border-[var(--color-ink)] text-[var(--color-ink)]"
                    : "border-[var(--color-hairline)] text-[var(--color-muted)]",
                )}
              >
                {group}
              </button>
            ))}
          </div>

          <h2 className="text-[22px] tracking-[-0.02em] mb-6">{activeGroup}</h2>

          <div className="flex flex-col gap-7">
            {activeFields.map((field) => {
              const value = content[field.key] ?? "";
              const isDirty = value !== initialContent[field.key];
              return (
                <div key={field.key} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <label htmlFor={field.key} className="log">
                      {field.label}
                      {isDirty ? <span className="text-[var(--color-accent)]"> ·</span> : null}
                    </label>
                    {field.slot && value.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => resetField(field.key, "")}
                        className="log hover:text-[var(--color-ink)] transition-colors"
                      >
                        Clear
                      </button>
                    ) : null}
                  </div>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.key}
                      value={value}
                      onChange={(e) => setValue(field.key, e.target.value)}
                      placeholder={field.hint}
                      rows={4}
                      className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] px-3 py-2.5 text-[15px] leading-relaxed text-[var(--color-ink)] outline-none placeholder:text-[var(--color-subtle)] focus-visible:border-[var(--color-accent)]"
                    />
                  ) : (
                    <input
                      id={field.key}
                      type="text"
                      value={value}
                      onChange={(e) => setValue(field.key, e.target.value)}
                      placeholder={field.hint}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] px-3 py-2.5 text-[15px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-subtle)] focus-visible:border-[var(--color-accent)]"
                    />
                  )}

                  {field.slot && field.hint ? (
                    <p className="text-[12px] text-[var(--color-subtle)]">{field.hint}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
