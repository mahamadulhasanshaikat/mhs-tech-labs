// src/app/page.tsx
import ArchitectureLab from "@/components/sections/ArchitectureLab";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Services from "@/components/sections/Services";
import SmoothScroll from "@/components/animation/SmoothScroll";
import Solutions from "@/components/sections/Solutions";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Workflow from "@/components/sections/Workflow";
import Reviews from "@/components/sections/Reviews";


export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative">
        <ScrollProgress />
        <Hero />
        <Services />
        <TechStack />
        <ArchitectureLab />
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