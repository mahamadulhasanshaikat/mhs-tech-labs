"use client";

import { useState } from "react";
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const platforms = [
  { id: "mobile", name: "Cross-Platform Mobile", desc: "Flutter (iOS & Android)", price: 3500, weeks: 4 },
  { id: "web", name: "Production Web Platform", desc: "Next.js 16 + Tailwind v4", price: 2800, weeks: 3 },
  { id: "fullstack", name: "Full Ecosystem (App + Web)", desc: "Flutter + Next.js + REST/Python", price: 5800, weeks: 6 },
];

const addOns = [
  { id: "auth", name: "Custom Auth & Role-Based RBAC", price: 600, weeks: 1 },
  { id: "payment", name: "Stripe / Apple Pay / Google Pay", price: 800, weeks: 1 },
  { id: "ai", name: "Python / AI Inference & Edge APIs", price: 1200, weeks: 2 },
  { id: "cicd", name: "Automated CI/CD & Store Approvals", price: 500, weeks: 1 },
];

export default function Estimator() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["payment", "cicd"]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedPrice =
    selectedPlatform.price +
    selectedAddons.reduce((sum, id) => {
      const addon = addOns.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

  const calculatedWeeks =
    selectedPlatform.weeks +
    selectedAddons.reduce((sum, id) => {
      const addon = addOns.find((a) => a.id === id);
      return sum + (addon ? addon.weeks : 0);
    }, 0);

  return (
    <section id="estimator" className="py-24 px-6 bg-[#060911] border-b border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-400 text-xs font-mono mb-4">
            <Calculator size={13} />
            <span>TRANSPARENT ARCHITECTURE PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Scope & Estimate Your Engineering Sprint
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            বাস্তবসম্মত বাজেট ও ডেলিভারি টাইমলাইন প্রিভিউ করুন। কোনো হিডেন কস্ট বা অপ্রত্যাশিত ওভারহেড নেই।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Options Configuration */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
                1. Core Engineering Scope
              </label>
              <div className="grid grid-cols-1 gap-3">
                {platforms.map((p) => {
                  const isSelected = selectedPlatform.id === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlatform(p)}
                      className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-cyan-950/20 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                          : "bg-slate-900/40 border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div>
                        <div className="text-white font-semibold text-sm">{p.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{p.desc}</div>
                      </div>
                      <div className="text-right font-mono">
                        <div className="text-cyan-400 text-sm font-bold">${p.price}</div>
                        <div className="text-[11px] text-slate-500">~{p.weeks} wks</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
                2. Enterprise Add-ons & Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOns.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isChecked
                          ? "bg-white/[0.04] border-emerald-500/40 text-white"
                          : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                            isChecked ? "bg-emerald-500 border-emerald-500 text-slate-950" : "border-slate-600"
                          }`}
                        >
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-300 ml-2">+${addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Card & Summary */}
          <div className="lg:col-span-5 p-8 rounded-2xl border border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl relative shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Estimated Budget</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  ${calculatedPrice.toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-slate-400 uppercase">Sprint Duration</span>
                <div className="text-2xl font-bold text-cyan-400 mt-1">
                  ~{calculatedWeeks} Weeks
                </div>
              </div>
            </div>

            <div className="py-6 space-y-3 font-mono text-xs text-slate-400 border-b border-white/5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>100% Intellectual Property (IP) Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400 shrink-0" />
                <span>Zero Technical Debt SLA Guarantee</span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href={`#contact?scope=${encodeURIComponent(selectedPlatform.name)}&budget=${calculatedPrice}`}
                className="w-full py-3.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#070b14] font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Lock In This Sprint</span>
                <ArrowRight size={14} />
              </Link>
              <p className="text-[11px] text-center text-slate-500 mt-3 font-mono">
                Includes architectural blueprint & initial design session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}