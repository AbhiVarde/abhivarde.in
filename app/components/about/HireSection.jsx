"use client";

import React, { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

const HireSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abhivarde.contact@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center border border-[#333] bg-[#F4F0E6] rounded-3xl p-2.5">
        <h2 className="text-base font-medium tracking-wide text-black sm:pl-2">
          Open for Product & Design Engineering roles
        </h2>
        <button
          onClick={handleCopyEmail}
          className=" cursor-pointer flex items-center space-x-2 bg-[#FF3B00] text-white px-4 py-2 rounded-xl sm:rounded-2xl hover:bg-[#E63500] transition-colors duration-300"
        >
          {copied ? (
            <>
              <LuCheck size={18} />
              <span className="text-sm">Copied!</span>
            </>
          ) : (
            <>
              <LuCopy size={18} />
              <span className="text-sm">Copy Email</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default HireSection;
