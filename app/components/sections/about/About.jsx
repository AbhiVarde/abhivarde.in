"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { VscVscode } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

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
          <div className="uppercase tracking-widest flex items-center gap-2 text-sm">
            <span className="bg-[#FF3B00] p-1 rounded-md shrink-0">
              <VscVscode size={18} color="#FFFFFF" />
            </span>

            <div className="flex items-center gap-x-1.5 leading-tight">
              <span>Design</span>
              <span className="text-white/40">×</span>
              <span>Product</span>
              <span className="hidden sm:inline text-white/40">×</span>
              <span className="hidden sm:inline">Engineering</span>
            </div>
          </div>

          <div className="mt-5 grow">
            <p className="text-sm sm:text-base leading-relaxed">
              Focused on clean architecture, thoughtful UX, and shipping things
              that last.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-3 text-white/60">
              Open to Product Engineer and Design Engineer roles at
              product-driven companies.
            </p>
          </div>

          <button
            className="cursor-pointer text-sm mt-6 sm:mt-4 bg-[#1a1a1a] border border-[#333] px-3.5 py-1.5 rounded-full hover:bg-[#222] transition-colors w-fit"
            onClick={handleDownloadClick}
            title="Download Resume"
          >
            Download Resume
          </button>
        </div>

        <div className="group border border-[#333] rounded-3xl bg-[#111] relative overflow-hidden shadow-2xl min-h-75">
          <div className="absolute inset-0">
            {!isVideoLoaded && (
              <Image
                src="/syncui-image.png"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                alt="Sync UI preview"
              />
            )}

            <video
              ref={videoRef}
              src="/SyncUI.mov"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className={`object-cover w-full h-full transition-opacity ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadedData={() => setIsVideoLoaded(true)}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
            <h3 className="text-lg font-medium mb-1 drop-shadow-lg">Sync UI</h3>
            <p className="text-sm font-normal mb-3 text-white/70 drop-shadow-md">
              React component library for Design Engineers
            </p>
            <Link
              href="https://syncui.design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full 
  bg-white/10 backdrop-blur-md border border-white/20 
  text-white/80 text-sm font-medium 
  hover:bg-white/20 hover:border-white/30 hover:text-white 
  transition-colors"
            >
              <span>syncui.design</span>
              <LuExternalLink size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
