"use client";

import { motion } from "framer-motion";

const bars = ["#2563eb", "#8b5cf6", "#f43f5e", "#f59e0b", "#65a30d"];

export default function TransitionEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[70] flex">
      {bars.map((color, i) => (
        <motion.div
          key={color}
          className="h-full flex-1"
          style={{ backgroundColor: color, transformOrigin: "top" }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15 + i * 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </div>
  );
}
