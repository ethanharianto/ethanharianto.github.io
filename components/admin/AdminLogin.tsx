"use client";

import { useState, type FormEvent } from "react";

export function AdminLogin({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!configured || submitting) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong.");
        return;
      }
      window.location.reload();
    } catch {
      setError("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="log mb-2">Admin</p>
        <h1 className="text-[28px] tracking-[-0.02em] mb-6">Site content</h1>

        {!configured ? (
          <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
            <code className="log-val">ADMIN_PASSWORD</code> isn&apos;t set for this project yet.
            Add it as an environment variable, then reload this page.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="log">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-hairline-strong)] bg-[var(--color-surface)] px-3 py-2.5 text-[15px] text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
              />
            </label>

            {error ? <p className="text-[13px] text-[var(--color-accent)]">{error}</p> : null}

            <button
              type="submit"
              disabled={submitting || password.length === 0}
              className="btn btn-primary mt-2 justify-center disabled:opacity-40 disabled:pointer-events-none"
            >
              {submitting ? "Checking…" : "Sign in"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
