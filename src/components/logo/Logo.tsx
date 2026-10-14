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




// src/components/logo/Logo.tsx
"use client";

interface LogoProps {
  isActive?: boolean;
  className?: string;
}

export default function Logo({ isActive = false, className = "" }: LogoProps) {
  return (
    <div
      className={`group inline-flex items-center gap-3 select-none outline-none ${className}`}
    >
      {/* Ultra-Clean 3D Circular MHS Emblem */}
      <div className="relative h-10.5 w-10.5 shrink-0 transition-transform duration-300 group-hover:scale-105">
        {/* Soft Ambient Hover Glow */}
        <div
          className={`absolute -inset-0.5 rounded-full bg-linear-to-tr from-blue-600 via-indigo-500 to-cyan-400 blur-[3px] transition-opacity duration-300 ${
            isActive ? "opacity-45" : "opacity-20 group-hover:opacity-55"
          }`}
        />

        <svg
          viewBox="0 0 100 100"
          className="relative z-10 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Outer Precision Bezel Gradient */}
            <linearGradient
              id="mhs-outer-rim"
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>

            {/* Deep Midnight Obsidian Core */}
            <radialGradient id="mhs-core-bg" cx="35%" cy="25%" r="80%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="55%" stopColor="#090D16" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            {/* Crisp Platinum White Gradient for M & S */}
            <linearGradient
              id="mhs-white-silver"
              x1="0"
              y1="35"
              x2="0"
              y2="65"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Electric Cyan-Blue Gradient for H & Horizon Arcs */}
            <linearGradient
              id="mhs-electric-cyan"
              x1="15"
              y1="20"
              x2="85"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* 1. Sleek Metallic-Cyan Outer Ring */}
          <circle cx="50" cy="50" r="48.5" fill="url(#mhs-outer-rim)" />

          {/* 2. Deep Dark Inner Sphere */}
          <circle cx="50" cy="50" r="45" fill="url(#mhs-core-bg)" />

          {/* 3. Top Glass Specular Reflection */}
          <path
            d="M20 28C34 15 66 15 80 28C66 19.5 34 19.5 20 28Z"
            fill="white"
            fillOpacity="0.14"
          />

          {/* 4. Upper Dynamic Horizon Wing */}
          <path
            d="M25 32.5C39 23.5 61 23.5 75 32.5C61 27.5 39 27.5 25 32.5Z"
            fill="url(#mhs-electric-cyan)"
          />

          {/* 5. Symmetrical Precision Vector "MHS" (Equal Optical Width) */}
          <g transform="translate(50, 50) skewX(-7) translate(-50, -50)">
            {/* Balanced 'M' (Width: 22 units) */}
            <path
              d="M15 61V39H20.2L26 49.8L31.8 39H37V61H32V47.5L27.3 55.8H24.7L20 47.5V61H15Z"
              fill="url(#mhs-white-silver)"
            />

            {/* Balanced 'H' with Cyan Core (Width: 18 units) */}
            <path
              d="M41.5 61V39H46.7V47.6H54.3V39H59.5V61H54.3V52.4H46.7V61H41.5Z"
              fill="url(#mhs-electric-cyan)"
            />

            {/* Balanced Geometric 'S' (Width: 20 units) */}
            <path
              d="M83.5 39H67.5L64 42.5V48.8L67.5 52.2H78.2V56.4H64V61H80L83.5 57.5V50.4L80 47H69.2V43.5H83.5V39Z"
              fill="url(#mhs-white-silver)"
            />
          </g>

          {/* 6. Lower Dynamic Horizon Wing */}
          <path
            d="M25 67.5C39 72.5 61 72.5 75 67.5C61 76.5 39 76.5 25 67.5Z"
            fill="url(#mhs-electric-cyan)"
          />
        </svg>
      </div>

      {/* Executive Brand Wordmark */}
      <div className="flex flex-col justify-center whitespace-nowrap">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-[18px] font-black tracking-tight text-slate-950 dark:text-white">
            MHS
          </span>

          <span className="text-[18px] font-extrabold tracking-tight bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-300 bg-clip-text text-transparent">
            Tech Lab
          </span>
        </div>

        {/* Crisp Subtitle Strip */}
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
          <span className="text-[9.5px] font-mono font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            WEB <span className="text-blue-500 dark:text-cyan-400">•</span>{" "}
            MOBILE <span className="text-blue-500 dark:text-cyan-400">•</span>{" "}
            AI
          </span>
        </div>
      </div>
    </div>
  );
}