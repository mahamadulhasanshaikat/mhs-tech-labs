// src/components/Solutions.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { featuredSolutions } from "@/data/company";

const categories = ["All", "Mobile", "Web", "AI"];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = featuredSolutions.filter((item) => {
    if (selectedCategory === "All") return true;
    return (
      item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      item.tech.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()))
    );
  });

  return (
    <section
      id="solutions"
      className="relative scroll-mt-28 py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto select-none"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-linear-to-tr from-blue-600/10 via-indigo-500/8 to-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-3">
          <Sparkles size={12} className="text-blue-600 dark:text-cyan-400" />
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Engineered Architecture
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-3">
          Featured Lab{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Solutions.
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          Production systems engineered for cross-platform scale, real-time sync, and fault tolerance.
        </p>

        {/* Filter Badges */}
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shadow-2xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Balanced Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-xs hover:shadow-xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/60">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tech Stack Mini Tags */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}