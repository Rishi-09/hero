"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Button from "@/components/Button";

const faqs = [
  {
    question: "What is Traverse VPN?",
    answer:
      "Figma ipsum component variant main layer. Export rotate blur pen scrolling. Figma ipsum component variant main layer.",
  },
  {
    question: "Question 2?",
    answer: "This is the answer for question 2.",
  },
  {
    question: "Question 3?",
    answer: "This is the answer for question 3.",
  },
  {
    question: "Question 4?",
    answer: "This is the answer for question 4.",
  },
  {
    question: "Question 5?",
    answer: "This is the answer for question 5.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#010101] min-h-screen py-8 text-white relative">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Button */}
        <div className="flex justify-center mt-10 mb-6">
          <Button text={"FAQs"} />
        </div>

        {/* Heading */}
        <h2
          className="
            font-[var(--font-space)]
            font-bold
            text-[32px] md:text-[40px] lg:text-[48px]
            leading-[110%] md:leading-[100%]
            tracking-[-0.48px]
            text-center
            drop-shadow-[0_0_8.5px_rgba(255,255,255,0.07)]
            mb-12 md:mb-24
          "
        >
          Your questions, <span className="text-lime-400">covered</span>
        </h2>

        {/* Layout */}
        {/* Changed to flex-col on mobile, grid on md (tablets) and lg (laptops) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center lg:items-start">
          
          {/* LEFT SIDE (Questions) */}
          <div className="space-y-4 md:space-y-6 w-full max-w-2xl">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`
                    flex justify-between items-center
                    px-4 md:px-6 py-4 md:py-5 rounded-xl cursor-pointer
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[linear-gradient(90deg,rgba(190,238,3,0)_4%,#BEEE03_43.27%,#66D254_68.75%,#16B99E_100%)]"
                        : "hover:bg-white/5"
                    }
                  `}
                >
                  <p
                    className={`
                      font-[var(--font-space)]
                      font-medium
                      text-[18px] md:text-[22px] lg:text-[24px]
                      leading-[118%]
                      tracking-[-0.24px]
                      ${isActive ? "text-black" : "text-white"}
                    `}
                  >
                    {faq.question}
                  </p>

                  {isActive ? (
                    <ChevronRight size={24} className="text-black shrink-0" />
                  ) : (
                    <ChevronDown size={22} className="text-gray-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE ANSWER BOX */}
          <div
            className="
              w-full
              max-w-[410px]
              h-auto min-h-[250px] lg:h-[400px]
              rounded-[17px]
              bg-gradient-to-b
              from-white
              to-[rgba(52,52,52,0.63)]
              p-[1px]
              mt-6 lg:mt-0
            "
          >
            <div className="w-full h-full rounded-[16px] bg-[#010101] p-6 md:p-10">
              {activeIndex !== null ? (
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {faqs[activeIndex].answer}
                </p>
              ) : (
                <p className="text-gray-500">
                  Select a question to see the answer.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-transparent to-[#010101]" />
    </section>
  );
}