"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuGlobe, LuRocket } from "react-icons/lu";
import HeroImage from "../../resources/images/me.png";

const PersonalIntroduction = () => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src={HeroImage}
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col p-4 sm:p-6">
          <div className="text-white max-w-lg">
            <motion.h2
              className="font-medium uppercase tracking-wider flex items-center text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LuGlobe className="mr-2" size={18} />
              About Me
            </motion.h2>

            <motion.h1
              className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hey, I’m Abhi
              <span className="animate-wave inline-block ml-2">👋</span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg font-light leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build
              <span className="italic mx-1 font-medium">
                developer tools and UI kits
              </span>
              crafting products that are simple, fast, and thoughtful.
            </motion.p>
          </div>

          <motion.div
            className="mt-auto pt-8 sm:pt-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-white">
              <h2 className="font-normal uppercase tracking-wider flex items-center text-sm">
                <LuRocket className="mr-2" size={18} />
                Highlights
              </h2>

              <p className="mt-3 sm:hidden font-light leading-relaxed">
                <span className="font-medium mr-1">90+ countries.</span>
                <span className="font-medium">100+ GitHub stars.</span>
              </p>

              <p className="hidden sm:block mt-3 sm:mt-4 font-light leading-relaxed">
                Reached developers in
                <span className="font-medium mx-1">90+ countries</span> and
                earned
                <span className="font-medium mx-1">100+ GitHub stars</span>
                across my projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalIntroduction;
