// src/app/page.tsx
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Services from "@/components/sections/Services";
import SmoothScroll from "@/components/animation/SmoothScroll";
import Solutions from "@/components/sections/Solutions";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Workflow from "@/components/sections/Lifecycle";
import Reviews from "@/components/sections/Reviews";
import Architecture from "@/components/sections/Architecture";


export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative">
        <ScrollProgress />
        <Hero />
        <Services />
        <TechStack />
        <Architecture />
        <Workflow />
        <Solutions />
        <Pricing />
        <Reviews />
        <Faq />
        <Contact />
      </main>
    </SmoothScroll>
  );
}