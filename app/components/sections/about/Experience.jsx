"use client";

import React from "react";
import Image from "next/image";
import works from "@/app/content/works";
import skills from "@/app/content/skills";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuTerminal } from "react-icons/lu";

const Experience = () => {
  const isRemote = (src) => typeof src === "string" && src.startsWith("http");

  const groups = [
    { title: "Languages", items: skills.slice(0, 4) },
    { title: "Frameworks", items: skills.slice(4, 8) },
    { title: "UI & Styling", items: skills.slice(8, 13) },
    { title: "Platforms", items: skills.slice(13, 19) },
    { title: "AI & SDKs", items: skills.slice(19, 24) },
    { title: "Infrastructure", items: skills.slice(24, 30) },
  ];

  const shouldInvert = ["Vercel", "GitHub Actions", "Socket.io", "AWS"];

  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">
      <div className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111] flex flex-col">
        <div className="uppercase tracking-widest flex gap-2 items-center text-sm font-medium">
          <span className="bg-[#FF3B00] p-1 rounded-md" aria-hidden="true">
            <IoBriefcaseOutline size={18} color="#FFFFFF" aria-hidden="true" />
          </span>
          Work Experience
        </div>

        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          Where I've worked, contributed, and shipped things that matter.
        </p>

        <div className="mt-5 flex flex-col flex-1 justify-between" role="list">
          {works?.map((work, i) => (
            <React.Fragment key={i}>
              {i !== 0 && (
                <div className="h-px bg-white/6" aria-hidden="true" />
              )}
              <div
                role="listitem"
                className={`flex items-center gap-3 py-2 ${i === 0 ? "pt-0" : ""} ${i === works.length - 1 ? "pb-0" : ""}`}
              >
                <img
                  src={work.image}
                  alt={`${work.companyName} logo`}
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 md:h-9 md:w-9 shrink-0 object-cover bg-[#333] border border-[#333] bg-opacity-30 p-1 rounded-xl"
                />
                <div className="flex w-full min-w-0 flex-col gap-0.5">
                  <div className="flex items-center justify-between gap-2 min-w-0">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {work.companyName}
                      </p>
                      {work.type && (
                        <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/60">
                          {work.type}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/60 shrink-0">
                      {work.startAt} – {work.endAt}
                    </p>
                  </div>
                  <p className="text-xs text-white/80 truncate">{work.role}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6 rounded-3xl border border-[#333] bg-[#111111] flex flex-col">
        <div className="uppercase tracking-widest flex gap-2 items-center text-sm font-medium">
          <span className="bg-[#FF3B00] p-1 rounded-md" aria-hidden="true">
            <LuTerminal size={18} color="#FFFFFF" aria-hidden="true" />
          </span>
          Skills
        </div>

        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          Tools and technologies I work with, and keep reaching for.
        </p>

        <div className="mt-5 flex flex-col flex-1 justify-between gap-2">
          {groups.map((group, i) => (
            <div key={i}>
              <p className="text-[10px] uppercase tracking-wider text-white/60 mb-1.5">
                {group.title}
              </p>
              <div
                className="flex flex-wrap gap-1.5"
                role="list"
                aria-label={`${group.title} skills`}
              >
                {group.items.map((skill, j) => (
                  <div
                    key={j}
                    role="listitem"
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-transparent text-xs"
                  >
                    {isRemote(skill.image) ? (
                      <img
                        src={skill.image}
                        alt=""
                        aria-hidden="true"
                        width={12}
                        height={12}
                        className={`w-3 h-3 shrink-0 object-contain ${
                          shouldInvert.includes(skill.title) ? "invert" : ""
                        }`}
                      />
                    ) : (
                      <Image
                        src={skill.image}
                        alt=""
                        aria-hidden="true"
                        width={12}
                        height={12}
                        className={`w-3 h-3 shrink-0 object-contain ${
                          shouldInvert.includes(skill.title) ? "invert" : ""
                        }`}
                      />
                    )}
                    <span>{skill.title}</span>
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
