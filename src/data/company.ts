// src/data/company.ts

export const companyInfo = {
  name: "MHS Tech Lab",
  shortName: "MHS",
  tagline: "Engineering Scalable Web & Mobile Apps — Evolving with AI Intelligence.",
  subTagline:
    "We architect high-performance cross-platform mobile applications with Flutter & Riverpod, modern web platforms with Next.js, real-time map & cloud backends, and next-gen AI/ML solutions.",
  email: "contact@mhstechlab.com",
  phone: "+880 1700-000000",
  location: "Dhaka, Bangladesh",
  stats: [
    { label: "Core Stack", value: "Flutter & Next.js", desc: "Web & Mobile Excellence" },
    { label: "Architecture", value: "99.9%", desc: "Scalable Cloud & Offline DB" },
    { label: "State & API", value: "Riverpod + REST", desc: "Reactive & Fast Data Flow" },
    { label: "Future Vision", value: "AI & ML", desc: "Intelligent Automation Lab" },
  ],
};

export const services = [
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile Apps",
    badge: "Flutter & Riverpod",
    description:
      "Pixel-perfect, native-speed Android & iOS applications built with Flutter and reactive Riverpod state management for rock-solid performance.",
    features: ["Flutter (iOS & Android)", "Riverpod State Architecture", "Offline-First SQLite Sync", "Smooth 60/120 FPS Animations"],
  },
  {
    id: "web-platform",
    title: "Modern Web Applications",
    badge: "Next.js & Tailwind CSS",
    description:
      "SEO-optimized, ultra-fast full-stack web applications, SaaS dashboards, and enterprise portals using Next.js App Router and Tailwind CSS.",
    features: ["Next.js App Router & SSR", "Tailwind CSS Design Systems", "Interactive Admin Dashboards", "High-Conversion Landing Pages"],
  },
  {
    id: "backend-cloud",
    title: "Cloud, Database & REST APIs",
    badge: "Supabase • Firebase • Postgres",
    description:
      "Secure, real-time backend infrastructure combining PostgreSQL, Supabase, Firebase, and custom RESTful APIs for seamless data synchronization.",
    features: ["Supabase & PostgreSQL", "Firebase Auth & Firestore", "Local SQLite Storage", "Secure REST API Integration"],
  },
  {
    id: "maps-geo",
    title: "Map & Geolocation Integration",
    badge: "Real-Time Tracking",
    description:
      "Advanced interactive maps, live rider/fleet tracking, geofencing, and route optimization integrated directly into mobile and web apps.",
    features: ["Live GPS & Fleet Tracking", "Custom Map Markers & Clustering", "Route & Distance Calculation", "Location-Based Search"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Lab",
    badge: "Next-Gen Shift",
    description:
      "Gradually transforming traditional software into smart ecosystems with predictive analytics, computer vision, and LLM-powered automation.",
    features: ["Smart AI Assistants & Chatbots", "Predictive Data Analytics", "Automated Workflows", "ML Model API Integration"],
  },
];

export const techCategories = [
  {
    title: "Mobile & State Management",
    subtitle: "Cross-Platform Native Feel",
    skills: ["Flutter", "Dart", "Riverpod", "SQLite (Offline DB)", "Android & iOS Deployment"],
  },
  {
    title: "Modern Web Frontend",
    subtitle: "High-Speed SSR & UI",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend, Cloud & DB",
    subtitle: "Real-Time & Relational Data",
    skills: ["Supabase", "Firebase", "PostgreSQL", "REST API", "Authentication & RLS"],
  },
  {
    title: "Geo-Services & AI Shift",
    subtitle: "Location & Intelligence",
    skills: ["Map Integration", "Live Geolocation", "AI / ML Integration", "Python & Data Pipelines", "Smart APIs"],
  },
];

export const featuredSolutions = [
  {
    title: "GeoTrack Delivery & Fleet Ecosystem",
    category: "Flutter + Map Integration",
    description:
      "Real-time parcel and fleet tracking mobile application powered by Flutter, Riverpod, live map route rendering, and Supabase real-time sync.",
    tech: ["Flutter", "Riverpod", "Map Integration", "Supabase", "PostgreSQL"],
  },
  {
    title: "CloudSync Enterprise SaaS Portal",
    category: "Next.js + PostgreSQL",
    description:
      "Modern multi-tenant web platform with role-based access control, interactive analytics, REST API orchestration, and instant dark/light themes.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "REST API", "Framer Motion"],
  },
  {
    title: "Offline-First Field Operations App",
    category: "Mobile + Local & Cloud DB",
    description:
      "Designed for low-connectivity zones using SQLite local persistence with automatic background synchronization to Firebase & REST servers.",
    tech: ["Flutter", "Riverpod", "SQLite", "Firebase", "REST API"],
  },
  {
    title: "MHS Smart AI Analytics Engine",
    category: "AI & ML Roadmap",
    description:
      "Intelligent business forecasting and automated decision module integrating machine learning models into web and mobile dashboards.",
    tech: ["AI / ML", "Next.js", "Python API", "Supabase", "Tailwind CSS"],
  },
];

// src/data/company.ts er niche ei অংশটুকু যোগ করো

export const siteConfig = {
  version: "1.0.1",
  company: "MHS Tech Lab",
  developer: {
    name: "MHS",
    url: "https://mhshaikat.pages.dev/",
  },
};

