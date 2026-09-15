export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  platform: "Flutter (iOS & Android)" | "Web Platform" | "Web + Flutter App";
  description: string;
  metrics: string;
  tags: string[];
  features: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "apex-logistics",
    title: "Apex Fleet & Logistics Platform",
    tagline: "Enterprise Fleet Ops",
    platform: "Web + Flutter App",
    description: "রিয়েল-টাইম কুরিয়ার ও ফ্লিট ট্র্যাকিংয়ের জন্য Flutter মোবাইল অ্যাপ (ড্রাইভারদের জন্য) এবং Next.js লাইভ ড্যাশবোর্ড (অ্যাডমিনদের জন্য)।",
    metrics: "Sub-second GPS Sync • 60 FPS Fluid",
    tags: ["Flutter", "Dart", "Next.js 16", "Supabase", "Mapbox"],
    features: ["Offline-first Hive DB", "Background Location", "Real-time SSE Dashboard"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: "medsync-care",
    title: "MedSync Telemedicine Engine",
    tagline: "Healthcare & Video Consultation",
    platform: "Flutter (iOS & Android)",
    description: "রোগী ও চিকিৎসকদের জন্য কমপ্লিট ক্রস-প্ল্যাটফর্ম অ্যাপ। ইনস্ট্যান্ট ভিডিও প্রেসক্রিপশন এবং এন্ড-টু-এন্ড এনক্রিপ্টেড চ্যাট সুবিধা।",
    metrics: "99.98% Crash-Free • 120 FPS ProMotion",
    tags: ["Flutter", "WebRTC", "Firebase", "Stripe SDK", "Bloc"],
    features: ["Biometric Auth", "VoIP Push Call Notifications", "PDF Export"],
    liveLink: "https://example.com",
  },
  {
    id: "saas-flow",
    title: "Nova Analytics Cloud Dashboard",
    tagline: "High-Throughput Analytics",
    platform: "Web Platform",
    description: "মিলিয়ন ইউজার ইভেন্ট হ্যান্ডেল করার উপযোগী হাই-স্পিড ওয়েব ড্যাশবোর্ড ও ক্লাউড ডেটা ভিজ্যুয়ালাইজার।",
    metrics: "Lighthouse 100/100 • < 0.1s Hydration",
    tags: ["Next.js 16", "TypeScript", "Tailwind v4", "PostgreSQL", "Recharts"],
    features: ["Edge SSR Caching", "Automated Dark Mode", "Multi-tenant Roles"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];