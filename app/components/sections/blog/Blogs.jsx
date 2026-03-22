"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import blogs from "@/app/content/blogs";
import { LuExternalLink } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

function BlogCard({ blog }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      target="_blank"
      href={blog.url}
      className="group relative cursor-pointer rounded-3xl overflow-hidden border border-[#333] bg-[#111]"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={blog.image}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover p-2 rounded-3xl"
          style={{
            filter: "blur(18px)",
            transform: "scale(1.08)",
            opacity: loaded ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}
        />
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover p-2 rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        />
      </div>

      <p className="text-sm font-medium text-white px-4 pb-4 mt-2">
        {blog.title}
      </p>

      <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
        <GoArrowUpRight size={18} />
      </div>
    </Link>
  );
}

const Blogs = () => {
  return (
    <div className="relative overflow-hidden max-h-375 md:max-h-275">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <Link
          target="_blank"
          href="https://dev.to/abhivarde"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur text-xs text-white/60 hover:text-white/90 transition"
        >
          See more
          <LuExternalLink size={11} />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
