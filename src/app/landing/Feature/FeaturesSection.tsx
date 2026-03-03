"use client";

import Button from "@/components/Button";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="w-full mt-10 md:mt-20 py-16 md:py-28 px-6 md:px-20 lg:pr-40 overflow-hidden">
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
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
        What <span className="text-green-500 text-glow-green">Traverse</span>{" "} 
        Brings<br className="hidden md:block" /> To You?
      </h2>

      {/* Features Grid */}
      {/* - grid-cols-1: Single column for mobile 
          - md:grid-cols-2: Your perfect layout for tablets/laptops 
          - gap-6: Smaller gap for mobile to save space
          - md:gap-10: Restored gap for larger screens
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
        <FeatureCard
          title="Global Server Access"
          desc="Connect to high-speed servers worldwide with seamless performance."
          type="planet"
        />

        <FeatureCard
          title="Fast, Steady Performance"
          desc="Optimized routing ensures ultra-fast browsing and streaming."
          type="performance"
        />

        <FeatureCard
          title="Multi Device Support"
          desc="Secure all your devices simultaneously with one subscription."
          type="devices"
        />

        <FeatureCard
          title="Split Tunneling"
          desc="Control which apps use the VPN and which stay local."
          type="split"
        />

        <FeatureCard
          title="Public WiFi Protection"
          desc="Stay secure on public networks with advanced encryption."
          type="wifi"
        />

        <FeatureCard
          title="Kill Switch"
          desc="Automatically blocks traffic if your VPN connection drops."
          type="kill"
        />
      </div>
    </section>
  );
}