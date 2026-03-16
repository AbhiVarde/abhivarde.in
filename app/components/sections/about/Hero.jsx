"use client";

import React from "react";
import Image from "next/image";
import { LuGlobe, LuRocket } from "react-icons/lu";

const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 984px"
            quality={60}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80" />
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
              Product Engineer building AI tools, automation SaaS, and
              production UI.
            </p>
          </div>

          <div className="mt-auto pt-8 sm:pt-10 max-w-lg">
            <div className="rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-white bg-white/8 border border-white/15">
              <h2 className="font-normal uppercase tracking-wider flex items-center text-sm">
                <LuRocket className="mr-2" size={18} />
                Highlights
              </h2>
              <p className="mt-3 sm:hidden font-light leading-relaxed">
                <span className="font-medium">
                  137+ GitHub <span className="mx-1">★</span>
                </span>
                {" · "}
                <span className="font-medium">
                  3K+ npm <span className="mx-1">↓</span>
                </span>
                {" · "}
                <span className="font-medium">110+ countries</span>
              </p>
              <p className="hidden sm:block mt-3 sm:mt-4 font-light leading-relaxed">
                <span className="font-medium">
                  137+ GitHub <span className="mx-1">★</span>
                </span>
                {" · "}
                <span className="font-medium">
                  3,000+ npm <span className="mx-1">↓</span>
                </span>
                {" · "}
                used by developers in
                <span className="font-medium ml-1">110+ countries</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
