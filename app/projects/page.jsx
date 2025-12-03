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
    <div className="max-w-5xl mx-auto px-4 pt-16 md:pt-18">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-2 sm:mb-4 md:mb-6 flex space-x-3 items-center">
          <div className="bg-[#FF3B00] p-2 rounded-lg">
            <LuTarget size={22} color="#FFFFFF" />
          </div>
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-medium leading-4 md:leading-6 lg:leading-8 tracking-wide">
            Projects
          </h2>
        </div>
        <p className="text-sm sm:text-lg text-white leading-relaxed">
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
