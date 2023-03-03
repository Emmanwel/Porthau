import React from 'react'
import { data } from '../data/data.js'
import { motion } from 'framer-motion'

const Projects = () => {
  // projects file
  const project = data
  //setProject(data);

  return (
    <section id="projects">
      <div name="work" className="w-full p-0 md:h-60vh text-gray-300 ">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Projects
            </p>
            <p className="py-6 capitalize">
              {' '}
              Check out some of my recent Projects
            </p>
          </div>

          {/* container for projects */}
          <div className="h-160 grid sm:grid-cols-2 h-80vh md:grid-cols-2 w-200 h-210vh gap-4 py-[-20] ">
            {/* Gird Item */}
            {project.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className=" shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto px-2 md:inline-flex"
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider bg-black ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-300 text-gray-700 font-bold text-lg "
                      >
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-300 text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
