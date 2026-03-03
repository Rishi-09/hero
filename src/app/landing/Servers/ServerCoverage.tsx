"use client";
import Button from "@/components/Button";
import Image from "next/image";

export default function ServerCoverage() {
  return (
    <section className="w-screen bg-transparent">
      
      {/* ===== Top Content ===== */}
      <div className="flex flex-col items-center pt-24 pb-16">

        {/* Servers Neon Pill */}
        <div className="relative mb-6 inline-block">
          
          
          {/* Full Soft Glow */}
          <div
            className="
              absolute inset-0
              rounded-full
              bg-lime-400/20
              blur-xl
              opacity-60
            "
          ></div>

          {/* Strong Right Side Glow */}
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
        <div className="flex justify-center mb-6">
          <Button text={"Servers"} />
        </div>

      </div>
       
       {/* Global Server Coverage Heading */}
        <h2 className="
          font-[var(--font-space)]
          font-bold
          text-[48px]
          leading-[100%]
          tracking-[-0.01em]
          text-white
          text-center
           drop-shadow-[0_0_20px_rgba(34,197,94,0.3)] text-glow-white

        ">
          Global <span className="text-lime-400">Server</span> Coverage
        </h2>

      

      {/* ===== Full Screen Map ===== */}
      <div className="relative w-full h-screen bg-black">

        <Image
          src="/world-map-dots.png"
          alt="World Map"
          fill
          className="object-contain"
          priority
        />

        </div>
    </section>
  );
}