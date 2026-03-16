"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/app/content/projects";
import { LuExternalLink, LuGithub, LuStar } from "react-icons/lu";

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
    <div className="relative overflow-hidden max-h-350 md:max-h-275">
      <div className="space-y-3">
        {projects?.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col rounded-3xl border border-[#333] bg-[#111] p-4 md:h-40 md:flex-row md:space-x-8"
          >
            <div className="relative w-full h-32 shrink-0 overflow-hidden rounded-xl md:w-64 md:h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between pt-3 md:pt-0">
              <div className="space-y-1.5">
                <h2 className="text-base font-medium text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-white/60 leading-relaxed md:hidden">
                  {project.shortDescription}
                </p>
                <p className="hidden text-sm text-white/60 leading-relaxed line-clamp-2 md:block">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-3 md:mt-0">
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F4F0E6] text-black text-sm hover:bg-[#e8e4da] transition-colors"
                  >
                    <LuExternalLink size={13} />
                    <span>View</span>
                  </Link>
                )}

                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F4F0E6] text-black text-sm hover:bg-[#e8e4da] transition-colors"
                  >
                    <LuGithub size={13} />
                    <span>Code</span>
                    {stars[project.githubLink] !== undefined && (
                      <span className="flex items-center gap-0.5 ml-1">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <Link
          target="_blank"
          href="https://github.com/AbhiVarde"
          className="flex cursor-pointer items-center gap-2 px-5 py-2 rounded-lg border border-white/15 bg-[#1a1a1a] text-sm text-white/80 hover:text-white hover:border-white/25 hover:bg-[#222] transition"
        >
          See more
          <LuExternalLink size={12} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
