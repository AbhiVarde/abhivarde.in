"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import projects from "@/app/content/projects";

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const project = projects[currentIndex];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((i) => (i + 1) % projects.length),
      3000,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageContent = (
    <Image
      src={project.image}
      alt={project.title}
      width={800}
      height={500}
      priority
      className="object-contain rounded-2xl w-full h-auto transition-transform duration-300"
    />
  );

  return (
    <section className="max-w-6xl mx-auto mt-8">
      <div className="relative rounded-3xl bg-[#0f0f0f] border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-4 md:p-6">
          <div className="lg:col-span-4 flex flex-col justify-center gap-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight transition-all duration-500">
              {project.title}
            </h2>

            <p className="sm:text-sm leading-relaxed sm:max-w-md transition-all duration-500">
              <span className="block sm:hidden">
                {project.shortDescription}
              </span>
              <span className="hidden sm:block">{project.description}</span>
            </p>

            <Link
              href={project.url || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 font-medium hover:opacity-80 transition-opacity w-fit group"
              style={{ color: "#ff3800" }}
            >
              Open Project
              <LuArrowUpRight
                size={19}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="lg:col-span-8 relative w-full">
            {isSmallScreen ? (
              <Link
                href={project.url || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                {imageContent}
              </Link>
            ) : (
              <div>{imageContent}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
