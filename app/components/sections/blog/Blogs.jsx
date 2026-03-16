"use client";

import Link from "next/link";
import Image from "next/image";
import blogs from "@/app/content/blogs";
import { LuExternalLink } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

const Blogs = () => {
  return (
    <div className="relative overflow-hidden max-h-350 md:max-h-275">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            target="_blank"
            href={blog.url}
            className="group relative cursor-pointer rounded-3xl overflow-hidden border border-[#333] bg-[#111]"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover p-2 rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            <p className="text-sm font-medium text-white px-4 pb-4 mt-2">
              {blog.title}
            </p>

            <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <GoArrowUpRight size={18} />
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <Link
          target="_blank"
          href="https://dev.to/abhivarde"
          className="flex cursor-pointer items-center gap-2 px-5 py-2 rounded-lg border border-white/15 bg-[#1a1a1a] text-sm text-white/80 hover:text-white hover:border-white/25 hover:bg-[#222] transition"
        >
          See more
          <LuExternalLink size={12} />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
