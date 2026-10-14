// // src/components/Logo.tsx
// "use client";

// export default function Logo() {
//   return (
//     <div className="flex items-center gap-2.5 group select-none outline-none">
//       {/* Clean Circular MHS Emblem */}
//       <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
//         <div className="relative w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
//           {/* Subtle Inner Glow */}
//           <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 via-transparent to-cyan-400/20" />

//           {/* Clean Italic Metallic MHS */}
//           <div className="relative z-10 flex items-center justify-center -skew-x-6 tracking-tighter leading-none">
//             <span className="font-black text-[12px] text-white">M</span>
//             <span className="font-black text-[12px] text-cyan-400">H</span>
//             <span className="font-black text-[12px] text-white">S</span>
//           </div>
//         </div>
//       </div>

//       {/* Brand Typography (No Clipping) */}
//       <div className="flex flex-col justify-center whitespace-nowrap">
//         <div className="flex items-center gap-1 leading-none">
//           <span className="font-black text-[17px] tracking-tight text-slate-950 dark:text-white">
//             MHS
//           </span>
//           <span className="font-extrabold text-[17px] tracking-tight bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
//             Tech Lab
//           </span>
//         </div>

//         <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500 mt-1">
//           Web • Mobile • AI
//         </span>
//       </div>
//     </div>
//   );
// }




"use client";

export default function Logo() {
  return (
    <div className="group inline-flex items-center gap-2.5 select-none">
      {/* Premium Circular MHS Emblem */}
      <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mhs-metal-border" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F9FAFB" />
              <stop offset="25%" stopColor="#9CA3AF" />
              <stop offset="48%" stopColor="#E5E7EB" />
              <stop offset="75%" stopColor="#6B7280" />
              <stop offset="100%" stopColor="#D1D5DB" />
            </linearGradient>

            <radialGradient id="mhs-dark-center" cx="30%" cy="20%" r="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="55%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </radialGradient>

            <linearGradient id="mhs-silver-letters" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#E5E7EB" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>

          {/* Outer silver ring */}
          <circle cx="50" cy="50" r="48" fill="url(#mhs-metal-border)" />

          {/* Dark circular body */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="url(#mhs-dark-center)"
            stroke="#D1D5DB"
            strokeWidth="1"
          />

          {/* Inner engraved ring */}
          <circle
            cx="50"
            cy="50"
            r="39.5"
            stroke="#9CA3AF"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />

          {/* Upper swoosh */}
          <path
            d="M19 43C32 27 59 19 77 31C65 25 42 29 19 43Z"
            fill="url(#mhs-silver-letters)"
          />

          {/* Unified italic MHS monogram */}
          <text
            x="50"
            y="57"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="26"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="-2.2"
            textLength="61"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#mhs-silver-letters)"
          >
            MHS
          </text>

          {/* Lower swoosh */}
          <path
            d="M23 64C34 80 57 77 77 59C64 80 40 85 27 74C25 71 24 68 23 64Z"
            fill="url(#mhs-metal-border)"
          />

          {/* Soft highlight */}
          <path
            d="M17 38A38 38 0 0 1 43 14"
            stroke="white"
            strokeWidth="1"
            strokeOpacity=".6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="flex items-center gap-1 leading-none">
          <span className="text-[17px] font-black tracking-tight text-gray-950 dark:text-white">
            MHS
          </span>

          <span className="text-[17px] font-extrabold tracking-tight text-gray-500 dark:text-gray-300">
            Tech Lab
          </span>
        </div>

        {/* Tagline */}
        <span className="mt-1.5 text-[9px] font-mono font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
          WEB <span className="text-gray-400">•</span> MOBILE{" "}
          <span className="text-gray-400">•</span> AI
        </span>
      </div>
    </div>
  );
}

