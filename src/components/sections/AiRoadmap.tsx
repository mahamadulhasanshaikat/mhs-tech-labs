// src/components/AiRoadmap.tsx
"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Bot, LineChart, Cpu } from "lucide-react";

export default function AiRoadmap() {
  return (
    <section id="ai-lab" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-linear-to-br from-slate-900 via-blue-950 to-slate-950 text-white border border-blue-500/30 shadow-2xl"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-cyan-300 border border-cyan-400/30 mb-4">
            <Sparkles size={13} />
            <span>MHS AI & Machine Learning Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Seamlessly Shifting Towards Intelligent AI & ML Ecosystems.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Alongside our rock-solid foundation in Flutter, Riverpod, Next.js, and Supabase/PostgreSQL, MHS Tech Lab is actively building intelligent machine learning pipelines, predictive analytics, and AI-assisted workflows for modern businesses.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Bot, title: "Smart AI Agents", desc: "LLM & custom chatbot integration inside web and Flutter apps." },
              { icon: LineChart, title: "Predictive ML", desc: "Data-driven forecasting models exposed via fast REST APIs." },
              { icon: Cpu, title: "Automated Pipelines", desc: "Intelligent process automation with Supabase & Python backends." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <item.icon size={20} className="text-cyan-400 mb-2" />
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}