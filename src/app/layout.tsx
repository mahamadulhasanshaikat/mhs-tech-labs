// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MHS Tech Lab | Web, Flutter Mobile & AI Software Studio",
  description:
    "MHS Tech Lab engineers high-performance Flutter mobile apps with Riverpod, modern Next.js web applications, Supabase/PostgreSQL backends, and AI/ML solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}