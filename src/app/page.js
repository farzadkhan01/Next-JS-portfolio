import JsonLd from "@/components/seo/JsonLd";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import { personal } from "@/data/personal";
import { buildMetadata } from "@/lib/seo/metadata";
import { graph, personSchema, websiteSchema } from "@/lib/seo/structured-data";

export const metadata = buildMetadata({
  description: personal.seoDescription,
  path: "/",
  image: "/og",
  imageAlt: `${personal.name} — ${personal.positioning}`,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(personSchema(), websiteSchema())} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <WorkflowSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
