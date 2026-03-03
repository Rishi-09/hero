"use client";

import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/Button";

function PricingCard({
  type,
  title,
  description,
  features,
  premium,
  className,
}: {
  type: "Basic" | "Premium";
  title: string;
  description: string;
  features: { label: string; available: boolean }[];
  premium?: boolean;
  className?: string;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={clsx(
        "relative w-[420px] rounded-[24px] p-[1px] transition-all duration-500",
        className
      )}
      style={
        premium
          ? {
              background:
                "linear-gradient(270deg, #16B99E 0%, #BEEE03 100%)",
            }
          : {}
      }
    >
      <div
        className="rounded-[24px] bg-[#171717] p-10 flex flex-col"
        style={
          premium
            ? {}
            : { border: "1px solid #474747" }
        }
      >
        {/* HEADER SECTION */}
        <div className="min-h-[190px]">
          <h2
            className="text-[48px] font-bold tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {title}
          </h2>

          <p
            className="mt-4 text-[20px] font-light tracking-[-0.01em] text-white/70"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {description}
          </p>
        </div>

        {/* BUTTONS */}
        {premium ? (
          <div className="mt-8 rounded-full p-[1.5px] bg-gradient-to-r from-[#BEEE03] to-[#16B99E]">
            <button
              onClick={() => {
                setClicked(true);
                setTimeout(() => setClicked(false), 200);
              }}
              className="w-full rounded-full bg-[#171717] text-white py-4 text-[20px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#BEEE03] hover:to-[#16B99E] active:scale-95"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Get Premium
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setClicked(true);
              setTimeout(() => setClicked(false), 200);
            }}
            className="relative mt-8 w-full rounded-full py-4 text-[20px] font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-95 border border-white/40 text-white hover:bg-white hover:text-black"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Get Basic
          </button>
        )}

        {/* FEATURES */}
        <ul className="mt-10 space-y-5">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-[20px] font-semibold tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {premium ? (
                <>
                  <span className="text-[#BEEE03] text-lg font-bold">
                    ✓
                  </span>
                  <span className="text-white">{feature.label}</span>
                </>
              ) : (
                <>
                  <span className="text-lg">
                    {feature.available ? "•" : "×"}
                  </span>
                  <span className="text-white">{feature.label}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative max-h-screen  text-white flex flex-col items-center justify-center px-6">
      <div className="flex justify-center mt-10 mb-6">
        <Button text={"Pricing"} />
      </div>

      <h1
        className="text-[48px] font-bold tracking-[-0.01em] text-center drop-shadow-[0_0_30px_rgba(34,197,94,0.3)] text-glow-white"
        style={{ fontFamily: "var(--font-space)" }}
      >
        Plans to Stay{" "}
        <span className="text-[#6CFF2E]">Secure</span>
      </h1>

      <div className="mt-16 flex gap-12 items-start">
        <PricingCard
          type="Basic"
          title="Basic"
          description="Standard encryption that covers your basic, day-to-day online needs."
          features={[
            { label: "Less Server Options", available: true },
            { label: "Moderate Speed Servers", available: true },
            { label: "Split Tunneling", available: false },
            { label: "Wi-Fi Protection", available: false },
            { label: "Kill Switch", available: false },
          ]}
        />

        <PricingCard
          type="Premium"
          title="Premium"
          description="Experience faster, safer, fully unrestricted browsing with all the advanced perks."
          premium
          features={[
            { label: "Wide Server Options", available: true },
            { label: "Faster Speed Servers", available: true },
            { label: "Split Tunneling", available: true },
            { label: "Wi-Fi Protection", available: true },
            { label: "Kill Switch", available: true },
          ]}
        />
      </div>
    </section>
  );
}