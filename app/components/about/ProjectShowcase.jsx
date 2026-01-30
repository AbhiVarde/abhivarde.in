"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import projects from "@/app/content/projects";

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((i) => (i + 1) % projects.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto mt-8">
      <div className="relative rounded-3xl bg-[#0f0f0f] border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-4 md:p-6">
          <div className="lg:col-span-4 flex flex-col justify-center gap-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight transition-all duration-500">
              {project.title}
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed max-w-md transition-all duration-500">
              {project.description}
            </p>

            <Link
              href={project.url || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white hover:opacity-80 transition-opacity w-fit"
            >
              Open Project
              <LuArrowUpRight size={15} />
            </Link>
          </div>

          <div className="lg:col-span-8 relative w-full">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              priority
              className="object-contain rounded-2xl w-full h-auto"
            />
          </div>

          <Link
            href={project.url || project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 text-white/80 hover:text-white transition lg:hidden"
          >
            <LuArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
