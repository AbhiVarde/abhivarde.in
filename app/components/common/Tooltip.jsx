"use client";

import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative inline-block rounded-lg shadow-md border-[1px] border-[#333] p-2 text-center cursor-pointer bg-[#111111] backdrop-filter backdrop-blur-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="absolute text-sm bottom-full bg-[#FF3B00] text-white px-2 py-1 rounded-md -ml-5 mb-2">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
