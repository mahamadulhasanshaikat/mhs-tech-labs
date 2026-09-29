"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR ফ্লিকার রোধ করতে স্কেলেটন প্লেসহোল্ডার
  if (!mounted) {
    return (
      <div className="w-[104px] h-[34px] rounded-xl bg-slate-200/50 dark:bg-slate-900/60 border border-slate-300/40 dark:border-white/10 animate-pulse" />
    );
  }

  return (
    <div className="inline-flex items-center p-1 rounded-xl bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300/70 dark:border-white/10 backdrop-blur-md shadow-xs">
      {/* Light Mode Button */}
      <button
        type="button"
        onClick={() => setTheme("light")}
        title="Light Mode"
        aria-label="Switch to Light Theme"
        className={`p-1.5 rounded-lg transition-all cursor-pointer ${
          theme === "light"
            ? "bg-white text-amber-500 shadow-xs"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Sun size={15} />
      </button>

      {/* Dark Mode Button */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        title="Dark Mode"
        aria-label="Switch to Dark Theme"
        className={`p-1.5 rounded-lg transition-all cursor-pointer ${
          theme === "dark"
            ? "bg-slate-950 text-cyan-400 shadow-xs"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Moon size={15} />
      </button>

      {/* System Theme Button */}
      <button
        type="button"
        onClick={() => setTheme("system")}
        title="System Preference"
        aria-label="Switch to System Theme"
        className={`p-1.5 rounded-lg transition-all cursor-pointer ${
          theme === "system"
            ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Laptop size={15} />
      </button>
    </div>
  );
}