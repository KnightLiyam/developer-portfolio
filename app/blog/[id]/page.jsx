import { myBlogs } from "@/utils/data/my-blogs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogDetail({ params }) {
  const blog = myBlogs.find(b => b.id === Number(params.id));
  if (!blog) return <div className="text-center py-12 text-red-400">Blog not found.</div>;

  // Split content by [IMAGE] placeholder
  const contentParts = blog.content.split("[IMAGE]");

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      {/* Back Button */}
      <Link
        href="/#blog"
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium shadow hover:scale-105 transition-transform w-fit"
      >
        <FaArrowLeft /> Back to Blogs
      </Link>

      <Image
        src={blog.cover}
        alt={blog.title}
        width={600}
        height={300}
        className="rounded mb-6 w-full object-cover max-h-72"
        priority
      />
      <h1 className="text-3xl font-bold mb-2 text-white">{blog.title}</h1>
      <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
      <div className="flex gap-2 mb-6 flex-wrap">
        {blog.tags.map(tag => (
          <span
            key={tag}
            className="bg-violet-900 text-violet-300 px-2 py-0.5 rounded-full text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="prose prose-invert text-gray-200 max-w-none text-lg">
        {contentParts.map((part, idx) => (
          <span key={idx}>
            {part}
            {idx < contentParts.length - 1 && (
              <div className="flex justify-center my-8">
                <Image
                  src="/images/OwnitDesigner.jpg"
                  alt="Own It Designer"
                  width={400}
                  height={300}
                  className="rounded shadow-lg"
                />
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}