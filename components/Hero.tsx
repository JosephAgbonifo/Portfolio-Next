"use client";
import Blink from "@/utils/blink";
import TypewriterLoop from "@/utils/typewriter";
import Image from "next/image";
import React from "react";
import { useScrollProgress } from "@/utils/scrollpercent";

const Hero = () => {
  const scrollPercent = useScrollProgress();
  const codeSnippet = `
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(numbers));
`;

  return (
    <div>
      <div className=" flex relative flex-col md:flex-row pt-0 md:pt-0 h-screen bg-background/60 bg-[url('/images/mwall.png')] bg-blend-multiply bg-center bg-cover bg-fixed">
        <div className="flex-1 flex justify-center items-start pl-10 flex-col">
          <h1 className="text-3xl mg:text-4xl font-bold text-white">
            Joseph Agbonifo
            <Blink />
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-300">
            MERN Developer | Tech Enthusiast | Web3 Enthusiast
          </p>
          <button className="mt-6 px-4 py-2 bg-magenta text-white rounded hover:bg-foreground">
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
          className="absolute right-10"
          style={{
            bottom: `${scrollPercent}%`,
            right: `calc(${scrollPercent}% / 2)`,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
