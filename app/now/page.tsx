import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm working on right now, updated occasionally.",
};

const LAST_UPDATED = "Apr 2026";

const nowItems = [
  {
    heading: "Finishing the Stanford MS CS",
    body: "Taking the last quarter of the MS CS program at Stanford. Focused on ML systems, RL, and distributed infra. Graduating spring 2026 with both the BS and the coterminal MS.",
  },
  {
    heading: "Veridian",
    body: "Continuing to ship on Veridian — math-mistake analysis for classrooms — focused on the verification step of the mistake-analysis pipeline and the shared design system across the teacher and student apps.",
  },
  {
    heading: "Looking for my next role",
    body: "Actively looking for summer 2026 and full-time 2026 roles. Most interested in ML systems, developer tools, and deeply-crafted products at teams where the bar for taste and engineering rigor is equally high.",
  },
  {
    heading: "Reading",
    body: "Re-reading “Designing Data-Intensive Applications.” Working through recent RL-for-LLMs papers (RLVR, process rewards) with an eye for what actually transfers to production.",
  },
  {
    heading: "Building for fun",
    body: "A small set of Raycast extensions and a personal writing pipeline. Nothing shipped publicly yet.",
  },
];

export default function NowPage() {
  return (
    <div className="shell pt-40 pb-20">
      <div className="max-w-3xl mb-16">
        <p className="mono-label mb-5">
          <span className="text-[var(--color-accent)]">Status</span> &nbsp; /now
        </p>
        <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)]">
          What I'm on, <span className="italic text-[var(--color-accent)]">right now</span>.
        </h1>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
          Inspired by Derek Sivers' <a className="link-underline" href="https://nownownow.com/about" target="_blank" rel="noreferrer">/now page convention</a>.
          A snapshot of priorities rather than a feed. Last updated {LAST_UPDATED}.
        </p>
      </div>

      <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
        {nowItems.map((item) => (
          <div
            key={item.heading}
            className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10"
          >
            <div className="md:col-span-4">
              <h3 className="text-xl md:text-2xl tracking-[-0.02em]">
                {item.heading}
              </h3>
            </div>
            <p className="md:col-span-8 text-[16px] leading-relaxed text-[var(--color-muted)] max-w-prose">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
