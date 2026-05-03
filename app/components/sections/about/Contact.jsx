"use client";

import React, { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abhivarde.contact@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border border-[#333] bg-[#F4F0E6] rounded-3xl px-4 py-3">
        <h2 className="text-sm sm:text-base font-medium tracking-wide text-black text-center sm:text-left">
          Open to Product Engineer and Design Engineer roles
        </h2>

        <button
          onClick={handleCopyEmail}
          aria-label={
            copied ? "Email copied to clipboard" : "Copy email address"
          }
          className="flex items-center gap-2 bg-[#FF3B00] text-white px-3.5 py-1.5 rounded-full hover:bg-[#E63500] transition-colors cursor-pointer"
        >
          {copied ? (
            <LuCheck size={16} aria-hidden="true" />
          ) : (
            <LuCopy size={16} aria-hidden="true" />
          )}
          <span className="text-sm" aria-live="polite" aria-atomic="true">
            {copied ? "Copied!" : "Copy Email"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
