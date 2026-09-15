export interface TechItem {
  name: string;
  category: "Flutter & Mobile" | "Web & Frontend" | "Backend & Realtime" | "Cloud & Deployment";
  role: string;
  badge?: string;
}

export const techStackData: TechItem[] = [
  // Flutter & Mobile
  { name: "Flutter", category: "Flutter & Mobile", role: "Cross-Platform Framework", badge: "Core" },
  { name: "Dart", category: "Flutter & Mobile", role: "Language Engine", badge: "Core" },
  { name: "Bloc / Riverpod", category: "Flutter & Mobile", role: "State Architecture" },
  { name: "Firebase", category: "Flutter & Mobile", role: "Push & Analytics" },
  { name: "Hive / SQLite", category: "Flutter & Mobile", role: "Local Offline Storage" },
  { name: "Codemagic", category: "Flutter & Mobile", role: "Automated App CI/CD" },

  // Web & Frontend
  { name: "Next.js 16", category: "Web & Frontend", role: "App Router & SSR", badge: "Core" },
  { name: "React 19", category: "Web & Frontend", role: "Component System" },
  { name: "TypeScript", category: "Web & Frontend", role: "Strict Type Safety", badge: "Core" },
  { name: "Tailwind CSS v4", category: "Web & Frontend", role: "Ultra-Fast Styling" },
  { name: "TanStack Query", category: "Web & Frontend", role: "Async Server State" },
  { name: "Framer Motion", category: "Web & Frontend", role: "Fluid Motion" },

  // Backend & Realtime
  { name: "Node.js / Bun", category: "Backend & Realtime", role: "High-Throughput Runtime", badge: "Core" },
  { name: "PostgreSQL", category: "Backend & Realtime", role: "Relational Engine" },
  { name: "Supabase", category: "Backend & Realtime", role: "Real-time DB & Auth", badge: "Preferred" },
  { name: "GraphQL / REST", category: "Backend & Realtime", role: "Client-Server Contract" },
  { name: "Redis", category: "Backend & Realtime", role: "In-Memory Caching" },
  { name: "Prisma / Drizzle", category: "Backend & Realtime", role: "Modern TypeScript ORM" },

  // Cloud & Deployment
  { name: "Cloudflare Pages", category: "Cloud & Deployment", role: "Global Edge Hosting", badge: "Fast" },
  { name: "Vercel Edge", category: "Cloud & Deployment", role: "Serverless Deployment" },
  { name: "Apple App Store", category: "Cloud & Deployment", role: "iOS Production Release" },
  { name: "Google Play Console", category: "Cloud & Deployment", role: "Android App Distribution" },
  { name: "Docker", category: "Cloud & Deployment", role: "Containerized Workflows" },
  { name: "GitHub Actions", category: "Cloud & Deployment", role: "Zero-Downtime Pipeline" },
];