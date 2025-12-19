"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerNavLinks from "@/app/content/headerNavLinks";
import { motion } from "motion/react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(pathname);
  const [pillStyle, setPillStyle] = useState({});
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!navRef.current) return;

    const activeButton = navRef.current.querySelector(
      `[data-nav-item="${selected}"]`
    );

    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setPillStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [selected]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed w-full top-0 z-40 flex justify-center px-4">
      <motion.nav
        ref={menuRef}
        className="px-4 py-2 w-full max-w-5xl shadow-lg border border-[#333] rounded-3xl overflow-hidden"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(0, 0, 0, 0.2)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
          marginTop: isScrolled ? "8px" : "20px",
        }}
        transition={{ duration: 0.15, easing: "linear" }}
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

          <ul ref={navRef} className="hidden md:flex gap-4 relative">
            {pillStyle.width && (
              <motion.span
                className="absolute bg-[#F4F0E6] rounded-xl h-9 top-[50%] -translate-y-1/2 z-0"
                animate={{
                  left: pillStyle.left,
                  width: pillStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
            {headerNavLinks.map((navLink, index) => (
              <li key={index}>
                <Link href={navLink.url}>
                  <button
                    data-nav-item={navLink.url}
                    onClick={() => setSelected(navLink.url)}
                    className="relative px-3 py-2 rounded-lg tracking-wider cursor-pointer font-normal"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-150 ${
                        selected === navLink.url ? "text-black" : "text-white"
                      }`}
                    >
                      {navLink.title}
                    </span>
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
    </header>
  );
};

export default Navbar;
