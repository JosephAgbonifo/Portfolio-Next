import Hero from "@/components/Hero";
import About from "@/components/About";
import { FloatingNavDemo } from "@/components/FloatingNavbar";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FloatingNavDemo />
      <Experience />
    </>
  );
}
