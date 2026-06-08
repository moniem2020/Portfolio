"use client";

import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full z-[60] h-screen w-screen bg-ink"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-[55] h-screen w-screen bg-accent"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-[50] h-screen w-screen bg-ink-700"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
}
