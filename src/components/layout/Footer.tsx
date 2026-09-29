"use client";

import Link from "next/link";
import { Terminal, Mail, MapPin, ShieldCheck, GitBranch } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#050811] border-t border-slate-200 dark:border-white/6 text-slate-600 dark:text-slate-400 text-sm overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-37.5 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-200 dark:border-white/6">
          
          {/* Brand & About Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6">
            <Link className="flex items-center gap-2.5 group w-fit" href="/">
              <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                <Terminal size={16} />
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                MHS <span className="text-cyan-600 dark:text-cyan-400">Tech Labs</span>
              </span>
            </Link>

            <div className="space-y-2">
              <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">
                Engineered for High-Growth Startups &amp; Global Enterprises.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-md font-normal">
                MHS Tech Labs is a specialized digital product studio. We craft mission-critical web platforms with Next.js and unified mobile apps with Flutter, helping businesses scale securely with zero technical debt.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Systems Operational • 99.98% SLA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-[11px] font-mono">
                <ShieldCheck className="text-cyan-600 dark:text-cyan-400" size={12} />
                <span>NDA Protected</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="#about">About</Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="#services">Services</Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="#tech-stack">Tech Stack</Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="#projects">Projects</Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="#why-us">Why Choose Us</Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="#workflow">Development Process</Link>
              </li>
            </ul>
          </div>

          {/* Core Specializations (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 font-semibold">Core Expertise</h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li>Cross-Platform Flutter Apps</li>
              <li>Next.js Web Engineering</li>
              <li>Single Codebase Architecture</li>
              <li>App Store &amp; Play Store Release</li>
              <li>Edge API &amp; Real-time Cloud Sync</li>
            </ul>
          </div>

          {/* Direct Contact (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 font-semibold">HQ &amp; Contact</h4>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:contact@mhstechlabs.com"
                className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                <Mail className="shrink-0" size={13} />
                <span className="truncate">contact@mhstechlabs.com</span>
              </a>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <MapPin className="text-slate-400 dark:text-slate-500 shrink-0" size={13} />
                Dhaka, Bangladesh
              </p>
              <p className="text-[11px] text-slate-500">Global Remote Studio</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Release Version */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <p>&copy; {currentYear} MHS Tech Labs. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/4 border border-slate-200 dark:border-white/10 text-[10px] text-slate-600 dark:text-slate-400">
              <GitBranch className="text-cyan-600 dark:text-cyan-400" size={10} />
              <span>v1.4.0 (Edge Release)</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link className="hover:text-cyan-600 dark:hover:text-slate-300 transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="hover:text-cyan-600 dark:hover:text-slate-300 transition-colors" href="/terms">Terms of Service</Link>
            <Link className="hover:text-cyan-600 dark:hover:text-slate-300 transition-colors" href="/sla">Architecture SLA</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}