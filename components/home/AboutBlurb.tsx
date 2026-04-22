import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function AboutBlurb() {
  return (
    <section id="about" className="py-28 md:py-40 relative">
      <div className="shell">
        <SectionHeader
          index="02"
          label="About"
          title="Full-stack by habit. ML systems by obsession."
        />

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Reveal className="sticky top-32 space-y-4">
              <p className="mono-label">What I care about</p>
              <ul className="space-y-3 text-[15px] text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  Shipping things end-to-end, not just prototypes.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  Systems that degrade gracefully under load.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  Tools for people with constraints — accessibility, cost, latency.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  Research that survives contact with production.
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-7 space-y-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-ink)] max-w-[56ch]">
            <Reveal delay={0.05}>
              <p>
                I build across the stack — interactive frontends, distributed
                backends, and data-intensive ML components — with a bias toward
                shipping complete products. I care about reliability and clean
                interfaces at the seams where humans, models, and infrastructure
                meet.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Recent focus: realtime conversational pipelines on WebRTC,
                RL-based prompt compression, and accessibility-first mobile
                tooling. I'm drawn to the messy middle between research and
                production, where a clever idea has to hold up at scale.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                I'm currently finishing an MS &amp; BS in CS at Stanford,
                graduating in 2026, and looking for work where the bar for
                taste and engineering rigor is equally high.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
