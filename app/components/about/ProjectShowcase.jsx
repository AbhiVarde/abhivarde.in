"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { LuExternalLink, LuCode } from "react-icons/lu";
import projects from "@/app/data/projects";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ProjectShowcase = () => {
  return (
    <div className="relative max-w-6xl mx-auto mt-8">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" style="background-color: #F4F0E6;"></span>'
            );
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {[...projects, { title: "Explore Projects" }].map((project, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[380px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-2xl border border-[#333]">
              {i < projects.length ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
                  <div className="relative z-10 text-white p-4 sm:p-6 md:p-8 h-full flex flex-col justify-end">
                    <h2 className="text-xl sm:text-2xl font-medium tracking-wide">
                      {project.title}
                    </h2>
                    <p className="sm:text-lg font-light tracking-wider leading-relaxed mt-2 sm:mt-4">
                      {project.description}
                    </p>
                    <Link
                      href={project.url || project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center bg-[#F4F0E6] text-black px-4 py-2 mt-4 mb-4 sm:mb-0 rounded-lg hover:bg-opacity-80 transition-colors duration-300 w-fit"
                    >
                      <span className="mr-2">View Project</span>
                      <LuExternalLink size={18} />
                    </Link>
                  </div>
                </>
              ) : (
                <div className="bg-[#F4F0E6] h-full flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide mb-4 sm:mb-6 text-black">
                    Discover My Portfolio
                  </h2>
                  <p className="md:text-lg font-light tracking-wider leading-relaxed mb-6 sm:mb-8 max-w-2xl text-black">
                    Explore a curated selection of my projects, each showcasing
                    unique problem-solving skills and innovative solutions.
                    Ready to dive deeper?
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center bg-[#FF3B00] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-base sm:text-lg"
                  >
                    <LuCode size={20} className="mr-2" />
                    <span>View All Projects</span>
                  </Link>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectShowcase;
