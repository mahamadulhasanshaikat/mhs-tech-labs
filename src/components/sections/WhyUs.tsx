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
    color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400",
  },
  {
    icon: Zap,
    title: "Sub-Second Web Delivery",
    tag: "Next.js Edge",
    description: "Server-side rendering and edge caching with Next.js 16 to achieve 99+ Google Lighthouse scores and zero hydration delay.",
    highlight: "< 0.1s Hydration Lag",
    color: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "100% Code Ownership",
    tag: "Enterprise IP",
    description: "No vendor lock-in. Full production source code, modular architecture, automated CI/CD scripts, and IP rights transferred directly to you.",
    highlight: "Full Source & Docs",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    icon: Headphones,
    title: "Direct Engineer Support",
    tag: "No Middlemen",
    description: "Collaborate directly with senior architects via dedicated Slack and Discord channels for real-time iteration and launch support.",
    highlight: "Dedicated Engineering Channel",
    color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative bg-[#070b14] border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient aura */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-sky-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
              <Sparkles size={13} className="text-cyan-400" />
              <span>THE MHS ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Engineered for Quality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                Architected to Scale.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed font-normal">
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
                className="p-7 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xl relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.color} border flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Executive Mission & Vision Dashboard */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 border border-white/[0.08] p-8 sm:p-10 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Mission */}
            <div className="lg:col-span-6 space-y-3 lg:border-r lg:border-white/[0.08] lg:pr-8">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Target size={15} />
                <span>Our Engineering Mission</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                Eliminate Startup Technical Debt with Precision Architecture
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                To free high-growth startups from fragmented codebases and deliver clean, unified Web and Flutter mobile platforms designed for instant traction.
              </p>
            </div>

            {/* Vision */}
            <div className="lg:col-span-6 space-y-3 lg:pl-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Eye size={15} />
                <span>Our Long-Term Vision</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                Setting the Benchmark for High-Conversion Engineering
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                Building an ecosystem where visionary digital concepts launch effortlessly without infrastructure bottlenecks—scaling seamlessly from day one.
              </p>
            </div>

          </div>

          {/* Action Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Code2 size={15} className="text-cyan-400" />
              <span>Full-Cycle Web & Flutter Engineering Partner</span>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
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