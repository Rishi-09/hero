"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden py-20 lg:py-0">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center">
        
        {/* LEFT SIDE CONTENT WRAPPER */}
        {/* Note: xl:right-100 preserved for your 14-inch layout */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl relative xl:right-100 xl:top-25">
          
          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[1.05] font-medium tracking-wider text-white
              drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] text-glow-white"
          >
            Privacy that follows you everywhere
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-300 text-lg md:text-xl lg:text-2xl max-w-lg">
            Access worldwide content and keep your digital life shielded
          </p>

          {/* Phones Image Container */}
          {/* On mobile, we remove the negative offsets so it stays in flow */}
          <div className="relative w-full max-w-[350px] md:max-w-[500px] lg:w-[700px] h-[300px] md:h-[450px] lg:h-[550px] 
                          lg:relative lg:right-50 lg:-top-25 mt-10">
            <Image
              src="/phones.png"
              alt="Phones"
              fill
              className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-8 lg:mt-0 lg:relative lg:bottom-30">
            <Image
              src="/appStore.png"
              alt="App Store"
              width={160}
              height={55}
              className="w-[140px] md:w-[160px] h-auto hover:scale-105 transition duration-300 cursor-pointer"
            />
            <Image
              src="/playStore.png"
              alt="Google Play"
              width={160}
              height={55}
              className="w-[140px] md:w-[160px] h-auto hover:scale-105 transition duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* MASSIVE CROPPED EARTH */}
      {/* Adjusted responsiveness: scale down for tablets, hide on small mobile to prevent overlap */}
      <div className="absolute right-[-20%] lg:right-[-12%] top-[70%] lg:top-[85%] 
                      scale-110 md:scale-150 lg:scale-220 -translate-y-1/2 
                      w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] 
                      hidden md:block -z-10 opacity-50 lg:opacity-100">
        <Image
          src="/earth.png"
          alt="Earth"
          fill
          className="object-contain animate-[spin_100s_linear_infinite] drop-shadow-[0_0_50px_rgba(34,197,94,0.9)]"
        />
      </div>
    </section>
  );
}