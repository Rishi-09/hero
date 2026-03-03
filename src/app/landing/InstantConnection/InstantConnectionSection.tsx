"use client";

import Image from "next/image";

export default function InstantConnectionSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white">

      <div className="relative w-full max-w-7xl mx-auto px-12">

        {/* TEXT BLOCK */}
        <div className="flex flex-col">

          <h1
            className="font-[var(--font-space)] text-[110px] leading-[1.05] tracking-[-0.01em] font-bold"
          >
            Instant Connection
          </h1>

          <div className="h-32" />

          <h1
            className="font-[var(--font-space)] text-[110px] leading-[1.05] tracking-[-0.01em] font-bold ml-auto w-fit"
          >
            With One Tap
          </h1>

        </div>

        {/* Floating Phones (Width + Height Increased) */}
        <div className="absolute top-1/2 left-[35%] -translate-x-[15%] -translate-y-[55%] pointer-events-none">
          <div className="relative w-[800px] h-[1000px]">
            <Image
              src="/nphones.png"
              alt="Phones"
              fill
              className="object-contain drop-shadow-[0_50px_150px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-800 w-full h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}