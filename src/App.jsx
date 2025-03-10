import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title/>
      <Program/>
    </div>
  )
}

export default App
