"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  align?: "left" | "center" | "right";
  clip?: boolean;
}

const alignmentClasses: Record<NonNullable<AnimatedTextProps["align"]>, string> = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 * i },
  }),
};

const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 18,
      stiffness: 220,
    },
  },
  hidden: {
    opacity: 0,
    y: 24,
    rotate: -3,
    transition: {
      type: "spring" as const,
      damping: 18,
      stiffness: 220,
    },
  },
};

export default function AnimatedText({
  text,
  className = "",
  once = false,
  align = "center",
  clip = false,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      className={`w-full mx-auto flex flex-wrap items-center gap-x-3 gap-y-1 ${alignmentClasses[align]} ${className}`.trim()}
      style={{ lineHeight: '1.3', paddingBottom: '0.15em' }}
      variants={container}
      initial="hidden"
      animate={!once ? "visible" : undefined}
      whileInView={once ? "visible" : undefined}
      viewport={once ? { once: true, margin: "-10%" } : undefined}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={clip ? "inline-block overflow-hidden pb-1" : "inline-block"}
        >
          <motion.span
            variants={child}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
