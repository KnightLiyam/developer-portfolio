"use client";
// @flow strict
import { useState } from "react";
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard
                  project={project}
                  onImageClick={(img) => {
                    setModalImg(img);
                    setModalOpen(true);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for enlarged project image */}
      {modalOpen && modalImg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative">
            <img
              src={modalImg}
              alt="Project"
              className="rounded-lg max-w-[90vw] max-h-[80vh] object-contain shadow-2xl transition-transform duration-300 hover:scale-105"
            />
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full px-3 py-1 text-black font-bold"
              onClick={e => {
                e.stopPropagation();
                setModalOpen(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;