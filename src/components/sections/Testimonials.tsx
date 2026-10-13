// src/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, ShieldCheck, Zap, Lock } from "lucide-react";

const testimonials = [
  {
    quote:
      "MHS Tech Lab built our cross-platform Flutter app with Riverpod and live map tracking. Even in low-network areas, their SQLite offline sync works flawlessly.",
    author: "Operations Director",
    company: "Logistics & Fleet Startup",
    stack: "Flutter • Riverpod • Maps • Supabase",
  },
  {
    quote:
      "Our Next.js SaaS portal and PostgreSQL backend scaled effortlessly. Their clean code structure and fast REST API integration saved us months of work.",
    author: "Founder & CTO",
    company: "CloudSync Enterprise",
    stack: "Next.js • Tailwind • PostgreSQL",
  },
  {
    quote:
      "What impressed us most is their forward-thinking AI roadmap. They structured our Firebase & Supabase data pipelines so we could plug in ML models seamlessly.",
    author: "Product Lead",
    company: "Retail Analytics Hub",
    stack: "AI/ML • REST API • Next.js",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>Client Trust & Quality</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Why Teams Partner With Us
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md flex flex-col justify-between"
          >
            <div>
              <Quote size={24} className="text-blue-600 dark:text-cyan-400 mb-4 opacity-80" />
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <p className="font-bold text-sm text-slate-900 dark:text-white">{item.author}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.company}</p>
              <span className="inline-block mt-2 text-[11px] font-mono text-blue-600 dark:text-cyan-400">
                {item.stack}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SLA & Code Quality Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800">
        {[
          { icon: ShieldCheck, title: "100% Clean Ownership", desc: "Full Git repository & IP ownership transferred to you." },
          { icon: Zap, title: "High-Speed Performance", desc: "60/120 FPS Flutter UI & sub-second Next.js SSR loads." },
          { icon: Lock, title: "Enterprise DB Security", desc: "PostgreSQL Row-Level Security & encrypted REST APIs." },
        ].map((g, i) => (
          <div key={i} className="flex items-start gap-3.5 p-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-cyan-400 shrink-0">
              <g.icon size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold">{g.title}</h3>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}