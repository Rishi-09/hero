"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  type: string;
}

export default function FeatureCard({ title, desc, type }: Props) {
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
          <>
            {/* Thin Performance Lines */}
            <div className="absolute bottom-16 left-0 right-[77px] flex flex-col justify-between h-[100px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-[1px] bg-gradient-to-r from-transparent via-[#B6FF00]/50 to-transparent"
                >
                  {/* Moving Dot */}
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                      x: ["0%", "100%"],
                      opacity: [0, 1, 1, 0],
                      scale: [0.9, 1, 1, 0.9],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6 + i * 0.8,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full
    ${
      i === 0
        ? "bg-yellow-400 shadow-[0_0_16px_rgba(255,255,0,0.9)]"
        : i === 1
          ? "bg-teal-400 shadow-[0_0_16px_rgba(0,255,200,0.9)]"
          : i === 2
            ? "bg-white shadow-[0_0_14px_rgba(255,255,255,1)]"
            : i === 3
              ? "bg-teal-400 shadow-[0_0_16px_rgba(0,255,200,0.9)]"
              : "bg-white shadow-[0_0_14px_rgba(255,255,255,1)]"
    }`}
                  />
                </div>
              ))}
            </div>

            {/* Right Half Planet */}
            <div
              className="absolute top-1/3 -translate-y-1/2 right-[-120px] w-[200px] h-[200px] rounded-full
        border border-[#7CFF00]/25
        shadow-[0_0_100px_rgba(124,255,0,0.18)]"
            />
          </>
        )}

        {/* ================= DEVICES ================= */}
        {type === "devices" && (
          <div className="relative w-[520px] h-[220px] flex items-center justify-center overflow-hidden">
            {/* Devices - STATIC */}
            <div className="relative w-[320px] h-[160px] mt-0 mx-auto z-5">
              <Image src="/devices.png" alt="" fill />
            </div>

            {/* Shield - OUTSIDE LEFT / RIGHT */}
            <motion.div
              animate={{
                x: ["-260px", "300px"],
                opacity: [0, 1, 1, 0],
                scale: [0.95, 1, 1, 0.95],
              }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "linear",
              }}
              className="absolute w-20 h-20 drop-shadow-[0_0_35px_rgba(124,255,0,0.95)]"
            >
              <Image src="/shield.png" alt="" fill />
            </motion.div>
          </div>
        )}

        {/* ================= SPLIT ================= */}
        {type === "split" && (
          <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
            {/* Glow Background */}
            <div
              className="absolute w-48 h-48 rounded-full 
      bg-lime-500/20 blur-3xl animate-pulse"
            />

            {/* Shield */}
            <motion.div
              whileHover={""}
              animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative w-40 h-40 z-10"
            >
              <Image src="/shield.png" alt="" fill />
            </motion.div>

            {/* Left Arrow (Curved Drop Motion) */}
            <motion.div
              animate={{
                x: [-30, -10, -30],
                y: [-20, 0, -20],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute left-6 top-6 w-16 h-16 drop-shadow-[0_0_15px_rgba(200,255,0,0.8)]"
            >
              <Image src="/leftarrow.png" alt="" fill />
            </motion.div>

            {/* Right Arrow (Curved Drop Motion) */}
            <motion.div
              animate={{
                x: [20, 20, 30],
                y: [-20, 0, -20],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute right-6 top-6 w-16 h-16 drop-shadow-[0_0_15px_rgba(0,255,200,0.8)]"
            >
              <Image src="/rightarrow.png" alt="" fill />
            </motion.div>
          </div>
        )}

        {/* ================= WIFI ================= */}
        {type === "wifi" && (
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            {/* Bottom Green Glow */}
            <div
              className="absolute bottom-2 w-40 h-24 
      bg-lime-500/30 blur-2xl rounded-full"
            />

            {/* Base WiFi (Dim) */}
            <div className="absolute top-4 w-40 h-28 opacity-30">
              <Image src="/wifi.png" alt="" fill />
            </div>

            {/* Medium Glow Layer */}
            <motion.div
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute top-4 w-40 h-28"
            >
              <Image src="/wifi.png" alt="" fill />
            </motion.div>

            {/* Strong Glow Pulse Layer */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-4 w-40 h-28 
        drop-shadow-[0_0_20px_white]"
            >
              <Image src="/wifi.png" alt="" fill />
            </motion.div>

            {/* Lock */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-4 w-16 h-16 
        drop-shadow-[0_0_25px_rgba(124,255,0,0.9)]"
            >
              <Image src="/lock.png" alt="" fill />
            </motion.div>
          </div>
        )}

        {/* ================= KILL SWITCH ================= */}
        {type === "kill" && (
          <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
            {/* LEFT LINE */}
            <motion.div
              animate={{
                width: ["100%", "45%", "45%"],
              }}
              transition={{
                duration: 4,
                times: [0, 0.5, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 h-[4px] bg-lime-400 rounded-full
                 shadow-[0_0_20px_rgba(163,255,0,0.9)]"
            />

            {/* RIGHT LINE */}
            <motion.div
              animate={{
                width: ["0%", "45%", "45%"],
              }}
              transition={{
                duration: 4,
                times: [0, 0.5, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 h-[4px] bg-lime-400 rounded-full
                 shadow-[0_0_20px_rgba(163,255,0,0.9)]"
            />

            {/* CENTER SHIELD */}
            <motion.div
              animate={{ opacity: [0, 0, 1, 1] }}
              transition={{
                duration: 4,
                times: [0, 0.4, 0.6, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-12 h-12
                 drop-shadow-[0_0_25px_rgba(124,255,0,0.9)]"
            >
              <Image src="/shield.png" alt="" fill />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
