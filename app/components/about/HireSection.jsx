"use client";

import React from "react";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

const HireSection = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center border border-[#333] bg-[#F4F0E6] rounded-3xl p-2.5">
        <h2 className="text-base font-medium tracking-widest text-black sm:pl-2">
          Looking for a developer?
        </h2>
        <Link
          href="mailto:abhivarde.contact@gmail.com?subject=Developer%20Inquiry%20from%20abhivarde.in"
          className="flex items-center space-x-2 bg-[#FF3B00] text-white px-4 py-2 rounded-xl sm:rounded-2xl hover:bg-[#E63500] transition-colors duration-300"
        >
          <LuMail size={22} />
          <span className="text-sm sm:text-base">Let's Connect</span>
        </Link>
      </div>
    </div>
  );
};

export default HireSection;
