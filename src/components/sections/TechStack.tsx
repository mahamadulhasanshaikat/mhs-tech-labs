// src/components/sections/TechStack.tsx
"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Smartphone,
  Globe,
  Database,
  Cpu,
  Sparkles,
  CheckCircle2,
  Code2,
} from "lucide-react";

interface TechGroup {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  toolsCount: string;
  accentGlow: string;
  borderGlow: string;
  iconGradient: string;
  technologies: { name: string; tag: string }[];
}

const techArsenal: TechGroup[] = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile & State Architecture",
    subtitle: "Cross-Platform Native Speed",
    toolsCount: "5 Core Tools",
    accentGlow: "rgba(59, 130, 246, 0.15)",
    borderGlow: "group-hover:border-blue-500/50",
    iconGradient: "from-blue-600 to-indigo-600",
    technologies: [
      { name: "Flutter", tag: "Framework" },
      { name: "Dart", tag: "Language" },
      { name: "Riverpod", tag: "State System" },
      { name: "SQLite Offline", tag: "Local Cache" },
      { name: "Android & iOS Build", tag: "Production" },
    ],
  },
  {
    id: "frontend",
    icon: Globe,
    title: "Modern Web & UI Engine",
    subtitle: "High-Speed SSR & Edge Routing",
    toolsCount: "5 Core Tools",
    accentGlow: "rgba(6, 182, 212, 0.15)",
    borderGlow: "group-hover:border-cyan-500/50",
    iconGradient: "from-cyan-500 to-blue-600",
    technologies: [
      { name: "Next.js (App Router)", tag: "Full-Stack" },
      { name: "React 19", tag: "UI Library" },
      { name: "TypeScript", tag: "Type Safety" },
      { name: "Tailwind CSS v4", tag: "Design Token" },
      { name: "Framer Motion", tag: "Physics Engine" },
    ],
  },
  {
    id: "backend",
    icon: Database,
    title: "Backend, Cloud & DB",
    subtitle: "Real-Time Relational Data Hub",
    toolsCount: "5 Core Tools",
    accentGlow: "rgba(16, 185, 129, 0.15)",
    borderGlow: "group-hover:border-emerald-500/50",
    iconGradient: "from-emerald-500 to-teal-600",
    technologies: [
      { name: "Supabase", tag: "Managed BaaS" },
      { name: "PostgreSQL", tag: "Relational DB" },
      { name: "Firebase & Auth", tag: "Cloud Sync" },
      { name: "RESTful APIs", tag: "Microservices" },
      { name: "Row-Level Security", tag: "Enterprise" },
    ],
  },
  {
    id: "ai-geo",
    icon: Cpu,
    title: "Geo-Services & AI Pipelines",
    subtitle: "Spatial Intelligence & ML Agents",
    toolsCount: "5 Core Tools",
    accentGlow: "rgba(168, 85, 247, 0.15)",
    borderGlow: "group-hover:border-purple-500/50",
    iconGradient: "from-purple-600 to-indigo-600",
    technologies: [
      { name: "Mapbox / Google Maps", tag: "Geospatial" },
      { name: "Live GPS Tracking", tag: "Telemetry" },
      { name: "AI Agent Workflows", tag: "Automation" },
      { name: "Python Pipelines", tag: "Data Models" },
      { name: "Intelligent APIs", tag: "Integration" },
    ],
  },
];

function TechCard({ group, index }: { group: TechGroup; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = group.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl bg-white/85 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 p-7 backdrop-blur-xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left ${group.borderGlow}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${group.accentGlow}, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br ${group.iconGradient} text-white shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300`}
          >
            <Icon size={22} />
          </div>

          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70 whitespace-nowrap">
            {group.toolsCount}
          </span>
        </div>

        <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200 mb-1">
          {group.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          {group.subtitle}
        </p>

        <div className="space-y-2 mb-6">
          {group.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/70 hover:border-blue-500/40 dark:hover:border-cyan-400/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={13}
                  className="text-blue-600 dark:text-cyan-400 shrink-0"
                />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {tech.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                {tech.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
          <Code2 size={13} /> Production Ready
        </span>
        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Stack
        </span>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 overflow-hidden select-none"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-linear-to-tr from-blue-600/10 via-indigo-500/8 to-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-4"
        >
          <Sparkles size={12} className="text-blue-600 dark:text-cyan-400" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Our Production Arsenal
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-3"
        >
          Technologies We{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Master.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          Battle-tested tech stacks engineered for native responsiveness, offline-first reliability, and cloud-scale efficiency.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techArsenal.map((group, idx) => (
          <TechCard key={group.id} group={group} index={idx} />
        ))}
      </div>
    </section>
  );
}