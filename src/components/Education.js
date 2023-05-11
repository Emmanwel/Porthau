import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[8 0%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm ">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type=" Bachelor Of Technology Computer Networks"
            time="Feb 2015 - Dec 2019"
            place="Technical University of Kenya"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, Data Communication and Database Systems."
          />

          <Details
            type="Microsoft Power Platform "
            time="Feb 2020 - Dec 2020"
            place="Microsoft Interns4Africa"
            info="Power Apps, Power BI, Power Automate, and PowerVirtual Agents.  
          "
          />
          <Details
            className="!pl-[-22px]"
            type=" K.C.S.E"
            time="Feb 2011 - Dec 2014"
            place="S.T Teresa's High School Kitale "
            info="Kenya Certificate of Secondary Education."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
