import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-background md:border-2 md:p-20 border-mygray text-mygray p-10 flex flex-col items-center gap-6 text-center md:w-[90%] mx-auto rounded-lg mb-20"
    >
      <div className="md:flex items-center gap-4">
        <h2 className="flex-1 text-xl md:text-4xl font-semibold text-left md:leading-20">
          Want to collaborate?
          <br /> hire me? <br />
          bring your project to life?
        </h2>
        <div className="flex-1 ">
          <p className="text-sm text-gray-300 font-sans h-36 flex text-left md:text-center items-center md:justify-center">
            I&apos;m always open to exciting new ideas and meaningful
            partnerships. Let&apot;s build something incredible together.
          </p>

          {/* Contact Details */}
          <div className="md:flex flex-col items-center gap-2 text-gray-300 text-sm">
            <div className="flex items-center gap-2 ">
              <FaEnvelope className="text-magenta" />
              <a
                href="mailto:josephagbonifo@peakify.com.ng"
                className="hover:underline"
              >
                josephagbonifo@peakify.com.ng
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-magenta" />
              <a href="tel:+2349035078430" className="hover:underline">
                +234 903 507 8430
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="grid grid-cols-3  mt-20 text-xl">
            <a
              href="https://www.linkedin.com/in/josephagbonifo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition text-2xl md:text-4xl flex items-center justify-center"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/josephagbonifo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition text-2xl md:text-4xl flex items-center justify-center"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/HelloJoeDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition text-2xl md:text-4xl flex items-center justify-center"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Joseph. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
