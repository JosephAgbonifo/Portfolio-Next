"use client";
import Image from "next/image";
import React from "react";
import { useScrollProgress } from "@/utils/scrollpercent";

const About = () => {
  const scrollPercent = useScrollProgress();
  console.log(scrollPercent);
  return (
    <div className="min-h-screen p-10 bg-background/80 bg-[url('/images/about.png')] bg-blend-multiply bg-center bg-cover bg-fixed">
      <div className="relative flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center md:pl-10 flex-col">
          <Image
            src="/icons/me.png"
            alt="rocket boost"
            width={300}
            height={300}
            unoptimized
            className="w-32 md:w-80 block rounded-full border-2 border-magenta"
          />
        </div>
        <div className="flex-1 flex text-justify justify-center items-start md:pl-10 flex-col">
          <h2 className="text-center md:text-left text-xl md:text-2xl pb-10 pt-10 ">
            {" "}
            About Joseph
          </h2>
          <p className="font-sans text-xs md:text-sm text-mygray mb-3 indent-4">
            Joseph is a Nigerian web developer and Industrial Chemistry student,
            known for blending technical precision with creative intuition. With
            a background in chemistry and a passion for building human-centered
            digital experiences, Joseph&apos;s work lives at the intersection of
            logic, art, and innovation.
          </p>
          <p className="font-sans text-sm text-mygray mb-3  indent-4">
            His approach to web development is rooted in curiosity and
            experimentation—whether he&apos;s coding an e-learning platform,
            architecting vibrant study communities, or diving into the world of
            Web3. Like a skilled chemist in the lab, he thrives on mixing
            unexpected elements: aesthetics and functionality, spontaneity and
            structure, code and community.
          </p>
          <p className="font-sans text-sm text-mygray mb-3  indent-4">
            Every project Joseph touches is about more than just clean code;
            it&apos;s about connection—between ideas, people, and purpose. His
            ability to shape experiences that are playful, intentional, and
            impactful has led to personal projects like Quirklr, Peakify, and
            Interwooven, each a bold expression of collaboration and innovation.
          </p>
          <p className="font-sans text-sm text-mygray mb-3  indent-4">
            From late-night coding sprints to collaborative builds with
            teammates around the globe, Joseph&apos;s energy is contagious. He
            believes the best work happens when tech feels human, when learning
            feels fun, and when creators feel empowered to explore.
          </p>
          <p className="font-sans text-sm text-mygray mb-3  indent-4">
            Joseph is not just a developer; he&apos;s a creator, a collaborator,
            and a catalyst for change. He&apos;s on a mission to make the
            digital world more vibrant, inclusive, and engaging—one line of code
            at a time. Whether it&apos;s through his work in Web3 or his passion
            for community-driven projects, Joseph is committed to building
            experiences that inspire and connect.
          </p>
          <p className="font-sans text-sm text-mygray mb-3  indent-4">
            Whether you&apos;re building something new or breathing life into an
            existing idea, Joseph brings the mindset, skill, and soul to make it
            thrive.
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
