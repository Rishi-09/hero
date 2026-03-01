"use client";

import Image from "next/image";
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-x-hidden text-white">
      
      {/* Smooth Green Atmospheric Glow */}
      <div
        className="
      absolute right-0 top-0 h-full w-[40%]
      bg-linear-to-l
    from-green-950/5
    via-green-900/10
      to-transparent
      blur-3xl
      pointer-events-none
  "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-12 flex items-center">
        {/* LEFT SIDE */}
        {/* <div className="max-w-2xl mt-10 relative right-50 top-25 "> */}
        <div className="max-w-2xl mt-10">
          {/* Heading */}
          <h1
            className="heading text-6xl leading-[1.05]  font-medium tracking-wider text-white
             drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] text-glow-white"
          >
            Privacy that follows you everywhere
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-300 text-2xl ">
            Access worldwide content and keep your digital life shielded
          </p>

          {/* Phones */}
          {/* <div className="relative w-175 h-140 right-50 -top-25 mt-10"> */}
          <div className="relative w-[700px] h-[550px] mt-10">
            <Image
              src="/phones.png"
              alt="Phones"
              fill
              className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Store Buttons */}
          <div className="flex gap-6">
            <Image
              src="/appStore.png"
              alt="App Store"
              width={160}
              height={55}
              // className="  relative bottom-30 hover:scale-105 transition duration-300"
              className="hover:scale-105 transition duration-300"
            />
            <Image
              src="/playStore.png"
              alt="Google Play"
              width={160}
              height={55}
              // className=" relative bottom-30 hover:scale-105 transition duration-300"
              className="hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* MASSIVE CROPPED EARTH */}
      <div
        className="
        absolute 
        -right-162.5 
        top-180 
        -translate-y-1/2 
        w-425 
        h-425
        hidden lg:block
        animation-spin
      "
      >
        <Image
          src="/earth.png"
          alt="Earth"
          fill
          className="
            object-contain animate-[spin_100s_linear_infinite]
            drop-shadow-[0_0_200px_rgba(34,197,94,0.9)]
            
          "
        />
      </div>
    </section>
  );
}
