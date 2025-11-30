import React from 'react'

const TodaysDealsSection = () => {
  return (
    <section className="todays-deals-section card section-active" id="todays-deals">
      <div className="card-header">
        <div className="card-title">Today's Best Deals</div>
      </div>
      <div className="platform-grid">
        <div className="platform-card">
          <div className="platform-header">
            <div className="platform-icon" style={{backgroundColor: '#ffd700'}}>
              <i className="fas fa-percentage" style={{color: '#000'}}></i>
            </div>
            <div className="platform-name">Flash Sale</div>
          </div>
          <div className="platform-description">
            Up to 70% off on electronics, fashion, and home appliances. Limited time offer!
          </div>
          <div className="platform-tags">
            <span className="platform-tag">Electronics</span>
            <span className="platform-tag">Fashion</span>
            <span className="platform-tag">Home</span>
          </div>
          <div className="platform-actions">
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
        
        <div className="platform-card">
          <div className="platform-header">
            <div className="platform-icon" style={{backgroundColor: '#ff6b6b'}}>
              <i className="fas fa-bolt" style={{color: '#fff'}}></i>
            </div>
            <div className="platform-name">Lightning Deals</div>
          </div>
          <div className="platform-description">
            Limited quantity deals with massive discounts. Don't miss out!
          </div>
          <div className="platform-tags">
            <span className="platform-tag">Limited Time</span>
            <span className="platform-tag">Exclusive</span>
          </div>
          <div className="platform-actions">
            <button className="btn btn-primary">View Deals</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodaysDealsSection