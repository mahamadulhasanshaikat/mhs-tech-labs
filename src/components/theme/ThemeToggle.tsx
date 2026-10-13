// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const themeOptions = [
  { key: "light", label: "Light", icon: Sun },
  { key: "system", label: "System", icon: Monitor },
  { key: "dark", label: "Dark", icon: Moon },
] as const;

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-25 h-9 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
    );
  }

  const currentTheme = theme || "system";

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);

    // Direct DOM sync jate click korar shathe shathe instant kaj kore
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
      root.classList.toggle("light", !systemDark);
    }
  };

  return (
    <div
      role="group"
      aria-label="Theme Switcher"
      className="relative z-30 pointer-events-auto inline-flex items-center h-9 p-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs backdrop-blur-md select-none"
    >
      {themeOptions.map(({ key, label, icon: Icon }) => {
        const isActive = currentTheme === key;

        return (
          <button
            key={key}
            type="button"
            onClick={() => handleThemeChange(key)}
            className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
              isActive
                ? "text-blue-600 dark:text-cyan-400"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
            title={`${label} Mode`}
            aria-label={`${label} Mode`}
          >
            {isActive && (
              <motion.span
                layoutId="activeThemePill"
                className="pointer-events-none absolute inset-0 rounded-full bg-white dark:bg-slate-950 shadow-xs border border-slate-200/70 dark:border-slate-700"
                transition={{ type: "spring", stiffness: 480, damping: 32 }}
              />
            )}
            <span className="pointer-events-none relative z-20 flex items-center justify-center">
              <Icon size={14} />
            </span>
          </button>
        );
      })}
    </div>
  );
}