"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { VscVscode } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";

const About = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "./AbhiVarde_Resume.pdf";
    link.download = "AbhiVarde_Resume.pdf";
    link.click();
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 sm:p-6 min-h-64 md:min-h-auto border border-[#333] rounded-3xl bg-[#111] text-white shadow-2xl flex flex-col">
          <div className="uppercase tracking-wider flex gap-2 items-center text-sm sm:text-base">
            <span className="bg-[#FF3B00] p-1.5 rounded-md">
              <VscVscode size={20} color="#FFFFFF" />
            </span>
            Product × Engineering
          </div>

          <div className="mt-4 grow">
            <p className="text-base md:text-lg tracking-normal leading-relaxed mb-4">
              I design and build developer-first tools, focusing on thoughtful
              UI, clean interactions, and polished, performant web-native
              experiences.
            </p>
          </div>

          <button
            className="cursor-pointer text-sm mt-3 bg-[#1a1a1a] border border-[#333] px-4 py-1.5 rounded-lg hover:bg-[#222] transition-colors"
            onClick={handleDownloadClick}
            title="Download Resume"
          >
            Download Resume
          </button>
        </div>

        <div className="group p-4 sm:p-6 border border-[#333] rounded-3xl bg-[#111] relative overflow-hidden shadow-2xl min-h-75">
          <div className="absolute inset-0">
            {!isVideoLoaded && (
              <Image
                src="/syncui-image.png"
                fill
                className="object-cover"
                alt="Sync UI preview"
                priority
              />
            )}

            <video
              ref={videoRef}
              src="/SyncUI.mov"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={`object-cover w-full h-full transition-opacity ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadedData={() => setIsVideoLoaded(true)}
            />

            <div className="absolute inset-0 bg-linear-to-r from-black to-transparent opacity-70"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
            <h3 className="text-lg sm:text-xl font-medium mb-1">Sync UI 🚀</h3>
            <p className="text-sm sm:text-base mb-2 opacity-90">
              A UI library with animated MUI components and premium templates.
            </p>

            <a
              href="https://syncui.design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors"
            >
              <span className="text-sm">syncui.design</span>
              <LuExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
