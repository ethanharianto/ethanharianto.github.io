import {
  hero as heroDefault,
  about as aboutDefault,
  layers as layersDefault,
  aboutProse as aboutProseDefault,
  contact as contactDefault,
  sections as sectionsDefault,
  type CopySlot,
} from "@/lib/copy";
import { site as siteDefault } from "@/lib/site";
import { experience as experienceDefault } from "@/lib/experience";
import { projects as projectsDefault } from "@/lib/projects";

import { contentFields } from "./schema";

/** Plain string field: the override wins whenever it's non-empty,
 * otherwise fall back to whatever the site originally shipped with. */
function val(overrides: Record<string, string>, key: string, fallback: string): string {
  const v = overrides[key];
  return typeof v === "string" && v.length > 0 ? v : fallback;
}

/** Slot field: an empty override means "not written" — same as the
 * original `todo()` — so it renders as `null`, not as literal empty
 * text. The hint always comes from the schema default, never from the
 * saved value, so the placeholder stays meaningful even after a save. */
function slot(overrides: Record<string, string>, key: string): CopySlot {
  const v = overrides[key];
  const text = typeof v === "string" && v.trim().length > 0 ? v : null;
  const field = contentFields.find((f) => f.key === key);
  return { text, hint: field?.hint };
}

/**
 * Turns saved admin overrides into the exact shapes the components
 * already expect (`CopySlot`s, the `Project[]` array, etc). Pure and
 * isomorphic — used server-side (layout, `/work`) to build props, and
 * again inside `ContentProvider` so client components see the same
 * result without a second round trip.
 */
export function buildResolvedContent(overrides: Record<string, string>) {
  const resolvedHero = {
    headline: val(overrides, "hero.headline", heroDefault.headline),
    lede: slot(overrides, "hero.lede"),
    evidence: heroDefault.evidence.map((e) => ({
      k: e.k,
      v: e.k === "looking for" ? slot(overrides, "hero.lookingFor").text : e.v,
    })),
    phases: heroDefault.phases,
    marquee: heroDefault.marquee,
  };

  const resolvedAbout = {
    label: aboutDefault.label,
    title: slot(overrides, "about.title"),
  };

  const resolvedLayers = layersDefault.map((l) => ({
    layer: l.layer,
    evidence: slot(overrides, `layers.${l.layer}`).text,
  }));

  const resolvedAboutProse: CopySlot[] = aboutProseDefault.map((_, i) =>
    slot(overrides, `aboutProse.${i}`),
  );

  const resolvedContact = {
    headline: slot(overrides, "contact.headline"),
    body: slot(overrides, "contact.body"),
  };

  const resolvedSections = {
    work: {
      label: sectionsDefault.work.label,
      title: slot(overrides, "sections.work.title"),
      description: slot(overrides, "sections.work.description"),
    },
    writing: {
      label: sectionsDefault.writing.label,
      title: slot(overrides, "sections.writing.title"),
      description: slot(overrides, "sections.writing.description"),
    },
    experience: {
      label: sectionsDefault.experience.label,
      title: slot(overrides, "sections.experience.title"),
    },
  };

  const resolvedSite = {
    ...siteDefault,
    name: val(overrides, "site.name", siteDefault.name),
    title: val(overrides, "site.title", siteDefault.title),
    description: val(overrides, "site.description", siteDefault.description),
    location: val(overrides, "site.location", siteDefault.location),
    email: val(overrides, "site.email", siteDefault.email),
  };

  const resolvedExperience = experienceDefault.map((e, i) => ({
    ...e,
    description: val(overrides, `experience.${i}.description`, e.description),
    achievements: val(overrides, `experience.${i}.achievements`, e.achievements.join("\n"))
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean),
  }));

  const resolvedProjects = projectsDefault.map((p) => ({
    ...p,
    title: val(overrides, `projects.${p.slug}.title`, p.title),
    description: val(overrides, `projects.${p.slug}.description`, p.description),
  }));

  return {
    hero: resolvedHero,
    about: resolvedAbout,
    layers: resolvedLayers,
    aboutProse: resolvedAboutProse,
    contact: resolvedContact,
    sections: resolvedSections,
    site: resolvedSite,
    experience: resolvedExperience,
    projects: resolvedProjects,
  };
}

export type ResolvedContent = ReturnType<typeof buildResolvedContent>;
