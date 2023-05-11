import React from "react";
import Head from "next/head";
import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/blogs.PNG";
import project2 from "../../public/images/projects/folio.PNG";
import project3 from "../../public/images/projects/heriwork.PNG";
import Dash from "../../public/images/projects/Dash.PNG";
import Rooms from "../../public/images/projects/ReserveRooms.PNG";
import project4 from "../../public/images/projects/sms.PNG";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="p-12 w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark  bg-light shadow-2xl
    dark:bg-dark dark:border-light 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl  dark:bg-light 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark 
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
    dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.8rem] bg-dark rounded-br-3xl 
      dark:bg-light md:-right-3 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          priority
          sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6 ">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
     dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.8rem] bg-dark rounded-br-3xl 
      dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold ">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Emmanuel | Portfolio Projects </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimateText
            text="Projects Portray Knowledge"
            className="mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-20 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Personal Portfolio Application"
                img={project2}
                summary="A feature-rich Personal Portfolio website Showing my About, Projects, and Contact Me."
                link="https://emmanuelmukhebiportfolio.vercel.app/"
                github="https://github.com/Emmanwel/portfolio"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Resorts Reservation"
                img={Rooms}
                link="https://reserveyourrooms.vercel.app/"
                github="https://github.com/Emmanwel/reservation"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Student Management System"
                img={project4}
                link="https://github.com/Emmanwel/Employee_Management"
                github="https://github.com/Emmanwel/Employee_Management"
              />
            </div>
            {/**  <div className="col-span-4 sm:col-span-12">
              <Projects
                title="News Application"
                img={project3}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-4 sm:col-span-12">
              <Projects
                title="REST API"
                img={project5}
                link="https://github.com/Emmanwel/Laravel_Vue_API"
                github="https://github.com/Emmanwel/Laravel_Vue_API"
                type="Featured Project"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Projects
                title="News Application"
                img={project1}
                link="https://github.com/Emmanwel/Responsive_Blogs_Design"
                github="https://github.com/Emmanwel/Responsive_Blogs_Design"
                type="Featured Project"
              />
            </div>
            */}

            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="Student - Partners Engagement Application"
                img={project3}
                summary="
                Heriwork system allows underprivileged college students to apply for short term jobs.
                
                Integrate with payment methods M-pesa, Paypal, Stripe"
                link="https://heriwork.com/"
                github="https://heriwork.com/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
