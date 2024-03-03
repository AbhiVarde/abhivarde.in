"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Theme from "./Theme";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

const NavLink = ({ href, children }) => {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-black dark:text-white"
          : "text-gray-600 dark:text-gray-300"
      } hover:dark:text-white hover:text-gray-800 dark:hover:text-white`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const links = [
    { title: "About", href: "/about" },
    { title: "Guestbook", href: "/guestbook" },
  ];

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isToggle]);

  return (
    <header className="border-b dark:border-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-25 dark:bg-transparent  bg-white border-zinc-200 fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav className="container max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white "
        >
          AbhiVarde.
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 list-none">
            {links.map((link, index) => (
              <li key={index} className="transition duration-300 ease-in-out">
                <NavLink href={link.href}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden md:block border-l mx-6 h-6 dark:border-zinc-600 border-zinc-300"></div>
          <Theme />
          <div className="block md:hidden border-l mx-6 h-6 dark:border-zinc-600 border-zinc-300"></div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            {!isToggle && (
              <CgMenuRight
                size={24}
                onClick={() => setIsToggle(!isToggle)}
                className="text-gray-600 dark:text-gray-300 cursor-pointer transition duration-300 ease-in-out hover:text-gray-800 dark:hover:text-white"
              />
            )}
          </motion.div>
        </div>

        {isToggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`backdrop-filter backdrop-blur-md dark:bg-opacity-85 bg-opacity-85 md:hidden fixed top-0 left-0 w-screen h-screen dark:bg-zinc-900 bg-white z-50 flex flex-col justify-center items-center`}
          >
            <div className="absolute top-5 right-5">
              <CgClose
                size={24}
                onClick={() => setIsToggle(!isToggle)}
                className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-white"
              />
            </div>
            <ul className="dark:text-white text-xl space-y-4 list-none">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} onClick={() => setIsToggle(false)}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
