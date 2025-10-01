"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ArticleRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ArticleReveal({ children, className = "" }: ArticleRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
