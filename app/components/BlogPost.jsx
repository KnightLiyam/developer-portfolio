import Image from "next/image";

export default function BlogPost({ post }) {
    return (
        <article className="max-w-3xl mx-auto p-6">

            {/* title (still render from data so SEO-friendly) */}
            <h1 className="text-2xl md:text-4xl font-extrabold mb-2">{post.title}</h1>
            <p className="text-gray-400 mb-6">{post.date}</p>

            {/* cover */}
            <div className="mb-6 flex justify-center">
                <div className="w-65 transition-all duration-500 ease-in-out 
                  hover:scale-150 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] 
                  rounded-xl overflow-hidden animate-fadeOn">
                    <Image
                        src={post.cover}
                        alt={post.title}
                        width={700}
                        height={100}
                        className="rounded-xl"
                    />
                </div>
            </div>




            {/* content: render the stored HTML string */}
            <div
                className="prose prose-2xl prose-invert max-w-none leading-loose"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />



        </article>
    );
}
