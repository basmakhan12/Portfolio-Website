import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Feature from './components/FeatureSection/Feature'


const page = () => {
  return (
    <main>
    <div className='bg-gradient-to-tr from-blue-300 to-pink-400'>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Skills/>
       <Footer/>
    </div>
    </main>
  )
}

export default page

          