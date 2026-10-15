// src/components/sections/Lifecycle.tsx
"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Layers,
  Code2,
  Cloud,
  Rocket,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface LifecycleStage {
  step: string;
  phase: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentIcon: string;
  deliverables: string[];
  latencyBudget: string;
}

const lifecycleStages: LifecycleStage[] = [
  {
    step: "01",
    phase: "Phase 01",
    badge: "BLUEPRINT & SCHEMA",
    title: "Architecture & DB Design",
    description:
      "Scalable relational data modeling, Supabase/PostgreSQL schema structuring, and strict type-safe API contract definitions before writing code.",
    icon: Layers,
    accentIcon: "text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-900/50",
    deliverables: [
      "PostgreSQL Schema Contracts",
      "System Topology Diagrams",
      "Wireframes & API Specs",
    ],
    latencyBudget: "Specs Complete",
  },
  {
    step: "02",
    phase: "Phase 02",
    badge: "PARALLEL SPRINTS",
    title: "Web & Mobile Engineering",
    description:
      "Simultaneous development of high-speed web apps with Next.js App Router and reactive cross-platform mobile apps using Flutter with Riverpod state.",
    icon: Code2,
    accentIcon: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/60 dark:border-indigo-900/50",
    deliverables: [
      "120 FPS Native Mobile UI",
      "Server-Side Edge Web Render",
      "Offline SQLite Cache Layer",
    ],
    latencyBudget: "120 FPS Target",
  },
  {
    step: "03",
    phase: "Phase 03",
    badge: "REAL-TIME & INFERENCE",
    title: "Cloud, Maps & AI Stream",
    description:
      "Integrating real-time geolocation engines, WebSockets, Supabase RLS security, and predictive ML inference pipelines into the stack.",
    icon: Cloud,
    accentIcon: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-900/50",
    deliverables: [
      "Live GPS Telemetry Stream",
      "Row-Level Cloud Security",
      "Predictive AI Inference APIs",
    ],
    latencyBudget: "< 120ms Sync",
  },
  {
    step: "04",
    phase: "Phase 04",
    badge: "CI/CD & DEPLOYMENT",
    title: "QA Audits & Store Launch",
    description:
      "Rigorous end-to-end stress testing, security audits, automated deployment pipelines, and publishing directly to the App Store & Play Store.",
    icon: Rocket,
    accentIcon: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200/60 dark:border-purple-900/50",
    deliverables: [
      "Security Penetration Audits",
      "Zero-Downtime Cloud Release",
      "App Stores Publishing",
    ],
    latencyBudget: "Production Live",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 260,
    },
  },
};

export default function Lifecycle() {
  return (
    <section
      id="solutions"
      className="relative scroll-mt-28 pt-20 pb-20 sm:pt-28 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden select-none"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-linear-to-tr from-blue-600/10 via-indigo-500/8 to-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-3"
        >
          <Sparkles size={11} className="text-blue-600 dark:text-cyan-400" />
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Development Execution
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-3"
        >
          Engineering{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Lifecycle.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto"
        >
          A disciplined, step-by-step technical lifecycle delivering production-grade architectures with zero compromises.
        </motion.p>
      </div>

      {/* 4-Stage Connected Lifecycle Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative"
      >
        {lifecycleStages.map((stage, idx) => {
          const Icon = stage.icon;
          const isNotLast = idx < lifecycleStages.length - 1;

          return (
            <motion.div
              key={stage.step}
              variants={cardItemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative p-5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 shadow-xs hover:border-slate-400/60 dark:hover:border-slate-700 hover:shadow-md backdrop-blur-xl transition-all duration-200 flex flex-col justify-between text-left"
            >
              {/* Sequential Connector Arrow (সঠিকভাবে সেন্টারে অবস্থিত ও কোনো ক্লিপিং ছাড়া) */}
              {isNotLast && (
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 items-center justify-center shadow-md">
                  <motion.div
                    animate={{ x: [0, 2.5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={13} className="text-blue-600 dark:text-cyan-400" />
                  </motion.div>
                </div>
              )}

              <div>
                {/* Header Sequence & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-mono tracking-tight bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-400 bg-clip-text text-transparent">
                    {stage.step}
                  </span>

                  <div className={`p-2 rounded-xl border ${stage.accentIcon}`}>
                    <Icon size={16} />
                  </div>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[9.5px] font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold block mb-1">
                  {stage.badge}
                </span>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {stage.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 size={11} className="text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="font-semibold text-slate-500 dark:text-slate-400">
                  {stage.phase}
                </span>

                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                  <ShieldCheck size={11} />
                  <span>{stage.latencyBudget}</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}