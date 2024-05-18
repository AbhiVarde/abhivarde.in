"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerNavLinks from "@/app/data/headerNavLinks";
import { Rotate as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const useIsScrollTop = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isTop;
};

const variants = {
  open: {
    x: 0,
    display: "flex",
    transition: {
      type: "spring",
      duration: 0.6,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
};

const Navbar = () => {
  const pathname = usePathname();
  const isTop = useIsScrollTop();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className={`${
        !isTop
          ? "fixed top-0 w-full border-b z-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-95"
          : ""
      }`}
    >
      <nav className="px-4 sm:px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Link href="/" className="text-lg cursor-pointer">
              ~
              {pathname === "/" && (
                <span className="ml-1 text-lg">abhivarde</span>
              )}
            </Link>
            {pathname !== "/" && (
              <Link href={pathname} className="text-lg cursor-pointer">
                <span className="text-gray-400">/</span>&nbsp;
                {pathname.charAt(1).toUpperCase() + pathname.slice(2)}
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <div className="block relative">
              <Hamburger
                toggled={toggleMenu}
                toggle={setToggleMenu}
                rounded
                size={18}
                direction="right"
                label="Navigation Menu"
              />
            </div>
            {toggleMenu && (
              <motion.ul
                className={`absolute left-0 z-50 flex flex-col space-y-6 bg-primary px-8 pt-8 mt-4 bg-white w-full  ${
                  toggleMenu ? "h-screen" : "h-0 w-0 overflow-hidden"
                }`}
                variants={variants}
                initial="closed"
                animate={toggleMenu ? "open" : "closed"}
              >
                {headerNavLinks.map((item, index) => (
                  <motion.li
                    key={index}
                    className={`${
                      pathname === item.url
                        ? "text-black"
                        : "text-black/50 hover:text-black"
                    } border-b-[1px] border-b-tertiary py-1 pl-2 transition duration-200 `}
                    variants={listItemVariants}
                  >
                    <Link
                      href={item.url}
                      className="flex w-auto"
                      onClick={() => setToggleMenu(false)}
                      noGradientUnderline
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          <ul className="hidden md:flex gap-4">
            {headerNavLinks.map((navLink, index) => (
              <Link
                key={index}
                href={navLink.url}
                className={`${
                  pathname === navLink.url
                    ? "bg-gray-300 bg-opacity-30"
                    : "hover:bg-gray-300 hover:bg-opacity-30"
                } rounded-lg px-3 py-1 text-base transition duration-200 `}
              >
                {navLink.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
