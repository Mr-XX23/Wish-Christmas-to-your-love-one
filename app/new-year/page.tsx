import { CreateCardForm } from "@/components/features/create-card-form";
import { Fireworks } from "@/components/ui/fireworks";

export default function NewYearPage() {
    return (
        <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 selection:bg-indigo-300 selection:text-indigo-900 bg-slate-900">

            {/* Fireworks Background */}
            <Fireworks className="opacity-60" />

            {/* Glow effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-black/40 pointer-events-none" />

            <div className="z-10 w-full max-w-4xl space-y-4 relative">
                <div className="text-center space-y-3 py-4">
                    <h1
                        dir="ltr"
                        className="text-5xl md:text-8xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)] tracking-tight leading-none animate-pulse"
                    >
                        Happy New Year
                    </h1>
                    <div className="text-3xl md:text-5xl font-bold text-white tracking-[0.5em] opacity-90 drop-shadow-md">
                        2026
                    </div>
                    <p className="text-base md:text-lg text-indigo-200 max-w-2xl mx-auto font-medium pt-2">
                        ✨ Send your sparkling wishes to loved ones ✨
                    </p>
                </div>

                <CreateCardForm mode="new-year" />
            </div>

            <footer className="relative z-10 mt-16 text-sm text-slate-500 font-medium text-center w-full pb-8">
                Made with ❤️ by{" "}
                <a
                    href="https://github.com/Mr-XX23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-semibold underline transition-colors"
                >
                    Rohan Balami
                </a>
            </footer>
        </main>
    );
}
