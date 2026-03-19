import React from "react";
import { TbLayout } from "react-icons/tb";
import Blogs from "../components/sections/blog/Blogs";
import { PageHeader } from "../components/layout/PageHeader";

export const metadata = {
  title: "Blog",
  description:
    "Writing about AI tools, product engineering, open source, and things worth sharing.",
  alternates: { canonical: "https://abhivarde.in/blog" },
};

const Blog = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-16 sm:pt-20 pb-16">
      <div className="mb-8">
        <PageHeader icon={TbLayout} title="Blog" />

        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          Writing about things I build, learn, and find worth sharing.
        </p>
      </div>

      <Blogs />
    </main>
  );
};

export default Blog;
