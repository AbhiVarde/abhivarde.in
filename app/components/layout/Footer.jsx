"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import socialLinks from "@/app/content/socialLinks";
import { GoArrowUpRight } from "react-icons/go";
import TailwindCSS from "../../resources/svgs/tailwindCSS.svg";
import NextJS from "../../../public/next.svg";
import Vercel from "../../../public/vercel.svg";

const Footer = () => {
  return (
    <footer className="relative mt-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
        <div className="h-px bg-linear-to-r from-transparent via-[#FF3B00] to-transparent" />
        <div className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-3">
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
                  className="text-white/60 hover:text-[#FF3B00] transition-colors"
                >
                  {React.cloneElement(social.icon, { size: "1.25rem" })}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-3">
              Built with
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {[
                { name: "Next.js", logo: NextJS, url: "https://nextjs.org" },
                {
                  name: "Tailwind",
                  logo: TailwindCSS,
                  url: "https://tailwindcss.com",
                },
                { name: "Vercel", logo: Vercel, url: "https://vercel.com" },
              ].map((tech) => (
                <Link
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full 
    border border-white/10 text-white/60 text-xs 
    hover:text-white/90 hover:border-white/25 transition-colors"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    className={`w-3.5 h-3.5 ${tech.name === "Vercel" ? "invert" : ""}`}
                  />
                  <span>{tech.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Abhi Varde
          </p>
          <Link
            href="https://twitter.com/varde_abhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-[#FF3B00] transition-colors group"
          >
            <span>abhivarde.in</span>
            <GoArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
