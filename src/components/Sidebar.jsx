import React from 'react'

const Sidebar = ({ setActiveTab, setActiveSection }) => {
  const handleQuickAccess = (category) => {
    setActiveTab(category)
    setActiveSection('all')
    document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTopPlatform = (platformName) => {
    setActiveTab('all')
    setActiveSection('all')
    document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sidebar">
      <div className="card">
        <h3>Quick Access</h3>
        <ul className="footer-links">
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('grocery') }}><i className="fas fa-shopping-basket"></i> Grocery Platforms</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('electronics') }}><i className="fas fa-mobile-alt"></i> Electronics</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('fashion') }}><i className="fas fa-tshirt"></i> Fashion</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('home') }}><i className="fas fa-home"></i> Home & Kitchen</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('travel') }}><i className="fas fa-plane"></i> Travel & Hotels</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('food') }}><i className="fas fa-utensils"></i> Food Delivery</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('services') }}><i className="fas fa-concierge-bell"></i> Home Services</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('healthcare') }}><i className="fas fa-heartbeat"></i> Healthcare</a></li>
          <li><a href="#" className="quick-access-link" onClick={(e) => { e.preventDefault(); handleQuickAccess('other') }}><i className="fas fa-ellipsis-h"></i> Other Platforms</a></li>
        </ul>
      </div>
      
      <div className="card">
        <h3>Top Platforms</h3>
        <ul className="footer-links">
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('Amazon India') }}>Amazon India</a></li>
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('Flipkart') }}>Flipkart</a></li>
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('Myntra') }}>Myntra</a></li>
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('Swiggy') }}>Swiggy</a></li>
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('Zomato') }}>Zomato</a></li>
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('MakeMyTrip') }}>MakeMyTrip</a></li>
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('Urban Company') }}>Urban Company</a></li>
          <li><a href="#" className="top-platform-link" onClick={(e) => { e.preventDefault(); handleTopPlatform('Practo') }}>Practo</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar