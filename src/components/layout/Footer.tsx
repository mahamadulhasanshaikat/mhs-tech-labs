// src/components/Footer.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowUp, 
  ArrowUpRight, 
  Sparkles, 
  MapPin, 
  Mail 
} from "lucide-react";
import { companyInfo, siteConfig } from "@/data/company";
import Logo from "../logo/Logo";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.112.551 4.095 1.517 5.823l-1.617 5.909 6.068-1.592c1.668.91 3.57 1.431 5.597 1.431 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.859 0-3.606-.525-5.093-1.435l-.365-.224-3.593.943.959-3.503-.245-.39c-.996-1.583-1.523-3.429-1.523-5.391 0-5.293 4.307-9.6 9.6-9.6 5.292 0 9.6 4.307 9.6 9.6 0 5.294-4.308 9.6-9.6 9.6z" />
    </svg>
  );
}

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Architecture", href: "#architecture" },
  { name: "Lifecycle", href: "#solutions" },
  { name: "Solutions", href: "#solutions" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const [year, setYear] = useState<number | string>("2026");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsAppUrl = `https://wa.me/8801939791205?text=${encodeURIComponent(
    "Hello MHS Tech Lab, I would like to consult about an engineering project."
  )}`;

  return (
    <footer className="relative w-full border-t border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl pt-16 pb-12 select-none overflow-hidden">
      {/* Precision Ambient Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-180 h-40 bg-linear-to-b from-blue-600/8 via-cyan-400/5 to-transparent rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200/80 dark:border-slate-800/80">
          
          {/* Section 1: Identity & Location (5 Columns) */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Engineering high-performance cross-platform mobile apps with Flutter & Riverpod, scalable Next.js web ecosystems, and edge AI intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-[10.5px] font-semibold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Available for New Projects
              </span>

              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
                <MapPin size={11} className="text-blue-500" />
                {companyInfo.location}
              </span>
            </div>
          </div>

          {/* Section 2: System Navigation - Vertical Column Stack (3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              System Navigation
            </p>

            <div className="flex flex-col space-y-2 text-xs font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Section 3: Studio Communication & Channels (4 Columns) */}
          <div className="md:col-span-4 space-y-3.5">
            <p className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Studio Communication
            </p>

            <div className="space-y-2.5">
              <Link
                href={`mailto:${companyInfo.email}`}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 transition-all text-xs"
              >
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Mail size={13} className="text-blue-500" />
                  <span>{companyInfo.email}</span>
                </div>
                <ArrowUpRight size={13} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
              </Link>

              <Link
                href={whatsAppUrl}
                target="_blank"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/40 transition-all text-xs"
              >
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Connect on WhatsApp</span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-900/50">
                  Online
                </span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline pt-1"
              >
                <Sparkles size={12} />
                <span>Request Custom Project Estimate ↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Alignment Bar (Without Developer Badge) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="font-mono text-[11px] text-center sm:text-left">
            © {year} {companyInfo.name}. All rights reserved.
          </p>

          {/* Version Tag + Scroll to Top */}
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md font-mono text-[10.5px] bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800">
              v{siteConfig.version}
            </span>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/40 transition-colors cursor-pointer shadow-2xs"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}