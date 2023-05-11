import Image from "next/image";
import React from "react";
import ReactTooltip from "react-tooltip";

import bootstrap from "../../public/images/skills/Bootstrap.png";
import html from "../../public/images/skills/html.png";
import css from "../../public/images/skills/css.png";
import sass from "../../public/images/skills/sass.png";
import tailwind from "../../public/images/skills/tailwind.png";
import javascript from "../../public/images/skills/javascript.png";
import react from "../../public/images/skills/react.png";
import vue from "../../public/images/skills/Vue.png";

//Backend Images
import php from "../../public/images/skills/php.png";
import laravel from "../../public/images/skills/laravel.png";
import node from "../../public/images/skills/node.png";
import typescript from "../../public/images/skills/typescript.png";
import mysql from "../../public/images/skills/mysql.png";
import sql from "../../public/images/skills/sql.png";

//Other
import npm from "../../public/images/skills/npm.png";
import git from "../../public/images/skills/Git.png";
import githubicon from "../../public/images/skills/gits.jpg";
import postman from "../../public/images/skills/postman.png";
import firebase from "../../public/images/skills/firebase.png";
import aws from "../../public/images/skills/aws.jpg";
import webpack from "../../public/images/skills/webpack.png";
import babel from "../../public/images/skills/babel.png";
import ocean from "../../public/images/skills/ocean.jpg";
import heroku from "../../public/images/skills/heroku.webp";

const Skills = () => {
  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 relative">
        Tech I Use
        <span className="absolute bottom-0 left-0 inline-block w-full h-1 bg-blue-500 -translate-y-full transform -translate-x-full transition-transform hover:translate-x-0 hover:translate-y-0 hover:bg-primaryDark items-center"></span>
      </h2>

      <div>
        <div className="bg-gray-200 py-8 mt-5 text-center">
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-7 xl:px-20 md:px-10 lg:px-13 dark:text-gray-400 sm:text-sm md:text-[1.2rem]">
            These are, but not limited to, the tech I use for building
            client-side applications
          </p>

          <ul className="flex justify-center gap-4">
            <li className="w-16 h-16">
              <Image
                src={html}
                alt="HTML"
                className="w-full h-full object-contain hover:blue hover:bg-primaryDark colors-light transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={css}
                alt="CSS"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={sass}
                alt="SASS"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={tailwind}
                alt="Tailwind CSS"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={bootstrap}
                alt="Bootstrap"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={javascript}
                alt="JavaScript"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={react}
                alt="React JS"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={vue}
                alt="Vue JS"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
          </ul>
        </div>

        <div className="bg-gray-200 py-8 mt-7 text-center">
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-7 xl:px-20 md:px-10 lg:px-13 dark:text-gray-400 sm:text-sm md:text-[1.2rem]">
            These are, but not limited to, the tech I use for building fast and
            scalable backend applications
          </p>
          <ul className="flex justify-center gap-4">
            <li className="w-16 h-16">
              <Image
                src={php}
                alt="PHP"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={laravel}
                alt="Laravel"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={node}
                alt="Bootstrapicon"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={typescript}
                alt="TypeScript"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={mysql}
                alt="MySQL"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={sql}
                alt="SQL Server"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
          </ul>
        </div>

        <div className="bg-gray-200 py-8 mt-7 text-center">
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-1 xl:px-4 md:px-2 lg:px-3 dark:text-gray-400 sm:text-sm md:text-[1.2rem]">
            Others...and more!
          </p>
          <ul className="flex justify-center gap-4">
            <li className="w-16 h-16">
              <Image
                src={npm}
                alt="NPM"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={git}
                alt="GIT"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={githubicon}
                alt="Github"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={postman}
                alt="Postman"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={firebase}
                alt="Firebase"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={aws}
                alt="AWS"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={webpack}
                alt="Webpack"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={babel}
                alt="Babel"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={heroku}
                alt="Heroku"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
            <li className="w-16 h-16">
              <Image
                src={ocean}
                alt="Digital Ocean"
                className="w-full h-full object-contain hover:bg-red-500 transition-colors duration-300"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
