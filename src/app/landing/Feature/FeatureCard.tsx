"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  type: string;
}

export default function FeatureCard({ title, desc, type }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="
  relative
  rounded-[32px]
  p-8
  h-[320px]
  overflow-hidden
  group
  border border-white/5
  bg-[linear-gradient(180deg,#0e1117_0%,#0a0d12_100%)]
  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
"
    >
      {/* Top Soft Highlight */}
      <div
        className="absolute inset-0 rounded-[32px] pointer-events-none
    bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"
      />

      {/* Bottom Green Glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-28
    bg-[radial-gradient(circle_at_50%_100%,rgba(124,255,0,0.25),transparent_70%)]
    blur-2xl"
      />

      {/* Content */}
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-base">{desc}</p>
      {/* Animation Area */}
      <div className="absolute bottom-6 left-6 right-6 h-40">
        {/* ================= PLANET ================= */}
        {type === "planet" && (
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative w-full h-full"
          >
            {/* Planet */}
            <div className="absolute bottom-0 left-0 w-40 h-40">
              <Image src="/planet.png" alt="" fill className="object-contain" />

              {/* Orbit rotation */}
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

            {/* ===== Angled Dashed Lines ===== */}
            <div className="absolute bottom-5 left-[115px]">
              {[
                { angle: -14, length: 260 },
                { angle: -4, length: 240 },
                { angle: 6, length: 220 },
                { angle: 16, length: 200 },
              ].map((line, i) => (
                <div
                  key={i}
                  className="relative h-[2px] mb-6 origin-left"
                  style={{
                    width: `${line.length}px`,
                    transform: `rotate(${line.angle}deg)`,
                  }}
                >
                  {/* dashed line */}
                  <div className="w-full h-[2px] border-t border-dashed border-white/40" />

                  {/* moving small node */}
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
                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full
  ${
    i % 2 === 0
      ? "bg-lime-400 shadow-[0_0_14px_rgba(124,255,0,0.9)]"
      : "bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
  }`}
                  />
                </div>
              ))}
            </div>

            {/* ===== Clean End Nodes (No Over Glow) ===== */}

            <div className="absolute right-8 top-[43%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
          </motion.div>
        )}

        {/* ================= PERFORMANCE ================= */}
        {type === "performance" && (
          <div
            className="relative w-full h-full overflow"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Thin Performance Lines */}
            {/* Adjusted right margin to ensure lines look like they connect to the planet */}
            <div className="absolute bottom-16 left-0 right-[80px] flex flex-col justify-between h-[120px] z-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-[1px] w-full bg-gradient-to-r from-[#B6FF00]/10 via-[#B6FF00]/40 to-transparent"
                >
                  {/* Moving Dot (Ball) */}
                  <motion.div
                    initial={{ left: "0%", opacity: 0 }}
                    animate={
                      isHovered
                        ? {
                            left: ["0%", "100%"],
                            opacity: [0, 1, 1, 0],
                          }
                        : { left: "0%", opacity: 0 }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 2.5 + i * 0.5, // Faster speeds like the video
                      ease: "circIn", // Creates that "accelerating" feel toward the planet
                      delay: i * 0.4,
                    }}
                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full blur-[0.5px]
              ${
                i === 0
                  ? "bg-yellow-400 shadow-[0_0_12px_#fbbf24]"
                  : i === 1 || i === 3
                    ? "bg-teal-400 shadow-[0_0_12px_#2dd4bf]"
                    : "bg-white shadow-[0_0_12px_#ffffff]"
              }`}
                  />
                </div>
              ))}
            </div>

            {/* Right Half Planet */}
            <div
              className="absolute top-10 -translate-y-1/2 right-[-130px] w-[220px] h-[220px] rounded-full
      border border-[#7CFF00]/30
      bg-gradient-to-l from-[#7CFF00]/10 to-transparent
      shadow-[0_0_80px_rgba(124,255,0,0.15)]"
            />
          </div>
        )}
        {/* ================= DEVICES ================= */}
        {type === "devices" && (
          <div
            className="relative w-full h-[220px] flex items-center justify-center overflow-hidden cursor-pointer "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* DEVICES - Iska Z-Index fix 10 rahega */}
            <div className="relative w-[320px] h-[160px] z-10 pointer-events-none mb-20 -ml-2">
              <Image
                src="/devices.png"
                alt="Devices"
                fill
                className="object-contain"
              />
            </div>

            {/* SHIELD - Layer badlegi move hote waqt */}
            <motion.div
              initial={{ x: "-220px", zIndex: 20, opacity: 1 }}
              animate={
                isHovered
                  ? {
                      x: ["-220px", "220px", "220px", "-220px"], // Path: Left to Right, then Right to Left
                      zIndex: [20, 20, 0, 0], // Aage se jayega (20), pichhe se aayega (0)
                      scale: [1, 1.1, 0.85, 1], // Peechhe jaate waqt thoda chota (depth effect)
                      filter: [
                        "blur(0px)",
                        "blur(0px)",
                        "blur(2px)",
                        "blur(0px)",
                      ], // Peechhe jaate waqt halka blur
                    }
                  : {
                      x: "-220px",
                      zIndex: 20,
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    }
              }
              transition={
                isHovered
                  ? {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.45, 0.55, 1], // Timing to switch layers at the edges
                    }
                  : {
                      duration: 0.5,
                    }
              }
              className="absolute w-24 h-24 drop-shadow-[0_0_30px_rgba(124,255,0,0.6)] mb-20 "
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
          <div
            className="relative w-72 h-72 mx-auto mb-20 flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow Background */}
            <motion.div
              animate={
                isHovered
                  ? { scale: 1.4, opacity: 0.5 }
                  : { scale: 1, opacity: 0.2 }
              }
              className="absolute w-48 h-48 rounded-full bg-[#B6FF00] blur-3xl pointer-events-none"
            />

            {/* Shield */}
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
                        "brightness(1) drop-shadow(0 0 0px rgba(182, 255, 0, 0))",
                      scale: 1,
                    }
              }
              transition={{ duration: 0.4 }}
              className="relative w-44 h-44 z-10 mb-30" // Aapki original position
            >
              <Image
                src="/shield.png"
                alt="Shield"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Left Arrow */}
            <motion.div
              initial={{ x: -40, y: -30, opacity: 1 }}
              animate={
                isHovered
                  ? {
                      x: [-40, -10, -40],
                      y: [-30, -5, -30],
                      scale: [1, 0.7, 1],
                      opacity: [1, 0.5, 1],
                    }
                  : {
                      x: -40,
                      y: -30,
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={{
                repeat: isHovered ? Infinity : 0, // FIXED: Sirf hover pe chalega
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute left-14 top-4 w-20 h-20 z-20 pointer-events-none mb-20" // Aapki original position
            >
              <Image
                src="/leftarrow.png"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Right Arrow */}
            <motion.div
              initial={{ x: 40, y: -30, opacity: 1 }}
              animate={
                isHovered
                  ? {
                      x: [40, 10, 40],
                      y: [-30, -5, -30],
                      scale: [1, 0.7, 1],
                      opacity: [1, 0.5, 1],
                    }
                  : {
                      x: 40,
                      y: -30,
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={{
                repeat: isHovered ? Infinity : 0, // FIXED: Sirf hover pe chalega
                duration: 2,
                ease: "easeInOut",
                delay: isHovered ? 0.2 : 0,
              }}
              className="absolute right-14 top-4 w-20 h-20 z-20 pointer-events-none mb-40" // Aapki original position
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
          <div
            className="relative w-64 h-64 mx-auto mb-20 flex flex-col items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* WiFi Container */}
            <div className="relative w-40 h-32 flex items-center justify-center">
              {/* 1️⃣ Base Static WiFi (Always Dim) */}
              <div className="absolute inset-0 opacity-20 brightness-50">
                <Image src="/wifi.png" alt="" fill className="object-contain" />
              </div>

              {/* 2️⃣ Sequential Arc Glow (Wave Effect) */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={
                    isHovered ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }
                  }
                  transition={{
                    repeat: isHovered ? Infinity : 0,
                    duration: 1.6,
                    times: [0, 0.25, 0.75, 1],
                    delay: isHovered ? i * 0.35 : 0,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <div
                    style={{
                      clipPath:
                        i === 0
                          ? "inset(75% 0% 0% 0%)"
                          : i === 1
                            ? "inset(40% 0% 25% 0%)"
                            : "inset(0% 0% 60% 0%)",
                    }}
                    className="relative w-full h-full brightness-200 drop-shadow-[0_0_20px_#ffffff]"
                  >
                    <Image
                      src="/wifi.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}

              {/* 3️⃣ Expanding Ripple Rings (Like Demo Animation) */}
              {isHovered &&
                [1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 0.25, 0], scale: [0.5, 2] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: ring * 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute w-32 h-32 border border-white/30 rounded-full pointer-events-none"
                  />
                ))}
            </div>

            {/* 4️⃣ Lock Animation (Subtle Float + Glow) */}
            <motion.div
              animate={
                isHovered
                  ? {
                      y: [0, -6, 0],
                      filter: "drop-shadow(0 0 15px rgba(255,255,255,0.4))",
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-14 h-14 mb-[90px] z-20"
            >
              <Image
                src="/lock.png"
                alt="Lock"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* 5️⃣ Ambient Breathing Glow */}
            <motion.div
              animate={
                isHovered
                  ? {
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.1, 1],
                    }
                  : { opacity: 0 }
              }
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-lime-500/20 blur-[80px] -z-10 rounded-full"
            />
          </div>
        )}
        {/* ================= KILL SWITCH (Precise Gate Animation) ================= */}
        {type === "kill" && (
          <div
            className="relative w-full h-40 mx-auto flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* LEFT HALF LINE */}
            <motion.div
              initial={{ x: -2 }} // Static: Center ke pas (slit gap)
              // Shield 80px ka hai, toh line 45-50px piche jayegi toh perfect lagega
              animate={isHovered ? { x: -45 } : { x: -2 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-[calc(50%-150px)] w-[148px] h-[3px] bg-[#B6FF00] rounded-full shadow-[0_0_15px_rgba(182,255,0,0.8)] z-20"
            />

            {/* RIGHT HALF LINE */}
            <motion.div
              initial={{ x: 2 }} // Static: Center ke pas
              animate={isHovered ? { x: 45 } : { x: 2 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-[calc(50%-150px)] w-[148px] h-[3px] bg-[#B6FF00] rounded-full shadow-[0_0_15px_rgba(182,255,0,0.8)] z-20"
            />

            {/* CENTER LOGO (SHIELD) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={
                isHovered
                  ? {
                      opacity: 1,
                      // Logo Animation: Small -> Large (Pop) -> Normal
                      scale: [0.3, 1.2, 1],
                      filter:
                        "brightness(1.2) drop-shadow(0 0 25px rgba(182, 255, 0, 0.7))",
                    }
                  : {
                      opacity: 0,
                      scale: 0.3,
                    }
              }
              transition={{
                duration: 0.6,
                times: [0, 0.7, 1],
                delay: 0.1,
              }}
              className="relative z-10 w-20 h-20"
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
      </div>
    </div>
  );
}
