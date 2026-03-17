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

  const getRepoLabel = (githubLink) => {
    const parts = githubLink.split("github.com/")[1]?.split("/");
    if (!parts) return githubLink;
    return `${parts[0]}/${parts[1]}`;
  };

  const getDomainLabel = (url) => {
    try {
      return new URL(url).host;
    } catch {
      return url;
    }
  };

  return (
    <div className="relative overflow-hidden max-h-350 md:max-h-275 pb-14">
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

              <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-transparent text-white/70 text-xs hover:border-white/30 hover:text-white/90 transition-colors"
                  >
                    <LuGithub size={12} className="shrink-0" />
                    <span className="truncate max-w-35 sm:max-w-none">
                      {getRepoLabel(project.githubLink)}
                    </span>
                    {stars[project.githubLink] !== undefined && (
                      <span className="flex items-center gap-0.5 ml-0.5 text-white/40">
                        <LuStar size={10} className="fill-white/40" />
                        <span>{stars[project.githubLink]}</span>
                      </span>
                    )}
                  </Link>
                )}

                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-transparent text-white/70 text-xs hover:border-white/30 hover:text-white/90 transition-colors"
                  >
                    <LuExternalLink size={12} className="shrink-0" />
                    <span className="truncate max-w-35 sm:max-w-none">
                      {getDomainLabel(project.url)}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <Link
          target="_blank"
          href="https://github.com/AbhiVarde"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur text-xs text-white/60 hover:text-white/90 transition"
        >
          See more
          <LuExternalLink size={11} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
