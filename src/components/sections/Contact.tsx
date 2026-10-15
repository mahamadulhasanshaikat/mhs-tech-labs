// src/components/Contact.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  Check,
  Copy,
  User,
  MessageSquare,
  ArrowUpRight,
  Zap,
  Smartphone,
  Globe,
} from "lucide-react";
import { companyInfo } from "@/data/company";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.112.551 4.095 1.517 5.823l-1.617 5.909 6.068-1.592c1.668.91 3.57 1.431 5.597 1.431 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.859 0-3.606-.525-5.093-1.435l-.365-.224-3.593.943.959-3.503-.245-.39c-.996-1.583-1.523-3.429-1.523-5.391 0-5.293 4.307-9.6 9.6-9.6 5.292 0 9.6 4.307 9.6 9.6 0 5.294-4.308 9.6-9.6 9.6z" />
    </svg>
  );
}

const projectScopes = [
  { id: "mobile", label: "Mobile Application", sub: "Flutter & Riverpod", icon: Smartphone },
  { id: "web", label: "Web Application", sub: "Next.js & Cloud", icon: Globe },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedScope, setSelectedScope] = useState("Mobile Application");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // WhatsApp নম্বর
  const whatsAppNumber = "8801700000000";
  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    `Hello MHS Tech Lab, I would like to build a \${selectedScope} project.`
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 4000);
      setFormState({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-36 pt-24 pb-20 sm:pt-32 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto select-none overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-180 h-90 bg-linear-to-tr from-blue-600/10 via-indigo-500/8 to-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Standardized Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs backdrop-blur-xl mb-3"
        >
          <Sparkles size={11} className="text-blue-600 dark:text-cyan-400" />
          <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Initiate Collaboration
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12] mb-3"
        >
          Let’s Build Your{" "}
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Next Digital Product.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed"
        >
          Need a reactive Flutter mobile application or a high-performance Next.js web ecosystem? Get in touch with our lab engineers.
        </motion.p>
      </div>

      {/* Main 2-Column Responsive Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* ================= LEFT COLUMN: DETAILS & DIRECT CHANNELS (5 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for New Projects</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
              Engineering Lab Communication
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Reach out via official studio email or connect directly with our engineering lead via WhatsApp for swift project consultation.
            </p>
          </div>

          {/* Interactive Direct Communication Cards */}
          <div className="space-y-3">
            {/* WhatsApp Direct Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 shadow-xs backdrop-blur-xl transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/50">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Instant Chat
                  </span>
                  <Link
                    href={whatsAppUrl}
                    target="_blank"
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowUpRight size={13} className="text-slate-400" />
                  </Link>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/50 font-semibold">
                Online
              </span>
            </motion.div>

            {/* Email Card with Copy Trigger */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-xs backdrop-blur-xl transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Official Inquiries
                  </span>
                  <Link
                    href={`mailto:${companyInfo.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {companyInfo.email}
                  </Link>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </motion.div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/50">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Studio Location
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {companyInfo.location}
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold">
                GMT+6 (BST)
              </span>
            </div>
          </div>

          {/* Turnaround Badge */}
          <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex items-center gap-2 text-xs text-blue-900 dark:text-cyan-300">
            <Zap size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
            <span className="font-medium text-[11px]">
              Average response turnaround: <span className="font-bold">&lt; 12 hours</span>
            </span>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: FOCUSED FORM (7 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7"
        >
          <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-xl flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Only Web & Mobile Architecture Toggle */}
              <div>
                <label className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-2">
                  Select Project Platform
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {projectScopes.map((scope) => {
                    const isSelected = selectedScope === scope.label;
                    const Icon = scope.icon;

                    return (
                      <button
                        type="button"
                        key={scope.id}
                        onClick={() => setSelectedScope(scope.label)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                          isSelected
                            ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-slate-950 dark:border-white shadow-xs"
                            : "bg-slate-50 dark:bg-slate-950/50 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <div
                          className={`p-1.5 rounded-lg ${
                            isSelected
                              ? "bg-white/10 dark:bg-black/10 text-white dark:text-slate-950"
                              : "bg-slate-200/70 dark:bg-slate-800 text-blue-600 dark:text-cyan-400"
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold leading-tight">{scope.label}</p>
                          <p className={`text-[10px] font-mono ${isSelected ? "text-slate-300 dark:text-slate-600" : "text-slate-400"}`}>
                            {scope.sub}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Your Name / Organization
                </label>
                <div className="relative">
                  <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan or TechCorp"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Business Email
                </label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Project Brief & Architecture Goals
                </label>
                <div className="relative">
                  <MessageSquare size={14} className="absolute left-3.5 top-3 text-slate-400" />
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your Web or Mobile project scope, timeline, and feature requirements..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-70"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </motion.span>
                  ) : isSent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-1.5 text-white font-bold"
                    >
                      <Check size={15} />
                      <span>Inquiry Sent Successfully!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <span>Send Project Inquiry</span>
                      <Send size={14} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}