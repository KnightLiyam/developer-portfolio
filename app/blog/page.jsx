import { myBlogs } from "@/utils/data/my-blogs";
import Link from "next/link";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Blogs</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {myBlogs.slice(0, 3).map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            key={blog.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <Image
              src={blog.cover}
              alt={blog.title}
              width={400}
              height={200}
              className="rounded-md mb-4 object-cover"
            />
            <h2 className="font-semibold text-lg mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">{blog.date}</p>
            <p className="text-gray-700 flex-1">{blog.summary || blog.content?.slice(0, 80) + "..."}</p>
            <span className="mt-4 text-blue-600 font-medium">Read More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}