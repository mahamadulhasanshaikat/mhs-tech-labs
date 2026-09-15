import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <WhyUs />
      <Process />
      <Contact />
    </main>
  );
}