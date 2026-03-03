"use client";

import Image from "next/image";

export default function InstantConnectionSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      <div className="relative w-full max-w-[1600px] mx-auto px-8">

        {/* TEXT (Behind Phones) */}
        <div className="relative z-0">

          <h1
            className="
              text-[84px]
              leading-[1.02]
              tracking-[-0.02em]
              font-bold
              mb-40
              font-['Space_Grotesk']
              relative
              left-17
              text-white
              drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]
            "
          >
            Instant Connection
          </h1>

          <h1
            className="
               text-[84px]
               font-['Space_Grotesk']
              leading-[1.02]
              tracking-[-0.02em]
              font-bold
              text-white
              drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]
              text-right
              relative
              right-50
              mt-8
            "
          >
            With One Tap
          </h1>

        </div>

        {/* PHONES (Above Text) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-[900px] h-[1000px]">
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

      {/* Subtle Bottom Fade */}
      
    </section>
  );
}