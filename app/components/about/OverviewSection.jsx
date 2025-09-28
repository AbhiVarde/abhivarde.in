"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SiVisualstudiocode } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

const OverviewSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadClick = () => {
    const cvUrl = "./AbhiVarde-Resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = cvUrl;
    downloadLink.download = "AbhiVarde_CV.pdf";
    downloadLink.click();
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setIsVideoLoaded(false);
  };

  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="p-6 sm:p-8 border border-[#333] rounded-3xl bg-[#111111] text-white shadow-2xl flex flex-col"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-white uppercase tracking-wider flex gap-2 items-center text-sm sm:text-base">
            <span className="bg-[#FF3B00] p-1.5 rounded-md">
              <SiVisualstudiocode size={20} color="#FFFFFF" />
            </span>
            My Space
          </div>
          <div className="mt-4 flex-grow">
            <p className="text-base sm:text-lg tracking-wide leading-relaxed mb-4">
              Hey there 👋 Welcome to my little corner on the web. This is a
              space where I share what I'm building, exploring, and learning
              along the way.
            </p>
          </div>
          <motion.button
            className="text-sm sm:text-sm mt-3 bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-xl hover:bg-[#111111A0] transition-colors duration-300"
            onClick={handleDownloadClick}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
        <motion.div
          className="p-4 sm:p-6 md:p-8 border min-h-[300px] border-[#333] bg-[#111111] rounded-3xl relative overflow-hidden shadow-2xl"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0">
            {!isVideoLoaded && (
              <Image
                src="/syncui-image.png"
                layout="fill"
                objectFit="cover"
                alt="Video placeholder"
              />
            )}
            <video
              ref={videoRef}
              src="/SyncUI.mov"
              autoPlay
              loop
              muted
              playsInline
              className={`object-cover w-full h-full transition-opacity duration-300 ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              onCanPlay={handleVideoLoad}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-white z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-medium mb-1 text-shadow-lg">
              Building Sync UI 🚀
            </h3>
            <p className="text-sm sm:text-base text-shadow-md mb-2">
              A UI library with animated MUI components and premium templates.
            </p>
            <motion.a
              href="https://syncui.design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm sm:text-sm">syncui.design</span>
              <LuExternalLink size={14} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;
