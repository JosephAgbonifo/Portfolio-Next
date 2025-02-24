import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "JCIN UNIBEN",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            • Executive Assistant to the President
            <br />
            <span className="text-apo2">Jan 2025 to Present</span>
            <br />• JCIN UNIBEN Member
            <br />
            <span className="text-apo2">Aug 2024 to Present </span>
            <br />
            Edo State, NigeriaBenin City, Edo State, Nigeria
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/jcin.png"
              width={500}
              height={500}
              alt="JCIN uniben"
              className="rounded-xl"
              unoptimized
            />
          </div>
          <p>
            <span className="text-apo2"> • Leadership Development:</span>
            <br />
            Participating in leadership training programs to enhance my team and
            project management skills.
            <br />
            <span className="text-apo2"> • Networking:</span>
            <br />
            Building connections with young leaders and professionals, fostering
            collaboration and the exchange of ideas.
            <br />
            <span className="text-apo2">• Community Impact:</span>
            <br />
            Actively involved in local projects aimed at addressing community
            challenges and making a positive difference.
            <br />
            <span className="text-apo2">• Skill Enhancement:</span>
            <br />
            Continuously improving my public speaking and event organization
            skills through hands-on experiences.
            <br />
            <span className="text-apo2"> • Global Perspectives:</span>
            <br />
            Gaining insights into international best practices through
            participation in JCI events and conferences.
          </p>
        </div>
      ),
    },
    {
      title: "Freelance",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            • Virtual Assistant
            <br />
            <span className="text-apo2">Jul 2024 to Present</span>
            <br />
            Remote
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Nestlé",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            • Internship
            <br />
            <span className="text-apo2">Nov 2024 to Feb 2025</span>
            Ogun State, Nigeria · On-site
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/nestle.png"
              width={500}
              height={500}
              alt="JCIN uniben"
              className="rounded-xl"
              unoptimized
            />
          </div>
        </div>
      ),
    },
    {
      title: "Geeky Nigeria",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            • Virtual Assistant
            <br />
            <span className="text-apo2">Feb 2024 to Jul 2024</span>
            <br />
            Remote
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/geeky.jpeg"
              width={500}
              height={500}
              alt="JCIN uniben"
              className="rounded-xl"
              unoptimized
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
