import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Laravel from '../assets/laravel.png'
import PHP from '../assets/php.png'
import Bootstrap from '../assets/Bootstrap.png'
import Vue from '../assets/Vue.png'
import Git from '../assets/Git.png'

const Skills = () => {
  //const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')
  const isAboveLarge = useMediaQuery('(min-width: 1060px)')
  return (
    <section id="skills" className="pt-15 pb-0">
      <div
        name="skills"
        className="w-full h-80vh bg-[#171f2b] text-gray-300 mt-30"
      >
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          boxShadow="10px 10px 0 rgba(0, 0, 0, 0.2)"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Container */}
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
              <p className="text-5xl text-justify font-bold inline border-b-4 border-pink-800 capitalize">
                Skills
              </p>
              <p className="py-4 capitalize flex justify-center">
                {' '}
                These are the technologies I've worked with
              </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10">
              <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
                <p className="my-4">CSS</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto"
                  src={JavaScript}
                  alt="HTML icon"
                />
                <p className="my-4">JAVASCRIPT</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
                <p className="my-4">REACT</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Vue} alt="HTML icon" />
                <p className="my-4">VUE</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
                <p className="my-4">GITHUB</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
                <p className="my-4">GIT</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
                <p className="my-4">TAILWIND </p>
              </div>

              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
                <p className="my-4">BOOTSTRAP</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={PHP} alt="HTML icon" />
                <p className="my-4">PHP</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Laravel} alt="HTML icon" />
                <p className="my-4">LARAVEL</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
                <p className="my-4">MONGO DB</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
                <p className="my-4">NODE JS</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
                <p className="my-4">FIREBASE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
