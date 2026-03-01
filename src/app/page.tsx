import Image from "next/image";
import HeroSection from "./landing/hero/HeroSection";
import FeaturesSection from "./landing/Feature/FeaturesSection";

export default function Page() {
  return (
    <div className=" text-white space-y-30 overflow-x-hidden">
      {/* Fixed Background for Entire Website */}
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
    </div>
  );
}
