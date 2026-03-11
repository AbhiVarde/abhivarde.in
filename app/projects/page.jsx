import React from "react";
import { LuTarget } from "react-icons/lu";
import Projects from "../components/project/Projects";

export const metadata = {
  title: "Projects",
  description:
    "AI agents, workflow builders, UI systems, SaaS tools and more things Abhi Varde has built and shipped.",
  alternates: { canonical: "https://abhivarde.in/projects" },
};

const Project = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-16 md:pt-18">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-2 sm:mb-4 flex space-x-3 items-center">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <LuTarget size={20} color="#FFFFFF" />
          </div>
          <h2 className="sm:text-lg md:text-xl font-medium tracking-wide">
            Projects
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          Things I've built and shipped. Most are open source.
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default Project;
