/**
 * Every line of prose on the site, in one file.
 *
 * The rule for this file: structure and facts are filled in, argument
 * is not. Anything marked `TODO` is deliberately blank — the argument
 * is Ethan's to write, and a sentence written for him is a sentence
 * that sounds like him until it doesn't.
 *
 * `null` means "not written yet". Components render a visible
 * placeholder for it in dev so a gap shows up on the page rather than
 * silently shipping as an empty <p>.
 */

export interface CopySlot {
  /** null = not written yet. */
  text: string | null;
  /** Shown as a hint in place of the blank. Never rendered in prod. */
  hint?: string;
}

const todo = (hint: string): CopySlot => ({ text: null, hint });

/* ── Hero ──────────────────────────────────────────────────────── */

export const hero = {
  /**
   * The one line the whole site rests on. Kept short on purpose — a
   * long headline here reads as a thesis statement, which is the thing
   * this site is trying not to be.
   */
  headline: "Someone has to fix it. Why not me?",

  lede: todo(
    "Two or three lines. What you are, and the throughline across the " +
      "work below. Resist listing projects here — the work section is " +
      "40 lines down.",
  ),

  /**
   * The evidence row. Keys are filled in because they're structural;
   * the third value is the availability claim, which is a positioning
   * decision, not a fact.
   */
  evidence: [
    { k: "graduating", v: "Stanford CS '26" },
    { k: "joining", v: "Pear Prime '26" },
    { k: "looking for", v: null },
  ],

  /** The curve's x-axis. Structural: five phases of one run. */
  phases: [
    "the bug nobody filed",
    "the constraint",
    "the build",
    "what has to hold",
    "shipped",
  ],

  marquee: ["systems", "interfaces", "models", "machines"],
};

/* ── About ─────────────────────────────────────────────────────── */

/**
 * The layers. Names are the taxonomy and are filled in; the evidence
 * under each is yours, one real project per layer. This is the section
 * that replaces a page of prose — a stack of things you actually did
 * argues the cross-section better than a paragraph claiming it.
 */
export const about = {
  label: "About",
  title: todo("Optional. The four layer names below already say it."),
};

export const layers = [
  { layer: "Systems", evidence: null },
  { layer: "Interfaces", evidence: null },
  { layer: "Models", evidence: null },
  { layer: "Machines", evidence: null },
];

/**
 * Optional. If this stays null the About section renders the layer
 * stack full-width with no second column — which is the stronger
 * layout anyway, and the one to prefer if the writing doesn't happen.
 */
export const aboutProse: CopySlot[] = [
  todo("The throughline. Why the same person ends up holding very " +
       "different problems."),
  todo("Optional: what you actually prefer about the work."),
  todo("Optional: Stanford '26, Pear Prime '26, and what you're " +
       "looking for after that."),
];

/* ── Contact ───────────────────────────────────────────────────── */

export const contact = {
  headline: todo("The ask. Short enough to set at 160px."),
  body: todo("What you're looking for, and what makes an email worth " +
             "reading."),
};

/* ── Social card ───────────────────────────────────────────────── */

/**
 * The social card. Derived from the hero headline rather than written
 * separately, so there's one line on the site instead of three that
 * drift apart. Override `lines` if you want the card to say something
 * the homepage doesn't.
 */
export const og = {
  lines: null as string[] | null,
};

export function ogLines(): string[] {
  if (og.lines) return og.lines;
  return hero.headline
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/* ── Section headers ───────────────────────────────────────────── */

/**
 * The `label` on each is structural — it's the nav word, and it tells a
 * reader where they are without being read. The `title` is the line
 * that earns its size, and it's yours. Left null, the section renders
 * as a bare index: "01 —— Selected work" above the work. That is the
 * quieter layout and the better default; a title is an addition, not
 * a requirement.
 */
export const sections = {
  work: {
    label: "Selected work",
    title: todo("Optional. The work below already argues this."),
    description: todo("Optional. One line on what these three have in common."),
  },
  writing: {
    label: "Writing",
    title: todo("Optional. Same note as above."),
    description: todo("Optional. What you write about, and why."),
  },
  experience: {
    label: "Experience",
    title: todo("Optional. Or leave blank — the dates and titles say it."),
  },
};
