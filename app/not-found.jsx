"use client"

import Lottie from "lottie-react";
import Link from "next/link";
import errorAnimation from "./assets/error.json";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4">
      
      {/* Lottie Animation */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl flex items-center justify-center">
        <Lottie
          animationData={errorAnimation}
          loop={true} 
          style={{ width: "100%", height: "100%" }}
        />
      </div>
   
     
      {/* Move button closer to animation */}
      <Link
        href="/"
        className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm md:text-base font-medium uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-105 hover:gap-4"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
}

export default Page;