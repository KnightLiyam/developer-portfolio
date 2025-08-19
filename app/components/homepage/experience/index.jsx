"use client";
// @flow strict

import { useState } from "react";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import experienceLottie from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experienceLottie} />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              {experiences.map(experience => (
                <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      {/* Clickable certificate image */}
                      <div
                        className="transition-all duration-300 hover:scale-125 cursor-pointer"
                        onClick={() => {
                          setModalImg(experience.image);
                          setModalOpen(true);
                        }}
                      >
                        <Image
                          src={experience.image}
                          alt={experience.title}
                          width={96}
                          height={96}
                          className="rounded-full object-cover border-2 border-violet-500"
                        />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                        {experience.description && (
                          <p className="text-sm sm:text-base mt-2">
                            {experience.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && modalImg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative">
            <Image
              src={modalImg}
              alt="Enlarged"
              width={500}
              height={500}
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
}

export default Experience;