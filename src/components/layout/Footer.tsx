"use client";

import Link from "next/link";
import { Terminal, Mail, MapPin, ShieldCheck, GitBranch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050811] border-t border-white/6 text-slate-400 text-sm overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-37.5 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 relative z-10">
        
        {/* কলাম গ্যাপ কমিয়ে ব্যালান্সড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/6">
          
          {/* Brand & About Column (৫ কলাম জুড়ে ছড়ানো) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                <Terminal size={16} />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                MHS <span className="text-cyan-400">Tech Labs</span>
              </span>
            </Link>

            <div className="space-y-2">
              <p className="text-xs text-slate-300 font-medium">
                Engineered for High-Growth Startups & Global Enterprises.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                MHS Tech Labs is a specialized digital product studio. We craft mission-critical web platforms with Next.js and unified mobile apps with Flutter, helping businesses scale securely with zero technical debt.
              </p>
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Systems Operational • 99.98% SLA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/3 border border-white/10 text-slate-400 text-[11px] font-mono">
                <ShieldCheck size={12} className="text-cyan-400" />
                <span>NDA Protected</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (২ কলাম) */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-xs">
               <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Stack</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-cyan-400 transition-colors">Development Process</Link>
              </li>
            
            </ul>
          </div>

          {/* Core Specializations (৩ কলাম) */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold">Core Expertise</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Cross-Platform Flutter Apps</li>
              <li>Next.js 16 Web Engineering</li>
              <li>Single Codebase Architecture</li>
              <li>App Store & Play Store Release</li>
              <li>Edge API & Real-time Cloud Sync</li>
            </ul>
          </div>

          {/* Direct Contact (২ কলাম) */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold">HQ & Contact</h4>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:contact@mhstechlabs.com"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail size={13} className="shrink-0" />
                <span className="truncate">contact@mhstechlabs.com</span>
              </a>
              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <MapPin size={13} className="text-slate-500 shrink-0" />
                Dhaka, Bangladesh
              </p>
              <p className="text-[11px] text-slate-500">Global Remote Studio</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Release Version */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <p>&copy; 2026 MHS Tech Labs. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/4 border border-white/10 text-[10px] text-slate-400">
              <GitBranch size={10} className="text-cyan-400" />
              <span>v1.4.0 (Edge Release)</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Architecture SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}