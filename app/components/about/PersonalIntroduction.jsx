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
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HeroImage}
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col p-6 sm:p-8">
          <div className="text-white max-w-xl">
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
              className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
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
              A frontend developer from Surat, crafting interfaces that feel{" "}
              <span className="italic">simple, human, and meaningful</span>.
            </motion.p>
          </div>

          <motion.div
            className="mt-auto pt-8 sm:pt-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 text-white">
              <h2 className="font-medium uppercase tracking-wider flex items-center text-sm">
                <LuRocket className="mr-2" size={18} />
                Highlights
              </h2>

              {/* Short text for small devices */}
              <p className="mt-3 sm:hidden font-light leading-relaxed">
                Reached developers in{" "}
                <span className="font-medium">65+ countries</span> &{" "}
                <span className="font-medium">75+ GitHub stars</span>.
              </p>

              {/* Full text for larger devices */}
              <p className="hidden sm:block mt-3 sm:mt-4 font-light leading-relaxed">
                My projects have reached developers in{" "}
                <span className="font-medium">65+ countries</span> & received{" "}
                <span className="font-medium">75+ GitHub stars</span>. Grateful
                for everyone who finds value in my work—it inspires me to keep
                building.
              </p>

              <p className="mt-4 text-base italic">
                Keep moving, don't settle. 🚀
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalIntroduction;
