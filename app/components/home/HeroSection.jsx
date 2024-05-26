"use Client";

import React from "react";
import socialLinks from "@/app/data/socialLinks";
import Link from "next/link";
import Tooltip from "../common/Tooltip";
import TextReveal from "../common/TextReveal";

const HeroSection = () => {
  return (
    <div className="pt-10 pb-20 relative overflow-hidden w-full px-8 min-h-[480px]">
      <div className="absolute mx-auto flex flex-col items-center justify-center inset-0 bg-grid-slate-100/70 z-0">
        <div className="relative text-xl md:text-2xl lg:text-3xl text-left sm:text-center !leading-9 text-slate-700 mb-6">
          <h1>
            Hey, I'm Abhi Varde!
            <span className="animate-wave ml-1.5">👋</span>
          </h1>
          <p>Welcome to my corner of the internet!</p>
        </div>
        <p className="max-w-xl text-base sm:text-lg text-left sm:text-center text-slate-600">
          <TextReveal text="I am an experienced frontend developer with a passion for design and a knack for tinkering. Web development is my playground, where I push boundaries and pursue new horizons." />
        </p>
        <div className="flex space-x-4 mt-10">
          {socialLinks.map((social, i) => (
            <Tooltip key={i} text={social.name}>
              <Link href={social.url} target="_blank" aria-label={social.name}>
                {social.icon}
              </Link>
            </Tooltip>
          ))}
        </div>
        <Link
          href="/about"
          className="mt-8 relative px-6 py-2.5 bg-black text-white text-xs font-medium z-10 rounded-lg transition-all duration-200 hover:scale-105 hover:translateZ-0"
        >
          About me
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
