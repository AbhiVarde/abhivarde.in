"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../../content/projects";
import { LuExternalLink, LuGithub, LuArrowRight } from "react-icons/lu";

const Projects = () => {
  return (
    <Fragment>
      {projects?.slice(0, 6).map((project, i) => (
        <div
          key={i}
          className="group flex flex-col mt-6 space-y-8 rounded-3xl border border-[#333] bg-[#111] p-4 md:h-48 md:flex-row md:space-y-0 md:space-x-8"
        >
          <div className="overflow-hidden rounded-xl md:w-72 aspect-[4/3]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt="image"
                fill
                className="object-cover rounded-xl transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.06]"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <h2 className="sm:text-lg text-white font-medium">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col space-y-2 mt-4 md:mt-0 md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm items-center justify-center gap-x-1.5 px-3 py-1.5 rounded-lg bg-[#F4F0E6] text-black transition-transform duration-200 ease-out will-change-transform hover:-translate-y-0.5"
                >
                  <LuExternalLink size={16} /> <span>Live Demo</span>
                </Link>
              )}

              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm items-center justify-center gap-x-1.5 px-3 py-1.5 rounded-lg bg-[#F4F0E6] text-black transition-transform duration-200 ease-out will-change-transform hover:-translate-y-0.5"
                >
                  <LuGithub size={16} /> <span>Source Code</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-12">
        <Link
          target="_blank"
          href="https://github.com/AbhiVarde"
          className="group flex items-center justify-center space-x-2 rounded-xl bg-[#FF3B00] text-white shadow-md cursor-pointer px-6 py-2 transition-colors hover:bg-[#ff4b17]"
        >
          <span className="text-sm sm:text-sm">View more on Github</span>
          <LuArrowRight
            size={18}
            className="transition-transform duration-300 ease-out will-change-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default Projects;
