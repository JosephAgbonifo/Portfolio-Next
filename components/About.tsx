import { WorldMapDemo } from "./Worldmaps";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-[100vh] w-[100vw] bg-dark p-5 md:p-10 lg:p-20 text-apo2"
    >
      <h2 className="mt-20 text-2xl md:text-3xl lg:text-4xl font-black">
        About me...
      </h2>
      <div className="text-white mx-10 my-20 md:mx-15 lg:w-3/4 lg:mx-[12.5%] leading-10">
        <p className="indent-2 ">
          Hi, I&apos;m Praise Apo, a Creative Virtual Assistant.
        </p>
        <p className="indent-2">
          As a Creative Virtual Assistant, I don&apos;t just handle tasks, I
          help CEOs, business owners, and professionals become 1% better in
          personal life and business everyday.
        </p>
        <p className="indent-2">My approach combines</p>
        <ul className="list-disc mx-28">
          <li>creativity with attention to detail</li>
          <li>
            blending efficiency with a genuine commitment to making a real
            difference for those I support
          </li>
        </ul>
        <p className="indent-2">
          📌From calendar management and project coordination to email
          organization and travel planning, I tackle everyday needs with
          streamlined, reliable solutions.
        </p>
        <p className="indent-2">
          📌I also specialize in content creation, social media management, and
          digital marketing, helping clients build a strong online presence and
          connect with their audience in a meaningful way.
        </p>
        <p className="indent-2">
          Currently, I&apos;m proud to be part of JCIN UNIBEN, where I work to
          strengthen community engagement and visibility. This experience has
          shown me the impact of proactive support and strategic promotion,
          helping me build hands-on expertise in managing high-impact projects.
        </p>
      </div>
      <WorldMapDemo />
    </div>
  );
}
