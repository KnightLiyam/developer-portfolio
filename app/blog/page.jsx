import { myBlogs } from "@/utils/data/my-blogs";
import Link from "next/link";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#181c2f] via-[#1a174d] to-[#0f172a] pb-20">
      {/* Unique Aesthetic Feature: Animated Gradient Blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="600" height="300">
          <defs>
            <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38f9d7" />
              <stop offset="100%" stopColor="#4f5bd5" />
            </radialGradient>
          </defs>
          <ellipse
            cx="300"
            cy="150"
            rx="260"
            ry="110"
            fill="url(#blobGradient)"
            style={{
              filter: "blur(60px)",
              animation: "blobMove 12s ease-in-out infinite alternate"
            }}
          />
        </svg>
        <style>{`
          @keyframes blobMove {
            0% { transform: scale(1) translateY(0px);}
            100% { transform: scale(1.08, 1.12) translateY(30px);}
          }
        `}</style>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#38f9d7] via-[#43e97b] to-[#38f9d7] drop-shadow-lg">
          My Blogs
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {myBlogs.slice(0, 3).map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="group bg-gradient-to-br from-[#232946] via-[#1a174d] to-[#181c2f] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-0 flex flex-col border border-[#38f9d7]/20 hover:border-[#38f9d7]/60 relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <span className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#38f9d7]/30 via-[#43e97b]/20 to-[#4f5bd5]/20 rounded-br-3xl opacity-60 pointer-events-none" />
              <div className="relative">
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="rounded-t-2xl object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#38f9d7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
              </div>
              <div className="flex-1 flex flex-col p-5">
                <h2 className="font-bold text-xl mb-2 text-[#38f9d7] group-hover:text-[#43e97b] transition-colors">
                  {blog.title}
                </h2>
                <p className="text-xs text-[#43e97b] mb-2">{blog.date}</p>
                <p className="text-gray-200 flex-1 mb-4">{blog.summary || blog.content?.slice(0, 80) + "..."}</p>
                <span className="inline-block mt-auto text-[#38f9d7] font-semibold group-hover:underline transition">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}