// src/components/Workflow.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, GitBranch } from "lucide-react";
import { workflowSteps } from "@/data/company";

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>How We Work</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Lab Development Lifecycle
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workflowSteps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md flex flex-col justify-between group hover:border-blue-500/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-black font-mono bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  {item.step}
                </span>
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <GitBranch size={16} />
                </div>
              </div>

              <p className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold mb-1">
                {item.subtitle}
              </p>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Phase {item.step}</span>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">Verified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}