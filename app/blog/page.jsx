import React from "react";
import { TbLayout } from "react-icons/tb";
import Blogs from "../components/blog/Blogs";

export const metadata = {
  title: "Blog",
  description:
    "Writing about AI tools, product engineering, open source, and things worth sharing.",
  alternates: { canonical: "https://abhivarde.in/blog" },
};

const Blog = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-24">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <TbLayout size={20} color="#FFFFFF" />
          </div>
          <h1 className="text-lg md:text-xl font-medium tracking-wide">Blog</h1>
        </div>

        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          Writing about things I build, learn, and find worth sharing.
        </p>
      </div>

      <Blogs />
    </main>
  );
};

export default Blog;
