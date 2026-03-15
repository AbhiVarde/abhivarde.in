"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerNavLinks from "@/app/content/headerNavLinks";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    const activeItem = hoveredItem || pathname;

    const activeButton = navRef.current.querySelector(
      `[data-nav-item="${activeItem}"]`,
    );

    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;

      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        opacity: 1,
      });
    }
  }, [hoveredItem, pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleScroll = () => setIsMobileMenuOpen(false);

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const getTextColor = (url) => {
    if (hoveredItem) return hoveredItem === url ? "text-black" : "text-white";
    return pathname === url ? "text-black" : "text-white";
  };

  return (
    <header className="fixed w-full top-0 z-40 flex justify-center px-4">
      <nav
        ref={menuRef}
        className="px-4 py-2 w-full max-w-5xl border border-[#333] rounded-3xl shadow-lg overflow-hidden transition-all duration-200 ease-out"
        style={{
          backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.2)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
          marginTop: isScrolled ? "8px" : "20px",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#F4F0E6] tracking-wide">
            <Link
              href="/"
              className="opacity-90 hover:opacity-100 transition-colors"
            >
              ~abhivarde
            </Link>

            {pathname !== "/" && (
              <>
                <span className="opacity-40">/</span>
                <span className="capitalize opacity-80">
                  {pathname.split("/")[1]}
                </span>
              </>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-6 h-6 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-5 bg-[#F4F0E6] rounded transition-all duration-200 ${
                isMobileMenuOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-[#F4F0E6] rounded transition-all duration-200 ${
                isMobileMenuOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>

          <ul
            ref={navRef}
            className="hidden md:flex items-center gap-2 relative"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span
              className="absolute bg-[#F4F0E6] rounded-lg h-8 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
              style={indicatorStyle}
            />

            {headerNavLinks.map((navLink) => (
              <li key={navLink.url}>
                <Link href={navLink.url}>
                  <button
                    data-nav-item={navLink.url}
                    onMouseEnter={() => setHoveredItem(navLink.url)}
                    className="relative px-3 py-1.5 rounded-md text-sm tracking-wide transition-colors cursor-pointer"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-150 ${getTextColor(
                        navLink.url,
                      )}`}
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
          className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#333]/40 mt-3 pt-3">
            <ul className="flex flex-col">
              {headerNavLinks.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm tracking-wide transition-colors cursor-pointer ${
                      pathname === item.url
                        ? "text-[#F4F0E6]"
                        : "text-[#F4F0E6]/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item?.icon && (
                      <span className="flex items-center justify-center w-4 h-4 opacity-80">
                        {item.icon}
                      </span>
                    )}

                    <span>{item.title}</span>

                    {pathname === item.url && (
                      <span className="ml-auto text-[#F4F0E6] text-sm">✸</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
