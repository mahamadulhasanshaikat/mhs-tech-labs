// src/app/page.tsx

import AiRoadmap from "@/components/sections/AiRoadmap";
import ArchitectureLab from "@/components/sections/ArchitectureLab";
import BentoFeatures from "@/components/sections/BentoFeatures";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import ScrollProgress from "@/components/sections/ScrollProgress";
import Services from "@/components/sections/Services";
import SmoothScroll from "@/components/sections/SmoothScroll";
import Solutions from "@/components/sections/Solutions";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Workflow from "@/components/sections/Workflow";


export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative">
        <ScrollProgress />
        <Hero />
        <Services />
        <BentoFeatures />
        <TechStack />
        <ArchitectureLab />
        <Workflow />
        <AiRoadmap />
        <Solutions />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
    </SmoothScroll>
  );
}