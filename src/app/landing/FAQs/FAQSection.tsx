"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"
import Button from "@/components/Button";

const faqs = [
  {
    question: "Are VPNs legal?",
    answer:
      "Yes, VPNs are legal in most countries. They're simply a tool to protect your privacy online.",
  },
  {
    question: "What makes Traverse one of the best VPNs on the market?",
    answer:
      "We focus on speed, security and a clean, simple experience, built to work reliably without slowing you down.",
  },
  {
    question: "Does VPN harm your device?",
    answer:
      "Not at all. A VPN only encrypts your connection and doesn't affect your device's health or performance.",
  },
  {
    question: "Can I download and use VPN on multiple devices?",
    answer:
      "Yes. You can use your account across all your devices with no hassle.",
  },
  {
    question: "Does VPN work with online games?",
    answer:
      "Yes, it works smoothly for gaming and can even reduce lag by connecting you to better routes.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#010101] min-h-screen py-20 text-white relative">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Button */}
        <div className="flex justify-center mt-10 mb-10">
          <Button text={"FAQs"} />
        </div>

        {/* Heading */}
        <h2
          className="
            font-['Space_Grotesk']
            font-bold
            text-[32px] md:text-[40px] lg:text-[48px]
            leading-[110%] md:leading-[100%]
            tracking-[-0.48px]
            text-center
            drop-shadow-[0_0_8.5px_rgba(255,255,255,0.4)]
            mb-12 md:mb-24
          "
        >
          Your questions, <br /> <span className="text-lime-400">covered</span>
        </h2>

        {/* Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ">
          
          <div className="font-['Space_Grotesk'] space-y-4 md:space-y-6 w-full max-w-2xl lg:ml-25">
  {faqs.map((faq, index) => {
    const isActive = activeIndex === index;

    return (
      <div key={index} className="w-full">
        
        {/* QUESTION */}
        <div
          onClick={() => setActiveIndex(isActive ? null : index)}
          className={`
            flex justify-between items-center
            px-4 md:px-6 py-4 md:py-5 rounded-xl cursor-pointer
            transition-all duration-300
            ${
              isActive
                ? "bg-[linear-gradient(90deg,rgba(190,238,3,0)_4%,rgba(190,238,3,0.8)_43.27%,rgba(102,210,84,0.8)_68.75%,rgba(22,185,158,0.8)_100%)]"
                : "hover:bg-white/5"
            }
          `}
        >
          <p
            className="
              font-medium
              text-[18px] md:text-[22px] lg:text-[24px]
              leading-[118%]
              tracking-[-0.24px]
              text-white
            "
          >
            {faq.question}
          </p>

          {isActive ? (
            <ChevronRight size={24} className="text-black shrink-0" />
          ) : (
            <ChevronDown size={22} className="text-gray-400 shrink-0" />
          )}
        </div>

        {/* MOBILE ANSWER */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden px-4 pt-4 pb-6 text-gray-300 font-['DM_Sans']"
            >
              {faq.answer}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    );
  })}
</div>

          {/* RIGHT SIDE ANSWER BOX */}
          <div
            className="
              hidden lg:block
              font-['DM_Sans']
              w-full
              max-w-[410px]
              h-auto min-h-[250px] lg:h-[400px]
              rounded-[17px]
              bg-gradient-to-b
              from-white
              to-[rgba(52,52,52,0.63)]
              p-[1px]
              mt-6 lg:mt-0
              lg:ml-20
            "
          >
           <div className="w-full h-full rounded-[16px] bg-[#010101] p-4 md:p-10 overflow-hidden relative">
  {/* mode="popLayout" use karne se purana text niche jayega aur naya turant upar aane lagega */}
  <AnimatePresence mode="popLayout">
    {activeIndex !== null ? (
      <motion.div
        key={activeIndex}
        // Initial: Text box ke kafi niche se start hoga aur blur rahega
        initial={{ y: 120, opacity: 0, filter: "blur(15px)" }}
        // Animate: Apni asli jagah (top) par aayega aur clear ho jayega
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        // Exit: Purana answer niche ki taraf slide karke blur hote hue gayab hoga
        exit={{ y: 120, opacity: 0, filter: "blur(15px)" }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1] // Smooth exponential easing
        }}
        className="w-full flex flex-col justify-start items-start"
      >
        <p className="font-['DM_Sans'] text-white text-base md:text-2xl leading-relaxed text-left pb-6 md:pb-10">
          {faqs[activeIndex].answer}
        </p>
      </motion.div>
    ) : (
      <motion.p 
        key="placeholder"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-gray-500"
      >
        
      </motion.p>
    )}
  </AnimatePresence>
</div>
          </div>
        </div>
      </div>
      {/* Bottom fade into footer */}
<div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none 
bg-gradient-to-b from-transparent via-[#010101] to-[#030A00]" />
    </section>
  );
}
