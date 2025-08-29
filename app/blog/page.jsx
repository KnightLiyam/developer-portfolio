import { myBlogs } from "@/utils/data/my-blogs";
import Link from "next/link";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <div id="blog" data-aos="zoom-in-up" data-aos-delay="100" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] ">
      <Image 
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-delay="100" className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            My Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-8">
        <div data-aos="zoom-in-up" data-aos-delay="100" className="grid md:grid-cols-3 gap-10 lg:gap-16 px-4 lg:px-8">
          {myBlogs.slice(0, 3).map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="group bg-gradient-to-br from-[#232946] via-[#1a174d] to-[#181c2f] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-0 flex flex-col border border-[#38f9d7]/20 hover:border-[#38f9d7]/60 relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <span className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#38f9d7]/30 via-[#43e97b]/20 to-[#4f5bd5]/20 rounded-br-3xl opacity-60 pointer-events-none" />
              <div className="relative group cursor-pointer">
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="rounded-t-2xl object-cover w-full h-48 group-hover:scale-105 group-hover:blur-[1.5px] transition-transform duration-300"
                />
                {/* Minimalist Popup Link on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-t-2xl">
                  <span className="bg-[#181c2f]/80 px-5 py-2 rounded-full text-[#38f9d7] font-semibold text-base shadow-lg border border-[#38f9d7]/30 hover:bg-[#38f9d7]/10 hover:text-white transition-colors duration-200">
                    Read Blog ↗
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-5">
                <h2 className="font-bold text-xl mb-2 text-[#38f9d7] group-hover:text-[#43e97b] transition-colors truncate">
                  {blog.title}
                </h2>
                <p className="text-xs text-[#43e97b] mb-2">{blog.date}</p>
                <p className="text-gray-200 flex-1 mb-4 line-clamp-3">{blog.summary || blog.content?.slice(0, 80) + "..."}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}