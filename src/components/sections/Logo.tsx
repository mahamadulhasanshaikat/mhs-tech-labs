// src/components/Logo.tsx
"use client";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 group select-none outline-none">
      {/* Clean Circular MHS Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
        <div className="relative w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 via-transparent to-cyan-400/20" />

          {/* Clean Italic Metallic MHS */}
          <div className="relative z-10 flex items-center justify-center -skew-x-6 tracking-tighter leading-none">
            <span className="font-black text-[12px] text-white">M</span>
            <span className="font-black text-[12px] text-cyan-400">H</span>
            <span className="font-black text-[12px] text-white">S</span>
          </div>
        </div>
      </div>

      {/* Brand Typography (No Clipping) */}
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="flex items-center gap-1 leading-none">
          <span className="font-black text-[17px] tracking-tight text-slate-950 dark:text-white">
            MHS
          </span>
          <span className="font-extrabold text-[17px] tracking-tight bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            Tech Lab
          </span>
        </div>

        <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500 mt-1">
          Web • Mobile • AI
        </span>
      </div>
    </div>
  );
}