"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TbHome } from "react-icons/tb";

function generateStars(count) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    stars += `${x}px ${y}px #FFF${i < count - 1 ? "," : ""}`;
  }
  return stars;
}

export default function NotFoundPage() {
  const [stars, setStars] = useState("");

  useEffect(() => {
    setStars(generateStars(300));
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {stars && (
          <style>{`
            .stars {
              position: absolute;
              width: 1px;
              height: 1px;
              background: transparent;
              box-shadow: ${stars};
              animation: animateStars 60s linear infinite;
            }
            @keyframes animateStars {
              from { transform: translateY(0px); }
              to { transform: translateY(-1000px); }
            }
          `}</style>
        )}
        <div className="stars" />
      </div>

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center gap-2">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FF3B00] to-white">
          404
        </h1>
        <h2 className="text-lg md:text-xl font-medium">Nothing here</h2>
        <p className="text-sm text-white/40 max-w-xs">
          Looks like this page took a long vacation. Let's get you back on
          track.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-xs font-medium px-4 py-1.5 rounded-full transition-colors"
        >
          <TbHome size={13} />
          Back home
        </Link>
      </div>
    </div>
  );
}
