//import './App.css'
import { useState, useEffect } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './scenes/Navbar'
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import Skills from './scenes/Skills'
import Projects from './scenes/Projects'
import LineGradient from './hooks/LineGradient'
import { motion } from 'framer-motion'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer'

function App() {
  //displays which page we are on
  const [selectedPage, setSelectedPage] = useState('home')

  const [isTopOfPage, setisTopOfPage] = useState(true)

  //displays the media quesry of the screen size
  //const isAboveMediumScreens = useMediaQuery('min-width:1060px')

  const isDesktop = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true)
      if (window.scrollY !== 0) setisTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="app bg-deep-blue ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Landing />
      <Skills />
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <Projects />
        </motion.div>
        <LineGradient />
        <Contact />
        <LineGradient />
        <Footer />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </div>
  )
}

export default App
