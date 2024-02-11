"use client";
import { useEffect } from "react";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import Snowflake from "../../public/snowFlake.svg";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const socials = [
  {
    icon: <FaLinkedinIn size={20} />,
    href: "https://www.linkedin.com/in/abhi-varde-6634551b1",
    label: "Linkedin",
    handle: "@abhivarde",
  },
  {
    icon: <FaXTwitter size={20} />,
    href: "https://twitter.com/varde_abhi",
    label: "Twitter",
    handle: "@varde_abhi",
  },
  {
    icon: <LuGithub size={20} />,
    href: "https://github.com/AbhiVarde",
    label: "Github",
    handle: "AbhiVarde",
  },
  {
    icon: <LuInstagram size={20} />,
    href: "https://www.instagram.com/iamabhi_189/",
    label: "Instagram",
    handle: "@iamabhi_189",
  },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />
        <div className="min-h-screen px-6 pt-20 pb-8 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-2"
            >
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Connect with me{" "}
              </h2>
              <Image
                src={Snowflake}
                alt="snow-flake"
                height={16}
                width={16}
                className="animate-spin"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-zinc-400"
            >
              Find me on social media for more updates and memes. 😄
            </motion.p>
          </div>
          <div className="hidden w-full h-px md:block bg-zinc-800" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {socials.map((s, index) => (
              <Card key={index}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-12 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:p-24"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
