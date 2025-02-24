import { TimelineDemo } from "./Timeline";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";

export default function Experience() {
  return (
    <div
      id="experience"
      className="min-h-[100vh] w-[100vw] bg-dark p-5 md:p-10 lg:p-20 text-apo2"
    >
      <h2 className="mt-20 text-2xl md:text-3xl lg:text-4xl font-black">
        Experience...
      </h2>
      <div className="text-white mx-10 my-20 md:mx-15 lg:w-3/4 lg:mx-[12.5%] leading-10">
        <TimelineDemo />
        <Link href="#about" className="mt-20">
          <MagicButton
            title="Download My Resume"
            position="left"
            icon={<FaDownload className="text-2xl" />}
            otherClasses="m-auto"
          />
        </Link>
        <h3 className="my-20 hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-apo2">
          Contact Me
        </h3>
        <p className="indent-2 my-10">
          📌I'm available for new projects and opportunities. Let's connect and
          discuss how I can help you achieve your goals.
        </p>
        <div>
          <Link href="mailto:" className="text-white text-3xl ">
            blablabla@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
