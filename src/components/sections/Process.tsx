"use client";

import { 
  Sparkles, 
  Search, 
  Layers, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Sprint 0",
    icon: Search,
    title: "Discovery & Architecture",
    description: "Deep dive into product requirements, target audience UX, and defining the unified Web & Flutter database schema.",
    deliverable: "Tech Spec & System Design",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-400/30 text-cyan-400",
  },
  {
    step: "02",
    phase: "Sprint 1-2",
    icon: Layers,
    title: "Figma UI/UX & Prototyping",
    description: "Designing high-fidelity, interactive prototypes with design tokens tailored for responsive web and mobile touch interfaces.",
    deliverable: "Clickable Figma Prototype",
    color: "from-sky-500/20 to-indigo-500/10 border-sky-400/30 text-sky-400",
  },
  {
    step: "03",
    phase: "Sprint 3-6",
    icon: Code2,
    title: "Agile Web & Flutter Build",
    description: "Bi-weekly sprint releases with Next.js edge web platforms and 60-120 FPS Flutter apps using test-driven methodology.",
    deliverable: "Bi-Weekly TestFlight / APK",
    color: "from-teal-500/20 to-emerald-500/10 border-teal-400/30 text-teal-400",
  },
  {
    step: "04",
    phase: "Launch & Beyond",
    icon: Rocket,
    title: "Store Release & Scale",
    description: "Zero-downtime deployment to global edge CDN and direct publishing to Apple App Store and Google Play Console.",
    deliverable: "Live Web & Store Approval",
    color: "from-emerald-500/20 to-green-500/10 border-emerald-400/30 text-emerald-400",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-[#070b14] border-b border-white/6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
              <Sparkles size={13} className="text-cyan-400" />
              <span>HOW WE OPERATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Predictable Delivery. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-sky-400">
                Zero Surprises.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed font-normal">
            A battle-tested 4-phase agile engineering pipeline designed to take your web and mobile applications from concept to production on schedule.
          </p>
        </div>

        {/* Step Cards with Pipeline Architecture */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-px bg-linear-to-r from-cyan-500/20 via-sky-500/20 to-emerald-500/20 pointer-events-none z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-900/40 border border-white/8 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xl relative overflow-hidden"
              >
                <div>
                  {/* Phase & Counter Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.color} border flex items-center justify-center group-hover:scale-110 transition-transform relative z-10`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-mono font-black text-white/10 group-hover:text-cyan-400/20 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Phase Badge */}
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-cyan-400 border border-white/10 inline-block mb-3">
                    {item.phase}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Pill */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    <span className="truncate">{item.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}