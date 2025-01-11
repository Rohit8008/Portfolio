import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default Home
