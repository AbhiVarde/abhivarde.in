"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerNavLinks from "@/app/content/headerNavLinks";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const isFirstRender = useRef(true);

  const updateIndicator = useCallback(
    (animate = true) => {
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
          willChange: "left, width",
          transition: animate ? "left 0.18s ease, width 0.18s ease" : "none",
        });
      }
    },
    [hoveredItem, pathname],
  );

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const isFirst = isFirstRender.current;
    if (isFirst) isFirstRender.current = false;
    updateIndicator(!isFirst);
  }, [hoveredItem, pathname, updateIndicator]);

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setNavbarHeight(headerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const handleResize = () => updateIndicator(false);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [updateIndicator]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const getTextColor = (url) => {
    if (hoveredItem) return hoveredItem === url ? "text-black" : "text-white";
    return pathname === url ? "text-black" : "text-white";
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-40 flex justify-center px-3 py-2"
      >
        <nav
          className="relative px-4 w-full max-w-5xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden transition-[background-color,backdrop-filter] duration-200 ease-out"
          style={{
            backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.2)",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
            WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-full h-px transition-opacity duration-200"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              opacity: isScrolled ? 1 : 0,
            }}
          />

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-1 text-[#F4F0E6] tracking-wide">
              <Link
                href="/"
                className="opacity-90 hover:opacity-100 transition-opacity"
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
              ref={toggleBtnRef}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden relative w-6 h-6 flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute h-[1.5px] w-4 bg-[#F4F0E6] rounded transition-all duration-200 ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-0.75"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-[#F4F0E6] rounded transition-all duration-200 ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-0.75"
                }`}
              />
            </button>

            <ul
              ref={navRef}
              className="hidden md:flex items-center gap-2 relative"
              onMouseLeave={() => setHoveredItem(null)}
            >
              {indicatorStyle && (
                <span
                  className="absolute bg-[#F4F0E6] rounded-lg h-8 top-1/2 -translate-y-1/2"
                  style={indicatorStyle}
                />
              )}
              {headerNavLinks.map((navLink) => (
                <li key={navLink.url}>
                  <Link href={navLink.url}>
                    <button
                      data-nav-item={navLink.url}
                      onMouseEnter={() => setHoveredItem(navLink.url)}
                      className="relative px-3 py-1.5 rounded-md text-sm tracking-wide cursor-pointer"
                    >
                      <span
                        className={`relative z-10 transition-colors duration-150 ${getTextColor(navLink.url)}`}
                      >
                        {navLink.title}
                      </span>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <div
        className="md:hidden fixed inset-0 z-30"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.15s ease",
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="max-w-5xl w-full mx-auto px-6 pb-6"
          style={{ paddingTop: `${navbarHeight + 8}px` }}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[#F4F0E6]/40 uppercase tracking-widest text-xs mb-4 block">
            Navigation
          </span>
          <ul className="flex flex-col">
            {headerNavLinks.map((item, index) => (
              <li key={item.url}>
                <Link
                  href={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-4 transition-colors ${
                    index < headerNavLinks.length - 1
                      ? "border-b border-white/10"
                      : ""
                  } ${
                    pathname === item.url
                      ? "text-[#F4F0E6]"
                      : "text-[#F4F0E6]/60 hover:text-[#F4F0E6]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon && (
                      <span className="flex items-center justify-center w-5 h-5 opacity-70">
                        {item.icon}
                      </span>
                    )}
                    <span className="text-base font-medium tracking-wide">
                      {item.title}
                    </span>
                  </div>
                  {pathname === item.url && (
                    <span className="text-[#F4F0E6] text-sm">✸</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
