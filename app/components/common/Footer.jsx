"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import socialLinks from "@/app/data/socialLinks";
import { GoArrowUpRight } from "react-icons/go";
import TailwindCSS from "../../resources/svgs/tailwindCSS.svg";
import NextJS from "../../../public/next.svg";
import Vercel from "../../../public/vercel.svg";

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-14 mb-8 sm:mb-12 max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent" />

      <div className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm sm:text-base md:text-lg tracking-wide font-medium text-white mb-3 sm:mb-4">
            Connect
          </h3>
          <div className="flex space-x-3 sm:space-x-4">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-white hover:text-[#FF3B00] transition-colors duration-200 transform hover:scale-110"
              >
                {React.cloneElement(social.icon, { size: "1.25rem" })}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-sm sm:text-base md:text-lg tracking-wide font-medium text-white mb-3 sm:mb-4">
            Powered By
          </h3>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3">
            {[
              { name: "Next.js", logo: NextJS, url: "https://nextjs.org" },
              {
                name: "TailwindCSS",
                logo: TailwindCSS,
                url: "https://tailwindcss.com",
              },
              { name: "Vercel", logo: Vercel, url: "https://vercel.com" },
            ].map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white rounded-xl bg-[#111111] hover:bg-[#222222] transition-all duration-200 border border-[#333] hover:border-[#FF3B00]"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2"
                />
                {tech.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center">
        <p className="text-white/80 mb-3 sm:mb-0 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <Link
          href="https://twitter.com/varde_abhi"
          className="inline-flex items-center space-x-1 text-white/85 hover:text-[#FF3B00] transition-colors duration-200 group"
        >
          <span className="text-xs sm:text-sm">
            Brought to you by Abhi Varde
          </span>
          <GoArrowUpRight
            size={16}
            className="text-[#FF3B00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
