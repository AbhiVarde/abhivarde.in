import React from "react";
import { TbLayout } from "react-icons/tb";
import Blogs from "../components/blog/Blogs";

export const metadata = {
  title: "Blog",
  description:
    "Read insightful articles and updates from Abhi Varde on software engineering, technology trends, and more.",
};

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-16 md:pt-18">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-2 sm:mb-4 flex space-x-3 items-center">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <TbLayout size={20} color="#FFFFFF" />
          </div>
          <h2 className="sm:text-lg md:text-xl font-medium tracking-wide">
            Blog
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          Writing about things I build, learn, and find worth sharing.
        </p>
      </div>
      <Blogs />
    </div>
  );
};

export default Blog;
