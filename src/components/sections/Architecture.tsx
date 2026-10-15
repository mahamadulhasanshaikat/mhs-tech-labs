// src/components/ArchitectureLab.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Smartphone,
  Database,
  MapPin,
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  Layers,
  Radio,
  Sparkles,
  Zap,
} from "lucide-react";

interface PipelineStep {
  seq: string;
  name: string;
  protocol: string;
  spec: string;
  latency: string;
}

interface ArchitectureTrack {
  id: string;
  tag: string;
  title: string;
  icon: React.ElementType;
  accent: string;
  badgeColor: string;
  kpis: { label: string; value: string; metric: string }[];
  pipeline: PipelineStep[];
  topologyGuarantees: string[];
}

const architectureCatalog: ArchitectureTrack[] = [
  {
    id: "mobile-runtime",
    tag: "Mobile Engine",
    title: "Flutter Native Reactive Pipeline",
    icon: Smartphone,
    accent: "from-blue-600 via-indigo-600 to-cyan-400",
    badgeColor: "text-blue-600 dark:text-cyan-400 border-blue-500/25 bg-blue-500/10",
    kpis: [
      { label: "Render Target", value: "120 FPS", metric: "Impeller Engine" },
      { label: "Dispatch Latency", value: "< 16ms", metric: "Riverpod v2" },
      { label: "Offline Durability", value: "100%", metric: "Encrypted SQLite" },
    ],
    pipeline: [
      { seq: "01", name: "UI Dispatch", protocol: "Widget Ingress", spec: "Impeller Render", latency: "0.4ms" },
      { seq: "02", name: "State Notifier", protocol: "Riverpod Stream", spec: "AsyncNotifier", latency: "1.2ms" },
      { seq: "03", name: "Local Cache", protocol: "SQLite WAL", spec: "Encrypted Store", latency: "2.8ms" },
      { seq: "04", name: "Network Sync", protocol: "HTTP/3 Telemetry", spec: "TLS 1.3 Multiplex", latency: "18ms" },
    ],
    topologyGuarantees: ["Zero Context Dependency", "Immutable State Flow", "Thread Isolation"],
  },
  {
    id: "persistence-bridge",
    tag: "Dual Sync",
    title: "Offline-First Cloud Data Gateway",
    icon: Database,
    accent: "from-emerald-600 via-teal-600 to-cyan-500",
    badgeColor: "text-emerald-600 dark:text-emerald-400 border-emerald-500/25 bg-emerald-500/10",
    kpis: [
      { label: "Availability", value: "Air-Gapped", metric: "Zero Drops" },
      { label: "Conflict Resolution", value: "Vector Clock", metric: "Auto Merge" },
      { label: "Cloud Catch-up", value: "< 90ms", metric: "WebSocket RPC" },
    ],
    pipeline: [
      { seq: "01", name: "Local Journal", protocol: "Client Storage", spec: "SQLite WAL", latency: "1.1ms" },
      { seq: "02", name: "Conflict Broker", protocol: "Vector Logic", spec: "Deterministic", latency: "3.4ms" },
      { seq: "03", name: "Realtime Stream", protocol: "WSS Engine", spec: "Supabase RPC", latency: "14ms" },
      { seq: "04", name: "PostgreSQL", protocol: "Cloud Storage", spec: "RLS Security", latency: "4.2ms" },
    ],
    topologyGuarantees: ["Row-Level Security (RLS)", "Strict ACID Transactions", "Auto Reconnect"],
  },
  {
    id: "spatial-telemetry",
    tag: "Geospatial",
    title: "High-Throughput Spatial Tracking",
    icon: MapPin,
    accent: "from-indigo-600 via-blue-600 to-cyan-400",
    badgeColor: "text-indigo-600 dark:text-cyan-400 border-indigo-500/25 bg-indigo-500/10",
    kpis: [
      { label: "Ping Cadence", value: "< 120ms", metric: "Sub-Second" },
      { label: "Spatial Filter", value: "±2.5m", metric: "Kalman Filter" },
      { label: "Active Nodes", value: "25k+", metric: "Edge Sockets" },
    ],
    pipeline: [
      { seq: "01", name: "Sensor Ingest", protocol: "GPS Bridge", spec: "Speed Filtering", latency: "5ms" },
      { seq: "02", name: "Socket Relay", protocol: "Binary Protobuf", spec: "Dual Ingress", latency: "22ms" },
      { seq: "03", name: "Geofence Core", protocol: "PostGIS Engine", spec: "Polygon Matrix", latency: "8ms" },
      { seq: "04", name: "Map Renderer", protocol: "Vector Canvas", spec: "Polyline Stream", latency: "16ms" },
    ],
    topologyGuarantees: ["Dead-Reckoning Ingestion", "Dynamic Clustering", "E2E Encryption"],
  },
  {
    id: "ai-edge-runtime",
    tag: "AI Gateway",
    title: "Edge Inference & Decision Engine",
    icon: BrainCircuit,
    accent: "from-purple-600 via-indigo-600 to-cyan-400",
    badgeColor: "text-purple-600 dark:text-violet-400 border-purple-500/25 bg-purple-500/10",
    kpis: [
      { label: "Model Latency", value: "< 140ms", metric: "Quantized ONNX" },
      { label: "Confidence", value: "98.8%", metric: "Domain Validated" },
      { label: "Data Retention", value: "0%", metric: "Zero Leaks" },
    ],
    pipeline: [
      { seq: "01", name: "Payload Parser", protocol: "HTTPS Gateway", spec: "Schema Guard", latency: "2.1ms" },
      { seq: "02", name: "Vector Embedder", protocol: "Tensor Core", spec: "Embedding Math", latency: "12ms" },
      { seq: "03", name: "Inference Engine", protocol: "Neural Runtime", spec: "Edge Quantized", latency: "45ms" },
      { seq: "04", name: "Action Dispatch", protocol: "RPC Handler", spec: "Deterministic", latency: "3.5ms" },
    ],
    topologyGuarantees: ["Zero Retention Policy", "Semantic Cache", "Edge Quantization"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 260,
    },
  },
};

