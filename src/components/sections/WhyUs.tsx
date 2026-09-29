"use client";

import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Headphones, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Eye, 
  ArrowRight,
  Code2
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Smartphone,
    title: "1 Codebase, Native Speed",
    tag: "Flutter Engine",
    description: "Eliminate the cost of separate iOS and Android engineering teams while delivering fluid 60-120 FPS performance and native UX.",
    highlight: "50% Faster Time-to-Market",
    color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-600 dark:text-sky-400",
  },
  {
    icon: Zap,
    title: "Sub-Second Web Delivery",
    tag: "Next.js Edge",
    description: "Server-side rendering and edge caching with Next.js 16 to achieve 99+ Google Lighthouse scores and zero hydration delay.",
    highlight: "< 0.1s Hydration Lag",
    color: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "100% Code Ownership",
    tag: "Enterprise IP",
    description: "No vendor lock-in. Full production source code, modular architecture, automated CI/CD scripts, and IP rights transferred directly to you.",
    highlight: "Full Source & Docs",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Headphones,
    title: "Direct Engineer Support",
    tag: "No Middlemen",
    description: "Collaborate directly with senior architects via dedicated Slack and Discord channels for real-time iteration and launch support.",
    highlight: "Dedicated Engineering Channel",
    color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400",
  },
];

export default function WhyUs() {
  return (
    <section 
      id="why-us" 
      className="py-24 relative bg-white dark:bg-[#070b14] border-b border-slate-200 dark:border-white/6 overflow-hidden transition-colors duration-300 scroll-mt-16"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-150 h-87.5 bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-125 h-87.5 bg-sky-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400" />
            <span>THE MHS ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            Engineered for Quality. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-teal-600 to-sky-600 dark:from-cyan-400 dark:via-teal-300 dark:to-sky-400">
              Architected to Scale.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
            We don’t just write code; we minimize your technical debt and build resilient foundations tailored for sustainable business growth.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-white/8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xs dark:shadow-xl relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl bg-linear-to-br ${item.color} border flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed Executive Mission & Vision Dashboard */}
        <div className="rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200 dark:border-white/8 p-8 sm:p-10 backdrop-blur-2xl relative overflow-hidden shadow-xs dark:shadow-2xl transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Mission */}
            <div className="lg:col-span-6 space-y-3 lg:border-r border-slate-200 dark:border-white/8 lg:pr-8">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Target size={15} />
                <span>Our Engineering Mission</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Eliminate Startup Technical Debt with Precision Architecture
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                To free high-growth startups from fragmented codebases and deliver clean, unified Web and Flutter mobile platforms designed for instant traction.
              </p>
            </div>

            {/* Vision */}
            <div className="lg:col-span-6 space-y-3 lg:pl-4">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Eye size={15} />
                <span>Our Long-Term Vision</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Setting the Benchmark for High-Conversion Engineering
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                Building an ecosystem where visionary digital concepts launch effortlessly without infrastructure bottlenecks—scaling seamlessly from day one.
              </p>
            </div>

          </div>

          {/* Action Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Code2 size={15} className="text-cyan-600 dark:text-cyan-400" />
              <span>Full-Cycle Web & Flutter Engineering Partner</span>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group cursor-pointer"
            >
              <span>Discuss Your Product Roadmap</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}