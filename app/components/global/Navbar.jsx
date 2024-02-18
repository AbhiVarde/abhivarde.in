"use client";
import { useState } from "react";
import Link from "next/link";
import Theme from "./Theme";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const links = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Guestbook", href: "/guestbook" },
  ];

  return (
    <header className="backdrop-filter bg-opacity-25 backdrop-blur-md border-b dark:border-zinc-800 border-zinc-200 fixed top-0 left-0 w-full z-50 px-6 py-4">
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
              <li
                key={index}
                className="transition duration-300 ease-in-out hover:text-gray-800 dark:hover:text-white"
              >
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:block border-l mx-6 h-6 dark:border-zinc-600 border-zinc-300"></div>
          <Theme />
          <div className="block md:hidden border-l mx-6 h-6 dark:border-zinc-600 border-zinc-300"></div>
          <div className="md:hidden">
            {!isToggle && (
              <CgMenuRight
                size={24}
                onClick={() => setIsToggle(!isToggle)}
                className="text-gray-600 dark:text-gray-300 cursor-pointer transition duration-300 ease-in-out hover:text-gray-800 dark:hover:text-white"
              />
            )}
          </div>
        </div>

        {isToggle && (
          <div
            className={`backdrop-filter backdrop-blur-md bg-opacity-85 md:hidden fixed top-0 left-0 w-screen h-screen  dark:bg-zinc-900 bg-white z-50 flex flex-col justify-center items-center `}
          >
            <div className="absolute top-6 right-6">
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
