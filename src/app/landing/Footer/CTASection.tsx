"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { ChevronDown } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative font-['Space_Grotesk'] text-white pt-24 lg:pt-36 pb-0 overflow-hidden bg-[#030A00]">
      
      {/* Large Green Curved Background (FIXED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[2/1] pointer-events-none">
        {/* Curved Horizon Line */}
        <div
          className="
            absolute
            top-[40px] lg:top-[100px]
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
          className="relative mt-0 lg:-mt-32 rounded-[28px] overflow-hidden
          border border-white/5
          bg-[linear-gradient(90deg,#0d0f14_0%,#0a0c10_50%,#061b0f_100%)]
          p-6 sm:p-8 md:p-10 lg:p-16 flex flex-row items-center justify-between"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[60%] z-10 text-left">
            <h3 className="font-bold font-['Space_Grotesk'] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[48px] leading-[115%] tracking-[-0.02em] mb-6 lg:mb-10">
              Don’t miss what’s <br className="hidden xl:block" /> coming next
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full sm:w-[260px] md:w-[300px] h-[52px] px-6 rounded-full
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
          <div className="absolute right-[-120px] top-20 h-full w-[320px] pointer-events-none">
            <Image
              src="/earth.png"
              alt="Earth"
              fill
              className="object-contain object-right scale-[1.25]
              drop-shadow-[0_0_80px_rgba(0,255,100,0.45)]"
            />
          </div>
        </div>
        {/* ================= FOOTER AREA ================= */}
        {/* Stacked on mobile, grid on desktop */}
        <div className="mt-10 lg:mt-16 flex flex-col lg:grid lg:grid-cols-3 items-start lg:items-start gap-10 lg:gap-0 px-2 lg:px-0">
          {/* LEFT */}
          <div className="flex flex-col items-start lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={33}
                height={33}
                className="lg:w-[25px] lg:h-[25px]"
              />
              <span className="font-['Inter'] mb-1 font-large text-3xl lg:text-2xl">
                Traverse VPN
              </span>
            </div>

            <p className="font-['DM_Sans'] font-light text-white text-xl lg:text-s max-w-xs mb-10 leading-relaxed ">
              Take control of your digital <br /> identity and enjoy the web{" "}
              <br /> the way it was meant to be.
            </p>

            <div className="flex justify-center lg:justify-start mt-6 lg:mt-0">
              <Button text={"Get Traverse Now!"} />
            </div>
            <div className="flex gap-6 opacity-80 mt-8 lg:hidden">
              {[
                { src: "/x.svg", alt: "X" },
                { src: "/instagram.svg", alt: "IG" },
                { src: "/youtube.svg", alt: "YT" },
                { src: "/linkedin.svg", alt: "IN" },
              ].map((icon) => (
                <div
                  key={icon.alt}
                  style={{
                    maskImage: `url(${icon.src})`,
                    WebkitMaskImage: `url(${icon.src})`,
                    maskRepeat: "no-repeat",
                    maskSize: "contain",
                  }}
                  className="w-6 h-6 bg-white cursor-pointer transition hover:bg-lime-400"
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:flex lg:gap-24">
            {/* MOBILE ACCORDIONS */}
            <div className="lg:hidden w-full">
              {/* Company */}
              <details className="b py-4">
                <summary className="flex justify-between items-center text-lg font-medium cursor-pointer list-none">
                  Company
                  <ChevronDown size={18} />
                </summary>

                <div className="flex flex-col gap-3 mt-4 text-base font-light">
                  <a href="#" className="hover:text-lime-400">
                    About Us
                  </a>
                  <a href="#" className="hover:text-lime-400">
                    Contact Us
                  </a>
                  <a href="#" className="hover:text-lime-400">
                    Refund Policy
                  </a>
                </div>
              </details>

              {/* Platforms */}
              <details className=" py-4">
                <summary className="flex justify-between items-center text-lg font-medium cursor-pointer list-none">
                  Platforms
                  <ChevronDown size={18} />
                </summary>

                <div className="flex flex-col gap-3 mt-4 text-base font-light">
                  <a href="#" className="hover:text-lime-400">
                    VPN for Android
                  </a>
                  <a href="#" className="hover:text-lime-400">
                    VPN for iPhone
                  </a>
                  <a href="#" className="hover:text-lime-400">
                    VPN for Business
                  </a>
                  <a href="#" className="hover:text-lime-400">
                    VPN for Streaming
                  </a>
                  <a href="#" className="hover:text-lime-400">
                    VPN for Gaming
                  </a>
                  <a href="#" className="hover:text-lime-400">
                    VPN for Security
                  </a>
                </div>
              </details>
            </div>

            {/* DESKTOP LINKS (UNCHANGED DESIGN) */}
            <div className="hidden lg:flex gap-24">
              {/* Company */}
              <div className="font-['DM_Sans'] flex flex-col items-start gap-3 text-white">
                <span className="text-2xl">Company</span>

                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  About Us
                </a>

                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  Contact Us
                </a>

                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  Refund Policy
                </a>
              </div>

              {/* Platforms */}
              <div className="font-['DM_Sans'] flex flex-col items-start gap-3 text-white">
                <span className="text-2xl">Platforms</span>

                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  VPN for Android
                </a>
                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  VPN for iPhone
                </a>
                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  VPN for Business
                </a>
                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  VPN for Streaming
                </a>
                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  VPN for Gaming
                </a>
                <a href="#" className="hover:text-lime-400 font-light text-lg">
                  VPN for Security
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-row justify-between items-center gap-6 mt-10 mb-6 text-[#5C5C5C] px-2 lg:px-0 ">
          {/* Left - Social Icons */}
          <div className="hidden lg:flex gap-6 opacity-80">
            {[
              { src: "/x.svg", alt: "X" },
              { src: "/instagram.svg", alt: "IG" },
              { src: "/youtube.svg", alt: "YT" },
              { src: "/linkedin.svg", alt: "IN" },
            ].map((icon) => (
              <div
                key={icon.alt}
                style={{
                  maskImage: `url(${icon.src})`,
                  WebkitMaskImage: `url(${icon.src})`,
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                }}
                className="w-6 h-6 bg-[#FFFFFF] cursor-pointer transition-colors duration-300 hover:bg-lime-400"
              />
            ))}
          </div>
          {/* Center */}
        </div>
        <div className="mt-12 font-['DM_Sans']  text-xl text-[#5C5C5C] mb-4">
          {/* Divider Line */}

          {/* Bottom Row */}
          <div className="mt-12 font-['DM_Sans'] text-[#5C5C5C] mb-4">
            <div className="w-full h-[1px] bg-white/20 mb-6"></div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-4 text-base lg:hidden">
              <span className="hover:text-lime-400 cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-lime-400 cursor-pointer">
                Terms of Use
              </span>
              <span className="hover:text-lime-400 cursor-pointer">
                Sitemap
              </span>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-between items-center text-[20px]">
              <div>© 2025, All Rights Reserved</div>

              <div className="flex items-center gap-2">
                <span className="hover:text-lime-400 cursor-pointer">
                  Privacy Policy
                </span>
                <span>|</span>
                <span className="hover:text-lime-400 cursor-pointer">
                  Terms of Use
                </span>
                <span>|</span>
                <span className="hover:text-lime-400 cursor-pointer">
                  Sitemap
                </span>
              </div>
            </div>

            {/* Mobile Copyright */}
            <div className="mt-6 text-sm lg:hidden">
              © 2025, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
