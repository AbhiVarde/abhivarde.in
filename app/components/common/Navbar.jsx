"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerNavLinks from "@/app/data/headerNavLinks";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { LuEqual } from "react-icons/lu";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(pathname);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  // const navVariants = {
  //   hidden: { opacity: 0, y: -50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     // transition: {
  //     //   type: "spring",
  //     //   stiffness: 260,
  //     //   damping: 20,
  //     // },
  //   },
  // };

  // const linkVariants = {
  //   hidden: { opacity: 0, y: -20 },
  //   visible: (custom) => ({
  //     opacity: 1,
  //     y: 0,
  //     // transition: {
  //     //   delay: custom * 0.1,
  //     //   type: "spring",
  //     //   stiffness: 300,
  //     //   // damping: 24,
  //     // },
  //   }),
  // };

  const mobileMenuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const mobileMenuItemVariants = {
    closed: { x: -40, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out`}
        initial="hidden"
        animate="visible"
        // variants={navVariants}
      >
        <motion.nav
          className={`
          px-3 md:px-4 py-3
          transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? "bg-black/80 backdrop-blur-lg shadow-lg border-b border-[#333]"
              : "bg-white/5 border border-[#333] mt-3 mx-3 md:mt-4 md:mx-4 lg:mt-5 lg:mx-5 backdrop-blur-md rounded-3xl shadow-2xl"
          }
        `}
        >
          <div className="flex justify-between items-center">
            <motion.div
              className="flex space-x-1 sm:space-x-2"
              // variants={linkVariants}
              custom={0}
            >
              <Link
                href="/"
                className="md:text-lg tracking-wide text-[#F4F0E6] cursor-pointer font-normal"
              >
                ~
                {pathname === "/" && (
                  <span className="ml-1 md:text-lg tracking-wide">
                    abhivarde
                  </span>
                )}
              </Link>
              {pathname !== "/" && (
                <Link
                  href={pathname}
                  className="md:text-lg tracking-wide text-[#F4F0E6] cursor-pointer font-normal"
                >
                  <span className="text-[#F4F0E6]">/</span>&nbsp;
                  {pathname.charAt(1).toUpperCase() + pathname.slice(2)}
                </Link>
              )}
            </motion.div>

            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#F4F0E6] focus:outline-none"
              >
                <LuEqual size={24} />
              </motion.button>
            </div>

            <ul className="hidden md:flex gap-3 sm:gap-4 relative">
              {headerNavLinks.map((navLink, index) => (
                <motion.li
                  key={index}
                  // variants={linkVariants}
                  custom={index + 1}
                >
                  <Link href={navLink.url}>
                    <motion.button
                      onClick={() => setSelected(navLink.url)}
                      className={`relative px-2 sm:px-3 py-1 sm:py-2 rounded-lg overflow-hidden group tracking-wider font-normal`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span
                        className={`relative z-10 ${
                          selected === navLink.url ? "text-black" : "text-white"
                        }`}
                      >
                        {navLink.title}
                      </span>
                      {selected === navLink.url && (
                        <motion.span
                          layoutId="navbar-pill"
                          className="absolute inset-0 bg-[#F4F0E6] rounded-lg"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <motion.span
                        className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    </motion.button>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 left-0 z-50 w-full sm:w-72 bg-[#111111] shadow-2xl overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-[#333]">
                <motion.div
                  className="md:text-lg font-medium tracking-wide text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Menu
                </motion.div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white focus:outline-none"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </motion.button>
              </div>
              <nav className="flex-grow overflow-y-auto">
                <ul className="flex flex-col space-y-1 p-4">
                  {headerNavLinks.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={mobileMenuItemVariants}
                      custom={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.url}
                        className={`block py-2 px-3 rounded-lg transition duration-300 ease-in-out ${
                          pathname === item.url
                            ? "text-[#FF3B00] bg-white/10"
                            : "text-white hover:bg-white/5"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#FF3B00] p-2 rounded-lg">
                            {item?.icon}
                          </div>
                          {/* <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full text-sm">
                            {item.title.charAt(0)}
                          </span> */}
                          <span className="text-sm tracking-wider">
                            {item.title}
                          </span>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                className="p-4 border-t border-[#333]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-white/80 text-sm">
                  &copy; {new Date().getFullYear()} Abhi Varde. All rights
                  reserved.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
