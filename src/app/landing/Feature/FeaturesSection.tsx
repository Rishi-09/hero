"use client";

import Button from "@/components/Button";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="w-full -mt-1 py-16 md:py-1 px-6 md:px-20 lg:pl-2 lg:pr-1 overflow-hidden">
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite
          }
        `}
      </style>

      {/* Top Label */}
      <div className="flex justify-center mb-6">
        <Button text={"Features"} />
      </div>

      {/* Main Heading */}
      {/* Changed text size to be fluid: 32px on mobile, 48px on laptop */}
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] md:leading-[100%] tracking-[-0.01em] text-white text-glow-white bold-heading font-bold text-center mb-10 md:mb-16">
        What <span className="text-[#67FF1D] text-glow-green">Traverse</span>{" "} 
        Brings<br className="hidden md:block" /> To You?
      </h2>

      {/* Features Grid */}
      {/* - grid-cols-1: Single column for mobile 
          - md:grid-cols-2: Your perfect layout for tablets/laptops 
          - gap-6: Smaller gap for mobile to save space
          - md:gap-10: Restored gap for larger screens
      */}
      <div className="flex gap-8 pl-[97px] pr-[120px] py-8 justify-between">
  <FeatureCard
    title="Global Server Access"
    desc="Connect to servers easily across the globe"
    type="planet"
  />

  <FeatureCard
    title="Fast, Steady Performance"
    desc="Get high speed servers so your work never slow down"
    type="performance"
  />
</div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 pl-25">
        <FeatureCard
          title="Multiple Devices"
          desc="Protect all your devices with one account"
          type="devices"
        />

        <FeatureCard
          title="Split Tunneling"
          desc="Decide which app takes the secure path"
          type="split"
          
        />

        <FeatureCard
          title="Wi-Fi Protection"
          desc="Guard your data on shared and public hotspots"
          type="wifi"
        />

        <FeatureCard
          title="Kill Switch"
          desc="Stops internet access until your VPN is back"
          type="kill"
        />
        
      </div>
    </section>
  );
}