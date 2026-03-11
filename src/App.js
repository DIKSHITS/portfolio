import Navbar from "./components/Navbar"
import Hero from "./components/index"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
   
    </>
  )
}

export default App