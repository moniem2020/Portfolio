"use client";

import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[70]">
      {/* orange under-layer */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "#f97316", transformOrigin: "top" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* cobalt front layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "#2563eb", transformOrigin: "top" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.span
          className="font-display text-2xl font-semibold tracking-tight text-white"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeIn" }}
        >
          MG
        </motion.span>
      </motion.div>
    </div>
  );
}
