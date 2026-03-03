"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative bg-[#010101] text-white pt-40 pb-20 overflow-hidden">

      {/* GREEN CURVED BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(190,238,3,0.25)_0%,_rgba(22,185,158,0.15)_40%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">

        {/* TOP CTA CARD */}
        <div className="relative rounded-[24px] bg-[#0B0B0B] border border-white/10 p-14 flex justify-between items-center overflow-hidden">

          {/* LEFT CONTENT */}
          <div className="max-w-lg">
            <h3 className="font-['Space_Grotesk'] font-bold text-[48px] leading-[118%] tracking-[-0.01em] mb-8">
              Don’t miss what’s <br /> coming next
            </h3>

            <div className="flex gap-4 items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="
                  w-[260px]
                  h-[48px]
                  px-6
                  rounded-full
                  bg-transparent
                  border border-lime-400
                  text-white
                  outline-none
                  placeholder:text-gray-400
                "
              />

              <button className="h-[48px] px-8 rounded-full bg-lime-400 text-black font-medium">
                Submit
              </button>
            </div>
          </div>

          {/* ✅ UPDATED EARTH IMAGE WITH EXACT POSITION */}
          <div className="relative">
            <div
              className="
                absolute
                w-[592.8687px]
                h-[603.3469px]
                top-[-201.53px]
                left-[-250.02px]
              "
            >
              <Image
                src="/earth.png"
                alt="Earth"
                fill
                className="object-contain opacity-100 scale-x-[-1]"

              />
            </div>
          </div>

        </div>

        {/* FOOTER AREA */}
        <div className="mt-24 grid grid-cols-3 items-start">

          {/* LEFT LOGO + TEXT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={28}
                height={28}
              />
              <span className="font-medium text-lg">Traverse VPN</span>
            </div>

            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Take control of your digital identity and enjoy the web
              the way it was meant to be.
            </p>

            <div className="flex gap-6 mt-8">
              <Image src="/x.png" alt="X" width={20} height={20} />
              <Image src="/instagram.png" alt="IG" width={20} height={20} />
              <Image src="/youtube.png" alt="YT" width={20} height={20} />
              <Image src="/linkedin.png" alt="IN" width={20} height={20} />
            </div>
          </div>

          {/* CENTER BUTTON */}
          <div className="flex justify-center">
            <button className="px-10 py-3 rounded-full border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition">
              Get Traverse Now!
            </button>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-col items-end gap-4 text-gray-400">
            <a href="#">About Us</a>
            <a href="#">Security</a>
            <a href="#">Refund Policy</a>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-center mt-16 text-gray-500 text-sm">
          <p>© 2025, All Rights Reserved</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>

      </div>

      {/* WATERMARK */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 opacity-5 text-[200px] font-bold pointer-events-none select-none">
        Traverse VPN
      </div>

    </section>
  );
}