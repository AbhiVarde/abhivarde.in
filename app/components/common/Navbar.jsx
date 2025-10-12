"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerNavLinks from "@/app/content/headerNavLinks";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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

  const navVariants = {
    top: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(8px)",
      margin: "20px 12px",
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
    scroll: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(12px)",
      margin: "8px 12px",
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
  };

  return (
    <motion.header className="fixed w-full top-0 z-40 flex justify-center">
      <motion.nav
        className="px-4 py-3 w-full max-w-5xl shadow-lg border border-[#333] rounded-3xl mt-3 mx-3 md:mt-4 lg:mt-5 overflow-hidden"
        variants={navVariants}
        animate={isScrolled ? "scroll" : "top"}
      >
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Link
              href="/"
              className="md:text-lg tracking-wide text-[#F4F0E6] font-normal"
            >
              ~{pathname === "/" && <span className="ml-1">abhivarde</span>}
            </Link>
            {pathname !== "/" && (
              <Link
                href={pathname}
                className="md:text-lg tracking-wide text-[#F4F0E6] font-normal"
              >
                <span className="text-[#F4F0E6]">/</span>&nbsp;
                {pathname.charAt(1).toUpperCase() + pathname.slice(2)}
              </Link>
            )}
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-6 h-6 flex flex-col justify-center gap-1.5 items-center"
            >
              <span
                className={`block h-0.5 w-5 bg-[#F4F0E6] rounded transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[#F4F0E6] rounded transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-4">
            {headerNavLinks.map((navLink, index) => (
              <li key={index}>
                <Link href={navLink.url}>
                  <button
                    onClick={() => setSelected(navLink.url)}
                    className="relative px-3 py-2 rounded-lg tracking-wider font-normal group"
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
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#333]/30 mt-3 pt-3">
            <ul className="flex flex-col space-y-2">
              {headerNavLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={`block py-2 px-3 rounded-lg transition-colors duration-200 ${
                      pathname === item.url
                        ? "text-black bg-[#F4F0E6]"
                        : "text-[#F4F0E6] hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {item?.icon && (
                        <div className="p-1.5 rounded-md bg-[#FF3B00] text-white">
                          {item.icon}
                        </div>
                      )}
                      <span className="text-sm tracking-wide font-medium">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
