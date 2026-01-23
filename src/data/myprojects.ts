// data/myprojects.ts

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  previewUrl: string;
  githubUrl: string;
  repoStatus: "public" | "private";
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Quirklr",
    description:
      "The premier launchpad for circular creativity on the Flare Network. Quirklr bridges the gap between bold ideas and sustainable funding, providing smart-contract infrastructure to turn supporters into stakeholders.",
    stack: ["Next.js", "Solidity", "Flare Network", "Tailwind"],
    previewUrl: "https://quirklronchain.vercel.app",
    githubUrl: "#",
    repoStatus: "private",
    image: "/projects/quirklr.png",
  },
  {
    id: "2",
    name: "Morph",
    description:
      "A smart ticketing ecosystem designed to simplify event experiences. By leveraging the Pi SDK and robust backend logic, Morph empowers organizers with transparent tools and provides attendees with secure, effortless access to global events.",
    stack: ["Pi-SDK", "Next.js", "Node.js", "Express.js", "Tailwind"],
    previewUrl: "https://morphevent.vercel.app/",
    githubUrl: "https://github.com/josephagbonifo/Tiketa",
    repoStatus: "private", // Set to private as it is 'In Development'
    image: "/projects/morph.png",
  },
  {
    id: "3",
    name: "Interwooven",
    description:
      "A collaborative digital patchwork where niches collide. Interwooven is a bold exploration of storytelling, blending tech takes, creative writing, and pop culture into a seamless, multi-voice blog experience.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    previewUrl: "https://interwooven.vercel.app/",
    githubUrl: "https://github.com/josephagbonifo/interwooven",
    repoStatus: "private", // Set to private as it is 'In Development'
    image: "/projects/interwooven.png",
  },
  {
    id: "4",
    name: "Codetainer Academy",
    description:
      "A project-based learning community that ditches theory for momentum. Built for aspiring developers, this platform facilitates a zero-to-publishing journey through structured bootcamps and community-led accountability.",
    stack: ["Next.js", "Tailwind"],
    previewUrl: "https://codetainer-acad.vercel.app/", // Placeholder if no preview provided
    githubUrl: "#",
    repoStatus: "private",
    image: "/projects/codetaineracad.png",
  },
  // You can add more placeholder objects here to reach the "First Six" layout requirement
];
