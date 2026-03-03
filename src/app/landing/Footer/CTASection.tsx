"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative font-['Space_Grotesk] bg-[#020202] text-white pt-36 pb-24 overflow-hidden">
      {/* Large Green Curved Background */}
      <div
        className="absolute bottom-0 left-0 w-full h-[520px]
        bg-[radial-gradient(ellipse_at_center,_rgba(124,255,0,0.18)_0%,_rgba(0,80,0,0.35)_40%,_transparent_75%)]
        pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        {/* ================= TOP CTA CARD ================= */}
        <div
          className="relative rounded-[28px] overflow-hidden
          border border-white/5
          bg-[linear-gradient(90deg,#0d0f14_0%,#0a0c10_50%,#061b0f_100%)]
          shadow-[0_0_0_1px_rgba(255,255,255,0.03)] p-16 flex items-center justify-between"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl z-10">
            <h3 className="font-bold font-['Space_Grotesk'] text-[48px] leading-[115%] tracking-[-0.02em] mb-10">
              Don’t miss what’s <br /> coming next
            </h3>

            <div className="flex gap-4 items-center">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter Your Email"
                className="
                font-['Space_Grotesk']
                  w-[300px]
                  h-[52px]
                  px-6
                  rounded-full
                  bg-[#0b0f14]
                  border border-lime-400/70
                  text-white
                  outline-none
                  placeholder:text-gray-400
                  focus:border-lime-400
                "
              />

              {/* Submit Button */}
              <button
                className="
                h-[52px]
                px-10
                font-['Space_Grotesk']
                rounded-full
                bg-lime-400
                text-black
                font-semibold
                hover:brightness-110
                transition
              "
              >
                Submit
              </button>
            </div>
          </div>

          {/* RIGHT SIDE EARTH (CLIPPED INSIDE CARD) */}
          <div className="absolute w-[45%] -right-30 h-full pointer-events-none ">
            {/* Dark → Green Blend */}
            
            

            <Image
              src="/earth.png"
              alt="Earth"
              fill
              className="object-cover object-top-left scale-[1.1]"
            />
          </div>
        </div>

        {/* ================= FOOTER AREA ================= */}
        <div className="mt-28 grid grid-cols-3 items-start">
          {/* LEFT LOGO + TEXT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <span className="font-medium text-lg">Traverse VPN</span>
            </div>

            <p className="text-gray-400 font-['Space_Grotesk'] max-w-xs text-sm leading-relaxed">
              Take control of your digital identity and enjoy the web the way it
              was meant to be.
            </p>

            <div className="flex gap-6 mt-8 opacity-80">
              <Image src="/x.png" alt="X" width={20} height={20} />
              <Image src="/instagram.png" alt="IG" width={20} height={20} />
              <Image src="/youtube.png" alt="YT" width={20} height={20} />
              <Image src="/linkedin.png" alt="IN" width={20} height={20} />
            </div>
          </div>

          {/* CENTER BUTTON */}
          <div className="flex justify-center">
            <button
              className="
              relative px-12 py-3 rounded-full
              text-white font-medium
              border border-lime-400
              shadow-[0_0_20px_rgba(124,255,0,0.35)]
              hover:bg-lime-400 hover:text-black
              transition
              font-['Space_Grotesk']
            "
            >
              Get Traverse Now!
            </button>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex font-['Space_Grotesk'] flex-col items-end gap-5 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">
              About Us
            </a>
            <a href="#" className="hover:text-white transition">
              Security
            </a>
            <a href="#" className="hover:text-white transition">
              Refund Policy
            </a>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between font-['Space_Grotesk'] items-center mt-20 text-gray-500 text-sm">
          <p>© 2025, All Rights Reserved</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>

      {/* HUGE WATERMARK */}
      <div
        className="absolute bottom-[-120px] left-1/2 -translate-x-1/2
        text-[260px] font-extrabold text-white/5 pointer-events-none select-none whitespace-nowrap"
      >
        Traverse VPN
      </div>
    </section>
  );
}
