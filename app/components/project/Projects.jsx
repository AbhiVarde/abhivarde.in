"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../../data/projects";
import { LuExternalLink, LuGithub, LuArrowRight } from "react-icons/lu";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Fragment>
      {projects?.slice(0, 6).map((project, i) => (
        <div
          key={i}
          className={`flex flex-col mt-6 space-y-8 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 md:h-48 md:flex-row md:space-y-0 md:space-x-8 ${
            hoveredIndex === i &&
            "transition-all duration-200 scale-[1.02] cursor-pointer"
          }`}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="overflow-hidden rounded-lg md:w-72">
            <div className="relative h-full w-full transition duration-200 hover:opacity-80 md:w-72">
              <Image
                src={project.image}
                alt="image"
                className="w-full h-[180px] md:h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <h2
                className={`text-lg   sm:text-xl font-medium ${
                  hoveredIndex === i && "underline"
                }`}
              >
                {project.title}
              </h2>
              <p className="text-base text-zinc-500">{project.description}</p>
            </div>
            <div className="flex flex-col space-y-3 mt-4 md:mt-0 md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm sm:text-base items-center justify-center gap-x-1.5 p-2 rounded-lg bg-gray-300 bg-opacity-30 transition-all duration-200 hover:-translate-y-1"
                >
                  <LuExternalLink /> View Project
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm sm:text-base items-center justify-center gap-x-1.5 p-2 rounded-lg bg-gray-300 bg-opacity-30 transition-all duration-200 hover:-translate-y-1"
                >
                  <LuGithub /> View Code
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-6">
        <Link
          target="_blank"
          href="https://github.com/AbhiVarde"
          className="flex items-center text-sm sm:text-base justify-center space-x-2 rounded-xl hover:underline overflow-hidden bg-black text-white shadow-md cursor-pointer h-fit px-6 py-4"
          onMouseEnter={() => setHoveredIndex(7)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className="font-medium">View more on Github</p>{" "}
          <LuArrowRight
            size={22}
            className={`transition-all duration-300 ${
              hoveredIndex === 7 ? "translate-x-2" : "translate-x-0"
            }`}
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default Projects;
