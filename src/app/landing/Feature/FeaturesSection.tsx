"use client";

import Button from "@/components/Button";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
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
      <h2 className="text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1] md:leading-[100%] tracking-[-0.01em] text-white text-glow-white bold-heading font-bold text-center mb-10 md:mb-16">
        What <span className="text-[#67FF1D] text-glow-green">Traverse</span>{" "}
        Brings
        <br className="hidden md:block" /> To You?
      </h2>

      {/* Features Grid */}
      {/* - grid-cols-1: Single column for mobile 
          - md:grid-cols-2: Your perfect layout for tablets/laptops 
          - gap-6: Smaller gap for mobile to save space
          - md:gap-10: Restored gap for larger screens
      */}
      {/* Features Grid */}

      <div className="max-w-[1250px] mx-auto justify-center align-middle flex flex-wrap gap-10">
        <div className="flex gap-10 mx-auto">
          <div className="w-106">
            <FeatureCard
              title="Global Server Access"
              desc="Connect to servers easily across the globe"
              type="planet"
            />
          </div>
          <div className="w-158.5">
            <FeatureCard
              title="Fast, Steady Performance"
              desc="Get high speed servers so your work never slow down"
              type="performance"
            />
          </div>
        </div>
        <div className="flex gap-10 mx-auto">
          <div className="w-[500px]">
            <FeatureCard
              title="Multiple Devices"
              desc="Protect all your devices with one account"
              type="devices"
            />
          </div>

          <div className="w-140">
            <FeatureCard
              title="Split Tunneling"
              desc="Decide which app takes the secure path"
              type="split"
            />
          </div>
        </div>
        <div className="flex gap-10 mx-auto">
          <div className="w-118">
            <FeatureCard
              title="Wi-Fi Protection"
              desc="Guard your data on shared and public hotspots"
              type="wifi"
            />
          </div>

          <div className="w-145.25">
            <FeatureCard
              title="Kill Switch"
              desc="Stops internet access until your VPN is back"
              type="kill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
