import React from "react";
import { LuTarget } from "react-icons/lu";
import Projects from "../components/sections/project/Projects";

export const metadata = {
  title: "Projects",
  description:
    "AI agents, workflow builders, UI systems, SaaS tools and more things Abhi Varde has built and shipped.",
  alternates: { canonical: "https://abhivarde.in/projects" },
};

const Project = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-16 sm:pt-20">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <LuTarget size={20} color="#FFFFFF" />
          </div>
          <h1 className="text-lg md:text-xl font-medium tracking-wide">
            Projects
          </h1>
        </div>

        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          Things I've built and shipped. Most are open source.
        </p>
      </div>

      <Projects />
    </main>
  );
};

export default Project;
