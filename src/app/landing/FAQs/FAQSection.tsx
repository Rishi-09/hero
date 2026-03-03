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
    <section className="py-40 bg-[#010101] text-white">
      <div className="max-w-7xl mx-auto px-12">

        {/* Top Button */}
        <div className="flex justify-center mb-6">
          <Button text={"FAQs"} />
        </div>

        {/* Heading */}
        <h2
          className="
            font-[var(--font-space)]
            font-bold
            text-[48px]
            leading-[100%]
            tracking-[-0.48px]
            text-center
            drop-shadow-[0_0_8.5px_rgba(255,255,255,0.07)]
            mb-24
          "
        >
          Your questions,{" "}
          <span className="text-lime-400">
            covered
          </span>
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className={`
                    flex justify-between items-center
                    px-6 py-5 rounded-xl cursor-pointer
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
                      text-[24px]
                      leading-[118%]
                      tracking-[-0.24px]
                      ${isActive ? "text-black" : "text-white"}
                    `}
                  >
                    {faq.question}
                  </p>

                  {isActive ? (
                    <ChevronRight size={24} className="text-black" />
                  ) : (
                    <ChevronDown size={22} className="text-gray-400" />
                  )}
                </div>
              );
            })}

          </div>

          {/* RIGHT SIDE ANSWER BOX */}
          <div
            className="
              w-[410px]
              h-[400px]
              rounded-[17px]
              bg-gradient-to-b
              from-white
              to-[rgba(52,52,52,0.63)]
              p-[1px]
            "
          >
            <div className="w-full h-full rounded-[16px] bg-[#010101] p-10">
              {activeIndex !== null ? (
                <p className="text-gray-300 leading-relaxed">
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
    </section>
  );
}