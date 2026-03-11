"use client";

import React from "react";
import { LuCommand } from "react-icons/lu";
import { usePathname } from "next/navigation";
import CommandMenu from "./CommandMenu";

const CommandBarInvokar = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const is404 = !["/", "/guestbook", "/blog", "/projects"].includes(pathname);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (is404) return null;

  return (
    <>
      <button
        className="fixed z-10 right-6 bottom-6 p-2 md:p-2.5 flex items-center gap-1.5 text-xs font-medium border border-[#333] bg-[#111] text-white/60 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:text-white focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Command Bar"
      >
        <LuCommand size={16} />
        <span>K</span>
      </button>
      <CommandMenu open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CommandBarInvokar;
