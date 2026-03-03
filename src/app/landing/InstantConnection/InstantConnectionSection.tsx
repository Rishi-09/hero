"use client";

import Image from "next/image";

export default function InstantConnectionSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden text-white py-20 lg:py-0">
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-transparent to-[#010101]" />
      
      <div className="relative w-full max-w-[1600px] mx-auto px-6 md:px-8">
        
        {/* TEXT LAYER */}
        <div className="relative z-0 flex flex-col items-center lg:block">
          {/* First Line */}
          <h1
            className="
              text-[40px] md:text-[60px] lg:text-[84px]
              leading-[1.1] lg:leading-[1.02]
              tracking-[-0.02em]
              font-bold
              font-['Space_Grotesk']
              text-white
              drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
              lg:drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]
              
              /* Laptop Positioning */
              lg:relative lg:left-17 lg:mb-40
              
              /* Mobile/Tablet Adjustments */
              text-center lg:text-left
              mb-4 md:mb-10
            "
          >
            Instant Connection
          </h1>

          {/* Second Line */}
          <h1
            className="
              text-[40px] md:text-[60px] lg:text-[84px]
              font-['Space_Grotesk']
              leading-[1.1] lg:leading-[1.02]
              tracking-[-0.02em]
              font-bold
              text-white
              drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
              lg:drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]
              
              /* Laptop Positioning */
              lg:text-right
              lg:relative lg:right-50 lg:mt-8
              
              /* Mobile/Tablet Adjustments */
              text-center
              mt-2
            "
          >
            With One Tap
          </h1>
        </div>

        {/* PHONES LAYER */}
        <div className="relative lg:absolute lg:inset-0 flex items-center justify-center pointer-events-none z-10 mt-10 lg:mt-0">
          <div className="relative w-full max-w-[320px] md:max-w-[600px] lg:max-w-none lg:w-[900px] aspect-[9/10] lg:h-[1000px]">
            <Image
              src="/nphones.png"
              alt="Phones"
              fill
              className="object-contain drop-shadow-[0_60px_180px_rgba(0,0,0,0.9)]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-[#010101]" />
    </section>
  );
}