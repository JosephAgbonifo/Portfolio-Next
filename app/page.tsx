"use client";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import HorizontalLines from "@/utils/bgline";
import FloatingBobble from "@/utils/bobbles";
import { usedocProgress } from "@/utils/scrollpercent";
import { useEffect } from "react";

export default function Home() {
  // If you need scroll tracking, use useEffect with cleanup
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <div className="relative font-code overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <div className="pl-5 w-52 h-10 text-xs md:text-sm rounded-r-full fixed left-0 bottom-5 md:bottom-20">
        you&apos;ve read {Math.floor(usedocProgress())}% of this page
      </div>
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <FloatingBobble speed={0.3} size={30} left="10%" color="#60a5fa" />
        <FloatingBobble speed={0.6} size={40} left="30%" color="#a78bfa" />
        <FloatingBobble speed={1.2} size={50} left="50%" color="#f472b6" />
        <FloatingBobble speed={0.8} size={25} left="70%" color="#34d399" />
        <FloatingBobble speed={0.5} size={35} left="90%" color="#fcd34d" />
        <FloatingBobble speed={0.3} size={30} left="80%" color="#60a5fa" />
        <FloatingBobble speed={0.6} size={40} left="60%" color="#a78bfa" />
        <FloatingBobble speed={1.2} size={50} left="40%" color="#f472b6" />
        <FloatingBobble speed={0.8} size={25} left="20%" color="#34d399" />
        <FloatingBobble speed={0.5} size={35} left="0%" color="#fcd34d" />

        <FloatingBobble
          speed={1.2}
          size={50}
          left="10%"
          bottom="26%"
          color="#f472b6"
        />
        <FloatingBobble
          speed={0.8}
          size={25}
          left="25%"
          bottom="42%"
          color="#34d399"
        />
        <FloatingBobble
          speed={0.5}
          size={35}
          left="50%"
          bottom="85%"
          color="#fcd34d"
        />
        <FloatingBobble
          speed={0.3}
          size={30}
          left="78%"
          bottom="61%"
          color="#60a5fa"
        />
        <FloatingBobble
          speed={0.6}
          size={40}
          left="93%"
          bottom="15%"
          color="#a78bfa"
        />
        <HorizontalLines />
      </div>
    </div>
  );
}
