// src/components/ArchitectureLab.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Smartphone, Database, MapPin, BrainCircuit, Check, Copy, Sparkles } from "lucide-react";

const labTabs = [
  {
    id: "riverpod",
    label: "Flutter + Riverpod",
    icon: Smartphone,
    title: "Compile-Safe Reactive State Management",
    description:
      "We use Riverpod Notifiers and AsyncValues to decouple UI from business logic, ensuring 120 FPS rendering and zero memory leaks.",
    highlights: ["Auto-Dispose Providers", "Zero BuildContext Dependency", "Clean Repository Pattern"],
    code: `// MHS Tech Lab — Flutter + Riverpod Reactive State
@riverpod
class FleetTrackerNotifier extends _$FleetTrackerNotifier {
  @override
  Stream<List<VehicleLocation>> build() {
    final repo = ref.watch(mapRepositoryProvider);
    return repo.watchLiveVehicles(); // Real-time stream
  }

  Future<void> syncOfflineQueue() async {
    final sqlite = ref.read(localSqliteProvider);
    await sqlite.pushPendingRecordsToSupabase();
  }
}`,
  },
  {
    id: "offline-db",
    label: "SQLite + Supabase Sync",
    icon: Database,
    title: "Offline-First SQLite to PostgreSQL Cloud Sync",
    description:
      "Field operations never stop when the internet drops. Data writes locally to SQLite and automatically syncs with Supabase PostgreSQL via REST/Realtime.",
    highlights: ["Local SQLite Persistence", "Conflict-Free Cloud Merge", "PostgreSQL Row-Level Security"],
    code: `// Offline-First Sync Engine (SQLite -> Supabase PostgreSQL)
export async function syncLocalTransactions(db: SQLiteDatabase) {
  const unsyncedRows = await db.getAllAsync('SELECT * FROM orders WHERE synced = 0');
  
  const { data, error } = await supabase
    .from('enterprise_orders')
    .upsert(unsyncedRows, { onConflict: 'order_id' });

  if (!error) {
    await db.runAsync('UPDATE orders SET synced = 1 WHERE synced = 0');
  }
}`,
  },
  {
    id: "maps",
    label: "Live Map & REST API",
    icon: MapPin,
    title: "High-Precision Geolocation & Route Telemetry",
    description:
      "Real-time rider tracking, geofencing triggers, and custom map markers powered by WebSockets, Firebase/Supabase streams, and RESTful APIs.",
    highlights: ["Live Polyline Routing", "Dynamic Marker Clustering", "Sub-Second GPS Telemetry"],
    code: `// Live Geolocation Telemetry Stream
final locationStream = Geolocator.getPositionStream(
  locationSettings: const LocationSettings(
    accuracy: LocationAccuracy.bestForNavigation,
    distanceFilter: 5,
  ),
).listen((Position pos) {
  restApiClient.post('/api/v1/telemetry/location', data: {
    'lat': pos.latitude,
    'lng': pos.longitude,
    'timestamp': DateTime.now().toIso8601String(),
  });
});`,
  },
  {
    id: "ai-ml",
    label: "AI / ML Pipeline",
    icon: BrainCircuit,
    title: "Next-Gen Intelligent API Endpoints",
    description:
      "Gradually shifting traditional web and mobile workflows into AI-assisted platforms with predictive analytics and automated decision engines.",
    highlights: ["Predictive Data Scoring", "LLM Context Integration", "Fast REST Inference"],
    code: `// Next.js App Router — AI Predictive Analytics Endpoint
export async function POST(req: Request) {
  const payload = await req.json();
  const prediction = await mhsAiEngine.predictDemand({
    historicalSales: payload.metrics,
    region: payload.geoZone,
  });

  return Response.json({ status: "success", forecast: prediction });
}`,
  },
];

export default function ArchitectureLab() {
  const [activeTab, setActiveTab] = useState(labTabs[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-lab" className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>Inside Our Engineering Lab</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Clean Code & Architecture
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Interactive Tab Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {labTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab.id === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40"
              }`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-xl"
        >
          {/* Left Explanation (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold">
              <Terminal size={14} /> {activeTab.label}
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-snug">
              {activeTab.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeTab.description}
            </p>
            <div className="space-y-2.5 pt-2">
              {activeTab.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Code Preview Window (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-300 font-semibold">mhs_architecture_blueprint.ts</span>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] transition cursor-pointer"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? "Copied" : "Copy Snippet"}</span>
              </button>
            </div>
            <pre className="p-5 text-xs sm:text-[13px] font-mono text-cyan-300 overflow-x-auto leading-relaxed">
              <code>{activeTab.code}</code>
            </pre>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}