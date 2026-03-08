import React from "react";

interface stringProp {
  text: string;
}

export default function Button({ text }: stringProp) {
  return (
    <div className="group relative is-flex items-center justify-center p-[2px] overflow-hidden rounded-full">
      {/* 1. The Rotating Gradient Background (The "Border") */}
      <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67FF1D_0%,transparent_25%,#67FF1D_50%,transparent_75%,#67FF1D_100%)]" />

      {/* 2. The Inner Button (Mask) */}
      <div className="relative flex items-center justify-center px-12 py-5 rounded-full bg-black/90 backdrop-blur-xl w-full h-full">
        <span className="text-white text-5xl font-bold tracking-tight z-10">
          {text}
        </span>
      </div>

      {/* 3. Outer Glow (Optional, to match the video's neon feel) */}
      <div className="absolute inset-0 rounded-full shadow-[0_0_20px_2px_#67FF1D33] pointer-events-none" />
    </div>
  );
}