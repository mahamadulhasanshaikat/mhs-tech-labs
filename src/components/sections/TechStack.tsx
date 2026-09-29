"use client";

import { useState } from "react";
import { techStackData } from "@/data/techStack";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  CheckCircle2, 
  ArrowUpRight,
  Cpu
} from "lucide-react";

const categoryConfig = {
  "Flutter & Mobile": {
    icon: Smartphone,
    color: "from-sky-500/20 to-blue-500/10",
    border: "hover:border-sky-500/40",
    tagColor: "text-sky-600 dark:text-sky-400 border-sky-500/30 bg-sky-50 dark:bg-sky-500/10",
    subtitle: "Single Codebase • iOS & Android 60-120 FPS",
  },
  "Web & Frontend": {
    icon: Globe,
    color: "from-cyan-500/20 to-teal-500/10",
    border: "hover:border-cyan-500/40",
    tagColor: "text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10",
    subtitle: "Server Components • Zero Hydration Lag",
  },
  "Backend & Realtime": {
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-500/40",
    tagColor: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10",
    subtitle: "Unified APIs • Sub-20ms Query Execution",
  },
  "Cloud & Deployment": {
    icon: Cloud,
    color: "from-indigo-500/20 to-purple-500/10",
    border: "hover:border-indigo-500/40",
    tagColor: "text-indigo-600 dark:text-indigo-400 border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10",
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
    <section 
      id="tech-stack" 
      className="py-24 bg-white dark:bg-[#070b14] relative border-b border-slate-200 dark:border-white/6 overflow-hidden transition-colors duration-300 scroll-mt-16"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Cpu size={13} className="text-cyan-600 dark:text-cyan-400" />
            <span>PRODUCTION-PROVEN ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            Built with tools trusted by <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-teal-600 to-sky-600 dark:from-cyan-400 dark:via-teal-300 dark:to-sky-400">
              Industry-Leading Teams.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
            We avoid experimental frameworks and build exclusively with battle-tested technologies backed by long-term enterprise support.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 pb-4 border-b border-slate-200 dark:border-white/5">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === "All"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                : "bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            All Ecosystems
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Matrix Grid */}
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
                  className={`p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 ${conf.border} transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-lg dark:shadow-xl`}
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${conf.color} border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white`}>
                        <Icon size={20} />
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${conf.tagColor}`}>
                        {items.length} Modules
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {category}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                      {conf.subtitle}
                    </p>

                    {/* Tech Item List */}
                    <div className="space-y-2">
                      {items.map((tech) => (
                        <div
                          key={tech.name}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all flex items-center justify-between"
                        >
                          <div>
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">
                              {tech.name}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono block">
                              {tech.role}
                            </span>
                          </div>
                          {tech.badge && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-xs dark:shadow-none">
                              {tech.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Status */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={12} />
                      Production Tested
                    </span>
                    <ArrowUpRight size={13} className="text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}