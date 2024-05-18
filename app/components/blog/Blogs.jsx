"use client";

import React, { useState } from "react";
import blogs from "@/app/data/blogs";
import Link from "next/link";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

const Blogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="group relative shadow-md rounded-xl transition duration-200 p-4 md:hover:scale-[1.02]"
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
              className="h-[180px] sm:h-[240px] rounded-lg hover:opacity-80"
            />
            <p className="text-zinc-500 text-sm mt-2">{blog.publishdate}</p>
            <p
              className={`font-medium *:sm:text-lg mt-2 ${
                hoveredIndex === index && "underline"
              }`}
            >
              {blog.title}
            </p>
          </Link>
          {blog.url && (
            <div className="absolute -top-2 -right-2   hidden opacity-0 transition duration-200 hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100">
              <LuExternalLink size={22} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
