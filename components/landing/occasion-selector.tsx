"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Snowflake, Sparkles } from "lucide-react"

export function OccasionSelector() {
    return (
        <section id="occasions" className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950 relative">
            <div className="container px-4 mx-auto max-w-6xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Moment</h2>
                    <p className="text-slate-400">Select an occasion to begin your creation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Christmas Card */}
                    <Link href="/christmas" className="group">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-red-950/50 to-slate-900/80 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544967082-d9d3fdd1367d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/30 text-red-200 text-sm font-medium mb-4">
                                    <Snowflake className="w-4 h-4" />
                                    <span>Season's Greetings</span>
                                </div>
                                <h3 className="text-4xl font-serif font-bold text-white mb-2">Christmas</h3>
                                <div className="flex items-center justify-between text-slate-300">
                                    <p>Send festive holiday magic</p>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-red-400" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* New Year Card */}
                    <Link href="/new-year" className="group">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-950/50 to-slate-900/80 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-600/30 border border-amber-500/30 text-amber-200 text-sm font-medium mb-4">
                                    <Sparkles className="w-4 h-4" />
                                    <span>New Beginning</span>
                                </div>
                                <h3 className="text-4xl font-serif font-bold text-white mb-2">New Year 2026</h3>
                                <div className="flex items-center justify-between text-slate-300">
                                    <p>Celebrate the countdown</p>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-amber-400" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                </div>
            </div>
        </section>
    )
}
