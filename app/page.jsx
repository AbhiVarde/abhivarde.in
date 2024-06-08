import BlogSection from "./components/home/BlogSection";
import ContactSection from "./components/home/ContactSection";
import HeroSection from "./components/home/HeroSection";
import ProjectSection from "./components/home/ProjectSection";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-5">
      <HeroSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
