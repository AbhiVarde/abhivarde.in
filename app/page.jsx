"use client";

import Hero from "./components/sections/about/Hero";
import About from "./components/sections/about/About";
import Featured from "./components/sections/about/Featured";
import Experience from "./components/sections/about/Experience";
import Contact from "./components/sections/about/Contact";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-5 pt-16 sm:pt-20 animate-fade-in">
      <Hero />
      <About />
      <Featured />
      <Experience />
      <Contact />
    </main>
  );
}
