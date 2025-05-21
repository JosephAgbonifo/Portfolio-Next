"use client";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { usedocProgress } from "@/utils/scrollpercent";

export default function Home() {
  return (
    <div className="relative font-code overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Experience />
      <div className="pl-5 w-52 h-10 hidden md:block rounded-r-full fixed left-0 bottom-20">
        you've read {Math.floor(usedocProgress())}% of this page
      </div>
    </div>
  );
}
