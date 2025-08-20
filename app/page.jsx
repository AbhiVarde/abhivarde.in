import PersonalIntroduction from "./components/about/PersonalIntroduction";
import ProjectShowcase from "./components/about/ProjectShowcase";
import ProfessionalSummary from "./components/about/ProfessionalSummary";
import HireSection from "./components/about/HireSection";
import OverviewSection from "./components/about/OverviewSection";
import works from "./content/works";
import skills from "./content/skills";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-5 pt-16 md:pt-18 lg:pt-20">
      <PersonalIntroduction />
      <OverviewSection />
      <ProfessionalSummary works={works} skills={skills} />
      <ProjectShowcase />
      <HireSection />
    </main>
  );
}
