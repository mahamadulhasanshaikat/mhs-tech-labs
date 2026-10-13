// src/components/BentoFeatures.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, HardDrive, MapPinned, Server, CheckCircle2 } from "lucide-react";
import { bentoHighlights } from "@/data/company";

const bentoIcons = [Cpu, HardDrive, MapPinned, Server];

export default function BentoFeatures() {
  return (
    <section id="architecture" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>Why MHS Tech Lab</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Engineered for Speed & Scale
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bentoHighlights.map((item, idx) => {
          const Icon = bentoIcons[idx % bentoIcons.length];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`${item.colSpan} group relative overflow-hidden p-7 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/40 dark:hover:border-cyan-400/40 shadow-md flex flex-col justify-between transition-all duration-300`}
            >
              {/* Subtle Corner Glow */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-linear-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {item.metrics.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800"
                  >
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>{m}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}