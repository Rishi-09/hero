"use client";
import Button from "@/components/Button";
import Image from "next/image";

export default function ServerCoverage() {
  return (
    <section className="w-full bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-transparent to-[#010101]" />
      
      {/* ===== Top Content ===== */}
      <div className="flex flex-col items-center px-6">
        {/* Servers Neon Pill */}
        <div className="relative mb-6 inline-block">
          <div
            className="
              absolute inset-0
              rounded-full
              bg-lime-400/20
              blur-xl
              opacity-60
            "
          ></div>

          <div className="absolute inset-0 rounded-full overflow-hidden">
            <style>
              {`
                @keyframes spin-slow {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                  animation: spin-slow 3s linear infinite;
                }
              `}
            </style>
          </div>
        </div>

        {/* Top Label */}
        <div className="flex justify-center mb-10">
          <Button text={"Servers"} />
        </div>
      </div>

      {/* Global Server Coverage Heading */}
      <h2
        className="
          font-[var(--font-space)]
          font-bold
          text-[32px] md:text-[40px] lg:text-[48px]
          leading-[1.1] lg:leading-[100%]
          tracking-[-0.01em]
          text-white
          text-center
          px-4
          mb-10 lg:mb-20
          drop-shadow-[0_0_20px_rgba(34,197,94,0.3)] text-glow-white
        "
      >
        Global <span className="text-lime-400">Server</span> Coverage
      </h2>

      {/* ===== World Map Container ===== */}
      {/* - min-h-[300px] ensures it doesn't disappear on tiny phones
          - h-[50vh] for mobile/tablet to keep it concise
          - lg:h-screen restores your perfect 14-inch layout
      */}
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-screen bg-[#010101]">
        <div className="absolute -top-10 lg:-top-30 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-[#010101] z-10" />
        <Image
          src="/world-map-dots.png"
          alt="World Map"
          fill
          className="object-contain px-4 md:px-10"
          priority
        />
      </div>
    </section>
  );
}