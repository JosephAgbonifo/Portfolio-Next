import Blink from "@/utils/blink";
import TypewriterLoop from "@/utils/typewriter";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const codeSnippet = `
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(numbers));
`;

  return (
    <div>
      <div className="flex relative flex-col md:flex-row pt-36 md:pt-0 h-screen">
        <div className="flex-1 flex justify-center items-start pl-10 flex-col">
          <h1 className="text-4xl font-bold text-white">
            Joseph Agbonifo <Blink />
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-300">
            Fullstark MERN Developer | Tech Enthusiast | Web3 Enthusiast
          </p>
          <button className="mt-6 px-4 py-2 bg-magenta text-white rounded hover:bg-foreground">
            Get Started
          </button>
        </div>
        <div className="flex-1 absolute bottom-10 -right-20 md:relative text-xs md:text-sm flex justify-center items-center pl-10">
          <TypewriterLoop text={codeSnippet} speed={100} pause={5000} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
