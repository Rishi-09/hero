"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});

interface Props {
  title: string;
  desc: string;
  type: string;
}

export default function FeatureCard({ title, desc, type }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const arcs = [
    {
      d: "M8.5 13.5C9.5 12.5 10.5 12 12 12C13.5 12 14.5 12.5 15.5 13.5",
      delay: 0,
    },
    {
      d: "M5.5 10.5C7.5 8.5 9.5 7.5 12 7.5C14.5 7.5 16.5 8.5 18.5 10.5",
      delay: 0.3,
    },
    { d: "M2.5 7.5C5.5 4.5 8.5 3 12 3C15.5 3 18.5 4.5 21.5 7.5", delay: 0.5 },
  ];
  return (
    <div
      className="relative rounded-[32px] p-8 h-[290px] w-full overflow-hidden border border-white/[0.06] bg-[linear-gradient(180deg,#0B0B0B_0%,#050505_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      // HOVER LOGIC MOVED TO MAIN CARD WRAPPER
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Highlight */}
      <div className="absolute inset-0 rounded-[32px] pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* Title */}
      <h3 className="font-['Space_Grotesk'] font-medium text-[22.46px] leading-[100%] tracking-[-0.01em] text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white text-base">{desc}</p>

      {/* Animation Area */}
      <div className="absolute bottom-5 left-6 right-6 h-40 pointer-events-none">
        {/* ================= PLANET ================= */}
        {type === "planet" && (
          <motion.div
            animate={isHovered ? "hover" : "rest"}
            className="relative w-[350px] h-full"
          >
            <div className="absolute bottom-0 -left-10 w-40 h-40">
              <Image src="/planet.png" alt="" fill className="object-contain" />

              <motion.div
                variants={{
                  rest: { rotate: 0 },
                  hover: {
                    rotate: 360,
                    transition: {
                      repeat: Infinity,
                      duration: 22,
                      ease: "linear",
                    },
                  },
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/dashed-lines.png"
                  alt=""
                  fill
                  className="object-contain opacity-80"
                />
              </motion.div>
            </div>

            <div className="absolute bottom-3.5 left-[80px]">
              {[
                { angle: -12, length: 280 },
                { angle: -4, length: 280 },
                { angle: 6, length: 280 },
                { angle: 12, length: 290 },
              ].map((line, i) => (
                <div
                  key={i}
                  className="relative h-[2px] mb-6 origin-left"
                  style={{
                    width: `${line.length}px`,
                    transform: `rotate(${line.angle}deg)`,
                  }}
                >
                  <div className="w-full h-[2px] border-t border-dashed border-white/40" />

                  <motion.div
                    variants={{
                      rest: { x: 0, opacity: 0 },
                      hover: {
                        x: line.length,
                        opacity: [0, 1, 1, 0],
                        transition: {
                          repeat: Infinity,
                          duration: line.length / 70,
                          ease: "linear",
                          delay: i * 0.6,
                        },
                      },
                    }}
                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${
                      i % 2 === 0
                        ? "bg-lime-400 shadow-[0_0_14px_rgba(124,255,0,0.9)]"
                        : "bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ================= PERFORMANCE ================= */}
        {type === "performance" && (
          <div className="relative w-full h-full">
            {/* Line length and position restored to your original right-[80px] */}
            <div className="absolute bottom-9 left-0 right-[80px] flex flex-col justify-between h-[120px] z-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-[1px] w-full bg-gradient-to-r from-[#B6FF00]/10 via-[#B6FF00]/40 to-transparent"
                >
                  <motion.div
                    /* - initial: positioned at -4px to be "half-hidden" on the left 
               - animate: travels to 140% to reach the planet even though the line is shorter
            */
                    initial={{ left: "-4px", opacity: 0.5 }}
                    animate={
                      isHovered
                        ? {
                            left: ["-4px", "140%"],
                            opacity: [0.5, 1, 1, 0],
                          }
                        : { left: "-4px", opacity: 0.5 }
                    }
                    transition={{
                      repeat: isHovered ? Infinity : 0,
                      duration: 2.5 + i * 0.5,
                      ease: "circIn",
                      delay: i * 0.4,
                      times: [0, 0.1, 0.85, 1], // Stays visible until 85% of the way to the planet
                    }}
                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full blur-[0.5px] ${i === 0 ? "bg-yellow-400 shadow-[0_0_12px_#fbbf24]" : i === 1 || i === 3 ? "bg-teal-400 shadow-[0_0_12px_#2dd4bf]" : "bg-white shadow-[0_0_12px_#ffffff]"}`}
                  />
                </div>
              ))}
            </div>
            <div className="absolute top-18 -translate-y-1/2 right-[-130px] w-[220px] h-[220px] rounded-full border border-[#7CFF00]/30 bg-gradient-to-l from-[#7CFF00]/10 to-transparent shadow-[0_0_80px_rgba(124,255,0,0.15)]" />
          </div>
        )}
        {/* ================= DEVICES ================= */}
        {type === "devices" && (
          <div className="relative w-full h-[220px] flex items-center justify-center overflow-hidden">
            <div className="relative w-[320px] h-[160px] z-10 mb-20 ">
              <Image
                src="/devices.png"
                alt="Devices"
                fill
                className="object-contain"
              />
            </div>

            <motion.div
              animate={
                isHovered
                  ? {
                      x: ["-195px", "195px", "195px", "-195px"],
                      zIndex: [20, 20, 0, 0],
                      scale: [1, 1, 1, 1],
                      filter: [
                        "blur(0px)",
                        "blur(0px)",
                        "blur(2px)",
                        "blur(0px)",
                      ],
                    }
                  : { x: "-195px", zIndex: 20, scale: 1 }
              }
              transition={
                isHovered
                  ? {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.45, 0.55, 1],
                    }
                  : { duration: 0.5 }
              }
              className="absolute w-24 h-24 drop-shadow-[0_0_30px_rgba(124,255,0,0.6)] mb-20"
            >
              <Image
                src="/shield.png"
                alt="Shield"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        )}

        {/* ================= SPLIT ================= */}
        {type === "split" && (
          <div className="relative w-72 h-72 mx-auto mb-20 flex items-center justify-center">
            <motion.div
              animate={
                isHovered
                  ? { scale: 1.4, opacity: 0.15 }
                  : { scale: 1, opacity: 0.2 }
              }
              className="absolute w-48 h-48 rounded-full bg-[#B6FF00] blur-3xl pointer-events-none"
            />

            <motion.div
              animate={
                isHovered
                  ? {
                      filter:
                        "brightness(1.3) drop-shadow(0 0 25px rgba(182, 255, 0, 0.6))",
                      scale: 1.05,
                    }
                  : {
                      filter:
                        "brightness(1) drop-shadow(0_0_0px_rgba(182,255,0,0))",
                      scale: 1,
                    }
              }
              transition={{ duration: 0.4 }}
              className="relative w-44 h-44 z-10 mb-30"
            >
              <Image
                src="/shield.png"
                alt="Shield"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              animate={
                isHovered
                  ? {
                      x: [-40, -40, -40],
                      y: [-50, -30, -50],
                      scale: [1, 1, 1],
                      opacity: [1, 1, 1],
                    }
                  : { x: -40, y: -50, opacity: 1 }
              }
              transition={{
                repeat: isHovered ? Infinity : 0,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute left-22 top-4 w-20 h-20 z-20 pointer-events-none mb-20"
            >
              <Image
                src="/leftarrow.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              animate={
                isHovered
                  ? {
                      x: [40, 40, 40],
                      y: [-50, -30, -50],
                      scale: [1, 1, 1],
                      opacity: [1, 0.5, 1],
                    }
                  : { x: 40, y: -50, opacity: 1 }
              }
              transition={{
                repeat: isHovered ? Infinity : 0,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute right-22 top-4 w-20 h-20 z-20 pointer-events-none mb-40"
            >
              <Image
                src="/rightarrow.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        )}

        {/* ================= WIFI ================= */}
        {type === "wifi" && (
          <div className="relative w-full h-[180px] flex items-center justify-center">
            {/* LOCK */}
            <motion.div
              animate={
                isHovered
                  ? {
                      y: [0, 0, 0],
                      filter: "drop-shadow(0 0 25px rgba(182,255,0,0.8))",
                    }
                  : { y: 0 }
              }
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="relative w-24 h-24 flex items-center justify-center -bottom-2"
            >
              {/* WIFI ARCS */}
              <div className="absolute -top-18 left-1/2 -translate-x-1/2 w-40 h-28">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full overflow-visible"
                >
                  {arcs.map((arc, i) => (
                    <g key={i}>
                      {/* Background Arc */}
                      <path
                        d={arc.d}
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="opacity-20"
                      />

                      {/* Animated Glow */}
                      <motion.path
                        d={arc.d}
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ opacity: 0 }}
                        animate={
                          isHovered
                            ? {
                                opacity: [0, 1, 0],
                                filter: [
                                  "blur(0px) brightness(1)",
                                  "blur(0.5px) brightness(1.5) drop-shadow(0 0 2px rgba(255,255,255,0.3))",
                                  "blur(0px) brightness(1)",
                                ],
                              }
                            : { opacity: 0 }
                        }
                        transition={{
                          duration: 2.5,
                          repeat: isHovered ? Infinity : 0,
                          delay: arc.delay,
                          ease: "easeInOut",
                        }}
                      />
                    </g>
                  ))}
                </svg>
              </div>

              <Image
                src="/lock.png"
                alt="Lock"
                fill
                className="object-contain  "
              />
            </motion.div>
          </div>
        )}
        {/* ================= KILL SWITCH ================= */}
        {type === "kill" && (
          <div className="relative w-full h-40 mx-auto flex items-center justify-center">
            <motion.div
              initial={{ x: 0 }}
              animate={isHovered ? { x: -70 } : { x: 0 }}
              transition={{ duration: 2, ease: [1, 1, 0.36, 1] }}
              className="absolute left-[calc(50%-150px)] w-[150px] h-[3px] bg-[#B6FF00] rounded-full shadow-[0_0_15px_rgba(182,255,0,0.8)] z-20"
            />

            <motion.div
              initial={{ x: 0 }}
              animate={isHovered ? { x: 70 } : { x: 0 }}
              transition={{ duration: 2, ease: [1, 1, 0.36, 1] }}
              className="absolute right-[calc(50%-150px)] w-[150px] h-[3px] bg-[#B6FF00] rounded-full shadow-[0_0_15px_rgba(182,255,0,0.8)] z-20"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isHovered
                  ? {
                      opacity: 1,
                      scale: 1,
                      filter: "drop-shadow(0 0 25px rgba(182,255,0,0.7))",
                    }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.45,
                delay: isHovered ? 0.8 : 0,
                ease: "easeOut",
              }}
              className="relative z-10 w-20 h-20"
            >
              <Image
                src="/Vector.svg"
                alt="logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
