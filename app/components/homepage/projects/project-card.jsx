"use client";
// @flow strict

import * as React from 'react';
import Image from 'next/image';
import GlowCard from "../../helper/glow-card";

function ProjectCard({ project, onImageClick }) {
  return (
    <GlowCard identifier={`project-${project.id || project.name}`}>
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
        
        {/* Project Image with Hover Popup Link */}
        {project.image && (
          <div
            className="w-full h-48 relative rounded-t-lg overflow-hidden group transition-all duration-300"
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

            {/* Minimalist Popup Link on Hover */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
                tabIndex={-1}
                aria-label={`Visit ${project.name} website`}
                onClick={e => e.stopPropagation()}
              >
                <span className="bg-[#181c2f]/80 px-5 py-2 rounded-full text-[#38f9d7] font-semibold text-base shadow-lg border border-[#38f9d7]/30 hover:bg-[#38f9d7]/10 hover:text-white transition-colors duration-200">
                  Visit Project ↗
                </span>
              </a>
            )}
          </div>
        )}
        
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        {/* Project Info */}
        <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
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
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2 flex flex-wrap items-center">
              <span className=" text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300 bg-[#232946] px-2 py-0.5 rounded text-xs mx-0.5">{tag}</span>
                  {project.tools?.length - 1 !== i && (
                    <span className="text-gray-400">{`', '`}</span>
                  )}
                </React.Fragment>
              ))}
              <span className="text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
              <span className="text-orange-400">{project.role}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400">{' ' + project.description}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div><span className="text-gray-400">{`};`}</span></div>
          </code>
        </div>
      </div>
    </GlowCard>
  );
}

export default ProjectCard;
