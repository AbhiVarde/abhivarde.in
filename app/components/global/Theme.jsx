"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

const Theme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  function toggleTheme() {
    return currentTheme === "light" ? setTheme("dark") : setTheme("light");
  }
  useEffect(() => setHasMounted(true), []);

  if (!hasMounted)
    return (
      <span className="animate-pulse min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300"></span>
    );

  return (
    <button
      onClick={toggleTheme}
      className={`dark:bg-primary-bg bg-zinc-100 dark:text-[#00FFC2] text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-300 transition-transform group: ${
        currentTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? <LuSun /> : <LuMoon />}
    </button>
  );
};

export default Theme;
