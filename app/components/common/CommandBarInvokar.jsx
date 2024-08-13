"use client";

import React from "react";
import { useKBar } from "kbar";
import { LuCommand } from "react-icons/lu";

const CommandBarInvokar = () => {
  const { query } = useKBar();

  return (
    <button
      className="fixed z-10 right-6 bottom-6 p-2 md:p-3 flex gap-1 font-medium hover:-translate-y-1 border-1 border-[#333] hover:border-2 bg-[#111111] text-white rounded-2xl transition-all duration-200 hover:shadow-sm focus:outline-none"
      onClick={() => query.toggle()}
      aria-label="Command Bar"
    >
      <LuCommand size={23} /> K
    </button>
  );
};

export default CommandBarInvokar;
