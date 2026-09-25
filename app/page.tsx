import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { AboutBlurb } from "@/components/home/AboutBlurb";
import { ExperienceStrip } from "@/components/home/ExperienceStrip";
import { WritingPreview } from "@/components/home/WritingPreview";
import { ContactBlock } from "@/components/home/ContactBlock";
import { getPublishedCaseStudies } from "@/lib/content";

export default function HomePage() {
  const caseStudySlugs = getPublishedCaseStudies().map((s) => s.slug);

  return (
    <>
      <Hero />
      <SelectedWork caseStudySlugs={caseStudySlugs} />
      <AboutBlurb />
      <ExperienceStrip />
      <WritingPreview />
      <ContactBlock />
    </>
  );
}
