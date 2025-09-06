import { myBlogs } from "@/utils/data/my-blogs";
import Link from "next/link";
import Image from "next/image";
import GlowCard from "../components/helper/glow-card";

// Utility: Estimate reading time
const getReadingTime = (text) => {
  const wordsPerMinute = 200; // avg reading speed
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

export default function BlogsPage() {
  return (
    <div
      id="blog"
      data-aos="zoom-in-up"
      data-aos-delay="100"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Decorative background */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div
        data-aos="zoom-in-up"
        data-aos-delay="100"
        className="flex justify-center my-5 lg:py-8"
      >
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl font-semibold rounded-md tracking-wide">
            My Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="py-8">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="
      grid 
      grid-cols-1        /* 📱 Default: 1 column */
      sm:grid-cols-2     /* 📱➡️💻 Small screens: 2 columns */
      lg:grid-cols-3     /* 💻 Large screens: 3 columns */
      gap-6              /* base spacing */
      sm:gap-8           /* more spacing on sm+ */
      lg:gap-12          /* even more on large screens */
      px-4 sm:px-6 lg:px-8
    "
        >
          {myBlogs.slice(0, 3).map((blog) => {
            const readingTime = getReadingTime(blog.content);
            return (
              <GlowCard key={blog.id} identifier={`blog-${blog.id}`}>
                <Link
                  href={`/blog/${blog.id}`}
                  className="group bg-gradient-to-br from-[#232946] via-[#1a174d] to-[#181c2f] rounded-2xl 
                       shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col 
                       border border-[#38f9d7]/20 hover:border-[#38f9d7]/60 relative overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <span className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#38f9d7]/30 via-[#43e97b]/20 to-[#4f5bd5]/20 rounded-br-3xl opacity-60 pointer-events-none" />

                  {/* Blog Image */}
                  <div className="relative group cursor-pointer">
                    <Image
                      src={blog.cover}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="rounded-t-2xl object-cover w-full h-48 sm:h-56 lg:h-64 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover overlay with button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 rounded-t-2xl">
                      <span className="bg-[#181c2f]/80 px-4 py-2 sm:px-5 sm:py-2 rounded-full text-[#38f9d7] font-semibold text-sm sm:text-base shadow-lg border border-[#38f9d7]/30 hover:bg-[#38f9d7]/20 hover:text-white transition-colors duration-200">
                        Read Blog ↗
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="flex-1 flex flex-col p-4 sm:p-6">
                    <h2 className="font-bold text-lg sm:text-xl mb-2 bg-gradient-to-r from-[#38f9d7] to-[#43e97b] bg-clip-text text-transparent group-hover:from-[#43e97b] group-hover:to-[#4f5bd5] transition-colors truncate">
                      {blog.title}
                    </h2>

                    {/* Date + Reading Time */}
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3">
                      <p>{blog.date}</p>
                      <p>⏱ {readingTime} min read</p>
                    </div>

                    {/* Summary */}
                    <div
                      className="text-gray-200 flex-1 mb-4 line-clamp-3 leading-relaxed prose prose-invert prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: blog.summary || blog.content?.slice(0, 100) + "..."
                      }}
                    />
                  </div>
                </Link>
              </GlowCard>
            );
          })}
        </div>
      </div>

    </div>
  );
}
