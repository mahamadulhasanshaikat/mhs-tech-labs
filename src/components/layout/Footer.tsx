// src/components/Footer.tsx
import Link from "next/link";
import { companyInfo, siteConfig } from "@/data/company";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Logo />

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400">Services</Link>
          <Link href="#architecture" className="hover:text-blue-600 dark:hover:text-cyan-400">Architecture</Link>
          <Link href="#workflow" className="hover:text-blue-600 dark:hover:text-cyan-400">Workflow</Link>
          <Link href="#pricing" className="hover:text-blue-600 dark:hover:text-cyan-400">Pricing</Link>
          <Link href="#faq" className="hover:text-blue-600 dark:hover:text-cyan-400">FAQ</Link>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>© {new Date().getFullYear()} {companyInfo.name}</span>
          <span className="px-2 py-0.5 rounded-md font-mono text-[11px] bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700">
            v{siteConfig.version}
          </span>
        </div>
      </div>
    </footer>
  );
}