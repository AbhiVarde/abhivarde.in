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
      <div className="flex flex-col min-h-screen">
        {!is404 && <Navbar />}
        <div className="flex-1">{children}</div>
        {!is404 && <Footer />}
      </div>
    </>
  );
}
