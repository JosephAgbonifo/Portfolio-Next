"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScrollProgress } from "@/utils/scrollpercent";

const Header = () => {
  const scrollPercent = useScrollProgress();
  return (
    <div>
      <div
        className={` ${
          scrollPercent > 15 ? "h-0 p-0" : "p-10 md:px-20"
        } flex overflow-hidden transition-all duration-700 items-center justify-between  fixed top-0 left-0 right-0 z-10`}
      >
        <Image src="/images/hellojoe.png" alt="Logo" width={50} height={50} />
        <div>
          <HeaderLink text="home" href="/" />
          <HeaderLink text="about" href="/" />
          <HeaderLink text="experience" href="/" />
          <HeaderLink text="projects" href="/" />
        </div>
      </div>
      <div
        className={` ${
          scrollPercent < 15
            ? "-top-32 md:left-[30%]  left-[10%]"
            : scrollPercent < 100
            ? "top-5  md:left-[30%]  left-[10%]"
            : "top-5  md:left-[10%]  left-[10%]"
        } p-2 opacity-50 hover:opacity-80 rounded-full h-10 md:h-14 flex overflow-hidden transition-all duration-700 items-center justify-between  fixed  w-[80%] md:w-[40%] bg-magenta z-10`}
      >
        <HeaderLink2 text="home" href="/" />
        <HeaderLink2 text="about" href="/" />
        <HeaderLink2 text="experience" href="/" />
        <HeaderLink2 text="projects" href="/" />
      </div>
    </div>
  );
};

function HeaderLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href || "/"}
      className="text-xs md:text-sm mx-2 md:mx-5 hover:text-magenta transition-all duration-300"
    >
      {text}
    </Link>
  );
}

function HeaderLink2({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href || "/"}
      className="hover:bg-white text-white flex items-center justify-center h-full w-[20%] rounded-full text-xs md:text-sm md:hover:text-magenta transition-all duration-300"
    >
      {text}
    </Link>
  );
}

export default Header;
