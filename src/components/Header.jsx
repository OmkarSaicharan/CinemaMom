import React from 'react'

const Header = ({ scrollPosition }) => {
  const headerStyle = {
    backgroundColor: scrollPosition > 100 ? 'rgba(19, 25, 33, 0.95)' : 'var(--primary)'
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <i className="fas fa-store" style={{fontSize: '2rem', color: 'var(--secondary)'}}></i>
            <div className="logo-text">INDSHOPSIDE</div>
          </div>
          
          <div className="delivery-location">
            <i className="fas fa-map-marker-alt"></i>
            <div className="location-text">
              <span>Deliver to</span>
              <span>India</span>
            </div>
          </div>
          
          <div className="main-menu">
            <ul className="menu-links">
              <li className="menu-link" data-section="all">All</li>
              <li className="menu-link" data-section="todays-deals">Today's Deals</li>
              <li className="menu-link" data-section="customer-service">Customer Service</li>
              <li className="menu-link" data-section="gift-cards">Gift Cards</li>
              <li className="menu-link" data-section="sell">Sell</li>
              <li className="menu-link" data-section="registry">Registry</li>
            </ul>
          </div>
          
          <div className="header-actions">
            <div className="header-action">
              <span>Hello, Sign in</span>
              <span>Account & Lists</span>
            </div>
            
            <div className="header-action">
              <span>Returns</span>
              <span>& Orders</span>
            </div>
            
            <div className="cart">
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header