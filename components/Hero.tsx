"use client";

import TypewriterLoop from "@/utils/typewriter";
import Image from "next/image";
import React from "react";
import { useScrollProgress } from "@/utils/scrollpercent";
import ParallaxItem from "@/utils/parallax";
import Link from "next/link";

const Hero = () => {
  const scrollPercent = useScrollProgress();
  const transformStyle = `rotate(${scrollPercent * 6}deg)`;
  const codeSnippet2 = `
const joseph = {
  name: "Joseph",
  title: "Frontend Developer | Web3-ready",
  stack: [
    "React",
    "JavaScript",
    "ethers.js",
    "wagmi",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "REST APIs",
    "Next.js (API routes)"
  ],
  currentlyBuilding: ["Quirklr", "personal projects"],
  passions: ["Clean UI", "Decentralized tech", "Creative problem-solving"]
};
`;

  return (
    <div>
      <div className=" flex relative flex-col md:flex-row md:p-32 min-h-screen hide-scrollbar">
        <div className="relative flex-1 flex justify-center items-start pl-10 flex-col">
          <ParallaxItem speed={0.5}>
            <h1 className="text-7xl md:text-8xl font-bold">
              I&apos;m <br />
              Joseph
              <br />
              Agbonifo
            </h1>{" "}
          </ParallaxItem>
          <div
            className={`${
              scrollPercent > 99
                ? "hidden"
                : "fixed w-[80%] left-[10%] md:hidden md:right-10 top-10 mt-4 md:rotate-[270deg] md:origin-top-right "
            }grid grid-cols-4 gap-5 text-sm md:text-lg font-sans md:font-bold text-center`}
          >
            <Link
              href="https://wa.link/9tu764"
              className="text-foreground dark:text-white"
            >
              Whatsapp
            </Link>
            <Link
              href="https://github.com/josephagbonifo"
              className="text-foreground dark:text-white"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/josephagbonifo/"
              className="text-foreground dark:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/HelloJoeDev"
              className="text-foreground dark:text-white"
            >
              Twitter
            </Link>
          </div>

          <button
            onClick={() => {
              location.href = "#footer";
            }}
            className={`absolute -bottom-10 md:-bottom-20 w-32 mt-6 px-4 py-2 bg-magenta text-white rounded hover:bg-foreground transition-all duration-300 ease-in-out`}
            style={{
              transform: `translateY(${scrollPercent}px)`,
              transition: "transform 0.3s ease-in-out",
              marginLeft: `${scrollPercent}%`,
            }}
          >
            Get in touch
          </button>
        </div>
        <div className="flex-1 text-foreground absolute bottom-10 w-[60%] md:w-auto right-0 md:relative text-[8px] md:text-xs flex justify-start items-center pl-10">
          <div className="h-40">
            <TypewriterLoop text={codeSnippet2} speed={10} pause={5000} />
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
            right: `calc(${scrollPercent}% + 200px)`,
            transform: transformStyle,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
