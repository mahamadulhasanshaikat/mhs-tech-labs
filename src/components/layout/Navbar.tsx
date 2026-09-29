"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, ArrowRight, Menu, X } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#workflow", label: "Workflow" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#070b14]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/8 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
            <Terminal size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
              MHS <span className="text-cyan-600 dark:text-cyan-400">Tech Labs</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 tracking-wider uppercase">
              Web & Flutter Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/8 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 rounded-full hover:bg-white dark:hover:bg-white/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Theme Toggle & CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <ThemeToggle />

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-mono font-bold text-xs shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 transition-all"
          >
            <span>Start Project</span>
            <ArrowRight size={13} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-white/10">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>Start Project</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}