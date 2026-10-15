// src/app/page.tsx
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Services from "@/components/sections/Services";
import SmoothScroll from "@/components/animation/SmoothScroll";
import Solutions from "@/components/sections/Solutions";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Reviews from "@/components/sections/Reviews";
import Architecture from "@/components/sections/Architecture";
import Lifecycle from "@/components/sections/Lifecycle";


export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative">
        <ScrollProgress />
        <Hero />
        <Services />
        <TechStack />
        <Architecture />
        <Lifecycle />
        <Solutions />
        <Reviews />
        <Faq />
        <Contact />
      </main>
    </SmoothScroll>
  );
}