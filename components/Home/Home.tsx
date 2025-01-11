import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home
