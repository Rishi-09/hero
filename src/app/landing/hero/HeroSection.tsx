

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow py-30 lg:py-0 mt-10">
      {/* Smooth Green Atmospheric Glow */}
      <div
        className="
          absolute right-0 top-0 h-full w-[40%]
          bg-linear-to-l
          from-green-950/5
          via-green-900/10
          to-transparent
          blur-3xl
          pointer-events-none
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl  lg:pl-120 pr-0 md:pr-4 flex flex-col lg:flex-row items-center ">
        
        {/* LEFT SIDE CONTENT WRAPPER */}
        {/* Note: xl:right-100 preserved for your 14-inch layout */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl relative xl:right-100 xl:top-25">
          
          {/* Heading */}
          <h1
            className="font-['Space_Grotesk'] text-4xl md:text-6xl lg:text-5xl leading-tight lg:leading-[1.05] font-light tracking-wider text-[#FFFFFF] drop-shadow-[0_0_0px_rgba(34,197,94,0.2)] text-glow-white "
          >
            Privacy that follows <br/> you everywhere
          </h1>

          {/* Subtext */}
          <p className="font-['DM Sans'] mt-6 -mb-[-10] text-gray-300 text-lg md:text-xl lg:text-2xl max-w-lg">
            Access worldwide content and keep your digital life shielded
          </p>

          {/* Earth for Mobile */}
<div className="flex justify-center items-center mt-4 md:hidden">
  <div className="relative w-[260px] h-[260px]">
    <Image
      src="/earth.png"
      alt="Earth"
      fill
      sizes="260px"
      className="object-contain animate-[spin_100s_linear_infinite_reverse]"
    />
  </div>
</div>
          {/* On mobile, we remove the negative offsets so it stays in flow */}
          <div className="relative w-full hidden md:block max-w-[450px] md:max-w-[650px] lg:w-[900px] 
                h-[350px] md:h-[500px] lg:h-[650px] 
                lg:relative lg:right-40 lg:-top-30 mt-5 md:display-none ">
  <Image
    src="/phones.png"
    alt="Phones"
    fill
    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.95)] "
  />
</div>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-6 lg:mt-0 lg:relative lg:bottom-50">
            <Image
              src="/appStore.png"
              alt="App Store"
              width={160}
              height={55}
              className="w-[140px] md:w-[160px] h-auto hover:scale-105 transition duration-300 cursor-pointer"
            />
            <Image
              src="/playStore.png"
              alt="Google Play"
              width={160}
              height={55}
              className="w-[140px] md:w-[160px] h-auto hover:scale-105 transition duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* MASSIVE CROPPED EARTH */}
<div
  className="absolute right-[-20%] lg:right-[-12%] top-[10%] lg:top-[62%]
  scale-110 md:scale-150 lg:scale-[2.2] -translate-y-1/2
  w-[300px] h-[400px] md:w-[600px] md:h-[1000px] lg:w-[600px] lg:h-[1600px]
  hidden md:block -z-10 opacity-50 lg:opacity-100"
>
  <Image
    src="/earth.png"
    alt="Earth background globe"
    fill
    sizes="(max-width: 768px) 300px,
           (max-width: 1024px) 600px,
           600px"
    priority={false}
    loading="lazy"
    className="object-contain animate-[spin_100s_linear_infinite] drop-shadow-[0_0_50px_rgba(34,197,94,0.9)]"
  />
</div>
    </section>
  );
}

