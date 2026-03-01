"use client";

import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    // <section className="mt-20 w-full bg-black py-28 px-6 md:px-20 overflow-hidden">
    <section className="w-full mt-20 py-28 px-6 md:px-20 overflow-hidden">
      {/* Top Label */}
      <div className="flex justify-center mb-6">
        <div className="relative group p-[1px] inline-flex items-center justify-center rounded-full overflow-hidden">
          {/* The Gradient Border Background */}
          <span className="absolute inset-0 bg-gradient-to-l from-green-500 to-green-800 rounded-full"></span>

          {/* The Button Content */}
          <div className="relative px-6 py-2 bg-black rounded-full transition-all group-hover:bg-transparent">
            <span className="text-white text-lg font-semibold">
              Features
            </span>
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-[48px] leading-[100%] tracking-[-0.01em]  text-white text-glow-white bold-heading font-bold text-center mb-16">
        What <span className="text-green-500 text-glow-green">Traverse</span>{" "}
        Brings To You?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <FeatureCard
          title="Global Server Access"
          desc="Connect to high-speed servers worldwide with seamless performance."
          type="planet"
        />

        <FeatureCard
          title="Fast,Steady Performance"
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
