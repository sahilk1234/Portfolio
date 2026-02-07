import { skillGroups } from "@/appData";
import ContactSection from "@/components/Contact/ContactSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Hero from "@/components/Hero/Hero";
import ProjectSection from "@/components/Projects/ProjectSection";
import ServiceSection from "@/components/Services/ServiceSection";
import Skills from "@/components/Skills/Skills";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import EducationSection from "@/components/Education/EducationSection";
import { getAllProjects, getAllTestimonials } from "@/services";

export default async function Home() {
  const projects = await getAllProjects();
  const testimonials = await getAllTestimonials();

  return (
    <main className="pt-16">
      <Hero />
      <Skills skills={skillGroups} />
      <div className="mx-auto my-8 max-w-[1200px] space-y-16 px-4 md:my-[3.75rem] md:space-y-20">
        <ProjectSection projects={projects} />
        <ServiceSection />
        <ExperienceSection />
        <EducationSection />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection />
      </div>
    </main>
  );
}
