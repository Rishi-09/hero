"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative font-['Space_Grotesk'] text-white lg:pt-36 pb-12 overflow-hidden bg-[#030A00]">
      
      {/* Large Green Curved Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[2/1] pointer-events-none">
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
          className="relative -mt-32 rounded-[28px] overflow-hidden
          border border-white/5
          bg-[linear-gradient(90deg,#0d0f14_0%,#0a0c10_50%,#061b0f_100%)]
          p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl z-10 text-center lg:text-left">
            <h3 className="font-bold font-['Space_Grotesk'] text-[28px] md:text-[40px] lg:text-[48px] leading-[115%] tracking-[-0.02em] mb-6 lg:mb-10">
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
          <div className="absolute hidden lg:block w-[45%] -right-30 -top-1 h-full pointer-events-none">
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
        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
          
          {/* LEFT - Brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Logo" width={25} height={50} />
              <span className="font-['Inter'] text-2xl">Traverse VPN</span>
            </div>
            <p className="font-['DM_Sans'] font-light text-white text-lg mb-8 leading-relaxed">
              Take control of your digital identity and enjoy the web the way it was meant to be.
            </p>
            <Button text={"Get Traverse Now!"} />
          </div>

          {/* RIGHT - Links Groups */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24 lg:mr-12">
            {/* Company Section */}
            <div className="font-['DM_Sans'] flex flex-col items-center lg:items-start gap-3 text-white">
              <span className="text-xl lg:text-2xl mb-2">Company</span>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg">About Us</a>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg">Contact Us</a>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg whitespace-nowrap">Refund Policy</a>
            </div>

            {/* Platforms Section */}
            <div className="font-['DM_Sans'] flex flex-col items-center lg:items-start gap-3 text-white">
              <span className="text-xl lg:text-2xl mb-2">Platforms</span>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg whitespace-nowrap">VPN for Android</a>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg whitespace-nowrap">VPN for iPhone</a>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg whitespace-nowrap">VPN for Business</a>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg whitespace-nowrap">VPN for Streaming</a>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg whitespace-nowrap">VPN for Gaming</a>
              <a href="#" className="hover:text-lime-400 font-light transition text-lg whitespace-nowrap">VPN for Security</a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW - Socials */}
        <div className="flex justify-center lg:justify-start mt-12 mb-8">
          <div className="flex gap-6 opacity-80">
            {[
              { src: '/x.svg', alt: 'X' },
              { src: '/instagram.svg', alt: 'IG' },
              { src: '/youtube.svg', alt: 'YT' },
              { src: '/linkedin.svg', alt: 'IN' }
            ].map((icon) => (
              <div
                key={icon.alt}
                style={{
                  maskImage: `url(${icon.src})`,
                  WebkitMaskImage: `url(${icon.src})`,
                  maskRepeat: 'no-repeat',
                  maskSize: 'contain'
                }}
                className="w-6 h-6 bg-[#FFFFFF] cursor-pointer transition-colors duration-300 hover:bg-lime-400"
              />
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="font-['DM_Sans'] text-[#5C5C5C]">
          <div className="w-full h-[1px] bg-white/20 mb-6"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left text-sm md:text-base lg:text-[20px]">
            <div>© 2025, All Rights Reserved</div>

            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <span className="hover:text-lime-400 transition cursor-pointer whitespace-nowrap">Privacy Policy</span>
              <span className="hidden sm:inline">|</span>
              <span className="hover:text-lime-400 transition cursor-pointer whitespace-nowrap">Terms of Use</span>
              <span className="hidden sm:inline">|</span>
              <span className="hover:text-lime-400 transition cursor-pointer whitespace-nowrap">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}