"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative font-['Space_Grotesk'] text-white pt-20 lg:pt-36 pb-12 lg:pb-24 overflow-hidden bg-[#010101]">
      
      {/* Large Green Curved Background (FIXED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[2/1] pointer-events-none">
        {/* Curved Horizon Line */}
        <div
          className="
            absolute
            top-[150px] lg:top-[270px]
            left-0
            w-full
            h-full
            rounded-[100%]
            border-t
            border-lime-400/40
            shadow-[0_-30px_80px_rgba(16,255,0,0.35)]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ================= TOP CTA CARD ================= */}
        <div
          className="relative rounded-[28px] overflow-hidden
          border border-white/5
          bg-[linear-gradient(90deg,#0d0f14_0%,#0a0c10_50%,#061b0f_100%)]
          p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl z-10 text-center lg:text-left">
            <h3 className="font-bold font-['Space_Grotesk'] text-[32px] md:text-[40px] lg:text-[48px] leading-[115%] tracking-[-0.02em] mb-6 lg:mb-10">
              Don’t miss what’s <br className="hidden lg:block" /> coming next
            </h3>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full md:w-[300px] h-[52px] px-6 rounded-full
                bg-[#0b0f14] border border-lime-400/70
                text-white outline-none
                placeholder:text-gray-400 focus:border-lime-400"
              />

              <button
                className="w-full md:w-auto h-[52px] px-10 rounded-full
                bg-lime-400 text-black font-semibold
                border-2 border-lime-400
                transition-all duration-300 ease-in-out
                hover:bg-transparent hover:text-lime-400"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Earth Image */}
          {/* Hidden on mobile to prevent layout breakage, visible from lg up */}
          <div className="absolute hidden lg:block w-[45%] -right-30 h-full pointer-events-none">
            <Image
              src="/earth.png"
              alt="Earth"
              fill
              className="object-cover object-top-left scale-[1.1]
              drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            />
          </div>
        </div>

        {/* ================= FOOTER AREA ================= */}
        {/* Stacked on mobile, grid on desktop */}
        <div className="mt-20 lg:mt-28 flex flex-col lg:grid lg:grid-cols-3 items-center lg:items-start gap-12 lg:gap-0">
          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <span className="font-medium text-2xl lg:text-3xl">Traverse VPN</span>
            </div>

            <p className="text-white text-lg lg:text-xl max-w-xs leading-relaxed">
              Take control of your digital identity and enjoy the web the way it
              was meant to be.
            </p>

            <div className="flex gap-6 mt-8 opacity-80">
              <Image src="/x.png" alt="X" width={24} height={20} className="cursor-pointer" />
              <Image src="/instagram.png" alt="IG" width={24} height={20} className="cursor-pointer" />
              <Image src="/youtube.png" alt="YT" width={24} height={20} className="cursor-pointer" />
              <Image src="/linkedin.png" alt="IN" width={24} height={20} className="cursor-pointer" />
            </div>
          </div>

          {/* CENTER BUTTON */}
          <div className="flex justify-center order-first lg:order-none">
            <Button text={"Get Traverse Now!"} />
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-col items-center lg:items-end gap-4 lg:gap-5 text-white">
            <a href="#" className="hover:text-lime-400 transition text-lg lg:text-xl">About Us</a>
            <a href="#" className="hover:text-lime-400 transition text-lg lg:text-xl">Security</a>
            <a href="#" className="hover:text-lime-400 transition text-lg lg:text-xl">Refund Policy</a>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-16 lg:mt-0 lg:relative lg:bottom-5 flex flex-col lg:grid lg:grid-cols-3 items-center gap-4 text-gray-500 text-sm">
          <div className="hidden lg:block"></div>
          <div className="text-center text-lg lg:text-xl">© 2025, All Rights Reserved</div>
          <div className="text-center lg:text-right text-lg lg:text-xl">
            <span className="hover:text-lime-400 transition cursor-pointer">Privacy Policy</span>
            {" | "}
            <span className="hover:text-lime-400 transition cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </div>

      {/* WATERMARK */}
      <div className="relative mt-10 lg:-bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none">
        <div className="relative flex items-center lg:items-end opacity-[0.28]">
          <Image
            src="/wml.png"
            alt="Watermark Logo"
            width={60}
            height={60}
            className="mr-4 lg:mr-8 lg:w-[170px] lg:h-[170px] brightness-0 invert opacity-50"
          />
          <span className="text-[40px] md:text-[80px] lg:text-[180px] font-extrabold text-white/50 whitespace-nowrap leading-none tracking-tight">
            Traverse VPN
          </span>
        </div>
      </div>
    </section>
  );
}