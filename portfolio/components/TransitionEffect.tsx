"use client";

import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full z-30 h-screen w-screen bg-slate-900"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-20 h-screen w-screen bg-indigo-700"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.12, duration: 0.65, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-10 h-screen w-screen bg-indigo-400"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.24, duration: 0.65, ease: "easeInOut" }}
      />
    </>
  );
}
