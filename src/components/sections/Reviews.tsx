// src/components/Reviews.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  highlight: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: "1",
    quote:
      "The new platform finally gave our engineering communication a clear structure and started bringing better client conversion from the first week.",
    author: "Anna Kowalska",
    role: "Founder, Fintech Brand",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "+42% Conversion",
  },
  {
    id: "2",
    quote:
      "The process was focused, efficient, and very well guided. We received a Flutter application that genuinely fits our premium brand identity.",
    author: "Michal Nowak",
    role: "Operations Director",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "120 FPS Fluid",
  },
  {
    id: "3",
    quote:
      "We can finally present our production architecture in a way that reflects its true quality. Enterprise clients noticed the speed difference straight away.",
    author: "Karolina Wojcik",
    role: "Studio Owner",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "Enterprise Grade",
  },
  {
    id: "4",
    quote:
      "Single codebase for iOS and Android saved us nearly half of our estimated development timeline with zero performance lag.",
    author: "David Vance",
    role: "CTO, EdgeScale",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "50% Time Saved",
  },
  {
    id: "5",
    quote:
      "Sub-second Next.js page transitions cut our bounce rates drastically. Clean code, rock-solid architecture, and dependable handover.",
    author: "Elena Rostova",
    role: "Product Lead",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "< 0.2s Latency",
  },
  {
    id: "6",
    quote:
      "Delivered exactly what was promised. Reliable Flutter engineering with smooth state management throughout the entire app.",
    author: "Marcus Thorne",
    role: "Head of Mobile",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "Zero Crashes",
  },
  {
    id: "7",
    quote:
      "The system handles spikes in real-time geospatial tracking without a hitch. Outstanding full-stack delivery.",
    author: "Liam Chen",
    role: "Lead Architect, OrbitLog",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "99.99% Uptime",
  },
  {
    id: "8",
    quote:
      "Clean architecture, zero memory leaks, and crystal clear code documentation. The best studio experience we have had.",
    author: "Sophia Martinez",
    role: "VP of Product",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    highlight: "Flawless Delivery",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 260,
    },
  },
};

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isCarousel = reviewsData.length > 3;

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 380;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScrollManual = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(reviewsData.length - 1, activeIndex + 1);
    scrollToCard(nextIndex);
  };

  const handleOnScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const index = Math.round(scrollPos / 380);
      setActiveIndex(Math.min(reviewsData.length - 1, Math.max(0, index)));
    }
  };
// অটো-সোয়াইপ লুপ (টাইম কমিয়ে ২.২ সেকেন্ড / ২২০০ms করা হয়েছে)
  useEffect(() => {
    if (!isCarousel || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev >= reviewsData.length - 1 ? 0 : prev + 1;
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: next * 380,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 2100); // <-- আগের 4000 এর জায়গায় 2200ms দেওয়া হয়েছে

    return () => clearInterval(interval);
  }, [isCarousel, isPaused]);

  return (
    <section
      id="reviews"
      className="relative scroll-mt-28 py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto select-none overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-linear-to-tr from-blue-600/10 via-indigo-500/8 to-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-3"
        >
          <Sparkles size={11} className="text-blue-600 dark:text-cyan-400" />
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Client Endorsements
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-3"
        >
          Reviews That{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Say More.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed"
        >
          See how our engineering execution delivered measurable results, stronger brand authority, and resilient platforms for partners.
        </motion.p>
      </div>

      {/* Reviews Slider */}
      <motion.div
        ref={scrollRef}
        onScroll={handleOnScroll}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-5 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {reviewsData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardItemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 shadow-xs hover:border-blue-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between text-left shrink-0 w-[300px] sm:w-[360px] snap-center"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </div>

                <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50">
                  {item.highlight}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6 relative">
                “{item.quote}”
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                    <CheckCircle2 size={10} className="text-white" />
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

              <Quote size={16} className="text-slate-300 dark:text-slate-700 shrink-0" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Clean Dynamic Dots + Nav Bar */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={() => handleScrollManual("left")}
          disabled={activeIndex === 0}
          className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
          aria-label="Previous"
        >
          <ChevronLeft size={14} />
        </button>

        {/* Dynamic Capsule Dots */}
        <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
          {reviewsData.map((_, dotIdx) => {
            const isActive = activeIndex === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => scrollToCard(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-6 bg-blue-600 dark:bg-cyan-400"
                    : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            );
          })}
        </div>

        <button
          onClick={() => handleScrollManual("right")}
          disabled={activeIndex === reviewsData.length - 1}
          className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
          aria-label="Next"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}