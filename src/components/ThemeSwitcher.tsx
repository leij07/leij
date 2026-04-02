"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 bg-white/10 dark:bg-black/10 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 opacity-0">
        <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
        <span className="text-[10px] sm:text-xs">Theme</span>
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 bg-black/5 dark:bg-white/10 px-2 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5 text-white" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-slate-800" />
      )}
    </button>
  );
}