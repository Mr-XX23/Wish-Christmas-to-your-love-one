"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HangingOrnaments() {
  return (
    <div className="absolute top-0 left-0 w-full h-64 pointer-events-none z-0 flex justify-between px-4 md:px-20 overflow-hidden">
      {/* Left Ornaments */}
      <Ornament delay={0} height="h-32" color="bg-brand-gold" type="striped" className="left-[10%]" />
      <Ornament delay={0.5} height="h-48" color="bg-brand-red" type="solid" className="left-[25%]" />
      
      {/* Right Ornaments */}
      <Ornament delay={0.2} height="h-40" color="bg-brand-gold" type="solid" className="right-[25%]" />
      <Ornament delay={0.7} height="h-56" color="bg-brand-red" type="striped" className="right-[10%]" />
    </div>
  )
}

function Ornament({ delay, height, color, type, className }: { delay: number, height: string, color: string, type: 'solid' | 'striped', className?: string }) {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 1, type: "spring" }}
      className={cn("absolute flex flex-col items-center", className)}
    >
      {/* String */}
      <div className={cn("w-0.5 bg-brand-gold/50", height)} />
      
      {/* Ball */}
      <div className={cn(
        "w-12 h-12 rounded-full shadow-lg relative overflow-hidden flex items-center justify-center",
        color === 'bg-brand-gold' ? 'bg-amber-300' : 'bg-red-600'
      )}>
        {/* Shine/Reflection */}
        <div className="absolute top-1 left-2 w-3 h-3 bg-white/40 rounded-full blur-[1px]" />
        
        {/* Striped Pattern */}
        {type === 'striped' && (
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#fff_5px,#fff_10px)]" />
        )}
      </div>
    </motion.div>
  )
}
