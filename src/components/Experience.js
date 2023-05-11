import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start end", "center start"],
  });
  return (
    <div className="mb-44 mt-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer"
            company="Heriwork"
            companyLink="http://heriwork.com/"
            time="Feb 2023 - Present"
            address="Nairobi, Kenya"
            work="Responsible for developing Heriwork system that allows underprivileged college students to create profile and apply to short term jobs. Develop 
the backend infrastructure. Integrate with payment methods M-pesa, Paypal, Stripe
"
          />

          {/** 
        <Details
            position="Frontend Developer"
            company="Upwork"
            companyLink="https://www.upwork.com/"
            time="Nov 2022 - Present"
            address="Freelance"
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
          />
      
      */}

          <Details
            position="Software Developer"
            company="Teknohub Limited"
            companyLink="http://teknohub.systems/"
            time="Jan 2022 - Dec 2022"
            address="Nairobi, Kenya"
            work="
            Developed and Customized web portals as per to the client specifications. Implemented REST API to connect to Microsoft Dynamics Business Central (ERP). Performed Integration with third party applications using Web Services and XML. Conducted User Acceptance Training (UAT) against business requirements.
            
            "
          />
          <Details
            position="Systems and Application Developer"
            company="ICT Authority"
            companyLink="https://www.icta.go.ke/"
            time="Sep 2020 - Nov 2021"
            address="Nairobi, Kenya"
            work="
Redesigned and updated extensions to existing systems. Performed Unit, Integration, and functional testing. Developed mock-ups, workflows, and flowcharts. Created and maintained system documentation and technical process flows.

"
          />

          <Details
            position="UI/UX Intern "
            company="Manyactive "
            companyLink="https://manyactive.com/"
            time="April 2020 - Aug 2020"
            address="Nairobi, Kenya"
            work="Conducted User Research. Created Wireframes, prototypes, and user journey  to visualize on user experience.  
        "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
