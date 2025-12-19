"use client"

import { motion } from "framer-motion";

export function SantaSleigh() {
  return (
    <motion.div
      className="fixed top-20 pointer-events-none z-50"
      initial={{ x: "-200px", y: 0 }}
      animate={{ 
        x: ["calc(100vw + 200px)", "-200px"],
        y: [0, -20, 0, -15, 0]
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <div className="text-6xl drop-shadow-lg">
        🎅🦌🦌🦌
      </div>
    </motion.div>
  );
}
