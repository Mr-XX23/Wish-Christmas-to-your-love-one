"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { Sparkles, Gift, Heart } from "lucide-react"
import { CardData } from "@/lib/db"
import { themes } from "@/lib/themes"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChristmasLights, ChristmasTree } from "@/components/ui/decorations"
import { MovingClouds } from "@/components/ui/moving-clouds"
import { Fireworks } from "@/components/ui/fireworks"

interface CardViewerProps {
  card: CardData
}

export function CardViewer({ card }: CardViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = themes.find(t => t.id === card.theme) || themes[0]
  const isNewYear = card.theme.startsWith("newyear_")

  // Auto-play music on mount
  useEffect(() => {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play().catch(err => console.log('Auto-play prevented:', err));
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true)
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
    }, 250)
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background with theme */}
      {/* Background with theme */}
      <div className={cn("absolute inset-0 transition-colors duration-1000", isOpen ? theme.background : "bg-zinc-900")}>
        {isOpen && (
          isNewYear ? (
            <>
              <Fireworks className="opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none" />
            </>
          ) : (
            <>
              <MovingClouds />
              <ChristmasLights />
              {/* Snowfall */}
              <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_30%,_white_2px,_transparent_2px),radial-gradient(circle_at_60%_70%,_white_2px,_transparent_2px),radial-gradient(circle_at_80%_10%,_white_1.5px,_transparent_1.5px),radial-gradient(circle_at_40%_50%,_white_1px,_transparent_1px)] bg-[length:80px_80px] animate-[snow_20s_linear_infinite]" />
            </>
          )
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="gift"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="z-10 cursor-pointer group"
            onClick={handleOpen}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Gift className="h-32 w-32 text-red-500 drop-shadow-2xl group-hover:text-red-400 transition-colors" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </motion.div>
            </motion.div>
            <div className="mt-6 text-center space-y-2">
              <h2 className="text-3xl font-serif text-white drop-shadow-lg">For {card.to || "You"}!</h2>
              <p className="text-white/80 text-lg">Tap to open your gift 🎁</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="card-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
            className="z-10 w-full max-w-2xl relative"
          >
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-white/30 rounded-tl-2xl" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-white/30 rounded-tr-2xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-white/30 rounded-bl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-white/30 rounded-br-2xl" />

            {/* Card content */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
              {/* Theme accent bar */}
              <div className={cn("h-2 w-full mb-8 rounded-full", theme.accent)} />

              <div className="text-center space-y-6">
                {/* Animated hearts */}
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    >
                      <Heart className={cn("h-6 w-6 fill-current", theme.foreground)} />
                    </motion.div>
                  ))}
                </div>

                <h1 className={cn("text-4xl md:text-5xl font-serif leading-tight", theme.foreground)}>
                  {isNewYear ? "Happy New Year 2026," : "Merry Christmas,"} {card.to || "Friend"}!
                </h1>

                <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />

                <p className={cn("text-lg md:text-xl leading-relaxed whitespace-pre-wrap max-w-xl mx-auto", theme.foreground)}>
                  {card.message}
                </p>

                <div className={cn("text-lg font-medium pt-4 italic", theme.foreground)}>
                  — {card.from || "A Friend"}
                </div>

                <div className="pt-8">
                  <Link href="/">
                    <Button size="lg" className="bg-white/90 text-slate-900 hover:bg-white shadow-xl hover:shadow-2xl transition-all">
                      <Sparkles className="mr-2 h-5 w-5 text-yellow-500" />
                      Create Your Own Card
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium z-20">
        <span className="text-slate-800 dark:text-white/80">Made with ❤️ by{" "}</span>
        <a
          href="https://github.com/Mr-XX23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 dark:text-amber-400 dark:hover:text-amber-300 font-semibold underline"
        >
          Rohan Balami
        </a>
        <span className="text-slate-800 dark:text-white/80">{" "}• Say thank you! {isNewYear ? "🎉" : "🎄"}</span>

        {/* Footer Decorations for Christmas */}
        {isOpen && !isNewYear && (
          <>
            <div className="absolute bottom-4 left-4 opacity-50 transform -scale-x-100 pointer-events-none hidden md:block">
              <ChristmasTree className="w-24 h-32" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-50 pointer-events-none hidden md:block">
              <ChristmasTree className="w-24 h-32" />
            </div>
          </>
        )}
      </footer>
    </div>
  )
}
