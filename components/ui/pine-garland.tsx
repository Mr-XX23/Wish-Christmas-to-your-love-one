"use client"

import { motion } from "framer-motion";

// Fixed seed values for consistent rendering
const needlePositions = Array.from({ length: 40 }, (_, i) => ({
  cx: i * 30,
  cy: Math.round((60 + Math.sin(i) * 15) * 100) / 100, // Round to 2 decimal places
  r: 5 + (i % 5),
  opacity: 0.6 + (i % 4) * 0.1,
  duration: 2 + (i % 3),
  delay: (i % 5) * 0.4
}));

export function PineGarland({ position = "top" }: { position?: "top" | "bottom" }) {
  const isTop = position === "top";
  
  return (
    <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 w-full pointer-events-none z-20 overflow-hidden`}>
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Pine Garland SVG */}
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          {/* Garland curve */}
          <path
            d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60"
            fill="none"
            stroke="#1e5a3a"
            strokeWidth="40"
            opacity="0.9"
          />
          <path
            d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60"
            fill="none"
            stroke="#2d7a4f"
            strokeWidth="35"
            opacity="0.8"
          />
          
          {/* Pine needles effect - using fixed positions */}
          {needlePositions.map((pos, i) => (
            <motion.circle
              key={i}
              cx={pos.cx}
              cy={pos.cy}
              r={pos.r}
              fill="#1e5a3a"
              opacity={pos.opacity}
              animate={{
                opacity: [pos.opacity, pos.opacity + 0.3, pos.opacity],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay
              }}
            />
          ))}
        </svg>
        
        {/* Hanging ornaments */}
        {[200, 500, 800, 1000].map((x, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${(x / 1200) * 100}%`, top: '50%' }}
            animate={{
              rotate: [-5, 5, -5],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-amber-600" />
              <div className={`w-8 h-8 rounded-full shadow-lg ${
                i % 2 === 0 ? 'bg-red-600' : 'bg-amber-400'
              } border-2 border-white/30`}>
                <div className="absolute top-1 left-2 w-2 h-2 bg-white/50 rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Gold beads */}
        <svg viewBox="0 0 1200 120" className="absolute w-full h-full" preserveAspectRatio="none">
          {[...Array(60)].map((_, i) => (
            <circle
              key={i}
              cx={i * 20}
              cy={Math.round((60 + Math.sin(i * 0.5) * 20) * 100) / 100}
              r="3"
              fill="#fbbf24"
              opacity="0.8"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
