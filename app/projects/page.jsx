import React from "react";
import { LuTarget } from "react-icons/lu";
import Projects from "../components/project/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore the projects and work done by Abhi Varde, showcasing a variety of skills in software engineering.",
};

const Project = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-6 flex space-x-3 items-center">
          <div className="bg-gray-300 bg-opacity-30 p-2 rounded-lg">
            <LuTarget size={22} />
          </div>
          <h2 class="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
            Projects
          </h2>
        </div>
        <p class="sm:text-lg text-zinc-600 leading-relaxed">
          Here are some projects of which I'm really proud. Most of them are
          open-source, so feel free to check out the code and contribute if
          you're interested!
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default Project;
