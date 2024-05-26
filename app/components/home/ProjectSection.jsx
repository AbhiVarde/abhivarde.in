"use client";

import React from "react";
import { useState } from "react";
import projects from "@/app/data/projects";
import Link from "next/link";
import Image from "next/image";
import { LuExternalLink, LuArrowRight, LuTarget } from "react-icons/lu";

const ProjectSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mt-12">
      <div className="mt-4 mb-8 flex space-x-3 items-center">
        <div className="bg-gray-300 bg-opacity-30 p-2 rounded-lg">
          <LuTarget size={22} />
        </div>
        <h2 class="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
          Latest Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects?.slice(0, 4).map((project, i) => (
          <Link
            key={i}
            href={project.url ? project.url : project.githubLink}
            target="_blank"
            className={`flex flex-col rounded-xl shadow-md overflow-hidden bg-white cursor-pointer transition-all duration-300 ${
              i % 4 === 0 || i % 4 === 3
                ? "sm:rotate-2 sm:hover:rotate-0"
                : "sm:-rotate-2 sm:hover:rotate-0"
            }`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={project.image}
              alt={project.title}
              objectFit="cover"
              loading="eager"
              className="w-full h-[240px] md:h-[300px] hover:opacity-90"
            />
            <div className="flex justify-between items-center gap-1 px-4 py-2">
              <p
                className={`font-medium text-lg mt-2 ${
                  hoveredIndex === i && "underline"
                }`}
              >
                {project.title}
              </p>
              {hoveredIndex === i && (
                <LuExternalLink size={22} className="animate-bounce mt-1" />
              )}
            </div>
          </Link>
        ))}
        <div></div>
        <Link
          href="/projects"
          className="flex text-sm sm:text-base items-center justify-center space-x-2 rounded-xl hover:underline overflow-hidden bg-black text-white shadow-md cursor-pointer h-fit p-4"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className="font-medium">View All Projects</p>
          <LuArrowRight
            size={22}
            className={`transition-all duration-300 ${
              hoveredIndex === 4 ? "translate-x-2" : "translate-x-0"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
