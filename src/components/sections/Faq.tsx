// src/components/Faq.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, Minus, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/company";

const INITIAL_VISIBLE_COUNT = 4;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = faqs.length > INITIAL_VISIBLE_COUNT;

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 py-20 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto select-none overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-tr from-blue-600/10 via-indigo-500/8 to-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Standardized Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-3"
        >
          <Sparkles size={11} className="text-blue-600 dark:text-cyan-400" />
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Common Questions
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-3"
        >
          Frequently Asked{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Questions.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed"
        >
          Key insights into our engineering protocols, single-codebase mobile delivery, and offline resilience.
        </motion.p>
      </div>

      {/* Modern Studio FAQ Accordion List (4 Initial + Expandable) */}
      <div className="space-y-3.5">
        <AnimatePresence initial={false}>
          {visibleFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const stepNumber = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={item.question}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, delay: idx >= INITIAL_VISIBLE_COUNT ? (idx - INITIAL_VISIBLE_COUNT) * 0.04 : 0 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white/95 dark:bg-slate-900/95 border-blue-500/50 dark:border-cyan-400/50 shadow-md shadow-blue-500/5"
                    : "bg-white/80 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900"
                } backdrop-blur-xl overflow-hidden`}
              >
                {/* Question Header Button */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/50 dark:border-blue-900/50 shrink-0">
                      {stepNumber}
                    </span>
                    <span className="font-extrabold text-xs sm:text-sm md:text-base text-slate-900 dark:text-white tracking-tight">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-xl border shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950 border-transparent"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200/60 dark:border-slate-700/60"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Expandable Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                        <p className="mt-3">{item.answer}</p>

                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                          <CheckCircle2 size={12} className="shrink-0" />
                          <span>Verified Architectural Standard</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* See More / Show Less Toggle Button */}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => {
              if (showAll && openIndex !== null && openIndex >= INITIAL_VISIBLE_COUNT) {
                setOpenIndex(null);
              }
              setShowAll((prev) => !prev);
            }}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/50 dark:hover:border-cyan-400/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-mono font-semibold shadow-2xs backdrop-blur-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>
              {showAll ? "Show Less" : `See All Questions (${faqs.length})`}
            </span>
            {showAll ? (
              <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}