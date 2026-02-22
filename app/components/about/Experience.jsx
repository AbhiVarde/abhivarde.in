"use client";

import React from "react";
import Image from "next/image";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuTerminal } from "react-icons/lu";

const Experience = ({ works, skills }) => {
  const isRemote = (src) => typeof src === "string" && src.startsWith("http");

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111]">
        <div>
          <div className="uppercase tracking-widest flex gap-2 items-center text-sm">
            <span className="bg-[#FF3B00] p-1 rounded-md">
              <IoBriefcaseOutline size={18} color="#FFFFFF" />
            </span>
            Work Experience
          </div>

          <p className="mt-4">My work history and accomplishments timeline.</p>

          {works?.map((work, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 ${i === 0 ? "mt-6" : "mt-3"}`}
            >
              <img
                src={work.image}
                alt={work.companyName}
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-10 w-10 object-cover bg-[#333] border border-[#333] bg-opacity-30 p-1 rounded-xl"
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

      <div className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111]">
        <div>
          <div className="uppercase tracking-widest flex gap-2 items-center text-sm">
            <span className="bg-[#FF3B00] p-1 rounded-md">
              <LuTerminal size={18} color="#FFFFFF" />
            </span>
            Skills
          </div>

          <p className="mt-4">
            I've worked with the following but not limited to.
          </p>

          <div className="mt-6 overflow-hidden hidden sm:flex lg:hidden">
            <div className="flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap animate-scroll">
              {skills?.map((skill, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center space-x-1 bg-[#F4F0E6] px-2 py-1 text-xs sm:text-sm rounded-md border"
                >
                  {isRemote(skill.image) ? (
                    <img
                      src={skill.image}
                      alt={skill.title}
                      width={16}
                      height={16}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-4 h-4"
                    />
                  ) : (
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  )}

                  <span className="text-black">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>

          {[skills?.slice(0, 10), skills?.slice(10, 20), skills?.slice(20)]
            .filter(Boolean)
            .map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="mt-2 overflow-hidden flex sm:hidden lg:flex"
              >
                <div
                  className={`flex min-w-full shrink-0 space-x-4 py-4 w-max flex-nowrap ${
                    groupIndex % 2 === 1
                      ? "animate-scroll-reverse"
                      : "animate-scroll"
                  }`}
                >
                  {group?.map((skill, i) => (
                    <div
                      key={i}
                      className="flex shrink-0 items-center space-x-1 bg-[#F4F0E6] px-2 py-1 text-xs sm:text-sm rounded-md border"
                    >
                      {isRemote(skill.image) ? (
                        <img
                          src={skill.image}
                          alt={skill.title}
                          width={16}
                          height={16}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          className="w-4 h-4"
                        />
                      ) : (
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      )}

                      <span className="text-black">{skill.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
