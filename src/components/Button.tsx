import React from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className="group relative flex items-center justify-center overflow-hidden transition-all duration-300"
      style={{
        width:"auto",
        height: "50px",
        borderRadius: "23px",
        padding: "16px 20px",
        gap: "10px",
        background: "transparent",
        border: "1px solid transparent",
        boxShadow: "0px 0px 4.6px 0px #73D64896",
      }}
    >
      {/* Rotating Gradient Border */}
      <div
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #73D648 25%, transparent 50%, #73D648 75%, transparent 100%)",
        }}
      />

      {/* Inner Mask */}
      <div
        className="absolute inset-[1px] group-hover:bg-black/80 transition-colors"
        style={{
          borderRadius: "22px",
          background: "#0a0a0a",
        }}
      />

      <span
        className="relative z-10 text-sm font-light tracking-wide"
        style={{
          color: "#FFFFFFD0",
          fontSize: "18px",
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;