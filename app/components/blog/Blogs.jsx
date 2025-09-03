"use client";

import React, { useState } from "react";
import blogs from "@/app/content/blogs";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Blogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {blogs.map((blog, index) => (
        <Link
          key={index}
          target="_blank"
          href={blog.url}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative rounded-3xl overflow-hidden border border-[#333] bg-[#111111]"
        >
          <div className="relative w-full h-[240px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
          <p className="font-medium text-white text-lg p-4">{blog.title}</p>
          <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition">
            <GoArrowUpRight size={21} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
