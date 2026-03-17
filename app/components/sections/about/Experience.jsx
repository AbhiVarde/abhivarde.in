"use client";

import React from "react";
import Image from "next/image";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuTerminal } from "react-icons/lu";

const Experience = ({ works, skills }) => {
  const isRemote = (src) => typeof src === "string" && src.startsWith("http");

  const groups = [
    { title: "Languages", items: skills.slice(0, 4) },
    { title: "Frameworks", items: skills.slice(4, 10) },
    { title: "UI", items: skills.slice(10, 14) },
    { title: "Platforms", items: skills.slice(14, 18) },
    { title: "AI & SDKs", items: skills.slice(18, 23) },
    { title: "Infrastructure", items: skills.slice(23, 27) },
  ];

  const shouldInvert = ["Vercel", "GitHub Actions", "Socket.io", "AWS"];

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      <div className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111] flex flex-col h-full">
        <div className="uppercase tracking-widest flex gap-2 items-center text-sm">
          <span className="bg-[#FF3B00] p-1 rounded-md">
            <IoBriefcaseOutline size={18} color="#FFFFFF" />
          </span>
          Work Experience
        </div>

        <p className="mt-4 text-sm text-white/60">
          Where I've worked, contributed, and shipped things that matter.
        </p>

        <div className="flex flex-col flex-1 justify-between mt-6">
          {works?.map((work, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 ${i !== 0 ? "mt-3" : ""}`}
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
                  <p className="text-sm text-white/70">{work.role}</p>
                  <p className="text-sm text-white/40">
                    {work.startAt} - {work.endAt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111] flex flex-col h-full">
        <div className="uppercase tracking-widest flex gap-2 items-center text-sm">
          <span className="bg-[#FF3B00] p-1 rounded-md">
            <LuTerminal size={18} color="#FFFFFF" />
          </span>
          Skills
        </div>

        <p className="mt-4 text-sm text-white/60">
          Tools and technologies I work with, and keep reaching for.
        </p>

        <div className="mt-6 space-y-3">
          {groups.map((group, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-wider text-white/40 mb-2">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-transparent text-xs"
                  >
                    {isRemote(skill.image) ? (
                      <img
                        src={skill.image}
                        alt={skill.title}
                        width={12}
                        height={12}
                        className={`w-3 h-3 shrink-0 object-contain ${
                          shouldInvert.includes(skill.title) ? "invert" : ""
                        }`}
                      />
                    ) : (
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        width={12}
                        height={12}
                        className={`w-3 h-3 shrink-0 object-contain ${
                          shouldInvert.includes(skill.title) ? "invert" : ""
                        }`}
                      />
                    )}
                    {skill.title}
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
