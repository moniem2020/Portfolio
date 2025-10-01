"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement, type ElementType, type ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
  trigger?: "view" | "load";
}

export default function Reveal({
  as: Component = "div",
  children,
  className,
  delay = 0,
  duration = 0.5,
  offset = 24,
  once = true,
  trigger = "view",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return createElement(Component, { className }, children);
  }

  const sharedProps = {
    as: Component,
    className,
    initial: { opacity: 0, y: offset },
    transition: { delay, duration, ease: "easeOut" },
  } as const;

  if (trigger === "load") {
    return (
      <motion.div {...sharedProps} animate={{ opacity: 1, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...sharedProps}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}
