"use client";

import React from "react";
import { useKBar } from "kbar";
import { LuCommand } from "react-icons/lu";

const CommandBarInvokar = () => {
  const { query } = useKBar();

  return (
    <button
      className="fixed right-6 bottom-6 p-2 flex gap-1 font-medium hover:-translate-y-1 border-2 border-transparent hover:border-gray-200 bg-gray-300 bg-opacity-40 rounded-md transition-all duration-200 hover:shadow-sm focus:outline-none"
      onClick={() => query.toggle()}
      aria-label="Command Bar"
    >
      <LuCommand size={23} /> K
    </button>
  );
};

export default CommandBarInvokar;
