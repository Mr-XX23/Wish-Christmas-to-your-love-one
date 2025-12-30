import { CreateCardForm } from "@/components/features/create-card-form";
import { ChristmasLights, ChristmasTree } from "@/components/ui/decorations";
import { MovingClouds } from "@/components/ui/moving-clouds";

export default function ChristmasPage() {
    return (
        <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 selection:bg-red-200 selection:text-red-900 bg-red-100/10">
            {/* Moving Clouds */}
            <MovingClouds />

            {/* Colorful Christmas Lights */}
            <ChristmasLights />

            {/* Enhanced snowfall effect */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_30%,_white_2px,_transparent_2px),radial-gradient(circle_at_60%_70%,_white_2px,_transparent_2px),radial-gradient(circle_at_80%_10%,_white_1.5px,_transparent_1.5px),radial-gradient(circle_at_40%_50%,_white_1px,_transparent_1px)] bg-[length:80px_80px] animate-[snow_20s_linear_infinite]" />

            <div className="z-10 w-full max-w-4xl space-y-2 relative">
                <div className="text-center space-y-2 py-2">
                    <h1
                        dir="ltr"
                        style={{ transform: 'none', unicodeBidi: 'normal', direction: 'ltr' }}
                        className="text-4xl md:text-7xl font-bold font-serif text-red-700 dark:text-red-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] tracking-tight leading-none"
                    >
                        Merry <span className="text-amber-600 dark:text-amber-400">Christmas</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium drop-shadow-sm">
                        🎄 Create magical holiday greetings 🎁
                    </p>
                </div>

                <CreateCardForm mode="christmas" />
            </div>

            {/* Decorative Trees */}
            <div className="absolute bottom-0 left-[-50px] opacity-30 md:opacity-60 md:left-10 transform -scale-x-100 pointer-events-none">
                <ChristmasTree className="w-40 md:w-64" />
            </div>
            <div className="absolute bottom-0 right-[-50px] opacity-30 md:opacity-60 md:right-10 pointer-events-none">
                <ChristmasTree className="w-40 md:w-64" />
            </div>

            <footer className="relative z-10 mt-12 text-sm text-slate-600/70 dark:text-slate-400/70 font-medium text-center w-full pb-16 md:pb-4">
                Made with ❤️ by{" "}
                <a
                    href="https://github.com/Mr-XX23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-red-700 font-semibold underline"
                >
                    Rohan Balami
                </a>
                {" "}• Say thank you! 🎄
            </footer>
        </main>
    );
}
