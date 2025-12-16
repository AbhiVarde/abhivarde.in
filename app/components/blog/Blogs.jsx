"use client";

import Link from "next/link";
import Image from "next/image";
import blogs from "@/app/content/blogs";
import { GoArrowUpRight } from "react-icons/go";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {blogs.map((blog, index) => (
        <Link
          key={index}
          target="_blank"
          href={blog.url}
          className="group relative rounded-3xl overflow-hidden border border-[#333] bg-[#111]"
        >
          <div className="relative w-full h-60 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover p-2 rounded-3xl transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.06]"
            />
          </div>

          <p className="font-medium text-white text-lg px-4 pb-4 mt-2">
            {blog.title}
          </p>

          <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
            <GoArrowUpRight size={21} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
