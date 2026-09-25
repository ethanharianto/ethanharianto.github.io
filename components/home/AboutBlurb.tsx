import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Slot } from "@/components/ui/Slot";
import { getContentOverrides } from "@/lib/content/resolve.server";
import { buildResolvedContent } from "@/lib/content/shape";

/**
 * The layers, with no paragraph beside them.
 *
 * This section was two columns — a stack of claims on the left, prose
 * asserting the same claims on the right. That's the portfolio habit:
 * say it twice, once as a list and once as a paragraph. With the prose
 * removed, the layer stack carries the section on its own, and it's the
 * stronger layout — a cross-section of real work argues breadth better
 * than a paragraph claiming it.
 *
 * `aboutProse` in `@/lib/copy` can still fill the second column. Until
 * it's written, the stack goes full width and the section gets shorter.
 */
export async function AboutBlurb() {
  const overrides = await getContentOverrides();
  const { about, aboutProse, layers } = buildResolvedContent(overrides);
  const hasProse = aboutProse.some((p) => p.text);

  return (
    <section id="about" className="py-28 md:py-40 relative">
      <div className="shell">
        <SectionHeader index="02" label={about.label} title={about.title} />

        <div
          className={
            hasProse
              ? "grid md:grid-cols-12 gap-8 md:gap-12"
              : "max-w-5xl"
          }
        >
          <div className={hasProse ? "md:col-span-5" : ""}>
            <Reveal className={hasProse ? "sticky top-32" : ""}>
              <p className="log mb-5">The layers</p>
              <dl className="border-t border-[var(--color-hairline)]">
                {layers.map(({ layer, evidence }) => (
                  <div
                    key={layer}
                    className="border-b border-[var(--color-hairline)] py-5"
                  >
                    <dt className="display text-[22px] md:text-[26px] text-[var(--color-ink)]">
                      {layer}
                    </dt>
                    <dd className="mt-2">
                      <Slot
                        as="div"
                        className="text-[15px] leading-relaxed text-[var(--color-muted)] max-w-[52ch]"
                        slot={{
                          text: evidence,
                          hint: `One real project per layer. ${
                            layer === "Systems"
                              ? "The WebRTC pipeline, the Go gateway."
                              : layer === "Interfaces"
                                ? "React + Expo on one backend. The shipped iOS app."
                                : layer === "Models"
                                  ? "The reward-design paper."
                                  : "PintOS, the FPGA player, the quadruped."
                          }`,
                        }}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {hasProse ? (
            <div className="md:col-span-7 space-y-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-ink)] max-w-[56ch]">
              {aboutProse.map((p, i) =>
                p.text ? (
                  <Reveal key={i} delay={0.05 * (i + 1)}>
                    <Slot slot={p} className="" />
                  </Reveal>
                ) : null,
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
