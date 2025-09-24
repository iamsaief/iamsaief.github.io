"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

// Theme options - light or dark mode
type Theme = "dark" | "light"

// Context type for theme state and setter
type ThemeProviderContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// React context for theme management
const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

// Theme provider component with localStorage persistence and system preference detection
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark") // Default to dark theme
  const [mounted, setMounted] = useState(false) // Prevent hydration mismatch

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme | null

    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      // Use saved theme preference
      setTheme(savedTheme)
    } else {
      // Fall back to system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
    }
  }, [])

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark") // Remove existing theme classes
    root.classList.add(theme) // Add current theme class

    localStorage.setItem("theme", theme) // Persist theme choice
  }, [theme, mounted])

  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {/* Prevent flash of unstyled content during hydration */}
      <div className={mounted ? "" : "dark"}>{children}</div>
    </ThemeProviderContext.Provider>
  )
}

// Custom hook for accessing theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
