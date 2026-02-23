"use client";

import React from "react";
import Image from "next/image";
import { LuGlobe, LuRocket } from "react-icons/lu";
import HeroImage from "../../resources/images/me.png";

const Hero = () => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src={HeroImage}
            alt="Background"
            fill
            priority
            fetchPriority="high"
            decoding="sync"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 984px"
            quality={55}
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 flex flex-col p-4 sm:p-6">
          <div className="text-white max-w-lg">
            <h2 className="font-medium uppercase tracking-wider flex items-center text-sm">
              <LuGlobe className="mr-2" size={18} />
              About Me
            </h2>

            <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              Hey, I'm Abhi
              <span className="animate-wave inline-block ml-2">👋</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              I build developer tools and UI kits crafting products that are
              simple, fast, and thoughtful.
            </p>
          </div>

          <div className="mt-auto pt-8 sm:pt-10 max-w-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-white">
              <h2 className="font-normal uppercase tracking-wider flex items-center text-sm">
                <LuRocket className="mr-2" size={18} />
                Highlights
              </h2>

              <p className="mt-3 sm:hidden font-light leading-relaxed">
                <span className="font-medium mr-1">110+ countries.</span>
                <span className="font-medium">130+ GitHub stars.</span>
              </p>

              <p className="hidden sm:block mt-3 sm:mt-4 font-light leading-relaxed">
                Reached developers in
                <span className="font-medium mx-1">110+ countries</span> and
                earned
                <span className="font-medium mx-1">130+ GitHub stars</span>
                across my projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
