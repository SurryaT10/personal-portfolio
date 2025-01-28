import './App.css'
import { motion, useScroll } from "motion/react"
import Navbar from './components/Navigation'
import Banner from './components/Banner'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#474B4F",
        }}
      />
      <Navbar />
      <Banner />
      <Expertise />
      <Projects />
      <Contact />
    </>
  )
}

export default App
