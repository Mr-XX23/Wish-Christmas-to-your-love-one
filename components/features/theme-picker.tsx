"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface ThemePickerProps {
  currentTheme: string
  onThemeSelect: (themeId: string) => void
  themes: { id: string, name: string, background: string, border: string, color?: string }[]
}

export function ThemePicker({ currentTheme, onThemeSelect, themes }: ThemePickerProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {themes.map((theme) => {
        const isSelected = currentTheme === theme.id
        return (
          <div
            key={theme.id}
            className="group relative cursor-pointer space-y-4"
            onClick={() => onThemeSelect(theme.id)}
          >
            <div
              className={cn(
                "h-24 w-full rounded-xl border-2 transition-all hover:scale-105",
                theme.background,
                isSelected ? "ring-2 ring-primary ring-offset-2 border-transparent" : "border-transparent",
                theme.border
              )}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 rounded-full bg-white p-1 shadow-sm text-primary">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>
            <p className="text-center text-sm font-bold text-slate-800 dark:text-slate-900">
              {theme.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}
