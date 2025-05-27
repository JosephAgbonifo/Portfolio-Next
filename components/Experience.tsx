import FloatingBobble from "@/utils/bobbles";
import ParallaxItem from "@/utils/parallax";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center hide-scrollbar ">
      <ParallaxItem speed={0.1}>
        <Image
          src="/icons/chain.png"
          alt="Hello Joe"
          width={100}
          height={100}
          unoptimized
        />
      </ParallaxItem>
      <h1 className="text-7xl md:text-8xl font-bold text-white mb-20">
        Featured
        <br />
        Works :
      </h1>
      <Projects
        href={`/projects/peakify`}
        text="Peakify — Learn to Reach Your Peak"
        direction="right"
        img1="/projects/peakify2.png"
        img2="/projects/peakify1.png"
      />
      <Projects
        href={`/projects/interwooven`}
        text="Interwooven — A Collaborative, Multi-Niche Blog"
        direction="left"
        img1="/projects/inter_1.png"
        img2="/projects/inter_2.png"
      />
      <Projects
        href={`/projects/quirklr`}
        text="Quirklr — Spontaneous Study Sessions"
        direction="right"
        img1="/projects/quirklr2.png"
        img2="/projects/quirklr1.png"
      />
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
    </div>
  );
};

function Projects({
  text,
  direction,
  img1,
  img2,
  href = "#",
}: {
  text: string;
  direction: string;
  img1: string;
  img2: string;
  href?: string;
}) {
  const isLeft = direction === "left";

  return (
    <div className="md: mb-20">
      <Link href={href}>
        <div
          className={`w-full flex flex-col md:flex-row items-center justify-center gap-10 px-10 md:px-20 ${
            isLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={img1}
              alt={`${text} preview 1`}
              width={800}
              height={600}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 hover:underline transition-all duration-300 ease-in-out">
              {text}
            </h2>
            <Image
              src={img2}
              alt={`${text} preview 2`}
              width={800}
              height={600}
              className="rounded-2xl shadow-lg mt-6"
            />
          </div>
        </div>
      </Link>
      <hr className="md:hidden my-10 text-magenta" />
    </div>
  );
}
export default Experience;
