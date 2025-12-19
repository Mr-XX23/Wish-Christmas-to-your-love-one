export type Theme = {
    id: string
    name: string
    color: string // Preview color
    background: string // CSS class for background
    foreground: string // CSS class for text
    accent: string // CSS class for accents
    border: string
}

export const themes: Theme[] = [
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
