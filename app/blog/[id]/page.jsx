"use client";

import React from "react";
import { myBlogs } from "@/utils/data/my-blogs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "next/navigation"; // 👈 import this
import BlogPost from "@/app/components/BlogPost";

export default function BlogDetail() {
  const params = useParams(); // 👈 use the hook
  const { id } = params;

  const blogIndex = myBlogs.findIndex((b) => b.id === Number(id));
  const blog = myBlogs[blogIndex];

  if (!blog)
    return (
      <div className="text-center py-20 text-red-400 text-xl font-medium">
        Blog not found.
      </div>
    );

  const prevBlog = blogIndex > 0 ? myBlogs[blogIndex - 1] : null;
  const nextBlog = blogIndex < myBlogs.length - 1 ? myBlogs[blogIndex + 1] : null;


  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-3xl mx-auto py-16 px-6 relative"
    >
      {/* Back Button */}
      <Link
        href="/#blog"
        className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full 
                   bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold 
                   shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        <FaArrowLeft className="text-sm" />
        Back to Blogs
      </Link>

      

      {/* Blog Content */}
      <BlogPost post={blog} />



      {/* Prev / Next Navigation */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-700">
        {prevBlog ? (
          <Link
            href={`/blog/${prevBlog.id}`}
            className="group flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-gradient-to-r from-violet-700 to-violet-500 text-white font-medium
                       shadow hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <FaArrowCircleLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Previous</span>
          </Link>
        ) : (
          <span />
        )}

        {nextBlog ? (
          <Link
            href={`/blog/${nextBlog.id}`}
            className="group flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium
                       shadow hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <span className="text-sm sm:text-base">Next</span>
            <FaArrowCircleRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </motion.div>
  );
}
