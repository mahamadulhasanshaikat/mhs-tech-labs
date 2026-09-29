"use client";

import {
  Sparkles,
  Target,
  ShieldCheck,
  Smartphone,
  Globe,
  Code2,
  CheckCircle2
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Precision Focus",
    description: "We don't try to build everything. We master two domains exceptionally well: 60–120 FPS Flutter mobile apps and sub-second Next.js web applications.",
    tag: "Domain Mastery",
    borderHover: "hover:border-cyan-500/40",
    color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Smartphone,
    title: "Single Codebase Velocity",
    description: "Unified cross-platform architectures deploy simultaneously to iOS and Android, cutting ongoing maintenance overhead by up to 45%.",
    tag: "iOS & Android",
    borderHover: "hover:border-sky-500/40",
    color: "text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Zero Technical Debt",
    description: "Engineered with strict TypeScript typing, declarative state machines, automated CI/CD checks, and full source code ownership transferred on day one.",
    tag: "Enterprise Standards",
    borderHover: "hover:border-emerald-500/40",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Code2,
    title: "Direct Architect Access",
    description: "Work directly with lead software engineers and system architects in real-time communication channels without non-technical project managers.",
    tag: "No Bottlenecks",
    borderHover: "hover:border-indigo-500/40",
    color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-white/6 overflow-hidden scroll-mt-20 transition-colors duration-300"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-10 w-125 h-100 bg-cyan-500/10 dark:bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-112.5 h-87.5 bg-sky-500/10 dark:bg-sky-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* সম্পূর্ণ সেন্টারে সাজানো সেকশন হেডার */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          {/* ব্যাজ */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400" />
            <span>ABOUT MHS TECH LABS</span>
          </div>

          {/* মেইন হেডার */}
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            Engineered for Speed. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-teal-600 to-sky-600 dark:from-cyan-400 dark:via-teal-300 dark:to-sky-400">
              Built for High-Growth Ventures.
            </span>
          </h2>
        </div>

        {/* Main Bento Overview & SLA Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">

          {/* Studio Bio Card */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl shadow-xl dark:shadow-2xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-medium">
                  Engineering Philosophy
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Specialized Studio • Est. 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                Eliminating technical bloat so your product scales effortlessly from day one.
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-2xl font-normal">
                Founded to bridge the gap between fast-moving startups and enterprise-grade codebases, we reject generic agency formulas. Rather than spreading our focus across dozens of unvetted frameworks, we dedicate 100% of our engineering bandwidth to mastering <strong className="text-slate-900 dark:text-white font-semibold">Next.js 16</strong> and <strong className="text-slate-900 dark:text-white font-semibold">cross-platform Flutter</strong>.
              </p>

              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                This strict focus enables us to release dual-store mobile applications and scalable web systems at twice the speed, with pristine UI fidelity and zero technical debt.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-5 font-mono text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Globe size={15} className="text-cyan-600 dark:text-cyan-400" />
                  <span>Next.js Turbopack</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone size={15} className="text-sky-600 dark:text-sky-400" />
                  <span>Flutter (Android & iOS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Metrics Stack */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-md dark:shadow-none">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Development Cadence</span>
                <Code2 size={16} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="my-2">
                <span className="text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">20 Days</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Iterative TestFlight and staging builds delivered as per project roadmap.</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-md dark:shadow-none">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Source Code Ownership</span>
                <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="my-2">
                <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">100% IP</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Full source code, CI/CD scripts, and docs handed over.</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl hover:border-sky-500/40 transition-all flex flex-col justify-between shadow-md dark:shadow-none">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Production SLA</span>
                <CheckCircle2 size={16} className="text-sky-600 dark:text-sky-400" />
              </div>
              <div className="my-2">
                <span className="text-3xl font-black text-sky-600 dark:text-sky-400 font-mono">99.98%</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Sub-second response edge infrastructure uptime.</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 ${item.borderHover} transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-lg dark:shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform ${item.color}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}