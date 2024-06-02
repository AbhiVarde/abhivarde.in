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
      className="relative inline-block rounded-lg shadow-md border-[1px] p-2 text-center cursor-pointer bg-white backdrop-filter backdrop-blur-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="absolute text-sm bottom-full bg-gray-300 bg-opacity-30 px-2 py-1 rounded-md -ml-5 mb-2">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
