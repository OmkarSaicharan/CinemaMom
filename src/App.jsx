import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
import StatsSection from './components/sections/StatsSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header scrollPosition={scrollPosition} />
      <Hero />
      <MainContent />
      <StatsSection />
      <Footer />
    </div>
  )
}

export default App