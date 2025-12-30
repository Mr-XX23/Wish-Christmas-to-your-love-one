"use client"

import { motion } from "framer-motion"
import { MonitorSmartphone, Share2, Zap, Palette, Music, Globe } from "lucide-react"

const features = [
    {
        icon: <MonitorSmartphone className="w-6 h-6 text-blue-400" />,
        title: "Responsive 3D",
        description: "Cinematic unboxing experiences that work flawlessly on every device."
    },
    {
        icon: <Zap className="w-6 h-6 text-amber-400" />,
        title: "Instant Generation",
        description: "Create personalized cards in milliseconds with zero loading time."
    },
    {
        icon: <Share2 className="w-6 h-6 text-green-400" />,
        title: "Smart Sharing",
        description: "Generate unique links with dynamic social preview images automatically."
    },
    {
        icon: <Palette className="w-6 h-6 text-purple-400" />,
        title: "Premium Themes",
        description: "Curated design systems for every occasion, from Snowy Nights to Neon Parties."
    },
    {
        icon: <Music className="w-6 h-6 text-pink-400" />,
        title: "Atmospheric Audio",
        description: "Immersive soundscapes that sync perfectly with visual effects."
    },
    {
        icon: <Globe className="w-6 h-6 text-cyan-400" />,
        title: "Global Reach",
        description: "Share your love anywhere in the world with a single click."
    }
]

export function LandingFeatures() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-6xl relative z-10">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                        Why It Feels Special
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We combined modern web technologies to create a card that feels like a native app experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
