"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [mounted, setMounted] = useState(false); // needed for portal in Next.js

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [modalOpen]);

  return (
    <>
      <div id="projects" className="relative z-50 my-12 lg:my-24">
        <div className="sticky top-10">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
              PROJECTS
            </span>
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="pt-24">
          <div className="flex flex-col gap-6">
            {projectsData.slice(0, 4).map((project, index) => (
              <div
                data-aos="zoom-in-up"
                data-aos-delay={index * 200}
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
      </div>

      {/* --- MODAL (via Portal) --- */}
      {mounted &&
        modalOpen &&
        modalImg &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="relative animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Project Image */}
              <img
                src={modalImg}
                alt="Project"
                className="rounded-xl max-w-[90vw] max-h-[80vh] object-contain shadow-2xl border-4 border-[#38f9d7] bg-[#181c2f] transition-transform duration-300 hover:scale-105"
              />

              {/* Close Button */}
              <button
                className="absolute -top-6 -right-6 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#0000] to-[#43e97b] shadow-lg text-white hover:scale-110 hover:rotate-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#38f9d7]/50"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(false);
                }}
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Animation Keyframes */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95);}
          to { opacity: 1; transform: scale(1);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s;
        }
      `}</style>
          </div>,
          document.body
        )}
    </>
  );
};

export default Projects;