"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface ThemePickerProps {
  currentTheme: string
  onThemeSelect: (themeId: string) => void
  themes: { id: string, name: string, background: string, border: string, color?: string }[]
  labelClassName?: string
  activeItemClassName?: string
}

export function ThemePicker({ currentTheme, onThemeSelect, themes, labelClassName, activeItemClassName }: ThemePickerProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {themes.map((theme) => {
        const isSelected = currentTheme === theme.id
        return (
          <div
            key={theme.id}
            className="group relative cursor-pointer space-y-3"
            onClick={() => onThemeSelect(theme.id)}
          >
            <div
              className={cn(
                "h-20 w-full rounded-xl border-2 transition-all duration-300 hover:scale-[1.03]",
                theme.background,
                isSelected
                  ? cn("ring-2 ring-primary border-transparent", activeItemClassName)
                  : "border-transparent text-transparent", // Hide border if not active/themed? Actually theme.border usually has value.
                !isSelected && theme.border
              )}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 rounded-full bg-white p-1 shadow-sm text-primary animate-in zoom-in duration-200">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </div>
            <p className={cn(
              "text-center text-sm font-semibold transition-colors",
              labelClassName || "text-slate-600"
            )}>
              {theme.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}
