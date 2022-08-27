import React from 'react'
import './Fonts/Fonts.css'
import './components/Navigation'
import './components/Hero'
import './components/Sidebar'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


function App () {
  return (
    <div className='App'>
      <Navigation/>
      <Hero/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default App