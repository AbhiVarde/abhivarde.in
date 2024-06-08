"use client";

import React from "react";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { useRouter } from "next/navigation";
import {
  LuSearch,
  LuHome,
  LuBook,
  LuUser,
  LuTarget,
  LuLayout,
} from "react-icons/lu";
import KResults from "./KResults";
import socialLinks from "@/app/data/socialLinks";

const KProvider = ({ children }) => {
  const router = useRouter();

  const actions = [
    {
      id: "home",
      name: "Home",
      keywords: "index root",
      shortcut: ["h"],
      perform: () => router.push("/"),
      section: "Pages",
      icon: <LuHome />,
    },
    {
      id: "blog",
      name: "blog",
      keywords: "blogs",
      shortcut: ["b"],
      perform: () => router.push("/blog"),
      section: "Pages",
      icon: <LuLayout />,
    },
    {
      id: "projects",
      name: "Projects",
      keywords: "projects creations apps repositories",
      shortcut: ["p"],
      perform: () => router.push("/projects"),
      section: "Pages",
      icon: <LuTarget />,
    },
    {
      id: "guestbook",
      name: "Guestbook",
      keywords: "guestbook comments community wall",
      shortcut: ["g"],
      perform: () => router.push("/guestbook"),
      section: "Pages",
      icon: <LuBook />,
    },
    {
      id: "about",
      name: "About",
      keywords: "about",
      shortcut: ["a"],
      perform: () => router.push("/about"),
      section: "Pages",
      icon: <LuUser size={19} />,
    },
  ];

  socialLinks.map((social) => {
    actions.push({
      id: social.id,
      name: social.name,
      perform: () => window.open(social.url),
      section: "Socials",
      icon: social.icon,
    });
  });

  return (
    <div>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="z-30 backdrop-blur-md backdrop-filter">
            <KBarAnimator className="mx-auto w-[32rem] overflow-hidden rounded-xl border-[1px] border-[#333] border-tertiary bg-[#111111] px-4 drop-shadow-2xl ">
              <div className="mx-2 flex items-center justify-between py-4 ">
                <span>
                  <LuSearch className="mr-2 mb-0.5 h-5 w-5" />
                </span>
                <KBarSearch className="w-full rounded-md border-none outline-none bg-transparent placeholder:text-white/50" />
                <div className="bg-[#333] border border-[#333] bg-opacity-30 px-2 py-0.5 text-sm rounded-md transition duration-200">
                  esc
                </div>
              </div>
              <KResults />
              <div className="h-4" />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </div>
  );
};

export default KProvider;
