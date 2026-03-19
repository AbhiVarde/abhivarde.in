import React from "react";
import { LuTarget } from "react-icons/lu";
import Projects from "../components/sections/project/Projects";
import { PageHeader } from "../components/layout/PageHeader";

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
        <PageHeader icon={LuTarget} title="Projects" />

        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          Things I've built and shipped. Most are open source.
        </p>
      </div>

      <Projects />
    </main>
  );
};

export default Project;
