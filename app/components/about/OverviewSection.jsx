"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MapImage from "../../resources/images/globe.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

const OverviewSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getTimezoneOffset = () => {
    const offset = -currentTime.getTimezoneOffset() / 60;
    const sign = offset >= 0 ? "+" : "-";
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset);
    const minutes = (absOffset - hours) * 60;
    return `GMT ${sign}${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleDownloadClick = () => {
    const cvUrl = "./Resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = cvUrl;
    downloadLink.download = "AbhiVarde_CV.pdf";
    downloadLink.click();
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
            My Studio
          </div>
          <div className="mt-4 flex-grow">
            <p className="text-base sm:text-lg tracking-wide leading-relaxed mb-4">
              Namaste!🙏 Abhivarde.in is more than a portfolio; it's a window
              into my world, where passion meets purpose. Discover my work.
            </p>
          </div>
          <motion.button
            className="text-sm sm:text-base mt-4 bg-[#1a1a1a] border border-[#333] px-6 py-3 rounded-full hover:bg-[#111111A0] transition-colors duration-300"
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
            <Image
              src={MapImage}
              alt="Map"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <span className="text-base sm:text-lg md:text-xl font-semibold">
                  Surat
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs sm:text-sm">
                  {getTimezoneOffset()}
                </span>
                <span className="text-base sm:text-lg font-semibold mt-0.5">
                  {formatTime(currentTime)}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;
