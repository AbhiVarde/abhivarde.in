"use client";

import React, { useState } from "react";
import blogs from "@/app/data/blogs";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Blogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="group relative transition-all duration-200 rounded-md bg-[#111111] border border-[#333] p-4"
        >
          <Link
            target="_blank"
            href={blog?.url}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              objectFit="cover"
              loading="eager"
              className="rounded-md hover:opacity-90"
            />
            <p className="font-medium text-white sm:text-lg mt-2">
              {blog.title}
            </p>
            <p className="flex gap-0.5 text-sm mt-2 text-white/80">
              {blog.publishdate}{" "}
              <GoArrowUpRight
                size={21}
                className={`${
                  hoveredIndex === index &&
                  "text-white transition-all duration-200 -translate-y-0.5 translate-x-1"
                }`}
              />
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
