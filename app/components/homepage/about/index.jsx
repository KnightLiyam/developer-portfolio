"use client";

// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import PixelTransition from "../../pixel-transition";


function AboutSection() {
  const backImage = personalData.profileback || "/images/profile-back.jpg";

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div
        data-aos="zoom-in-up"
        data-aos-delay="100"
        className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
      >
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="order-2 lg:order-1"
        >
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        {/* Pixel Transition */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex justify-center order-1 lg:order-2"
        >
          <PixelTransition
            firstContent={
              <Image
                src={personalData.profile}
                alt="Knight William Dimapilis"
                width={280}
                height={280}
                className="rounded-lg object-cover w-full h-full"
                draggable={false}
              />
            }
            secondContent={
              <Image
                src={backImage}
                alt="Knight William Dimapilis - Back"
                width={280}
                height={280}
                className="rounded-lg object-cover w-full h-full"
                draggable={false}
              />
            }
            gridSize={12}
            pixelColor="#0E1225"
            animationStepDuration={0.4}
            className="w-[280px] h-[280px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
