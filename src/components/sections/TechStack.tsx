"use client";

import { useState } from "react";
import { techStackData } from "@/data/techStack";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Cpu
} from "lucide-react";

const categoryConfig = {
  "Flutter & Mobile": {
    icon: Smartphone,
    color: "from-sky-500/20 to-blue-500/10",
    border: "hover:border-sky-500/40",
    tagColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    subtitle: "Single Codebase • iOS & Android 60-120 FPS",
  },
  "Web & Frontend": {
    icon: Globe,
    color: "from-cyan-500/20 to-teal-500/10",
    border: "hover:border-cyan-500/40",
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    subtitle: "Server Components • Zero Hydration Lag",
  },
  "Backend & Realtime": {
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-500/40",
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    subtitle: "Unified APIs • Sub-20ms Query Execution",
  },
  "Cloud & Deployment": {
    icon: Cloud,
    color: "from-indigo-500/20 to-purple-500/10",
    border: "hover:border-indigo-500/40",
    tagColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    subtitle: "Global Edge Anycast • Automated App Release",
  },
} as const;

type CategoryType = keyof typeof categoryConfig;

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | "All">("All");

  const categories: CategoryType[] = [
    "Flutter & Mobile",
    "Web & Frontend",
    "Backend & Realtime",
    "Cloud & Deployment",
  ];

  const filteredData = (cat: CategoryType) =>
    techStackData.filter((item) => item.category === cat);

  return (
    <section id="tech-stack" className="py-24 bg-[#070b14] relative border-b border-white/[0.06] overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
              <Cpu size={13} className="text-cyan-400" />
              <span>PRODUCTION-PROVEN ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Built with tools trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                Industry-Leading Teams.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed font-normal">
            আমরা কোনো পরীক্ষামূলক ফ্রেমওয়ার্ক নয়—শুধুমাত্র ইন্ডাস্ট্রি-স্ট্যান্ডার্ড ও লং-টার্ম সাপোর্ট নিশ্চিত করে এমন টেকনোলজি স্ট্যাক ব্যবহার করি।
          </p>
        </div>

        {/* ক্যাটাগরি ফিল্টার চিপস */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === "All"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                : "bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            All Ecosystems
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ৪ কলাম ম্যাট্রিক্স গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories
            .filter((cat) => selectedCategory === "All" || selectedCategory === cat)
            .map((category) => {
              const conf = categoryConfig[category];
              const Icon = conf.icon;
              const items = filteredData(category);

              return (
                <div
                  key={category}
                  className={`p-6 rounded-2xl bg-slate-900/40 border border-white/[0.08] ${conf.border} transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xl`}
                >
                  <div>
                    {/* কার্ড হেডার */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${conf.color} border border-white/10 flex items-center justify-center text-white`}>
                        <Icon size={20} />
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${conf.tagColor}`}>
                        {items.length} Modules
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {category}
                    </h3>
                    <p className="text-[11px] text-slate-400 mb-6 leading-relaxed">
                      {conf.subtitle}
                    </p>

                    {/* টেক আইটেম লিস্ট */}
                    <div className="space-y-2">
                      {items.map((tech) => (
                        <div
                          key={tech.name}
                          className="p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between"
                        >
                          <div>
                            <span className="text-xs font-semibold text-slate-200 block">
                              {tech.name}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono block">
                              {tech.role}
                            </span>
                          </div>
                          {tech.badge && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                              {tech.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* কার্ড ফুটার স্ট্যাটাস */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 size={12} />
                      Production Tested
                    </span>
                    <ArrowUpRight size={13} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}