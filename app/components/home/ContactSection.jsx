"use client";

import React from "react";
import { LuMail, LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="mt-16">
      <div className="mt-4 mb-8 flex space-x-3 items-center">
        <div className="bg-gray-300 bg-opacity-30 p-2 rounded-lg">
          <LuMail size={22} />
        </div>
        <h2 className="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
          Keep in touch!
        </h2>
      </div>
      <p className="text-lg text-zinc-600 leading-relaxed flex flex-col sm:flex-row items-center">
        You can send me an email at
        <Link
          href="mailto:abhivarde.contact@gmail.com?subject=Hi%20from%20abhivarde.in"
          className="flex ml-1 space-x-1 relative overflow-hidden group w-max
          text-black"
        >
          abhivarde.contact@gmail.com
          <LuArrowUpRight size={20} className="mt-1" />
          <span className="absolute -left-1 bottom-0 w-full h-0.5 bg-black bg-opacity-50 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
        </Link>
      </p>
    </div>
  );
};

export default ContactSection;
