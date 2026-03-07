// components/BlogSection.jsx
"use client";
import Image from "next/image";
import Button from "@/components/Button";

export default function BlogSection() {
  return (
    <section className="bg-black text-white py-0 px-6 mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Blog Badge */}
        <div className="flex justify-center mt-10 mb-6">
          <Button text={"Blogs"} />
        </div>

        {/* Heading */}
        <p className="font-['DM_Sans'] font-light text-[20px] leading-[143%] tracking-[-0.01em] text-center">
          Stay updated on VPN security, online privacy, and internet freedom.
          <br />
          Explore the latest insights to protect your digital life with confidence.
        </p>

        {/* Blog Card */}
        <div className="mt-16 flex justify-center">
          <div
            
  className="w-[956px] h-[344px] rounded-[26px] border border-[#2F2F2F] 
  bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(0,0,0,0)_64.9%)]
  p-8 flex flex-col md:flex-row items-center gap-10 
  transition-all duration-300 transform hover:-translate-y-2"
>
          
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="font-['DM_Sans'] text-2xl font-semibold mb-4">
                Can a VPN be Tracked? The Truth about Anonymity
              </h1>

              <p className="text-white font-['DM_Sans'] font-light">
                Figma ipsum component variant main layer. Object pixel vertical
                clip shadow draft flows. Figma ipsum component variant main
                layer. Object pixel vertical clip shadow draft flows.
              </p>

              {/* Date + Read Time */}
      <div className="mt-19 font-['DM_Sans'] text-white font-light">
        <p>May 17, 2025</p>
        <p>5 min read</p>
      </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 h-full overflow-hidden">
  <Image
    src="/laptop.png"
    alt="blog image"
    width={600}
    height={250}
    className="h-full w-full object-cover rounded-xl"
  />
</div>

          </div>
        </div>
   {/* Small Blog Cards */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 w-fit mx-auto">

  {[1,2,3,4,5,6].map((card) => (
    <div
      key={card}
      className="w-[300px] rounded-[28px] border border-[#2F2F2F] 
      bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(0,0,0,0)_64.9%)]
      p-5 transform transition-all duration-300 hover:-translate-y-3"
    >

      {/* Image */}
      <div className="overflow-hidden rounded-[22px] mb-5">
        <Image
          src="/blogsmallcards.png"
          alt="blog"
          width={300}
          height={180}
          className="w-full h-[180px] object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="font-['DM_Sans'] font-semibold text-[20px] leading-[100%] tracking-[-0.01em] text-white mb-10">
        Can VPN be Tracked? The Truth about Anonymity
      </h3>

      {/* Bottom Row */}
      <div className="flex justify-between font-['DM_Sans'] font-light text-[14px] leading-[100%] tracking-[-0.01em] text-white">
        <span>Jan 1, 2026</span>
        <span>5 min read</span>
      </div>

    </div>
  ))}

</div>
{/* Blog Card */}
        <div className="mt-16 flex justify-center">
          <div
            
  className="w-[956px] h-[344px] rounded-[26px] border border-[#2F2F2F] 
  bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(0,0,0,0)_64.9%)]
  p-8 flex flex-col md:flex-row items-center gap-10 
  transition-all duration-300 transform hover:-translate-y-2"
>
          
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="font-['DM_Sans'] text-2xl font-semibold mb-4">
                Can a VPN be Tracked? The Truth about Anonymity
              </h1>

              <p className="text-white font-['DM_Sans'] font-light">
                Figma ipsum component variant main layer. Object pixel vertical
                clip shadow draft flows. Figma ipsum component variant main
                layer. Object pixel vertical clip shadow draft flows.
              </p>

              {/* Date + Read Time */}
      <div className="mt-8 font-['DM_Sans'] text-white font-light">
        <p>May 17, 2025</p>
        <p>5 min read</p>
      </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 h-full overflow-hidden">
  <Image
    src="/laptop.png"
    alt="blog image"
    width={600}
    height={250}
    className="h-full w-full object-cover rounded-xl"
  />
</div>

          </div>
        </div>
        {/* Small Blog Cards */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 w-fit mx-auto">

  {[1,2,3,4,5,6].map((card) => (
    <div
      key={card}
      className="w-[300px] rounded-[28px] border border-[#2F2F2F] 
      bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(0,0,0,0)_64.9%)]
      p-5 transform transition-all duration-300 hover:-translate-y-3"
    >

      {/* Image */}
      <div className="overflow-hidden rounded-[22px] mb-5">
        <Image
          src="/blogsmallcards.png"
          alt="blog"
          width={300}
          height={180}
          className="w-full h-[180px] object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="font-['DM_Sans'] font-semibold text-[20px] leading-[100%] tracking-[-0.01em] text-white mb-10">
        Can VPN be Tracked? The Truth about Anonymity
      </h3>

      {/* Bottom Row */}
      <div className="flex justify-between font-['DM_Sans'] font-light text-[14px] leading-[100%] tracking-[-0.01em] text-white">
        <span>Jan 1, 2026</span>
        <span>5 min read</span>
      </div>

    </div>
  ))}

</div>
      </div>
    </section>
  );
}