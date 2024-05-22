import React from "react";
import { LuUser, LuTerminal, LuFigma, LuGlobe } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import skills from "../data/skills";
import Image from "next/image";
import works from "../data/works";
import { PiPlusThin } from "react-icons/pi";
import img from "../resources/images/me.png";
import Contact from "../components/about/Contact";
import TextReveal from "../components/common/TextReveal";

export const metadata = {
  title: "About",
  description:
    "Learn more about Abhi Varde, a passionate Software Engineer from India.",
};

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 relative">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-6 flex space-x-3 items-center">
          <div className="bg-gray-300 bg-opacity-30 p-2 rounded-lg">
            <LuUser size={22} />
          </div>
          <h2 class="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
            About
          </h2>
        </div>
        <p class="sm:text-lg text-zinc-600 leading-relaxed">
          Namaste! Let me quickly tell you about myself and what I enjoy doing.
        </p>
      </div>
      <div className="absolute top-28 left-0 z-10 ml-1.5 hidden md:block">
        <PiPlusThin size={22} />
      </div>
      <div className="absolute top-[1008px] right-0 z-10 mr-1.5 hidden md:block">
        <PiPlusThin size={22} />
      </div>
      <div className="absolute bottom-[780px] left-0 z-10 ml-1.5 hidden md:block">
        <PiPlusThin size={22} />
      </div>
      <div className="absolute bottom-[-10px] left-0 z-10 ml-1.5 hidden md:block">
        <PiPlusThin size={22} />
      </div>
      <div className="absolute bottom-[392px] right-0 z-10 mr-1.5 hidden md:block">
        <PiPlusThin size={22} />
      </div>
      <div className="mt-6 sm:mt-8 border border-gray-100">
        <div className="relative overflow-hidden w-full px-4 sm:px-8 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[900px]">
          <div className="pt-6 md:pt-14 absolute mx-auto flex flex-col items-center inset-0 bg-grid-slate-100/70 z-0 px-4 sm:px-8">
            <div className="relative max-w-3xl text-xl md:text-2xl lg:text-3xl text-left text-[#040202] sm:text-center !leading-9 mb-6 font-medium">
              <TextReveal text="I'm Abhi, an experienced frontend developer.I'm live in Surat, building the future." />
            </div>
            <Image
              src={img}
              alt="Abhi Varde"
              objectFit="cover"
              className="rounded-md mt-2 bg-gray-300 bg-opacity-30"
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-[200px] border-b border-gray-100 px-4 sm:px-8">
          <p className="max-w-3xl text-xl md:text-2xl lg:text-3xl text-left text-[#040202] sm:text-center !leading-9 font-medium">
            Proficient in
            <span className="text-[#0067d6]"> diverse skills </span>
            with
            <span className="text-[#7c00c7]"> extensive experience </span> in
            <span className="text-[#00DC82]"> varied environments.</span>
          </p>
        </div>
        <div className="mt-4 border-t border-b border-gray-100">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div className="border-r border-gray-100 p-4">
              <div>
                <p className="text-[#666666] flex gap-2 items-center">
                  <IoBriefcaseOutline size={24} />
                  Work Experience
                </p>
                <p className="text-lg mt-4">
                  My work history and accomplishments timeline.
                </p>
                {works.map((work, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 ${
                      i === 0 ? "mt-6" : "mt-3"
                    }`}
                  >
                    <Image
                      src={work.image}
                      alt={work.companyName}
                      className="h-12 w-12 object-cover bg-gray-300 bg-opacity-30 p-2 rounded-md"
                    />
                    <div className="flex w-full flex-col">
                      <p className="hidden sm:block font-medium">
                        {work.companyName}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="text-sm">{work.role}</p>
                        <p className="text-sm">
                          {work.startAt} - {work.endAt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div>
                <p className="text-[#666666] flex gap-2 items-center">
                  <LuTerminal size={24} />
                  Skills
                </p>
                <p className="text-lg mt-4">
                  Here’s what sets me apart and makes me unique.
                </p>
                <div className="mt-6 overflow-hidden hidden sm:flex lg:hidden">
                  <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scroll">
                    {skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex flex-shrink-0 max-w-full relative justify-center items-center border space-x-1 bg-white p-2 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                      >
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-500">{skill.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 overflow-hidden flex sm:hidden lg:flex">
                  <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scroll">
                    {skills.slice(0, 6).map((skill, i) => (
                      <div
                        key={i}
                        className="flex flex-shrink-0 max-w-full relative justify-center items-center border space-x-1 bg-white p-2 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                      >
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-500">{skill.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-2 overflow-hidden flex sm:hidden lg:flex">
                  <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scrollReverse">
                    {skills.slice(6, 12).map((skill, i) => (
                      <div
                        key={skill}
                        className="flex flex-shrink-0 max-w-full relative justify-center items-center border space-x-1 bg-white p-2 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                      >
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-500">{skill.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-2 overflow-hidden flex sm:hidden lg:flex">
                  <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scroll">
                    {skills.slice(12).map((skill, i) => (
                      <div
                        key={skill}
                        className="flex flex-shrink-0 max-w-full relative justify-center items-center border space-x-1 bg-white p-2 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                      >
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-500">{skill.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-[180px] mt-4 border-t border-b border-gray-100 px-4 sm:px-8">
          <p className="sm:max-w-3xl flex flex-wrap items-center text-center space-y-2 sm:space-y-0 text-xl md:text-2xl text-[#040202] !leading-9 font-medium">
            Breathing Life into
            <span className="flex text-base font-normal items-center gap-1.5 mx-1.5 bg-white border px-3 py-1.5 rounded-full">
              <LuFigma size={16} />
              Designs
            </span>
            through
            <span className="flex text-base font-normal items-center gap-1.5 mx-1.5 bg-white border px-3 py-1.5 rounded-full">
              <LuGlobe size={16} /> Web Development
            </span>
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default About;
