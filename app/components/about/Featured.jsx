"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import projects from "@/app/content/projects";

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const project = useMemo(() => projects[currentIndex], [currentIndex]);

  useEffect(() => {
    if (!projects?.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!project) return null;

  const imageContent = (
    <Image
      src={project.image}
      alt={project.title}
      width={1200}
      height={750}
      priority={currentIndex === 0}
      sizes="(max-width: 1024px) 100vw, 66vw"
      className="object-contain rounded-2xl w-full h-auto"
    />
  );

  return (
    <section className="max-w-6xl mx-auto mt-8">
      <div className="relative rounded-3xl bg-[#0f0f0f] border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-4 md:p-6">
          <div className="lg:col-span-4 flex flex-col justify-center gap-3">
            <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">
              {project.title}
            </h2>

            <p className="sm:text-sm leading-relaxed sm:max-w-md">
              <span className="block sm:hidden">
                {project.shortDescription}
              </span>
              <span className="hidden sm:block">{project.description}</span>
            </p>

            {(project.url || project.githubLink) && (
              <Link
                href={project.url || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 font-medium hover:opacity-80 transition-opacity w-fit group"
                style={{ color: "#ff3800" }}
              >
                Open Project
                <LuArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            )}
          </div>

          <div className="lg:col-span-8 relative w-full">
            {isSmallScreen && (project.url || project.githubLink) ? (
              <Link
                href={project.url || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                {imageContent}
              </Link>
            ) : (
              imageContent
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
