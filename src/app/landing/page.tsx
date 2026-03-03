import React from "react";
import HeroSection from "./hero/HeroSection";
// import HeroSection from "./hero/HeroSection";
import FeaturesSection from "./Feature/FeaturesSection";
import ServerCoverage from "./Servers/ServerCoverage";
import FAQSection from "./FAQs/FAQSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      <ServerCoverage/>
      <FAQSection/>
    </div>
  );
}
