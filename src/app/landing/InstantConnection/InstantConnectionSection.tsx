"use client";

import Image from "next/image";

export default function InstantConnectionSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden text-white py-20 lg:py-40">

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-transparent to-[#010101]" />

      <div className="relative w-full max-w-[1600px] mx-auto px-6 md:px-8">

        <div className="flex flex-col items-center lg:block">

          {/* TOP HEADING */}
          <h1
            className="
              text-[40px] md:text-[60px] lg:text-[84px]
              leading-[1.1] lg:leading-[1.02]
              tracking-[-0.02em]
              font-bold
              font-['Space_Grotesk']
              text-white
              whitespace-nowrap
              text-center lg:text-left
              drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
              lg:drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]

              lg:relative lg:left-30 lg:mb-40
              mb-8
            "
          >
            Instant Connection
          </h1>

          {/* PHONES IMAGE */}
          <div className="relative flex justify-center items-center w-full mb-8 lg:mb-0 lg:absolute lg:inset-0 z-10 pointer-events-none">

            <div className="relative w-[330px] md:w-[420px] lg:w-[900px] aspect-[9/10] lg:h-[1000px]">

              <Image
                src="/nphones.png"
                alt="Phones"
                fill
                className="object-contain drop-shadow-[0_60px_180px_rgba(0,0,0,0.9)]"
                priority
              />

            </div>

          </div>

          {/* BOTTOM HEADING */}
          <h1
            className="
              text-[40px] md:text-[60px] lg:text-[84px]
              font-['Space_Grotesk']
              leading-[1.1] lg:leading-[1.02]
              tracking-[-0.02em]
              font-bold
              text-white
              text-center
              drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
              lg:drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]

              lg:text-right
              lg:relative lg:right-20 lg:mt-8
            "
          >
            With One Tap
          </h1>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-[#010101]" />

    </section>
  );
}