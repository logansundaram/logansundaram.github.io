import { useState } from 'react'
import './components/About'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <About/>
      <Skill/>
      <div>
        <Projects/>
      </div>
      <Contact></Contact>
    </>
  )
}

export default App
