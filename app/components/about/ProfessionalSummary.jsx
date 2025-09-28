"use client";

import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuTerminal } from "react-icons/lu";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfessionalSummary = ({ works, skills }) => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div>
          <div className="text-white uppercase tracking-wider flex gap-3 items-center">
            <span className="bg-[#FF3B00] p-1.5 rounded-md">
              <IoBriefcaseOutline size={20} color="#FFFFFF" />
            </span>
            Work Experience
          </div>
          <p className="sm:text-lg mt-4">
            My work history and accomplishments timeline.
          </p>
          {works?.map((work, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 ${i === 0 ? "mt-6" : "mt-3"}`}
            >
              <Image
                src={work.image}
                alt={work.companyName}
                className="h-12 w-12 object-cover bg-[#333] border border-[#333] bg-opacity-30 p-2 rounded-md"
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
      </motion.div>
      <motion.div
        className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div>
          <div className="text-white uppercase tracking-wider flex gap-3 items-center">
            <span className="bg-[#FF3B00] p-1.5 rounded-md">
              <LuTerminal size={20} color="#FFFFFF" />
            </span>
            Skills
          </div>
          <p className="sm:text-lg mt-4">
            I’ve worked with the following but not limited to.
          </p>
          <div className="mt-6 overflow-hidden hidden sm:flex lg:hidden">
            <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scroll">
              {skills?.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-shrink-0 items-center space-x-1 bg-[#F4F0E6] px-2 py-1 text-xs sm:text-sm rounded-md shadow-sm border"
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-black">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 overflow-hidden flex sm:hidden lg:flex">
            <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scroll">
              {skills?.slice(0, 6).map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-shrink-0 items-center space-x-1 bg-[#F4F0E6] px-2 py-1 text-xs sm:text-sm rounded-md shadow-sm border"
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-black">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 overflow-hidden flex sm:hidden lg:flex">
            <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scrollReverse">
              {skills?.slice(6, 12).map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-shrink-0 items-center space-x-1 bg-[#F4F0E6] px-2 py-1 text-xs sm:text-sm rounded-md shadow-sm border"
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-black">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 overflow-hidden flex sm:hidden lg:flex">
            <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scroll">
              {skills?.slice(12).map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-shrink-0 items-center space-x-1 bg-[#F4F0E6] px-2 py-1 text-xs sm:text-sm rounded-md shadow-sm border"
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-black">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalSummary;
