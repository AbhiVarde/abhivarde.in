import React from "react";
import Image from "next/image";
import HeroImage from "../../resources/images/me.png";
import { LuGlobe, LuRocket } from "react-icons/lu";

const PersonalIntroduction = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 p-4 sm:p-6 md:p-8 border border-[#333] bg-[#111111] rounded-2xl relative overflow-hidden shadow-lg">
          <div className="absolute inset-0">
            <Image
              src={HeroImage}
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          </div>
          <div className="relative z-10 text-white">
            <h2 className="font-medium text-[#D3CEC5] uppercase tracking-wider flex items-center">
              <LuGlobe className="mr-2" size={18} />
              About me
            </h2>
            <div className="mt-6 max-w-sm">
              <h1 className="text-xl sm:text-2xl font-medium tracking-wide">
                hey, I'm Abhi
                <span className="animate-wave inline-block ml-1.5">👋</span>
              </h1>
              <p className="mt-2 sm:text-lg font-light tracking-wider leading-relaxed">
                I'm a passionate Frontend Developer from Surat, specializing in
                React and Next.js. Crafting innovative digital experiences to
                shape the future.
              </p>
              <p className="mt-12 relative bottom-0 sm:text-lg italic tracking-wider">
                Never a master, always a student.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 p-4 sm:p-6 md:p-8 border border-[#333] rounded-2xl bg-[#F4F0E6] text-black shadow-lg flex flex-col">
          <h2 className="font-medium uppercase tracking-wider flex items-center">
            <LuRocket className="mr-2" size={18} />
            My Mission
          </h2>
          <div className="lg:max-w-xs flex-grow">
            <p className="font-light sm:text-lg tracking-wider leading-relaxed mt-4">
              Bridging the Gap Between Design and Development: Where creativity
              meets functionality.
            </p>
          </div>
          <p className="mt-4 lg:mt-0 sm:text-lg italic tracking-normal">
            Keep moving, don't settle. 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalIntroduction;
