import React from "react";
interface stringProp {
  text: string;
}

export default function Button({ text }: stringProp) {
  return (
    <div className="relative group p-[1.5px] inline-flex items-center justify-center rounded-full overflow-hidden transition-transform active:scale-95">
      {/* The Animated Spinning Gradient Layer */}
      <span
        className="absolute inset-[-1000%] animate-spin-slow opacity-100 "
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 60%, #22c55e 90%, #4ade80 100%)",
        }}
      />

      {/* The Button Body (Masks the center of the spinning gradient) */}
      <div className="relative px-10 py-5 bg-black rounded-full transition-all group-hover:bg-zinc-900 flex items-center gap-2">
        <span className="text-white text-2xl font-semibold tracking-wide">
          {text}
        </span>

        {/* Subtle Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-full  pointer-events-none" />
      </div>
    </div>
  );
}
