import Image from "next/image";
import HeroSection from "./hero/HeroSection";
import FeaturesSection from "./Feature/FeaturesSection";
import ServerCoverage from "./Servers/ServerCoverage";
import PricingSection from "./pricing/PricingSection";
import InstantConnectionSection from "./InstantConnection/InstantConnectionSection";
import FAQSection from "./FAQs/FAQSection";
import CTASection from "./Footer/CTASection";

export default function LandingPageContent() {
  return (
    <div className="text-white overflow-x-hidden space-y-0 ">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      <HeroSection />
      <FeaturesSection />
      <ServerCoverage />
      <PricingSection />
      <InstantConnectionSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
