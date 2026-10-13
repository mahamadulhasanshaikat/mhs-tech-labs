// src/components/TechStack.tsx
"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, Code2 } from "lucide-react";
import { techCategories } from "@/data/company";

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>Our Production Arsenal</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Technologies We Master
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50">
                  <Layers size={18} />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {cat.skills.length} tools
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                {cat.title}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">
                {cat.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-50 dark:bg-slate-950/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Code2 size={12} /> Production Stack
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}