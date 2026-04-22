import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware, editors, CLI tools, and ML stack I actually use.",
};

const sections: { title: string; items: { name: string; note?: string }[] }[] = [
  {
    title: "Hardware",
    items: [
      { name: "MacBook Pro 14\" · M-series" },
      { name: "LG UltraFine 4K", note: "32\" home studio" },
      { name: "Keychron Q1 Pro", note: "Tactile Gateron Browns" },
      { name: "Sony WH-1000XM5", note: "Daily drivers" },
      { name: "iPhone + iPad Pro", note: "Testing, reading, sketching" },
    ],
  },
  {
    title: "Editor / dev",
    items: [
      { name: "Cursor", note: "Primary editor; Claude Opus + GPT-5.4" },
      { name: "Neovim", note: "For quick edits over SSH" },
      { name: "Zed", note: "Paired sessions" },
      { name: "Warp", note: "Terminal" },
      { name: "GitHub + gh CLI" },
      { name: "Linear", note: "Personal task tracking" },
    ],
  },
  {
    title: "Shell / CLI",
    items: [
      { name: "Zsh + Starship" },
      { name: "fzf + ripgrep + fd" },
      { name: "eza", note: "ls replacement" },
      { name: "bat", note: "cat with highlighting" },
      { name: "httpie", note: "over curl, for debugging" },
      { name: "atuin", note: "shell history" },
    ],
  },
  {
    title: "ML / research",
    items: [
      { name: "PyTorch", note: "Default" },
      { name: "Hugging Face Transformers" },
      { name: "Weights & Biases", note: "Tracking & sweeps" },
      { name: "Modal + RunPod", note: "GPU burst" },
      { name: "uv", note: "Python env + package manager" },
      { name: "Pandas / Polars", note: "Polars for anything large" },
    ],
  },
  {
    title: "Design / web",
    items: [
      { name: "Figma", note: "All design work" },
      { name: "Framer / Rive", note: "Motion prototypes" },
      { name: "Next.js", note: "Default web framework" },
      { name: "Tailwind CSS", note: "Tokens-first styling" },
      { name: "Vercel", note: "Hosting + previews" },
      { name: "Supabase", note: "Auth + Postgres + realtime" },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="shell pt-40 pb-20">
      <div className="max-w-3xl mb-16">
        <p className="mono-label mb-5">
          <span className="text-[var(--color-accent)]">Setup</span> &nbsp; /uses
        </p>
        <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)]">
          Tools I actually <span className="italic text-[var(--color-accent)]">use</span>.
        </h1>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
          Not an aspirational list. This is the hardware and software I reach
          for every day for research, engineering, and shipping products.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 md:p-8"
          >
            <h2 className="mono-label mb-6">{s.title}</h2>
            <ul className="space-y-3">
              {s.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed border-[var(--color-hairline)] pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-[15px] text-[var(--color-ink)]">
                    {item.name}
                  </span>
                  {item.note ? (
                    <span className="text-[12px] font-mono uppercase tracking-widest text-[var(--color-subtle)] text-right">
                      {item.note}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
