import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './components/New'
import About from './components/About'
import Workexperince from './components/Workexperince'
import Education from './components/Education'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div>
     <New/> 
    <About/>
    <Workexperince/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>
    
    </div>
  )
}

export default App
