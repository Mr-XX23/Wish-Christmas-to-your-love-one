"use client"

import { motion } from "framer-motion"
import { Sparkles, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveCard } from "./interactive-card"

export function LandingHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20">

            {/* Abstract Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950 pointer-events-none" />
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center space-y-8 max-w-4xl mx-auto"
            >
                {/* Pill Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto"
                >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-slate-300">AI-Powered Greeting Platform</span>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
                    Craft Magical <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-200">
                        Digital Moments
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Create unforgettable, interactive experiences for your loved ones.
                    Powered by next-gen animation and personalization technology.
                </p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                >
                    <Button
                        size="lg"
                        className="h-14 px-8 rounded-full bg-white text-slate-950 hover:bg-slate-200 text-lg font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                        onClick={() => document.getElementById('occasions')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Wand2 className="mr-2 w-5 h-5" />
                        Start Creating
                    </Button>

                </motion.div>
            </motion.div>

            {/* Hero Visual Area */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                className="relative w-full max-w-6xl mt-16 mx-auto perspective-1000 px-4"
            >
                <InteractiveCard />

                {/* Bottom Fade */}
                <div className="absolute -bottom-20 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
            </motion.div>
        </section>
    )
}
