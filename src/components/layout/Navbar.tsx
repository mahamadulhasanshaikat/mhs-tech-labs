// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Logo from "../logo/Logo";
import ThemeToggle from "../theme/ThemeToggle";
const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#stack" },
  { name: "AI Lab", href: "#ai-lab", isSpecial: true },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      navLinks.forEach((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
      window.history.pushState(null, "", href);
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.currentTarget.blur(); // নীল ফোকাস বক্স আসা বন্ধ করবে
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  };

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`pointer-events-auto relative w-full max-w-5xl flex items-center justify-between gap-4 px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-black/5 dark:shadow-black/30 backdrop-blur-xl"
            : "bg-white/80 dark:bg-slate-900/80 border-slate-200/70 dark:border-slate-800/70 shadow-lg backdrop-blur-lg"
        }`}
      >
        {/* Left: Brand Logo (No Blue Focus Box) */}
        <a
          href="#"
          onClick={scrollToTop}
          onMouseDown={(e) => e.preventDefault()}
          className="shrink-0 pl-1 outline-none focus:outline-none focus-visible:outline-none"
        >
          <Logo />
        </a>

        {/* Center: Clean Single-Line Navigation Pill */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
          {navLinks.map((link, idx) => {
            const isTargetActive =
              activeSection === link.href.replace("#", "");
            const isHovered = hoveredIdx === idx;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 outline-none focus:outline-none ${
                  isTargetActive
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {isTargetActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="pointer-events-none absolute inset-0 rounded-full bg-white dark:bg-slate-950 shadow-xs border border-slate-200/70 dark:border-slate-700/70 -z-10"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}

                {isHovered && !isTargetActive && (
                  <motion.span
                    layoutId="hoverNavPill"
                    className="pointer-events-none absolute inset-0 rounded-full bg-white/60 dark:bg-slate-700/50 -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}

                {link.isSpecial && (
                  <Sparkles
                    size={12}
                    className="text-blue-600 dark:text-cyan-400 shrink-0"
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            onMouseDown={(e) => e.preventDefault()}
            className="hidden md:inline-flex group items-center gap-1.5 h-9 px-4 rounded-full text-xs font-bold whitespace-nowrap bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-xs outline-none focus:outline-none"
          >
            <span>Start a Project</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 inset-x-4 max-w-md mx-auto p-4 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isTargetActive =
                  activeSection === link.href.replace("#", "");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-semibold flex items-center justify-between transition cursor-pointer ${
                      isTargetActive
                        ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.isSpecial && (
                        <Sparkles size={14} className="text-blue-500" />
                      )}
                      {link.name}
                    </span>
                    <ArrowUpRight size={14} className="opacity-50" />
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 w-full py-3 rounded-2xl text-center text-xs font-bold bg-blue-600 text-white shadow-md shadow-blue-600/20"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}