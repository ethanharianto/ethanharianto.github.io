import { hero, about, layers, aboutProse, contact, sections } from "@/lib/copy";
import { site } from "@/lib/site";
import { experience } from "@/lib/experience";
import { projects } from "@/lib/projects";

export type ContentFieldType = "text" | "textarea";

export interface ContentField {
  key: string;
  label: string;
  group: string;
  type: ContentFieldType;
  /** Value to fall back to when nothing has been saved for this key. */
  default: string;
  /** Slot fields treat an empty value as "not written" — the site hides
   * it (or shows a hint in dev) instead of rendering a blank string. */
  slot?: boolean;
  hint?: string;
}

const evidenceLookingFor = hero.evidence.find((e) => e.k === "looking for");

/**
 * Every editable string on the site, in one flat list. Built from the
 * same modules the components already read (`lib/copy`, `lib/site`,
 * `lib/experience`, `lib/projects`) so the admin form and the live site
 * can never drift — a new project or experience entry just shows up
 * here automatically.
 */
export const contentFields: ContentField[] = [
  // Hero
  {
    key: "hero.headline",
    label: "Headline",
    group: "Hero",
    type: "text",
    default: hero.headline,
  },
  {
    key: "hero.lede",
    label: "Lede",
    group: "Hero",
    type: "textarea",
    default: hero.lede.text ?? "",
    slot: true,
    hint: hero.lede.hint,
  },
  {
    key: "hero.lookingFor",
    label: "Looking for",
    group: "Hero",
    type: "text",
    default: evidenceLookingFor?.v ?? "",
    slot: true,
    hint: 'Shown in the evidence row, e.g. "summer 2026 internships".',
  },

  // About
  {
    key: "about.title",
    label: "Section title",
    group: "About",
    type: "text",
    default: about.title.text ?? "",
    slot: true,
    hint: about.title.hint,
  },
  ...layers.map(
    (l): ContentField => ({
      key: `layers.${l.layer}`,
      label: `${l.layer} — evidence`,
      group: "About",
      type: "textarea",
      default: l.evidence ?? "",
      slot: true,
      hint: "One real project for this layer.",
    }),
  ),
  ...aboutProse.map(
    (p, i): ContentField => ({
      key: `aboutProse.${i}`,
      label: `Prose paragraph ${i + 1}`,
      group: "About",
      type: "textarea",
      default: p.text ?? "",
      slot: true,
      hint: p.hint,
    }),
  ),

  // Contact
  {
    key: "contact.headline",
    label: "Headline",
    group: "Contact",
    type: "text",
    default: contact.headline.text ?? "",
    slot: true,
    hint: contact.headline.hint,
  },
  {
    key: "contact.body",
    label: "Body",
    group: "Contact",
    type: "textarea",
    default: contact.body.text ?? "",
    slot: true,
    hint: contact.body.hint,
  },

  // Section headers
  {
    key: "sections.work.title",
    label: "Work — title",
    group: "Section headers",
    type: "text",
    default: sections.work.title.text ?? "",
    slot: true,
    hint: sections.work.title.hint,
  },
  {
    key: "sections.work.description",
    label: "Work — description",
    group: "Section headers",
    type: "textarea",
    default: sections.work.description.text ?? "",
    slot: true,
    hint: sections.work.description.hint,
  },
  {
    key: "sections.writing.title",
    label: "Writing — title",
    group: "Section headers",
    type: "text",
    default: sections.writing.title.text ?? "",
    slot: true,
    hint: sections.writing.title.hint,
  },
  {
    key: "sections.writing.description",
    label: "Writing — description",
    group: "Section headers",
    type: "textarea",
    default: sections.writing.description.text ?? "",
    slot: true,
    hint: sections.writing.description.hint,
  },
  {
    key: "sections.experience.title",
    label: "Experience — title",
    group: "Section headers",
    type: "text",
    default: sections.experience.title.text ?? "",
    slot: true,
    hint: sections.experience.title.hint,
  },

  // Site
  { key: "site.name", label: "Name", group: "Site", type: "text", default: site.name },
  {
    key: "site.title",
    label: "Page title (SEO)",
    group: "Site",
    type: "text",
    default: site.title,
  },
  {
    key: "site.description",
    label: "Description (SEO + footer)",
    group: "Site",
    type: "textarea",
    default: site.description,
  },
  {
    key: "site.location",
    label: "Location",
    group: "Site",
    type: "text",
    default: site.location,
  },
  { key: "site.email", label: "Email", group: "Site", type: "text", default: site.email },

  // Experience
  ...experience.flatMap((e, i): ContentField[] => [
    {
      key: `experience.${i}.description`,
      label: `${e.company} — description`,
      group: "Experience",
      type: "textarea",
      default: e.description,
    },
    {
      key: `experience.${i}.achievements`,
      label: `${e.company} — achievements (one per line)`,
      group: "Experience",
      type: "textarea",
      default: e.achievements.join("\n"),
    },
  ]),

  // Projects
  ...projects.flatMap((p): ContentField[] => [
    {
      key: `projects.${p.slug}.title`,
      label: `${p.title} — title`,
      group: "Projects",
      type: "text",
      default: p.title,
    },
    {
      key: `projects.${p.slug}.description`,
      label: `${p.title} — description`,
      group: "Projects",
      type: "textarea",
      default: p.description,
    },
  ]),
];

export const contentGroups: string[] = Array.from(new Set(contentFields.map((f) => f.group)));

export function defaultContentMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const f of contentFields) map[f.key] = f.default;
  return map;
}
