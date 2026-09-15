"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const rotatingWords = [
  "Cross-Platform Flutter Apps.",
  "High-Performance Web Platforms.",
  "Unified iOS & Android Ecosystems.",
];

// শুধুমাত্র Web ও Flutter কেন্দ্রিক টেক স্ট্যাক
const techOrbit = [
  {
    name: "Flutter",
    role: "Cross-Platform",
    color: "from-sky-500/20 to-blue-500/10 border-sky-400/40 text-sky-400 shadow-[0_0_22px_rgba(56,189,248,0.25)]",
    x: "100%",
    y: "50%",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zM14.314 11.238l-4.57 4.572 4.57 4.572h7.372l-8.257-8.257-3.685-3.687h4.57z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    role: "Production Web",
    color: "from-white/20 to-slate-500/10 border-white/40 text-white shadow-[0_0_22px_rgba(255,255,255,0.2)]",
    x: "75%",
    y: "93.3%",
    svg: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 180 180" fill="none">
        <mask height="180" id="hero_mask_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#hero_mask_next)">
          <circle cx="90" cy="90" data-framer-name="base" fill="black" r="90" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect fill="white" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
  {
    name: "Apple iOS",
    role: "App Store",
    color: "from-rose-500/20 to-orange-500/10 border-rose-400/40 text-rose-400 shadow-[0_0_22px_rgba(251,113,133,0.2)]",
    x: "25%",
    y: "93.3%",
    svg: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.73-.93 2.76 1 .08 2.02-.51 2.64-1.26z" />
      </svg>
    ),
  },
  {
    name: "Android",
    role: "Play Store",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-400/40 text-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.2)]",
    x: "0%",
    y: "50%",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.8566 8.0822 12 8.0822s-3.5902.3288-5.1368.8675L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
      </svg>
    ),
  },
  {
    name: "React",
    role: "Web Frontend",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-400/40 text-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.2)]",
    x: "25%",
    y: "6.7%",
    svg: (
      <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Dart",
    role: "Core Engine",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-400/40 text-blue-400 shadow-[0_0_22px_rgba(59,130,246,0.2)]",
    x: "75%",
    y: "6.7%",
    svg: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.105 4.105L12 0l7.895 4.105L12 8.21 4.105 4.105zm0 15.79L12 24l7.895-4.105L12 15.79l-7.895 4.105zM0 12l4.105-7.895L12 8.21 7.895 12 12 15.79 4.105 19.895 0 12zm24 0l-4.105 7.895L12 15.79l4.105-3.79L12 8.21l7.895-4.105L24 12z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === rotatingWords[wordIndex].length + 1 && !isDeleting) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(pauseTimer);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      return;
    }

    const typingSpeed = isDeleting ? 35 : 75;
    const charTimer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(charTimer);
  }, [subIndex, wordIndex, isDeleting]);

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden bg-[#070b14] pt-24 pb-14 px-6 border-b border-white/6">
      <div className="absolute top-1/3 right-1/4 w-95 h-95 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-medium mb-5 backdrop-blur-md">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Dedicated Web & Flutter Engineering Studio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.2] mb-4 min-h-23.75 sm:min-h-27.5">
              Empowering High-Growth Businesses with Custom <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-sky-400">
                {rotatingWords[wordIndex].substring(0, subIndex)}
              </span>
              <span className="inline-block w-0.5 h-7 sm:h-9 bg-cyan-400 animate-pulse align-middle ml-1" />
            </h1>

            <p className="text-sm text-slate-400 max-w-lg mb-7 leading-relaxed font-normal">
              আমরা একক কোডবেসে iOS ও Android-এর জন্য প্রিমিয়াম Flutter অ্যাপ এবং Next.js দিয়ে দ্রুতগতির আধুনিক ওয়েব প্ল্যাটফর্ম ডেভেলপ করি।
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-9">
              <Link
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Book Architecture Call</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="#portfolio"
                className="px-5 py-2.5 rounded-lg border border-white/15 bg-white/2 hover:bg-white/6 text-slate-300 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-1"
              >
                <span>View Live Products</span>
                <ChevronRight size={14} className="text-slate-500" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/8 w-full max-w-md">
              <div className="p-2.5 rounded-lg bg-white/2 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-cyan-400">1 Codebase</div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <ShieldCheck size={12} className="text-cyan-400" /> iOS & Android
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/2 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-emerald-400">60-120 FPS</div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <Zap size={12} className="text-emerald-400" /> Native Smoothness
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/2 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-teal-400">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-teal-400" /> Source Code
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex items-center justify-center pause-on-hover relative min-h-85 sm:min-h-105">
            <div className="absolute w-70 h-70 sm:w-90 sm:h-90 rounded-full border border-white/[0.07] pointer-events-none" />
            <div className="absolute w-47.5 h-47.5 sm:w-62.5 sm:h-62.5 rounded-full border border-white/4 pointer-events-none" />

            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-cyan-500/30 bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(6,182,212,0.2)] p-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mb-1" />
              <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">MHS LABS</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                {hoveredTech ? hoveredTech : "WEB & FLUTTER"}
              </span>
            </div>

            <div className="absolute w-70 h-70 sm:w-90 sm:h-90 rounded-full animate-orbit pointer-events-none">
              {techOrbit.map((tech) => (
                <div
                  key={tech.name}
                  className="absolute pointer-events-auto"
                  style={{
                    left: tech.x,
                    top: tech.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="animate-counter-rotate">
                    <div
                      title={`${tech.name} • ${tech.role}`}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/95 bg-linear-to-br ${tech.color} backdrop-blur-xl border flex items-center justify-center cursor-pointer hover:scale-125 transition-transform duration-300`}
                    >
                      {tech.svg}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}