"use client";

import Link from "next/link";
import { TbHome } from "react-icons/tb";
import { motion } from "motion/react";

function NotFoundPage() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="stars" />
      </div>

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center">
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FF3B00] to-white"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="mt-4 text-xl md:text-2xl font-medium text-white text-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Page not found
        </motion.h2>

        <motion.p
          className="mt-2 text-sm text-white/40 text-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          This page doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#FF3B00] hover:bg-[#E63500] text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            <TbHome size={16} />
            Back home
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .stars {
          position: absolute;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${generateStars(300)};
          animation: animateStars 60s linear infinite;
        }
        @keyframes animateStars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-1000px);
          }
        }
      `}</style>
    </div>
  );
}

function generateStars(count) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    stars += `${x}px ${y}px #FFF,`;
  }
  return stars.slice(0, -1);
}

export default NotFoundPage;
