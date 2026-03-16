"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const is404 = !["/", "/projects", "/oss", "/blog", "/guestbook"].includes(
    pathname,
  );

  return (
    <>
      <ScrollToTop />
      <Analytics />
      {!is404 && <Navbar />}
      {children}
      {!is404 && <Footer />}
    </>
  );
}
