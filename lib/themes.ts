export type Theme = {
    id: string
    name: string
    color: string // Preview color
    background: string // CSS class for background
    foreground: string // CSS class for text
    accent: string // CSS class for accents
    border: string
}


export const christmasThemes: Theme[] = [
    {
        id: "classic",
        name: "Classic",
        color: "#D42426",
        background: "bg-red-700",
        foreground: "text-white",
        accent: "bg-green-700",
        border: "border-gold"
    },
    {
        id: "snow",
        name: "Snowy Night",
        color: "#0f172a",
        background: "bg-slate-900",
        foreground: "text-slate-100",
        accent: "bg-sky-500",
        border: "border-slate-700"
    },
    {
        id: "gold",
        name: "Golden",
        color: "#F4D35E",
        background: "bg-amber-50",
        foreground: "text-amber-900",
        accent: "bg-amber-500",
        border: "border-amber-200"
    },
    {
        id: "modern",
        name: "Modern",
        color: "#10b981",
        background: "bg-emerald-600",
        foreground: "text-white",
        accent: "bg-emerald-900",
        border: "border-emerald-400"
    }
]

export const newYearThemes: Theme[] = [
    {
        id: "newyear_sparkle",
        name: "Midnight Sparkle",
        color: "#1e1b4b", // indigo-950
        background: "bg-indigo-950",
        foreground: "text-indigo-50",
        accent: "bg-amber-400",
        border: "border-amber-400"
    },
    {
        id: "newyear_gold",
        name: "Gatsby Gold",
        color: "#000000",
        background: "bg-black",
        foreground: "text-amber-100",
        accent: "bg-yellow-500",
        border: "border-yellow-600"
    },
    {
        id: "newyear_neon",
        name: "Neon Party",
        color: "#2e0249", // deep purple
        background: "bg-purple-900",
        foreground: "text-fuchsia-100",
        accent: "bg-fuchsia-500",
        border: "border-fuchsia-500"
    }
]

export const themes: Theme[] = [...christmasThemes, ...newYearThemes]
