"use client";

import { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import { 
  Smartphone, 
  Globe, 
  Sparkles, 
  ArrowUpRight, 
  Zap,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.platform.includes(filter));

  return (
    <section 
      id="projects" 
      className="py-24 relative bg-white dark:bg-[#070b14] border-b border-slate-200 dark:border-white/6 overflow-hidden transition-colors duration-300 scroll-mt-16"
    >
      {/* Background ambient lighting - লাইট ও ডার্কে পারফেক্ট অপাসিটি */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-175 h-90 bg-cyan-500/5 dark:bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400" />
            <span>FEATURED CLIENT BUILDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            Production Systems Built for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-teal-600 to-sky-600 dark:from-cyan-400 dark:via-teal-300 dark:to-sky-400">
              Web & Flutter Mobile Apps.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
            Explore our deployed applications—from single-codebase Flutter releases on the App Store & Google Play to high-performance Next.js web ecosystems.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-white/5">
          {["All", "Flutter", "Web"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                filter === tab
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab === "All" ? "All Projects" : tab === "Flutter" ? "Flutter Apps (iOS/Android)" : "Web Platforms"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: ProjectItem) => {
            const isFlutter = project.platform.includes("Flutter");
            const isWeb = project.platform.includes("Web");

            return (
              <div
                key={project.id}
                className="p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-white/8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xs dark:shadow-2xl relative overflow-hidden"
              >
                <div>
                  {/* Card Header & Platform Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-medium flex items-center gap-1.5">
                      {isFlutter && <Smartphone size={13} className="text-sky-600 dark:text-sky-400" />}
                      {isWeb && <Globe size={13} className="text-cyan-600 dark:text-cyan-400" />}
                      <span>{project.platform}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">{project.tagline}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Performance Metric Pill */}
                  <div className="p-3 rounded-xl bg-white dark:bg-black/50 border border-slate-200/80 dark:border-white/5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
                    <Zap size={13} className="text-amber-500 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>

                  {/* Key Feature List */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-normal">
                        <CheckCircle2 size={13} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white dark:bg-white/3 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </Link>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600">Client Build</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}