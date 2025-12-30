"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Sparkles, Snowflake, Gift, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

export function InteractiveCard() {
    const ref = useRef<HTMLDivElement>(null)
    const [theme, setTheme] = useState<'christmas' | 'newyear'>('christmas')
    const [particles, setParticles] = useState<{ id: number, top: number, left: number, delay: number, duration: number, moveX: number }[]>([])

    // Mouse tilt logic
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXFromCenter = e.clientX - rect.left - width / 2
        const mouseYFromCenter = e.clientY - rect.top - height / 2
        x.set(mouseXFromCenter / width)
        y.set(mouseYFromCenter / height)
    }

    function onMouseLeave() {
        x.set(0)
        y.set(0)
    }

    // Theme cycling
    useEffect(() => {
        const timer = setInterval(() => {
            setTheme(prev => prev === 'christmas' ? 'newyear' : 'christmas')
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    // Hydration-safe random particles
    useEffect(() => {
        setParticles([...Array(10)].map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 2,
            duration: Math.random() * 3 + 2,
            moveX: Math.random() * 50 - 25
        })))
    }, [])

    const isChristmas = theme === 'christmas'

    return (
        <div
            className="perspective-1000 w-full h-full flex items-center justify-center p-8"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <motion.div
                ref={ref}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className={cn(
                    "relative w-full max-w-5xl aspect-[16/9] rounded-3xl shadow-2xl transition-all duration-1000 border-4 border-white/10",
                    isChristmas
                        ? "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-950 via-slate-900 to-emerald-950 shadow-red-900/20"
                        : "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-950 via-slate-900 to-purple-950 shadow-purple-900/20"
                )}
            >
                <div style={{ transform: "translateZ(50px)" }} className="absolute inset-4 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center space-y-6">

                    {/* Animated Icon */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={theme}
                            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className={cn(
                                "w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4",
                                isChristmas ? "bg-red-600 text-white shadow-red-500/50" : "bg-amber-400 text-purple-950 shadow-amber-400/50"
                            )}
                        >
                            {isChristmas ? <Gift className="w-10 h-10" /> : <PartyPopper className="w-10 h-10" />}
                        </motion.div>
                    </AnimatePresence>

                    {/* Valid Text */}
                    <div className="space-y-2">
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={theme}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-xl tracking-wide"
                            >
                                {isChristmas ? "Merry Christmas" : "Happy New Year"}
                            </motion.h3>
                        </AnimatePresence>
                        <p className="text-white/60 font-medium text-lg tracking-widest uppercase text-xs">
                            {isChristmas ? "From Santa Claus" : "From Future You"}
                        </p>
                    </div>

                    {/* Glowing Button Mockup */}
                    <div className={cn(
                        "px-8 py-3 rounded-full font-bold text-sm shadow-xl transition-colors duration-500 hover:scale-105 transform cursor-pointer",
                        isChristmas ? "bg-white text-red-700 hover:bg-red-50" : "bg-amber-400 text-purple-950 hover:bg-amber-300"
                    )}>
                        Open Your Gift
                    </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" style={{ transform: "translateZ(20px)" }}>
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, p.moveX, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                delay: p.delay
                            }}
                            className={cn(
                                "absolute w-2 h-2 rounded-full",
                                isChristmas ? "bg-white" : "bg-amber-300"
                            )}
                            style={{
                                left: `${p.left}%`,
                                top: `${p.top}%`
                            }}
                        />
                    ))}
                </div>

            </motion.div>
        </div>
    )
}
