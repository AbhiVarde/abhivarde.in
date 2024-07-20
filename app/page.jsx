import PersonalIntroduction from "./components/about/PersonalIntroduction";
import ProjectShowcase from "./components/about/ProjectShowcase";
import ProfessionalSummary from "./components/about/ProfessionalSummary";
import HireSection from "./components/about/HireSection";
import works from "./data/works";
import skills from "./data/skills";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-5">
      <PersonalIntroduction />
      <ProfessionalSummary works={works} skills={skills} />
      <ProjectShowcase />
      <HireSection />
    </main>
  );
}
