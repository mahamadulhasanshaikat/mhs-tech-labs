"use client";

import { useState } from "react";
import { 
  Globe, 
  Smartphone, 
  Layers, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  Activity,
  CheckCircle2,
  Database
} from "lucide-react";

export default function Services() {
  const [mobileTab, setMobileTab] = useState<"flutter" | "features">("flutter");

  return (
    <section 
      id="services" 
      className="py-24 bg-slate-50 dark:bg-[#050811] relative border-b border-slate-200 dark:border-white/6 overflow-hidden transition-colors duration-300 scroll-mt-16"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-125 h-125 bg-cyan-500/10 dark:bg-cyan-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-20 w-125 h-125 bg-sky-500/10 dark:bg-sky-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400" />
            <span>WEB & MOBILE CORE FOCUS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            Specialized Engineering. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-teal-600 to-sky-600 dark:from-cyan-400 dark:via-teal-300 dark:to-sky-400">
              Web & Flutter Mobile Apps.
            </span>
          </h2>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Flutter Cross-Platform Mobile Engineering (7 Cols) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl relative overflow-hidden shadow-lg dark:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-3xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/25 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Smartphone size={22} />
                </div>
                
                <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 text-[11px] font-mono">
                  <button 
                    type="button"
                    onClick={() => setMobileTab("flutter")} 
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      mobileTab === "flutter" 
                        ? "bg-sky-500 text-slate-950 font-bold shadow-xs" 
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    1 Codebase = 2 Stores
                  </button>
                  <button 
                    type="button"
                    onClick={() => setMobileTab("features")} 
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      mobileTab === "features" 
                        ? "bg-sky-500 text-slate-950 font-bold shadow-xs" 
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Native Features
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                Cross-Platform Flutter Mobile Apps
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl mb-6 font-normal">
                Deliver uncompromised native performance across iOS and Android from a single codebase. Cut development overhead by 45% and ship to both app stores simultaneously.
              </p>

              {mobileTab === "flutter" ? (
                <div className="rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/8 p-4 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Flutter 3.x • Dart Core
                    </span>
                    <span className="text-sky-600 dark:text-sky-400 font-semibold">60–120 FPS Fluid</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 text-center shadow-xs dark:shadow-none">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Development Time</span>
                      <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">2x Faster</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 text-center shadow-xs dark:shadow-none">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Cost Savings</span>
                      <span className="text-base font-extrabold text-sky-600 dark:text-sky-400 font-mono">~45% Saved</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 text-center shadow-xs dark:shadow-none">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Crash-Free Rate</span>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono">99.9%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/8 space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5"><Zap size={13} className="text-amber-500" /> Firebase Push Notifications</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Integrated</span>
                  </div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5"><Activity size={13} className="text-cyan-600 dark:text-cyan-400" /> Offline SQLite / Hive DB</span>
                    <span className="text-sky-600 dark:text-sky-400 font-semibold">Real-time Sync</span>
                  </div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" /> Biometrics & In-App Purchases</span>
                    <span className="text-slate-900 dark:text-white font-semibold">Secured</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              <span>App Store & Google Play Ready</span>
              <ArrowUpRight size={16} className="text-sky-600 dark:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Modern Next.js Web Platforms (5 Cols) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl shadow-lg dark:shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Globe size={22} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-medium">
                  Next.js 16 + React
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                High-Converting Web Platforms
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                Sub-second response web apps, dashboards, and SaaS platforms engineered for peak search indexing and instant edge rendering.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/8 space-y-2.5 font-mono text-xs">
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span>Server-Side Rendering</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Sub-second</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span>Core Web Vitals</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">Grade A+</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span>Responsive UI</span>
                  <span className="text-slate-900 dark:text-white font-bold">Mobile & Desktop</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              <span>Full-Stack Web Systems</span>
              <ArrowUpRight size={16} className="text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Unified Backend & APIs (5 Cols) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl shadow-lg dark:shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/25 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Database size={22} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                  Unified Core
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                Unified APIs & Cloud Sync
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                Centralized, high-throughput backend services and REST/GraphQL APIs that keep web clients and Flutter mobile apps synchronized in real time.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/8 font-mono text-xs text-slate-500 dark:text-slate-400">
                <div className="text-teal-600 dark:text-teal-400 font-semibold mb-0.5">REST / Python / AI Microservices</div>
                <span className="text-slate-500 text-[11px]">Zero-latency state synchronization across platforms</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              <span>Backend & API Architecture</span>
              <ArrowUpRight size={16} className="text-teal-600 dark:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Figma to Flutter & Web UI/UX (7 Cols) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl shadow-lg dark:shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Layers size={22} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">
                  Pixel-Perfect UI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                Figma to Production-Ready Code
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl mb-6 font-normal">
                Translate design systems into fluid 60–120 FPS Flutter widgets and responsive web interfaces with exact token alignment and micro-interactions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Pixel Fidelity</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
                  <span>60 FPS Animations</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Design Systems</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              <span>Fluid UX Engineering</span>
              <ArrowUpRight size={16} className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}