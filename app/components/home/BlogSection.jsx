"use client";

import React, { useState } from "react";
import { LuArrowRight, LuLayout } from "react-icons/lu";
import blogs from "@/app/data/blogs";
import Link from "next/link";

const BlogSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mt-16">
      <div className="mt-4 mb-8 flex space-x-3 items-center">
        <div className="bg-[#FF3B00] p-2 rounded-lg">
          <LuLayout size={22} color="#FFFFFF" />
        </div>
        <h2 class="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
          Recently Published
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs?.slice(0, 3).map((blog, i) => (
          <Link
            key={i}
            href={blog?.url}
            target="_blank"
            className={`${
              hoveredIndex === i && "-translate-y-2"
            } relative group flex flex-col rounded-xl border border-[#333] overflow-hidden bg-[#111111] text-white p-6 cursor-pointer shadow-md transition-all duration-300`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p
              className={`font-medium text-lg mb-2 ${
                hoveredIndex === i && "underline"
              }`}
            >
              {blog.title}
            </p>
            <p className="mb-4 text-white/80">{blog.desc}</p>
            <p className="text-white/50 text-sm">{blog.publishdate}</p>
            <div
              className={`${
                hoveredIndex === i ? "bg-[#F4F0E6]" : "bg-[#F4F0E6]"
              } absolute -bottom-0.5 -right-0.5 w-9 h-9 border border-[#F4F0E6] rounded-tl-xl rounded-br-xl flex justify-center items-center text-white`}
            >
              <LuArrowRight
                color="#000000"
                className={`transition-all duration-300 ${
                  hoveredIndex === i ? "translate-x-1" : "translate-x-0"
                }`}
              />
            </div>
          </Link>
        ))}
        <Link
          href="/blog"
          className="flex text-sm sm:text-base items-center justify-center space-x-2 rounded-xl hover:underline overflow-hidden bg-[#FF3B00] text-white shadow-md cursor-pointer h-fit p-4"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className="font-medium">View All Blog Posts</p>
          <LuArrowRight
            size={22}
            className={`transition-all duration-300 ${
              hoveredIndex === 4 ? "translate-x-2" : "translate-x-0"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
