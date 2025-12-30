import { LandingHero } from "@/components/landing/hero"
import { LandingFeatures } from "@/components/landing/features"
import { OccasionSelector } from "@/components/landing/occasion-selector"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <LandingHero />
      <OccasionSelector />
      <LandingFeatures />

      <footer className="py-12 bg-black text-center border-t border-white/10">
        <p className="text-slate-500 text-sm">
          © 2025 AI Greetings Platform. Built with ❤️ by <a href="https://github.com/Mr-XX23" className="text-slate-400 hover:text-white underline">Rohan Balami</a>
        </p>
      </footer>
    </main>
  )
}
