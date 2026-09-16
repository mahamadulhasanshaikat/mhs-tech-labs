import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Estimator from "@/components/sections/Estimator";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#070b14]">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Workflow />
      <Estimator />
      <WhyUs />
      <Contact />
    </main>
  );
}