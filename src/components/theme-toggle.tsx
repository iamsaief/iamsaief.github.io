"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

// Animated theme toggle button with smooth icon transitions
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show placeholder during SSR to prevent layout shift
  if (!mounted) {
    return (
      <div className="bg-secondary relative h-8 w-8 rounded-lg p-2">
        <div className="size-4 opacity-0">
          <Sun className="size-4" />
        </div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-secondary hover:bg-muted focus-visible:ring-ring/50 relative cursor-pointer rounded-lg p-2 transition-all outline-none hover:scale-105 focus-visible:ring-2"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Moon icon (visible in dark mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-2"
      >
        <Moon className="size-4" />
      </motion.div>

      {/* Sun icon (visible in light mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-2"
      >
        <Sun className="size-4" />
      </motion.div>

      {/* Invisible placeholder to maintain button size */}
      <div className="size-4 opacity-0">
        <Sun className="size-4" />
      </div>
    </motion.button>
  );
}
