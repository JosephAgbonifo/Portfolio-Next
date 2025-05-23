import FloatingBobble from "@/utils/bobbles";
import ParallaxItem from "@/utils/parallax";
import Image from "next/image";
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
      <ParallaxItem speed={0.2}>
        <h1 className="text-7xl md:text-8xl font-bold text-white">
          Featured
          <br />
          Works :
        </h1>{" "}
      </ParallaxItem>
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
      <div className="h-screen"></div>
    </div>
  );
};

// function Projects({
//   text,
//   direction,
//   img1,
//   img2,
// }: {
//   text: string;
//   direction: string;
//   img1: string;
//   img2: string;
// }) {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h1 className="text-7xl md:text-8xl font-bold text-white">{text}</h1>
//     </div>
//   );
// }

export default Experience;
