"use client";

import React from "react";
import { LuMail } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="mt-16">
      <div className="mt-4 mb-8 flex space-x-3 items-center">
        <div className="bg-[#FF3B00] p-2 rounded-lg">
          <LuMail size={22} color="#FFFFFF" />
        </div>
        <h2 className="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
          Keep in touch!
        </h2>
      </div>
      <p className="sm:text-lg text-white leading-relaxed flex flex-col sm:flex-row items-center">
        You can send me an email at
        <Link
          href="mailto:abhivarde.contact@gmail.com?subject=Hi%20from%20abhivarde.in"
          className="flex ml-1 space-x-1 font-medium relative overflow-hidden group w-max
          text-white"
        >
          abhivarde.contact@gmail.com
          <GoArrowUpRight size={22} className="mt-1" color="#FF3B00" />
          <span className="absolute -left-1 bottom-0 w-full h-0.5 bg-[#FF3B00] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
        </Link>
      </p>
    </div>
  );
};

export default ContactSection;
