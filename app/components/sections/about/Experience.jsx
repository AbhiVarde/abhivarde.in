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
    { title: "Platforms", items: skills.slice(14, 20) },
    { title: "AI & SDKs", items: skills.slice(20, 25) },
    { title: "Infrastructure", items: skills.slice(25, 30) },
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

        <p className="mt-2 text-sm text-white/60">
          Where I've worked, contributed, and shipped things that matter.
        </p>

        <div className="mt-6 flex flex-col flex-1 justify-between">
          {works?.map((work, i) => (
            <div key={i} className="flex items-start gap-3">
              <img
                src={work.image}
                alt={work.companyName}
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-9 w-9 shrink-0 object-cover bg-[#222] border border-[#333] p-1 rounded-xl mt-0.5"
              />
              <div className="flex flex-col w-full min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-medium text-sm text-white leading-tight">
                    {work.companyName}
                  </p>
                  {work.type && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/40 shrink-0">
                      {work.type}
                    </span>
                  )}
                </div>
                <div className="flex flex-row justify-between items-center mt-0.5">
                  <p className="text-xs text-white/50">{work.role}</p>
                  <p className="text-xs text-white/30 shrink-0 ml-2">
                    {work.startAt} – {work.endAt}
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

        <p className="mt-2 text-sm text-white/60">
          Tools and technologies I work with, and keep reaching for.
        </p>

        <div className="mt-4 flex flex-col flex-1 justify-between">
          {groups.map((group, i) => (
            <div key={i}>
              <p className="text-[10px] uppercase tracking-wider text-white/35 mb-1.5 mt-1">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-transparent text-[11px] text-white/70"
                  >
                    {isRemote(skill.image) ? (
                      <img
                        src={skill.image}
                        alt={skill.title}
                        width={11}
                        height={11}
                        className={`w-2.5 h-2.5 shrink-0 object-contain ${
                          shouldInvert.includes(skill.title) ? "invert" : ""
                        }`}
                      />
                    ) : (
                      <Image
                        src={skill.image}
                        alt={skill.title}
                        width={11}
                        height={11}
                        className={`w-2.5 h-2.5 shrink-0 object-contain ${
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
