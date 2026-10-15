// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck } from "lucide-react";

const stackItems = [
  "Flutter",
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "SQLite Offline",
  "Live Maps",
  "REST APIs",
  "AI & ML",
];

const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 220,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex flex-col justify-center items-center pt-36 pb-16 sm:pt-44 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden text-center select-none"
    >
      {/* ================= ULTRA-CLEAN MODERN AESTHETIC BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* 1. Subtle Precision Dot Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f618_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#38bdf825_1.2px,transparent_1.2px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_75%_55%_at_50%_35%,#000_65%,transparent_100%)] opacity-80" />

        {/* 2. Primary Glowing Beam Aurora (Deep Vivid Gradient) */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 18, 0],
            y: [0, -12, 0],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-1/2 -translate-x-1/2 w-170 h-85 bg-linear-to-tr from-blue-600/35 via-indigo-500/25 to-cyan-400/35 rounded-full blur-[110px]"
        />

        {/* 3. Secondary Cyan Accent Glow */}
        <motion.div
          animate={{
            scale: [1.1, 0.95, 1.1],
            x: [0, -22, 0],
            y: [0, 14, 0],
            opacity: [0.2, 0.38, 0.2],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 left-1/3 -translate-x-1/2 w-125 h-70 bg-linear-to-bl from-cyan-400/30 via-sky-500/20 to-transparent rounded-full blur-[100px]"
        />
      </div>

      {/* Top Status Capsule */}
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xs backdrop-blur-xl mb-8 group cursor-default transition-all"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 flex items-center gap-1">
          <Sparkles size={11} /> Next-Gen Software Studio
        </span>
        <span className="text-slate-300 dark:text-slate-700">•</span>
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
          Cross-Platform & Cloud
        </span>
      </motion.div>

      {/* Kinetic Headline */}
      <motion.h1
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-6xl lg:text-[4.4rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.08] mb-6 max-w-4xl flex flex-wrap justify-center gap-x-3 gap-y-1"
      >
        <motion.span variants={wordVariants}>Engineering</motion.span>
        <motion.span variants={wordVariants}>Scalable</motion.span>
        <motion.span
          variants={wordVariants}
          className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Web & Mobile
        </motion.span>
        <motion.span variants={wordVariants}>Products</motion.span>
        <motion.span variants={wordVariants}>with</motion.span>
        <motion.span
          variants={wordVariants}
          className="bg-linear-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent"
        >
          AI Evolution.
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
      >
        MHS Tech Lab architects high-performance mobile apps with{" "}
        <span className="font-semibold text-slate-900 dark:text-slate-200">
          Flutter & Riverpod
        </span>
        , full-stack platforms with{" "}
        <span className="font-semibold text-slate-900 dark:text-slate-200">
          Next.js
        </span>
        , real-time map & cloud backends with{" "}
        <span className="font-semibold text-slate-900 dark:text-slate-200">
          Supabase & PostgreSQL
        </span>
        , and next-gen AI automation.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
      >
        <Link
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-cyan-400 dark:hover:text-slate-950 shadow-xl shadow-slate-950/10 dark:shadow-white/5 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[320%] transition-transform duration-1000 ease-out pointer-events-none" />
          <span>Start Your Project</span>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>

        <Link
          href="#solutions"
          className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-xs backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
        >
          <Layers size={15} className="text-blue-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          <span>Explore Solutions</span>
        </Link>
      </motion.div>

      {/* Minimal Tech Stack Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full max-w-4xl mx-auto pt-6 border-t border-slate-200/70 dark:border-slate-800/70"
      >
        <div className="flex items-center justify-center gap-2 text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
          <ShieldCheck size={13} className="text-blue-500 dark:text-cyan-400" />
          <span>Production Stack & Architecture</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {stackItems.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + idx * 0.03 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:border-blue-500/50 dark:hover:border-cyan-400/50 hover:shadow-sm transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
              <span>{tech}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}