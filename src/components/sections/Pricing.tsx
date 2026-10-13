// src/components/Pricing.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";
import { engagementPlans } from "@/data/company";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>Flexible Collaboration</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Engagement Models
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {engagementPlans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`relative p-8 rounded-3xl flex flex-col justify-between transition-all ${
              plan.popular
                ? "bg-slate-900 dark:bg-slate-900 text-white border-2 border-blue-500 shadow-2xl shadow-blue-500/15 lg:-translate-y-2"
                : "bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800/90 shadow-md"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-linear-to-r from-blue-600 to-cyan-400 text-white shadow-md">
                Recommended Choice
              </span>
            )}

            <div>
              <p
                className={`text-xs font-mono uppercase tracking-wider ${
                  plan.popular ? "text-cyan-400" : "text-blue-600 dark:text-cyan-400"
                }`}
              >
                {plan.tagline}
              </p>
              <h3 className="text-2xl font-black mt-1 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-200/20">
                <span className="text-3xl font-black">{plan.price}</span>
                <span
                  className={`text-xs font-mono ${
                    plan.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  • {plan.duration}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <Check
                      size={16}
                      className="text-emerald-400 shrink-0 mt-0.5"
                    />
                    <span className={plan.popular ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#contact"
              className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                plan.popular
                  ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-cyan-400"
              }`}
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}