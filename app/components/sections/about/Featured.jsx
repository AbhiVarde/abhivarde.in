"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import projects from "@/app/content/projects";

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleImageRef = (img) => {
    if (!img) return;

    if (img.complete) {
      setLoaded(true);
    } else {
      img.onload = () => setLoaded(true);
    }
  };

  const project = useMemo(() => projects[currentIndex], [currentIndex]);

  useEffect(() => {
    setLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!projects?.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleChange = (e) => setIsSmallScreen(e.matches);
    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!project) return null;

  const imageContent = (
    <div className="relative w-full h-55 sm:h-70 lg:h-85">
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={currentIndex === 0}
        sizes="(max-width: 1024px) 100vw, 66vw"
        ref={handleImageRef}
        className="object-cover rounded-2xl"
        style={{
          filter: loaded ? "blur(0px)" : "blur(16px)",
          transform: loaded ? "scale(1)" : "scale(1.08)",
          transition: "filter 0.4s ease-out, transform 0.4s ease-out",
        }}
      />
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto mt-8">
      <div className="relative rounded-3xl bg-[#0f0f0f] border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-4 md:p-6">
          <div className="lg:col-span-4 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                {project.title}
              </h2>
              <span className="text-xs text-white/30 font-light">
                {currentIndex + 1}/{projects.length}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-white/70">
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
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity w-fit group"
                style={{ color: "#ff3800" }}
              >
                View project
                <LuArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            )}

            <div className="hidden sm:flex gap-1.5 mt-1">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
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
