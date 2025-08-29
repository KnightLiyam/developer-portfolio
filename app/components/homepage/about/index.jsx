"use client";

// @flow strict

import { useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  const [flipped, setFlipped] = useState(false);

  const backImage = personalData.profileback || "/images/profile-back.jpg";

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div data-aos="zoom-in-up" data-aos-delay="100" className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text */}
        <div data-aos="fade-right" data-aos-delay="100" className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        {/* Image Flip */}
        <div data-aos="fade-left" data-aos-delay="100" className="flex justify-center order-1 lg:order-2">
          <div
            className="[perspective:1000px] w-[280px] h-[280px] group"
            onClick={() => setFlipped((prev) => !prev)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 ${
                flipped
                  ? "[transform:rotateY(180deg)]"
                  : "group-hover:[transform:rotateY(45deg)]"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Image */}
              <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center">
                <Image
                  src={personalData.profile}
                  width={280}
                  height={280}
                  alt="Knight William Dimapilis"
                  className="rounded-lg cursor-pointer object-cover w-full h-full transition-all duration-300"
                  draggable={false}
                />
              </div>

              {/* Back Image */}
              <div className="absolute w-full h-full cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                <Image
                  src={backImage}
                  width={280}
                  height={280}
                  alt="Knight William Dimapilis - Back"
                  className="rounded-lg object-cover w-full h-full"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;