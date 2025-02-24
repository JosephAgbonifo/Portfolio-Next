import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="h-[100vh] w-full  bg-background  bg-dot-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="m-20 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <TextGenerateEffect
          className="text-center  text-[40px] md:text-5xl lg:text-6xl"
          words="Creativity With Attention To Detail"
        />
        <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi, I&apos;m Praise, A Creative Virtual Assistant
        </p>
        <Link href="#about">
          <MagicButton
            title="See More"
            position="left"
            icon={<FaAngleDoubleDown className="text-2xl" />}
            otherClasses="m-auto"
          />
        </Link>
      </div>
    </div>
  );
}
