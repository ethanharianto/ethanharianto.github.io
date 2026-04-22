import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { AboutBlurb } from "@/components/home/AboutBlurb";
import { ExperienceStrip } from "@/components/home/ExperienceStrip";
import { WritingPreview } from "@/components/home/WritingPreview";
import { ContactBlock } from "@/components/home/ContactBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutBlurb />
      <ExperienceStrip />
      <WritingPreview />
      <ContactBlock />
    </>
  );
}
