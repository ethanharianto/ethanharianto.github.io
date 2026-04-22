import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function AboutBlurb() {
  return (
    <section id="about" className="py-28 md:py-40 relative">
      <div className="shell">
        <SectionHeader
          index="02"
          label="About"
          title="Building the whole product from day one."
        />

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Reveal className="sticky top-32 space-y-4">
              <p className="mono-label">How I work</p>
              <ul className="space-y-3 text-[15px] text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  Own the wedge — from first customer to shipped product.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  Decide under ambiguity; revise when the data tells me to.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  Design, engineering, and go-to-market as one feedback loop.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-accent)]">→</span>
                  ML when it&apos;s the unlock, not when it&apos;s the pitch.
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-7 space-y-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-ink)] max-w-[56ch]">
            <Reveal delay={0.05}>
              <p>
                I like being the person who takes a company from nothing to a
                working product in the hands of real users — writing the code,
                talking to the first ten customers, and owning the wedge from
                strategy down to the last pixel.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                I&apos;m comfortable across the stack — interactive frontends,
                distributed backends, and ML systems when the problem needs
                one — and I move fastest when a small team is making
                consequential decisions under ambiguity.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                I&apos;m finishing an MS &amp; BS in CS at Stanford in 2026
                and joining Pear Prime &apos;26. Looking for a full-time
                founding-engineer role at an early-stage, ambitious team
                starting 2026.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
