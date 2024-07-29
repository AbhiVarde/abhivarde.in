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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out flex justify-center`}
        initial="hidden"
        animate="visible"
      >
        <motion.nav
{/*           className={`
          px-3 md:px-4 py-3 w-full max-w-5xl
          transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? "bg-black/80 backdrop-blur-lg shadow-lg border-b border-[#333]"
              : "bg-white/5 border border-[#333] mt-3 mx-3 md:mt-4 md:mx-4 lg:mt-5 lg:mx-5 backdrop-blur-md rounded-3xl shadow-2xl"
          }
        `} */}
         className={`
          px-4 py-3 w-full max-w-5xl
          transition-all duration-500 ease-in-out
          bg-black/80 backdrop-blur-lg shadow-lg border border-[#333] 
          rounded-3xl
        `}
        >
          <div className="flex justify-between items-center">
            <motion.div
              className="flex space-x-1 sm:space-x-2"
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
            {/* ... (rest of the mobile menu code remains unchanged) ... */}
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
