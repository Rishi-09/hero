"use client";

import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    // <section className="relative w-full bg-black py-28 px-6 md:px-20 overflow-hidden">
    <section className="relative w-full bg-gradient-to-b from-transparent via-black/80 to-black py-28 px-6 md:px-20 overflow-hidden">

      {/* Top Label */}
      <div className="flex justify-center mb-6">
        <div className="px-6 py-2 rounded-full border border-lime-400/40 bg-lime-400/10 text-lime-400 text-sm font-medium backdrop-blur-md">
          Features
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="font-[var(--font-space)] text-[48px] leading-[100%] tracking-[-0.01em] font-bold text-white text-center mb-16">
        What <span className="text-lime-400">Traverse</span> Brings To You?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <FeatureCard
          title="Global Server Access"
          desc="Connect to high-speed servers worldwide with seamless performance."
          type="planet"
        />

        <FeatureCard
          title="Blazing Performance"
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