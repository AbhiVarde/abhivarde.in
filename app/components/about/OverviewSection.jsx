"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    <div className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 p-6 sm:p-8 border border-[#333] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white shadow-lg flex flex-col">
          <div className="text-white uppercase tracking-wider flex gap-2 items-center">
            <span className="bg-[#FF3B00] p-1.5 rounded-md">
              <SiVisualstudiocode size={20} color="#FFFFFF" />
            </span>
            My Studio
          </div>
          <div className="mt-4 flex-grow">
            <p className="sm:text-lg  tracking-wide leading-relaxed mb-4">
              Namaste!🙏 Abhivarde.in is more than a portfolio; it's a window
              into my world, where passion meets purpose. Discover my work.
            </p>
          </div>
          <div className="mt-6">
            <button
              className="text-base mt-4 bg-[#111111] border border-[#333] px-6 py-3 rounded-full"
              onClick={handleDownloadClick}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 p-4 sm:p-6 md:p-8 border min-h-[300px] border-[#333] bg-[#111111] rounded-2xl relative overflow-hidden shadow-lg">
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
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 mr-2" />
                <span className="sm:text-lg md:text-xl font-semibold">
                  Surat
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="mr-2 text-sm">{getTimezoneOffset()}</span>
                <span className="sm:text-lg font-semibold mt-0.5">
                  {formatTime(currentTime)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
