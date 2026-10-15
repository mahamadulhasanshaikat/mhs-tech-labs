// src/components/sections/Services.tsx
"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Smartphone,
  Globe,
  Database,
  MapPin,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  features: string[];
  accentGlow: string;
  borderGlow: string;
  iconGradient: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    badge: "Flutter & Riverpod",
    description:
      "Pixel-perfect, native-speed iOS & Android applications built with Flutter, declarative Riverpod state management, and smooth 120 FPS animations.",
    features: [
      "iOS & Android Dual Architecture",
      "Riverpod Reactive State System",
      "Offline-First SQLite Synchronization",
      "Hardware Acceleration & 120 FPS UI",
    ],
    accentGlow: "rgba(59, 130, 246, 0.15)",
    borderGlow: "group-hover:border-blue-500/50",
    iconGradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "web",
    icon: Globe,
    title: "Modern Web Applications",
    badge: "Next.js & Tailwind CSS",
    description:
      "SEO-optimized, ultra-fast full-stack web platforms, interactive SaaS engines, and enterprise portals engineered using Next.js App Router and Tailwind CSS.",
    features: [
      "Next.js App Router & Edge SSR",
      "Tailwind CSS Modular Design Tokens",
      "Interactive Real-Time Client Portals",
      "High-Conversion Core Web Vitals",
    ],
    accentGlow: "rgba(6, 182, 212, 0.15)",
    borderGlow: "group-hover:border-cyan-500/50",
    iconGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "backend",
    icon: Database,
    title: "Cloud, Database & REST APIs",
    badge: "Supabase • Postgres • Firebase",
    description:
      "Scalable, real-time backend infrastructures combining PostgreSQL, Supabase Row-Level Security, Firebase Auth, and secure RESTful microservices.",
    features: [
      "Supabase & Managed PostgreSQL",
      "Firebase Auth & Realtime Firestore",
      "Local Encrypted SQLite Storage",
      "Secure High-Throughput REST APIs",
    ],
    accentGlow: "rgba(16, 185, 129, 0.15)",
    borderGlow: "group-hover:border-emerald-500/50",
    iconGradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "maps",
    icon: MapPin,
    title: "Map & Geolocation Engines",
    badge: "Real-Time Telemetry",
    description:
      "Mission-critical location tracking systems, interactive route matrices, geospatial mapping, and low-latency live telemetry synchronization.",
    features: [
      "Real-Time GPS Asset Tracking",
      "Geofencing & Polygon Spatial Alerts",
      "Interactive Vector Map Layers",
      "Optimized Route Distance Matrices",
    ],
    accentGlow: "rgba(99, 102, 241, 0.15)",
    borderGlow: "group-hover:border-indigo-500/50",
    iconGradient: "from-indigo-600 to-blue-600",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI & Machine Learning Lab",
    badge: "Next-Gen Intelligent Shift",
    description:
      "Transforming software suites with predictive data modeling, autonomous agent workflows, computer vision parsing, and tailored AI assistant integrations.",
    features: [
      "Custom LLM & Agent Pipelines",
      "Predictive Machine Learning Models",
      "Computer Vision & Document OCR",
      "Automated Semantic Search APIs",
    ],
    accentGlow: "rgba(168, 85, 247, 0.15)",
    borderGlow: "group-hover:border-purple-500/50",
    iconGradient: "from-purple-600 to-indigo-600",
  },
];

function InteractiveServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl bg-white/85 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 p-7 backdrop-blur-xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left ${service.borderGlow}`}
    >
      {/* Interactive Radial Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${service.accentGlow}, transparent 70%)`,
        }}
      />

      {/* Top Gloss Flare */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Card Header: 3D Gradient Icon + Sleek Mono Badge */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br ${service.iconGradient} text-white shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300`}
          >
            <Icon size={22} />
          </div>

          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70 whitespace-nowrap">
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200 mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
          {service.description}
        </p>
      </div>

      {/* Features List */}
      <div className="relative z-10 pt-5 border-t border-slate-200/70 dark:border-slate-800/80 space-y-2.5">
        {service.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
          >
            <CheckCircle2
              size={13}
              className="text-blue-600 dark:text-cyan-400 shrink-0"
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-24 overflow-hidden"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-linear-to-tr from-blue-600/10 via-indigo-500/8 to-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-5"
        >
          <Sparkles size={12} className="text-blue-600 dark:text-cyan-400" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            What We Engineer
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-4"
        >
          Core Software{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Services.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          End-to-end production software engineering across native mobile, scalable cloud web architectures, real-time telemetry, and artificial intelligence.
        </motion.p>
      </div>

      {/* Services Grid (6-Tile Balanced Bento Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, idx) => (
          <InteractiveServiceCard key={service.id} service={service} index={idx} />
        ))}

        {/* 6th Card: Custom Architecture Tile */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="relative rounded-3xl bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-7 shadow-xl shadow-blue-500/5 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf820_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-cyan-400">
                <Layers size={22} />
              </div>
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                Custom Stack
              </span>
            </div>

            <h3 className="text-xl font-black tracking-tight text-white mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
              Have complex architectural needs or specialized enterprise integrations? We design bespoke systems tailored to your technical roadmap.
            </p>
          </div>

          <div className="relative z-10 pt-5 border-t border-white/10">
            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-white text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors shadow-md group/btn cursor-pointer"
            >
              <span>Discuss Your Architecture</span>
              <ArrowUpRight
                size={15}
                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}