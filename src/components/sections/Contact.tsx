// src/components/Contact.tsx
"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-xl grid md:grid-cols-2 gap-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">
            Get In Touch
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-2 mb-4">
            Let’s Build Your Next Digital Product.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Need a custom Flutter mobile app with Riverpod, a high-speed Next.js web application, real-time map tracking, or Supabase/PostgreSQL architecture? Reach out to MHS Tech Lab.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Mail size={18} className="text-blue-600 dark:text-cyan-400" />
              <span>{companyInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Phone size={18} className="text-blue-600 dark:text-cyan-400" />
              <span>{companyInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <MapPin size={18} className="text-blue-600 dark:text-cyan-400" />
              <span>{companyInfo.location}</span>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name / Company"
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-blue-500"
          />
          <textarea
            rows={4}
            placeholder="Tell us about your Web, Flutter Mobile, or AI project..."
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer transition-all"
          >
            <span>Send Project Inquiry</span>
            <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}