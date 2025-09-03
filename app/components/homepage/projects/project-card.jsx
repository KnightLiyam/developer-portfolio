"use client";
// @flow strict

import * as React from "react";
import Image from "next/image";

function ProjectCard({ project, onImageClick }) {
  const [showDemo, setShowDemo] = React.useState(false);

  // ESC key close support
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowDemo(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-2xl border bg-gradient-to-r to-[#0a0d37] w-full shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Project Image with Hover Popup Link */}
      {project.image && (
        <div
          className="w-full h-52 relative rounded-t-2xl overflow-hidden group transition-all duration-300"
          onClick={() => onImageClick && onImageClick(project.image)}
        >
          <Image
            src={project.image}
            alt={project.name + " demo"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-[1.5px]"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />

          {(project.url || project.demo) && (
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Flex container for buttons */}
              <div className="flex gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
                    className="min-w-[140px] text-center bg-[#181c2f]/80 px-5 py-2 rounded-full 
                text-[#38f9d7] font-semibold text-sm md:text-base shadow-md 
                border border-[#38f9d7]/30 hover:bg-[#38f9d7]/10 
                hover:text-white transition-all duration-200"
                  >
                    Visit Project ↗
                  </a>
                )}

                {project.demo && (
                  <button
                    type="button"
                    onClick={() => setShowDemo(true)}
                    aria-label={`Watch ${project.name} demo video`}
                    className="min-w-[140px] text-center bg-[#181c2f]/80 px-5 py-2 rounded-full 
                text-[#38f9d7] font-semibold text-sm md:text-base shadow-md 
                border border-[#38f9d7]/30 hover:bg-[#38f9d7]/10 
                hover:text-white transition-all duration-200"
                  >
                    View Demo ▶
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}


      {/* Gradient divider */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Project Info */}
      <div className="px-4 lg:px-6 py-3 lg:py-4 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-semibold truncate">
          {project.name}
        </p>
      </div>

      {/* Code-style description */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-6 py-4 lg:py-6">
        <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 mr-2 text-white">name:</span>
            <span className="text-amber-300">"{project.name}",</span>
          </div>
          <div className="ml-4 flex flex-wrap items-center">
            <span className="text-white">tools:</span>
            <span className="text-gray-400"> [</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300 bg-[#232946] px-2 py-0.5 rounded text-xs mx-0.5">
                  {tag}
                </span>
                {i < project.tools.length - 1 && (
                  <span className="text-gray-400">, </span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">],</span>
          </div>
          <div>
            <span className="ml-4 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role},</span>
          </div>
          <div className="ml-4">
            <span className="text-white">description:</span>
            <span className="text-cyan-400"> "{project.description}"</span>
          </div>
          <div>
            <span className="text-gray-400">{"};"}</span>
          </div>
        </code>
      </div>

      {/* Video Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-[#0d1224] rounded-2xl shadow-2xl w-[90%] max-w-3xl p-4">
            {/* Close Button */}
            <button
              onClick={() => setShowDemo(false)}
              aria-label="Close demo modal"
              className="absolute top-3 right-3 text-gray-300 hover:text-white 
                   bg-gray-800/50 hover:bg-gray-700/70 rounded-full 
                   w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>

            {/* Demo Content (e.g. video iframe) */}
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={project.demo}
                title={`${project.name} demo`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectCard;
