"use client";

import Link from "next/link";
import { LuHome } from "react-icons/lu";
import { motion } from "framer-motion";

function NotFoundPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background stars - minimal version */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-xl w-full flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Code */}
        <motion.div className="relative" variants={itemVariants}>
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-white">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.h2
          className="mt-4 text-xl md:text-2xl font-semibold text-white text-center"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>

        {/* Short message */}
        <motion.p
          className="mt-2 text-gray-300 text-center max-w-sm"
          variants={itemVariants}
        >
          The page you're looking for doesn't exist.
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-8"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#FF3B00] to-[#FF7A00] p-0.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#FF3B00]"
          >
            <span className="relative rounded-md bg-gradient-to-r from-[#FF3B00] to-[#FF7A00]  px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 flex items-center">
              Return Home
              <span className="ml-2">
                <LuHome size={16} />
              </span>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Add simplified star styles */}
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

// Simplified star generator
function generateStars(count) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    stars += `${x}px ${y}px #FFF,`;
  }
  return stars.substring(0, stars.length - 1);
}

export default NotFoundPage;
