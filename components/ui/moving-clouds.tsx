"use client"

import { motion } from "framer-motion";

export function MovingClouds() {
  const clouds = [
    { size: 120, top: '10%', duration: 45, delay: 0 },
    { size: 100, top: '25%', duration: 55, delay: 5 },
    { size: 140, top: '15%', duration: 50, delay: 10 },
    { size: 90, top: '35%', duration: 60, delay: 15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30 dark:opacity-20"
          style={{ 
            top: cloud.top,
            width: cloud.size,
            height: cloud.size * 0.6,
          }}
          initial={{ x: '-200px' }}
          animate={{ x: 'calc(100vw + 200px)' }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay
          }}
        >
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <ellipse cx="50" cy="60" rx="40" ry="30" fill="white" opacity="0.8" />
            <ellipse cx="90" cy="50" rx="50" ry="35" fill="white" opacity="0.9" />
            <ellipse cx="130" cy="60" rx="45" ry="32" fill="white" opacity="0.85" />
            <ellipse cx="160" cy="70" rx="35" ry="25" fill="white" opacity="0.8" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
