"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative font-['Space_Grotesk'] text-white lg:pt-36 pb-0 overflow-hidden bg-[#030A00]">
      
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
       
        {/* ================= FOOTER AREA ================= */}
        {/* Stacked on mobile, grid on desktop */}
        <div className="mt-9 lg:mt-16 lg:mb-0 flex flex-col lg:grid lg:grid-cols-3 items-center lg:items-start gap-12 lg:gap-0 ml-12">
          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-0">
              <Image src="/logo.png" alt="Logo" width={50} height={100} />
              <span className="font-['Inter'] font-large text-2xl lg:text-2xl">Traverse VPN</span>
            </div>

            <p className="font-['DM_Sans'] font-extralight text-white text-lg lg:text-s max-w-xs mb-10 leading-relaxed ml-16">
              Take control of your digital identity and enjoy the web the way it
              was meant to be.
            </p>

            


            
          </div>

          {/* CENTER BUTTON */}
          <div className="flex justify-center order-first lg:order-none">
            <Button text={"Get Traverse Now!"} />
          </div>

          {/* RIGHT LINKS */}
          <div className="font-['DM_Sans'] flex flex-col items-center lg:items-end gap-4 lg:gap-5 text-white mr-12">
            <a href="#" className="hover:text-lime-400 transition text-lg lg:text-xl">About Us</a>
            <a href="#" className="hover:text-lime-400 transition text-lg lg:text-xl">VPN For Abdroid</a>
            <a href="#" className="hover:text-lime-400 transition text-lg lg:text-xl">Refund Policy</a>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-3 items-center mt-6 mb-4 text-[#5C5C5C] ml-16 mr-12">

  {/* Left - Social Icons */}
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
  {/* Center */}
  <div className="font-['DM_Sans'] text-center text-m lg:text-m">
    © 2025, All Rights Reserved
  </div>

  {/* Right */}
  <div className="font-['DM_Sans'] text-right text-m lg:text-m">
    <span >Privacy Policy</span>
    {" | "}
    <span >Terms of Use</span>
  </div>

</div>
      </div>

      
    </section>
  );
}