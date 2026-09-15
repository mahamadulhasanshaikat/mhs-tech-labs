"use client";

import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Globe, 
  Layers, 
  CheckCircle2 
} from "lucide-react";

const projectTypes = [
  { id: "flutter", label: "Flutter Mobile App", icon: Smartphone },
  { id: "web", label: "Next.js Web Platform", icon: Globe },
  { id: "both", label: "Full Ecosystem (Web + App)", icon: Layers },
];

// বাজেট রেঞ্জ $5,000 থেকে শুরু
const budgetRanges = [
  "$5k - $10k",
  "$10k - $20k",
  "$20k - $50k",
  "$50k+",
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState<string>("flutter");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5k - $10k");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070b14] border-t border-white/6 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অরা লাইটিং */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-400" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Let&apos;s Build Your Next <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-sky-400">
              Web & Mobile Venture.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Have a project in mind? Share your specifications below and receive an architectural breakdown with preliminary estimates within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* বাম পাশে: এজেন্সি ইনফো ও গ্যারান্টি */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="p-7 rounded-3xl bg-slate-900/40 border border-white/8 backdrop-blur-xl shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">MHS Tech Labs</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    A dedicated engineering studio specialized strictly in cross-platform Flutter development and high-throughput Next.js web applications.
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-white/5 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail size={15} />
                    </div>
                    <span>contact@mhstechlabs.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <MapPin size={15} />
                    </div>
                    <span>Dhaka, Bangladesh • Global Remote</span>
                  </div>
                </div>
              </div>

              {/* ট্রাস্ট গার্ডস */}
              <div className="space-y-3 px-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock size={15} className="text-cyan-400 shrink-0" />
                  <span>Guaranteed response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                  <span>Strict Non-Disclosure Agreement (NDA) on request</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                  <span>Transparent milestone estimates, zero hidden costs</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400">
              <span className="text-cyan-400 block mb-1 font-semibold">DIRECT ARCHITECT ACCESS</span>
              You will communicate directly with the senior engineering lead overseeing your code repository.
            </div>
          </div>

          {/* ডান পাশে: ফর্ম */}
          <div className="lg:col-span-7 bg-slate-900/40 p-7 sm:p-9 rounded-3xl border border-white/8 backdrop-blur-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* ১. প্রজেক্ট টাইপ */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2.5">
                  1. What are we building?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {projectTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-3 rounded-xl border text-xs font-mono flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer ${
                          selectedType === type.id
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                            : "bg-white/2 border-white/10 text-slate-400 hover:border-white/20"
                        }`}
                      >
                        <Icon size={16} />
                        <span>{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ২. বাজেট রেঞ্জ ($5k+) */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2.5">
                  2. Anticipated Budget (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetRanges.map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setSelectedBudget(range)}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono text-center transition-all cursor-pointer ${
                        selectedBudget === range
                          ? "bg-emerald-500/10 border-emerald-400 text-emerald-300 font-semibold"
                          : "bg-white/2 border-white/10 text-slate-400 hover:border-white/20"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* ৩. নাম ও ইমেইল */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* ৪. প্রজেক্ট ওভারভিউ */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Overview & Timeline</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project, target audience, preferred timeline, and any key integrations..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* সাবমিট বাটন */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm font-mono tracking-wide transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <span>{isSubmitted ? "Request Sent Successfully!" : "Submit Engineering Inquiry"}</span>
                <Send size={15} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}