// src/components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Database, MapPin, BrainCircuit, CheckCircle2, Sparkles } from "lucide-react";
import { services } from "@/data/company";

const iconMap = [Smartphone, Globe, Database, MapPin, BrainCircuit];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>What We Engineer</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Core Software Services
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => {
          const IconComponent = iconMap[idx % iconMap.length];
          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/40 dark:hover:border-cyan-400/40 shadow-md shadow-black/3 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50">
                    <IconComponent size={20} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                {srv.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}