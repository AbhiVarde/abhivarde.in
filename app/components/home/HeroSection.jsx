"use Client";

import React from "react";
import socialLinks from "@/app/data/socialLinks";
import Link from "next/link";
import Tooltip from "../common/Tooltip";
import TextReveal from "../common/TextReveal";
import { cn } from "@/app/utils/cn";

const HeroSection = () => {
  return (
    <div className="pt-10 pb-20 relative overflow-hidden w-full px-4 min-h-[480px]">
      <div className="absolute mx-auto flex flex-col items-center justify-center inset-0 z-0">
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
      <div
        className={cn(
          "pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px] -z-10"
        )}
      >
        <div className="absolute inset-0 [transform:rotateX(10deg)] sm:[transform:rotateX(20deg)]">
          <div
            className={cn(
              "animate-grid",
              "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
              "[background-image:linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_0)]"
            )}
          />
        </div>

        <div className="absolute inset-0 to-90%" />
      </div>
    </div>
  );
};

export default HeroSection;
