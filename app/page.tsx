import Link from "next/link";
import { Sparkles, Snowflake } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-slate-900 to-indigo-900/20" />

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

        {/* Christmas Option */}
        <Link href="/christmas" className="group">
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-red-500/50 transition-all duration-500 bg-gradient-to-br from-red-950/50 to-slate-900/50 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544967082-d9d3fdd1367d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            <div className="relative z-10 space-y-4">
              <div className="bg-red-600/20 p-4 rounded-full w-fit mx-auto backdrop-blur-md border border-red-500/30">
                <Snowflake className="w-12 h-12 text-red-200" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg">Christmas</h2>
              <p className="text-red-200 font-medium text-lg">Send festive holiday greetings</p>
            </div>
          </div>
        </Link>

        {/* New Year Option */}
        <Link href="/new-year" className="group">
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-amber-500/50 transition-all duration-500 bg-gradient-to-br from-indigo-950/50 to-slate-900/50 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            <div className="relative z-10 space-y-4">
              <div className="bg-amber-600/20 p-4 rounded-full w-fit mx-auto backdrop-blur-md border border-amber-500/30">
                <Sparkles className="w-12 h-12 text-amber-200" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg">New Year 2026</h2>
              <p className="text-indigo-200 font-medium text-lg">Celebrate the new beginning</p>
            </div>
          </div>
        </Link>

      </div>
    </main>
  );
}
