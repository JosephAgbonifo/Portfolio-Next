"use client";
import Image from "next/image";
import React from "react";
import { useScrollProgress } from "@/utils/scrollpercent";
import ParallaxItem from "@/utils/parallax";

const About = () => {
  const scrollPercent = useScrollProgress();
  return (
    <div className="min-h-screen p-10 bg-transparent">
      <div className="relative flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center md:pl-10 flex-col">
          <ParallaxItem speed={0.2}>
            <Image
              src="/icons/me.png"
              alt="Joseph Agbonifo"
              width={300}
              height={300}
              unoptimized
              className="w-32 md:w-80 hidden md:block rounded-full border-2 border-magenta"
            />
          </ParallaxItem>
          <Image
            src="/icons/me.png"
            alt="Joseph Agbonifo"
            width={300}
            height={300}
            unoptimized
            className="w-32 mb-10 md:w-80 md:hidden block rounded-full border-2 border-magenta"
          />
        </div>
        <div className="flex-1 flex text-justify justify-center items-start md:px-10 flex-col">
          <h2 className="px-10 text-mygray dark:text-foreground text-center md:text-left text-xl md:text-2xl pb-10 pt-10 ">
            {" "}
            About Joseph
          </h2>
          <p className="font-sans text-md md:text-sm dark:text-mygray mb-3 indent-4">
            I&apos;m Joseph, a JavaScript developer with a knack for clean
            design and intuitive interfaces. I build modern, accessible web
            experiences that look good and feel right, using tools like React,
            Next.js, Tailwind CSS, and the rest of the modern stack.
          </p>
          <p className="font-sans text-md dark:text-mygray mb-3  indent-4">
            I believe every design tells a story, not just through visuals, but
            in how users interact with it. That&apos;s why I write code
            that&apos;s clean, modular, and built to scale, with solid
            structure.
          </p>
          <p className="font-sans text-md dark:text-mygray mb-3  indent-4">
            I&apos;m passionate about bringing ideas to life, solving problems,
            and making the web a better, more usable place. Whether I&apos;m
            refining the details or architecting the whole flow, I&apos;m here
            to build things that matter.
          </p>
        </div>
        <Image
          src="/icons/chem.png"
          alt="Conical flask"
          width={100}
          height={100}
          unoptimized
          className="absolute left-10"
          style={{
            bottom: `calc(${scrollPercent}% - 100%)`,
            left: `calc((${scrollPercent}% - 100%) / 2)`,
          }}
        />
      </div>
    </div>
  );
};

export default About;
