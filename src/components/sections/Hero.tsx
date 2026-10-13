// src/components/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, Globe, Database, MapPin, Cpu } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-linear-to-r from-blue-600/15 via-indigo-500/10 to-cyan-400/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="text-center max-w-4xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/70 dark:border-blue-900/60 mb-6 shadow-2xs"
        >
          <Sparkles size={13} className="text-blue-600 dark:text-cyan-400" />
          <span>Next-Gen Software Studio • Web, Mobile & AI Evolution</span>
        </motion.div>

        {/* Main Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6"
        >
          Building Scalable{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Web & Mobile
          </span>{" "}
          Products for the Future.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {companyInfo.subTagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5"
          >
            <span>Launch Your Project</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all"
          >
            <span>Explore Our Stack</span>
          </Link>
        </motion.div>

        {/* Core Tech Ribbon Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-16"
        >
          {[
            { icon: Smartphone, text: "Flutter & Riverpod" },
            { icon: Globe, text: "Next.js & Tailwind CSS" },
            { icon: Database, text: "Supabase • Firebase • PostgreSQL • SQLite" },
            { icon: MapPin, text: "Live Map & REST APIs" },
            { icon: Cpu, text: "AI & ML Ready" },
          ].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-mono font-medium bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-2xs"
            >
              <item.icon size={14} className="text-blue-600 dark:text-cyan-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {companyInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
              className="p-5 rounded-3xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-sm"
            >
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase">
                {stat.label}
              </p>
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                {stat.value}
              </p>
              <p className="text-xs text-blue-600 dark:text-cyan-400 font-medium mt-1">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}