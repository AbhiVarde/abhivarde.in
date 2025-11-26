"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuExternalLink,
  LuCode,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import projects from "@/app/content/projects";

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (projects.length + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const pauseAutoplay = () => {
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 6000);
  };

  const changeSlide = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % (projects.length + 1));
    pauseAutoplay();
  };

  const prevSlide = () => {
    changeSlide(
      (currentIndex - 1 + (projects.length + 1)) % (projects.length + 1)
    );
    pauseAutoplay();
  };

  const goToSlide = (index) => {
    changeSlide(index);
    pauseAutoplay();
  };

  const isLastSlide = currentIndex === projects.length;

  return (
    <div className="relative max-w-6xl mx-auto mt-8">
      <div className="relative h-[300px] sm:h-[450px] overflow-hidden border border-white/20 rounded-3xl bg-black">
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          {!isLastSlide ? (
            <>
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h2 className="text-xl sm:text-2xl font-medium mb-3 tracking-tight">
                  {projects[currentIndex].title}
                </h2>
                <p className="hidden sm:flex text-sm sm:text-base opacity-90 mb-4 max-w-sm lg:max-w-full">
                  {projects[currentIndex].description}
                </p>
                <Link
                  href={
                    projects[currentIndex].url ||
                    projects[currentIndex].githubLink
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg hover:bg-white/20 transition"
                >
                  <span className="text-sm">Open Project</span>
                  <LuExternalLink size={14} />
                </Link>
              </div>
            </>
          ) : (
            <div className="bg-[#F4F0E6] h-full flex flex-col justify-center items-center text-center p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-slate-800 tracking-tight">
                Projects Overview
              </h2>
              <p className="text-slate-600 mb-4 max-w-sm leading-relaxed">
                A collection of projects built around developer experience, UI,
                and open source.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#FF3B00] text-white px-4 py-2 rounded-xl transition hover:bg-[#E63500]"
              >
                <LuCode size={18} />
                <span>View All Projects</span>
              </Link>
            </div>
          )}
        </div>

        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition z-10"
        >
          <LuChevronLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition z-10"
        >
          <LuChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {[...projects, { title: "Explore" }].map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-white w-8"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
