import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import CategorySection from './sections/CategorySection'
import PlatformsSection from './sections/PlatformsSection'
import TodaysDealsSection from './sections/TodaysDealsSection'
import CustomerServiceSection from './sections/CustomerServiceSection'
import GiftCardsSection from './sections/GiftCardsSection'
import SellSection from './sections/SellSection'
import RegistrySection from './sections/RegistrySection'

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('all')
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    const menuLinks = document.querySelectorAll('.menu-link')
    
    const handleMenuClick = (e) => {
      const section = e.target.getAttribute('data-section')
      setActiveSection(section)
      
      // Scroll to top of content
      document.querySelector('.content')?.scrollIntoView({ behavior: 'smooth' })
    }

    menuLinks.forEach(link => {
      link.addEventListener('click', handleMenuClick)
    })

    return () => {
      menuLinks.forEach(link => {
        link.removeEventListener('click', handleMenuClick)
      })
    }
  }, [])

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'todays-deals':
        return <TodaysDealsSection />
      case 'customer-service':
        return <CustomerServiceSection />
      case 'gift-cards':
        return <GiftCardsSection />
      case 'sell':
        return <SellSection />
      case 'registry':
        return <RegistrySection />
      case 'all':
      default:
        return (
          <>
            <CategorySection setActiveTab={setActiveTab} />
            <PlatformsSection activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        )
    }
  }

  return (
    <div className="container">
      <div className="main-content">
        <Sidebar setActiveTab={setActiveTab} setActiveSection={setActiveSection} />
        <div className="content">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  )
}

export default MainContent