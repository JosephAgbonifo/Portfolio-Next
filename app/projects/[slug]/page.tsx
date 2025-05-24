"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/data";
import HorizontalLines from "@/utils/bgline";
import FloatingBobble from "@/utils/bobbles";

interface PageProps {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-mono">
      <h1 className="text-3xl font-bold my-10">{project.title}</h1>
      <div className="relative w-full h-96 my-10">
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="rounded-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out object-cover"
        />
      </div>
      <p className="mb-10 text-white font-sans text-justify">
        {project.description}
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Key Features:</h2>
        <ul className="list-disc list-inside text-white font-sans">
          {project.keyFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Technologies Used:</h2>
        <ul className="list-disc list-inside text-white font-sans">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <FloatingBobble speed={0.3} size={30} left="10%" color="#60a5fa" />
        <FloatingBobble speed={0.6} size={40} left="30%" color="#a78bfa" />
        <FloatingBobble speed={1.2} size={50} left="50%" color="#f472b6" />
        <FloatingBobble speed={0.8} size={25} left="70%" color="#34d399" />
        <FloatingBobble speed={0.5} size={35} left="90%" color="#fcd34d" />
        <FloatingBobble speed={0.3} size={30} left="80%" color="#60a5fa" />
        <FloatingBobble speed={0.6} size={40} left="60%" color="#a78bfa" />
        <FloatingBobble speed={1.2} size={50} left="40%" color="#f472b6" />
        <FloatingBobble speed={0.8} size={25} left="20%" color="#34d399" />
        <FloatingBobble speed={0.5} size={35} left="0%" color="#fcd34d" />

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
        <HorizontalLines />
      </div>
    </div>
  );
}
