import React from "react";
import { LuLayout } from "react-icons/lu";
import Blogs from "../components/blog/Blogs";

export const metadata = {
  title: "Blog",
  description:
    "Read insightful articles and updates from Abhi Varde on software engineering, technology trends, and more.",
};

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="mt-6 sm:mt-10">
        <div className="mt-4 mb-6 flex space-x-3 items-center">
          <div className="bg-gray-300 bg-opacity-30 p-2 rounded-lg">
            <LuLayout size={22} />
          </div>
          <h2 class="text-xl sm:text-2xl font-medium leading-8 tracking-normal">
            Blog Posts
          </h2>
        </div>
        <p class="sm:text-lg text-zinc-600 leading-relaxed">
          Check out my latest blog posts where I share insights, tips, and
          experiences. Feel free to drop by, read, and leave your thoughts in
          the comments!
        </p>
      </div>
      <Blogs />
    </div>
  );
};

export default Blog;
