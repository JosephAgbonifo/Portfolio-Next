"use client";
import Blink from "@/utils/blink";
import TypewriterLoop from "@/utils/typewriter";
import Image from "next/image";
import React from "react";
import { useScrollProgress, usedocProgress } from "@/utils/scrollpercent";
import ParallaxItem from "@/utils/parallax";
import Link from "next/link";

const Hero = () => {
  const scrollPercent = useScrollProgress();
  const transformStyle = `rotate(${scrollPercent * 6}deg)`;
  const scrollPercentDoc = usedocProgress();
  const codeSnippet = `MERN Developer | Tech Enthusiast | Web3 Enthusiast`;

  return (
    <div>
      <div className=" flex relative flex-col md:flex-row pt-0 md:pt-0 min-h-screen hide-scrollbar">
        <div className="relative flex-1 flex justify-center items-start pl-10 flex-col">
          <ParallaxItem speed={0.5}>
            <h1 className="text-7xl md:text-8xl font-bold text-white">
              I <br />
              am <br />
              Joseph
              <br />
              Agbonifo
            </h1>{" "}
          </ParallaxItem>
          <div className="grid grid-cols-4 gap-5 fixed right-10 top-10 mt-4 rotate-[270deg] origin-top-right text-lg font-sans font-bold">
            <Link href="/whatsapp" className="text-white">
              Whatsapp
            </Link>
            <Link href="/github" className="text-white">
              Github
            </Link>
            <Link href="/linkedin" className="text-white">
              LinkedIn
            </Link>
            <Link href="/twitter" className="text-white">
              Twitter
            </Link>
          </div>

          <button
            className={`absolute bottom-10 w-32 mt-6 px-4 py-2 bg-magenta text-white rounded hover:bg-foreground transition-all duration-300 ease-in-out`}
            style={{
              transform: `translateY(${scrollPercent}px)`,
              transition: "transform 0.3s ease-in-out",
              marginLeft: `${scrollPercent}%`,
            }}
          >
            Get in touch
          </button>
        </div>
        <div className="flex-1 absolute bottom-10 w-[60%] md:w-auto right-0 md:relative text-[8px] md:text-sm flex justify-start items-center pl-10">
          <div className="h-40">
            <TypewriterLoop text={codeSnippet} speed={100} pause={5000} />
          </div>
        </div>{" "}
        <Image
          src="/icons/rocket.png"
          alt="rocket boost"
          width={100}
          height={100}
          unoptimized
          className="absolute"
          style={{
            bottom: `${scrollPercent}%`,
            left: `calc(${scrollPercent}% + 200px)`,
            transform: transformStyle,
          }}
        />
        <div
          className="absolute bottom-5 right-5 w-[200px] h-[200px] origin-bottom-right"
          style={{
            bottom: `${scrollPercent}%`,
            right: `calc(${scrollPercent}% * 2)`,
            transform: transformStyle,
            transformOrigin: "center center",
          }}
        >
          <Image
            src="/images/hellojoe.png"
            alt="Hello Joe"
            width={100}
            height={100}
            unoptimized
            className="absolute right-10 bottom-20 origin-bottom-right"
            style={{
              bottom: `${scrollPercentDoc}%`,
              right: `calc(${scrollPercent}% * 2)`,
              transform: `rotate(${scrollPercent * 2}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
