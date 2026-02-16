"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../../content/projects";
import { LuExternalLink, LuGithub, LuArrowRight, LuStar } from "react-icons/lu";

const Projects = () => {
  const [stars, setStars] = useState({});

  useEffect(() => {
    const fetchStars = async () => {
      const starCounts = {};

      for (const project of projects) {
        if (project.githubLink) {
          try {
            const urlParts = project.githubLink
              .split("github.com/")[1]
              .split("/");
            const owner = urlParts[0];
            const repo = urlParts[1];

            const response = await fetch(
              `https://api.github.com/repos/${owner}/${repo}`,
            );
            const data = await response.json();

            if (data.stargazers_count !== undefined) {
              starCounts[project.githubLink] = data.stargazers_count;
            }
          } catch (error) {
            console.error(`Failed to fetch stars for ${project.title}:`, error);
          }
        }
      }

      setStars(starCounts);
    };

    fetchStars();
  }, []);

  return (
    <Fragment>
      {projects?.map((project, i) => (
        <div
          key={i}
          className="group flex flex-col mt-6 space-y-8 rounded-3xl border border-[#333] bg-[#111] p-4 md:h-48 md:flex-row md:space-y-0 md:space-x-8"
        >
          <div className="overflow-hidden rounded-xl md:w-72 aspect-4/3">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt="image"
                fill
                className="object-cover rounded-xl"
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
                  className="flex text-sm items-center justify-center gap-x-1.5 px-3 py-1 rounded-lg bg-[#F4F0E6] text-black hover:bg-[#e8e4da] transition-colors"
                >
                  <LuExternalLink size={14} /> <span>View</span>
                </Link>
              )}

              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm items-center justify-center gap-x-1.5 px-3 py-1 rounded-lg bg-[#F4F0E6] text-black hover:bg-[#e8e4da] transition-colors"
                >
                  <LuGithub size={14} />
                  <span>Code</span>
                  {stars[project.githubLink] !== undefined && (
                    <span className="flex items-center gap-x-0.5 ml-1">
                      <LuStar
                        size={11}
                        className="fill-black/50 text-black/50"
                      />
                      <span className="text-xs font-medium text-black/70">
                        {stars[project.githubLink]}
                      </span>
                    </span>
                  )}
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
          className="group flex items-center justify-center space-x-2 rounded-xl bg-[#FF3B00] text-white px-5 py-2 hover:bg-[#ff4b17] transition-colors"
        >
          <span className="text-sm">More Projects</span>
          <LuArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default Projects;
