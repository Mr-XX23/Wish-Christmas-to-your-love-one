"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardData } from "@/lib/db"
import Link from "next/link"
import { Fireworks } from "@/components/ui/fireworks"

interface CardViewerProps {
  card: CardData
}

export function CardViewer({ card }: CardViewerProps) {
  // Auto-play music on mount
  useEffect(() => {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play().catch(err => console.log('Auto-play prevented:', err));
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#Fdfbf2] text-[#2c1810] overflow-hidden flex flex-col items-center justify-center font-serif">

      {/* Background Fireworks - Trail matches background color */}
      <Fireworks className="opacity-60 z-0" trailColor="rgba(253, 251, 242, 0.2)" />

      {/* === Decorative Pine Branches === */}
      {/* Top Left */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="/assets/pine-branch.png"
        alt="Pine Branch"
        className="absolute top-0 left-0 w-[40vw] max-w-[400px] pointer-events-none select-none z-10"
      />
      {/* Top Right (Flipped) */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="/assets/pine-branch.png"
        alt="Pine Branch"
        className="absolute top-0 right-0 w-[40vw] max-w-[400px] transform scale-x-[-1] pointer-events-none select-none z-10"
      />

      {/* === Hanging Ornaments (Linked Pendulums) === */}
      {/* Left Group 1 */}
      <div className="absolute top-[20%] left-[10%] z-10 hidden md:block">
        <motion.div
          style={{ originY: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          {/* String */}
          <div className="w-0.5 h-32 bg-gray-400/50" />
          {/* Ornament */}
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/assets/ornament-purple.png"
            className="w-24 h-24 -mt-3"
          />
        </motion.div>
      </div>

      {/* Left Group 2 */}
      <div className="absolute top-[25%] left-[20%] z-10 hidden md:block">
        <motion.div
          style={{ originY: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-0.5 h-48 bg-gray-400/50" />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            src="/assets/ornament-green.png"
            className="w-20 h-20 -mt-3"
          />
        </motion.div>
      </div>

      {/* Right Group 1 */}
      <div className="absolute top-[20%] right-[10%] z-10 hidden md:block">
        <motion.div
          style={{ originY: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-0.5 h-40 bg-gray-400/50" />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src="/assets/ornament-purple.png"
            className="w-24 h-24 -mt-3"
          />
        </motion.div>
      </div>

      {/* Right Group 2 */}
      <div className="absolute top-[18%] right-[22%] z-10 hidden md:block">
        <motion.div
          style={{ originY: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-0.5 h-24 bg-gray-400/50" />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/assets/ornament-green.png"
            className="w-16 h-16 -mt-3"
          />
        </motion.div>
      </div>


      {/* === Main Content === */}
      <main className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 mt-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-black text-[#800080] tracking-tighter mb-2 font-sans"
        >
          HAPPY
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-9xl text-[#1a472a] font-[var(--font-playfair)] italic mb-4"
          style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
        >
          New Year
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-6xl md:text-9xl font-black text-[#800080] tracking-tighter mb-12"
        >
          2026
        </motion.div>

        {/* Custom Message Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="max-w-xl text-center text-[#5c5c5c] font-sans"
        >
          <p className="mb-6 text-xl md:text-2xl leading-relaxed italic">
            "{card.message}"
          </p>
          <p className="font-bold text-[#1a472a] uppercase tracking-wider text-sm md:text-base">
            — {card.from}
          </p>
        </motion.div>

        <div className="mt-16">
          <Link href="/">
            <Button variant="ghost" className="text-[#1a472a]/60 hover:bg-[#1a472a] hover:text-white uppercase text-xs tracking-widest transition-colors duration-300">
              Create Your Own Card
            </Button>
          </Link>
        </div>

      </main>

      {/* Mobile decorative ornaments (simplified pendulum) */}
      <div className="md:hidden absolute top-32 left-4 z-10">
        <motion.div
          style={{ originY: 0 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-0.5 h-16 bg-gray-400/50" />
          <img src="/assets/ornament-purple.png" className="w-16 -mt-3" />
        </motion.div>
      </div>

      <div className="md:hidden absolute top-40 right-4 z-10">
        <motion.div
          style={{ originY: 0 }}
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-0.5 h-20 bg-gray-400/50" />
          <img src="/assets/ornament-green.png" className="w-16 -mt-3" />
        </motion.div>
      </div>

    </div>
  )
}