export const bentoHighlights = [
  {
    id: "riverpod-flutter",
    badge: "Reactive Mobile Core",
    title: "Flutter + Riverpod State Architecture",
    description:
      "Clean, testable, and compile-safe reactive state management ensuring zero UI jank and 120 FPS performance across Android and iOS devices.",
    colSpan: "md:col-span-2",
    metrics: ["100% Compile-Safe", "Single Codebase", "iOS & Android"],
  },
  {
    id: "offline-first",
    badge: "Zero Data Loss",
    title: "SQLite Offline-First Sync",
    description:
      "Apps work seamlessly without internet using local SQLite caching and auto-sync with Supabase/PostgreSQL when back online.",
    colSpan: "md:col-span-1",
    metrics: ["Local SQLite", "Auto Cloud Sync"],
  },
  {
    id: "live-maps",
    badge: "Geo-Intelligence",
    title: "Real-Time Map & Fleet Tracking",
    description:
      "Live GPS telemetry, custom map markers, route polylines, and geofencing built for delivery, ride-sharing, and logistics.",
    colSpan: "md:col-span-1",
    metrics: ["Live Socket/Stream", "Route Optimization"],
  },
  {
    id: "fullstack-cloud",
    badge: "High-Speed Backend",
    title: "Next.js + Supabase, Firebase & PostgreSQL",
    description:
      "Enterprise relational schemas in PostgreSQL, real-time subscriptions via Supabase & Firebase, and secure REST API orchestration.",
    colSpan: "md:col-span-2",
    metrics: ["Row-Level Security", "REST APIs", "Edge Ready"],
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Architecture & DB Schema",
    subtitle: "Blueprint & UI/UX",
    description:
      "We design scalable PostgreSQL/Supabase schemas, REST API contracts, and interactive wireframes before writing a single line of code.",
  },
  {
    step: "02",
    title: "Agile Web & Mobile Sprint",
    subtitle: "Next.js & Flutter + Riverpod",
    description:
      "Parallel development of responsive Next.js web portals and cross-platform Flutter apps with Riverpod state management and SQLite local storage.",
  },
  {
    step: "03",
    title: "Cloud, Map & AI Integration",
    subtitle: "Real-Time & Smart Features",
    description:
      "Connecting live geolocation maps, Firebase/Supabase real-time streams, and custom AI/ML predictive endpoints.",
  },
  {
    step: "04",
    title: "QA Testing & Scale Launch",
    subtitle: "CI/CD & Production Monitoring",
    description:
      "Rigorous performance profiling, security audits, App Store / Play Store publishing, and zero-downtime cloud deployment.",
  },
];

export const engagementPlans = [
  {
    name: "MVP Launchpad",
    tagline: "For Startups & Fast Validation",
    price: "Custom Quote",
    duration: "3 – 5 Weeks Delivery",
    popular: false,
    features: [
      "Flutter Mobile App OR Next.js Web App",
      "Riverpod State Architecture",
      "Supabase / Firebase Auth & Database",
      "Core REST API Integration",
      "1 Month Free Technical Support",
    ],
  },
  {
    name: "Full-Stack Ecosystem",
    tagline: "Web + Mobile + Cloud + Maps",
    price: "Most Popular",
    duration: "6 – 10 Weeks Delivery",
    popular: true,
    features: [
      "Flutter (iOS & Android) + Next.js Admin Web",
      "PostgreSQL + Supabase & Offline SQLite Sync",
      "Live Map & Geolocation Tracking Integration",
      "Custom REST APIs & Role-Based Access",
      "AI-Ready Modular Architecture",
      "3 Months Priority Support & Maintenance",
    ],
  },
  {
    name: "AI & Enterprise Lab",
    tagline: "Dedicated Engineering Partner",
    price: "Retainer / Custom",
    duration: "Ongoing Agile Sprints",
    popular: false,
    features: [
      "Custom AI / ML Model & LLM Integration",
      "High-Concurrency PostgreSQL & Cloud Infra",
      "Dedicated Flutter & Next.js Engineers",
      "Advanced Analytics & Automated Workflows",
      "SLA Uptime & Long-Term Scaling",
    ],
  },
];

export const faqs = [
  {
    question: "Why does MHS Tech Lab use Flutter with Riverpod for mobile apps?",
    answer:
      "Flutter allows us to build native-speed iOS and Android apps from a single codebase, saving time and budget. Pairing it with Riverpod ensures compile-safe, reactive state management so your app stays fast and bug-free even as features grow.",
  },
  {
    question: "Can our app work offline and sync data later?",
    answer:
      "Yes! We implement an offline-first architecture using local SQLite databases on the device, which automatically synchronizes with Supabase, Firebase, or PostgreSQL REST APIs once the internet connection is restored.",
  },
  {
    question: "Do you integrate live maps and real-time location tracking?",
    answer:
      "Absolutely. We specialize in real-time GPS tracking, interactive map rendering, route calculation, and geofencing for logistics, delivery, and field-service applications.",
  },
  {
    question: "How are you integrating AI and Machine Learning into projects?",
    answer:
      "We build modular backends where Python-based ML models, predictive analytics, and smart AI assistants can be connected directly to your Next.js web dashboard and Flutter mobile app via fast REST APIs.",
  },
];