export default function Architecture() {
  const [selectedTrack, setSelectedTrack] = useState<ArchitectureTrack>(
    architectureCatalog[0]
  );

  return (
    <section
      id="architecture"
      className="relative scroll-mt-24 pt-16 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden select-none"
    >
      {/* Background Kinetic Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-155 h-[280px] bg-linear-to-tr from-blue-600/20 via-indigo-500/15 to-cyan-400/20 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      {/* Compact Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-3"
        >
          <Sparkles size={11} className="text-blue-600 dark:text-cyan-400 animate-spin-slow" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            System Topology & Data Flow
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight mb-2"
        >
          Software{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Architectures.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto"
        >
          Production topology matrices showing execution paths, protocol layers, and latency budgets.
        </motion.p>
      </div>

      {/* Track Switcher Bar with Spring Pill Transition */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {architectureCatalog.map((item) => {
          const isSelected = selectedTrack.id === item.id;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.id}
              type="button"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedTrack(item)}
              className={`relative p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                isSelected
                  ? "bg-white dark:bg-slate-900 border-blue-500/50 dark:border-cyan-400/50 shadow-md shadow-blue-500/5"
                  : "bg-white/70 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeTrackGlow"
                  className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-cyan-500/5 to-transparent pointer-events-none"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}

              <div className="flex items-center justify-between mb-1.5 relative z-10">
                <div
                  className={`p-1.5 rounded-lg transition-transform duration-300 ${
                    isSelected
                      ? "bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950 scale-105"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Icon size={14} />
                </div>
                <span className="text-[9px] font-mono uppercase font-bold text-slate-400">
                  {item.tag}
                </span>
              </div>
              <p
                className={`text-[11.5px] font-bold truncate relative z-10 ${
                  isSelected
                    ? "text-slate-950 dark:text-white"
                    : "text-slate-700 dark:text-slate-400"
                }`}
              >
                {item.title}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Main Architecture Console (Animated Switcher) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTrack.id}
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -14, scale: 0.98 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl shadow-md p-5 sm:p-6"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200/70 dark:border-slate-800/70">
            <div>
              <span
                className={`text-[9.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${selectedTrack.badgeColor}`}
              >
                {selectedTrack.tag} Pipeline
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-950 dark:text-white tracking-tight mt-1">
                {selectedTrack.title}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10.5px] font-mono font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Topology Verified</span>
            </div>
          </div>

          {/* Staggered KPIs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-4"
          >
            {selectedTrack.kpis.map((kpi) => (
              <motion.div
                key={kpi.label}
                variants={cardItemVariants}
                whileHover={{ y: -2 }}
                className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70 text-left transition-colors hover:border-blue-500/40"
              >
                <p className="text-xl sm:text-2xl font-black font-mono tracking-tight text-slate-950 dark:text-white">
                  {kpi.value}
                </p>
                <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                  {kpi.label}
                </p>
                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  {kpi.metric}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Staggered 4-Step Pipeline Flow */}
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
              <span className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                <Layers size={12} className="text-blue-500" />
                <span>Execution Pipeline</span>
              </span>
              <span className="flex items-center gap-1 text-blue-600 dark:text-cyan-400">
                <Radio size={10} className="animate-pulse" /> Live Sequential Stream
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-4 gap-2 relative"
            >
              {selectedTrack.pipeline.map((step, idx) => (
                <motion.div
                  key={step.seq}
                  variants={cardItemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group relative p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-cyan-400/50 transition-all shadow-2xs cursor-default"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/50 dark:border-blue-900/50">
                      STEP {step.seq}
                    </span>
                    <span className="text-[9.5px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      {step.latency}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-[10px] font-mono text-blue-600 dark:text-cyan-400">
                    {step.protocol}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {step.spec}
                  </p>

                  {/* Directional Pulsing Arrow Connector */}
                  {idx < selectedTrack.pipeline.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 items-center justify-center text-slate-400 shadow-2xs"
                    >
                      <ArrowRight size={10} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Guarantees with Hover Badges */}
          <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-800/70 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-mono text-slate-500 dark:text-slate-400 text-[10px]">
              ENGINEERING GUARANTEES
            </span>

            <div className="flex flex-wrap gap-1.5">
              {selectedTrack.topologyGuarantees.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -1, scale: 1.03 }}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 cursor-default"
                >
                  <ShieldCheck size={11} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}