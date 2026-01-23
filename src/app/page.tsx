import About from "@/components/about";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/projects";
import TechStack from "@/components/stack";
import WhatIDo from "@/components/whatIDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhatIDo />
      <ProjectsSection />
      <TechStack />
    </div>
  );
}
