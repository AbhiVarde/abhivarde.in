"use client";

import React from "react";
import Link from "next/link";
import socialLinks from "@/app/data/socialLinks";
import { GoArrowUpRight } from "react-icons/go";
import Tooltip from "./Tooltip";
import TailwindCSS from "../../resources/svgs/tailwindCSS.svg";
import NextJS from "../../../public/next.svg";
import Vercel from "../../../public/vercel.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-auto border-t-[1px] border-[#333] mb-12 mt-14 flex max-w-3xl flex-col items-center space-y-4 px-4 sm:px-8 text-center">
      <div className="mb-6 flex space-x-4 mt-12">
        {socialLinks.map((social, i) => (
          <Tooltip key={i} text={social.name}>
            <Link href={social.url} target="_blank" aria-label={social.name}>
              {social.icon}
            </Link>
          </Tooltip>
        ))}
      </div>
      <p className="flex space-x-1">
        &copy; {new Date().getFullYear()}, Made by
        <Link
          href="https://twitter.com/varde_abhi"
          className="flex ml-1 space-x-1 relative overflow-hidden group"
        >
          Abhi Varde{" "}
          <GoArrowUpRight size={22} className="mt-0.5" color="#FF3B00" />
          <span className="absolute -left-1 bottom-0 w-full h-0.5 bg-[#FF3B00] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
        </Link>
      </p>
      <div className="flex md:flex-row flex-col items-center gap-x-1.5">
        <h3 className="text-base text-white">This portfolio is built with:</h3>
        <ul className="flex items-center gap-x-1.5 text-sm md:mt-0 mt-3">
          <li>
            <a
              href="https://nextjs.org"
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-center gap-x-1 p-2 rounded-lg border border-[#333] bg-[#111111] text-white"
            >
              <Image src={NextJS} alt="next" className="w-4 h-4" />
              <span>Next.js</span>
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-center gap-x-1 p-2 rounded-lg border border-[#333] bg-[#111111] text-white"
            >
              <Image src={TailwindCSS} alt="taiwlindCSS" className="w-5 h-5" />
              <span>TailwindCSS</span>
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com"
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-center gap-x-1 p-2 rounded-lg border border-[#333] bg-[#111111] text-white"
            >
              <Image src={Vercel} alt="vercel" className="w-4 h-4" />
              <span>Vercel</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
