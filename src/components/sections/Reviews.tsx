"use client";

import Image from "next/image";

interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: "1",
    quote:
      "The new platform finally gave our engineering communication a clear structure and started bringing better client conversion from the first week.",
    author: "Anna Kowalska",
    role: "Founder of a fintech brand",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: "2",
    quote:
      "The process was focused, efficient, and very well guided. We received a Flutter application that genuinely fits our premium brand identity.",
    author: "Michal Nowak",
    role: "Operations director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: "3",
    quote:
      "We can finally present our production architecture in a way that reflects its true quality. Enterprise clients noticed the speed difference straight away.",
    author: "Karolina Wojcik",
    role: "Studio owner",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: "4",
    quote:
      "Single codebase for iOS and Android saved us nearly half of our estimated development timeline with zero performance lag.",
    author: "David Vance",
    role: "CTO, EdgeScale",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: "5",
    quote:
      "Sub-second Next.js page transitions cut our bounce rates drastically. Clean code and dependable handover.",
    author: "Elena Rostova",
    role: "Product Lead",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: "6",
    quote:
      "Delivered exactly what was promised. Reliable Flutter engineering with smooth 120 FPS animations throughout the app.",
    author: "Marcus Thorne",
    role: "Head of Mobile",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white dark:bg-[#070b14] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Judul & Subtitle Minimalis Sesuai Gambar 2 */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
            Reviews that say more
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
            See how working with us translated into a stronger image and better results for our clients.
          </p>
        </div>

        {/* Kolom Kartu Ulasan (3 Kolom Bersih) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-9 rounded-[2rem] bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.08] shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col justify-between space-y-8"
            >
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed font-normal">
                {item.quote}
              </p>

              <div className="flex items-center gap-3.5 pt-2">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover shrink-0 grayscale-[0.2]"
                />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-normal mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}