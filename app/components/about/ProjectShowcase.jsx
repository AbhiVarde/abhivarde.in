"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (projects.length + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const pauseAutoplay = () => {
    setIsAutoplay(false);
    setTimeout(() => {
      setIsAutoplay(true);
    }, 6000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (projects.length + 1));
    pauseAutoplay();
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (projects.length + 1)) % (projects.length + 1)
    );
    pauseAutoplay();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    pauseAutoplay();
  };

  const isLastSlide = currentIndex === projects.length;

  return (
    <div className="relative max-w-6xl mx-auto mt-8">
      <div className="relative h-[300px] sm:h-[450px] overflow-hidden border border-white/20 rounded-3xl bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={isLastSlide ? "explore-slide" : projects[currentIndex].title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {!isLastSlide ? (
              <>
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover"
                  quality={95}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white"
                >
                  <h2 className="text-2xl sm:text-3xl font-medium mb-3 tracking-tight">
                    {projects[currentIndex].title}
                  </h2>
                  <p className="hidden sm:flex text-sm sm:text-base opacity-90 mb-4 leading-relaxed max-w-2xl">
                    {projects[currentIndex].description}
                  </p>
                  <Link
                    href={
                      projects[currentIndex].url ||
                      projects[currentIndex].githubLink
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base">View Project</span>
                    <LuExternalLink size={16} />
                  </Link>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#F4F0E6] h-full flex flex-col justify-center items-center text-center p-6 sm:p-8"
              >
                <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-slate-800 tracking-tight">
                  Discover My Portfolio
                </h2>
                <p className="text-slate-600 mb-4 max-w-lg leading-relaxed">
                  Explore a curated selection of projects showcasing innovative
                  solutions and creative problem-solving.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-[#FF3B00] text-white px-4 py-2 rounded-xl transition-colors duration-300"
                >
                  <LuCode size={18} />
                  <span>View All Projects</span>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full sm:flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <LuChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full sm:flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <LuChevronRight size={18} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[...projects, { title: "Explore" }].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
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
