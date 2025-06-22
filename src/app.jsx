import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import NavBar from './components/NavBar'
import Hero from './components/hero'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className='h-[100vh]'>
      <NavBar />
      <Hero />
    </main>
  )
}

export default App
