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
    <section id="services" className="py-24 bg-[#050811] relative border-b border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-sky-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
              <Sparkles size={13} className="text-cyan-400" />
              <span>WEB & MOBILE CORE FOCUS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Specialized Engineering. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                Web & Flutter Mobile Apps.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed font-normal">
            আমরা জটিল ডোমেইন বাদ দিয়ে সম্পূর্ণভাবে নিবেদিত দুটি জিনিসে—একক কোডবেসে প্রিমিয়াম Flutter মোবাইল অ্যাপ এবং দ্রুতগতির Next.js ওয়েব প্ল্যাটফর্ম।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* কার্ড ১: Flutter Cross-Platform Mobile Engineering (৭ কলাম) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-3xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/25 text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Smartphone size={22} />
                </div>
                
                <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 text-[11px] font-mono">
                  <button 
                    onClick={() => setMobileTab("flutter")} 
                    className={`px-3 py-1 rounded-lg transition-all ${mobileTab === "flutter" ? "bg-sky-500 text-slate-950 font-bold" : "text-slate-400"}`}
                  >
                    1 Codebase = 2 Stores
                  </button>
                  <button 
                    onClick={() => setMobileTab("features")} 
                    className={`px-3 py-1 rounded-lg transition-all ${mobileTab === "features" ? "bg-sky-500 text-slate-950 font-bold" : "text-slate-400"}`}
                  >
                    Native Features
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                Cross-Platform Flutter Mobile Apps
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-6">
                একটিমাত্র কোডবেস দিয়ে iOS এবং Android উভয়ের জন্য আলাদা নেটিভ পারফরম্যান্স। ৫০% কম খরচে ও দ্বিগুণ দ্রুত সময়ে অ্যাপ স্টোর ও প্লে স্টোরে অ্যাপ রিলিজ করুন।
              </p>

              {mobileTab === "flutter" ? (
                <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-4 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Flutter 3.x • Dart Core
                    </span>
                    <span className="text-sky-400 font-semibold">60-120 FPS Fluid</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Development Time</span>
                      <span className="text-base font-extrabold text-emerald-400 font-mono">2x Faster</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Cost Savings</span>
                      <span className="text-base font-extrabold text-sky-400 font-mono">~45% Saved</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                      <span className="text-[10px] text-slate-500 block mb-0.5">Crash-Free Rate</span>
                      <span className="text-base font-extrabold text-white font-mono">99.9%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="flex items-center gap-1.5"><Zap size={13} className="text-amber-400" /> Firebase Push Notifications</span>
                    <span className="text-emerald-400">Integrated</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="flex items-center gap-1.5"><Activity size={13} className="text-cyan-400" /> Offline SQLite / Hive DB</span>
                    <span className="text-sky-400">Real-time Sync</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Biometrics & In-App Payments</span>
                    <span className="text-white">Secured</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
              <span>Flutter App Store & Play Store Ready</span>
              <ArrowUpRight size={16} className="text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* কার্ড ২: Modern Next.js Web Platforms (৫ কলাম) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Globe size={22} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                  Next.js 16 + React
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                High-Converting Web Platforms
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                অত্যন্ত দ্রুতগতির ওয়েব ড্যাশবোর্ড ও SaaS প্ল্যাটফর্ম। নিখুঁত SEO অপ্টিমাইজেশন এবং তাৎক্ষণিক লোডিং স্পিড।
              </p>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] space-y-2.5 font-mono text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Server-Side Rendering</span>
                  <span className="text-emerald-400 font-bold">Sub-second</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Core Web Vitals</span>
                  <span className="text-cyan-400 font-bold">Grade A+</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Responsive UI</span>
                  <span className="text-white font-bold">Mobile & Desktop</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
              <span>Full-Stack Web Systems</span>
              <ArrowUpRight size={16} className="text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* কার্ড ৩: Unified Backend & APIs for Web & App (৫ কলাম) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/25 text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Database size={22} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  Unified Core
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                Unified APIs & Cloud Sync
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                একটিমাত্র সুরক্ষিত API ব্যাকএন্ড যা ওয়েব প্ল্যাটফর্ম এবং Flutter মোবাইল অ্যাপ উভয়ে সমানভাবে রিয়েল-টাইম ডাটা সিঙ্ক করে।
              </p>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/[0.08] font-mono text-xs text-slate-400">
                <div className="text-teal-400 font-semibold mb-0.5">REST / GraphQL / Supabase</div>
                <span className="text-slate-500 text-[11px]">Zero latency data sync across all devices</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
              <span>Backend & API Architecture</span>
              <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* কার্ড ৪: Figma to Flutter & Web UI/UX (৭ কলাম) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-2xl shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Layers size={22} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                  Pixel-Perfect UI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                Figma to Production-Ready Flutter & Web Code
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-6">
                ডিজাইনের প্রতিটি পিক্সেল বজায় রেখে ফ্লুইড মাইক্রো-অ্যানিমেশন এবং রেস্পন্সিভ লেআউটে রূপান্তর, যা ব্যবহারকারীর সেরা অভিজ্ঞতা নিশ্চিত করে।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>Pixel Perfection</span>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>60 FPS Animations</span>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>Design Systems</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
              <span>Fluid UX Engineering</span>
              <ArrowUpRight size={16} className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}