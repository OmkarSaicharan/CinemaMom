import React from 'react'

const GiftCardsSection = () => {
  const giftCards = [
    {
      name: "e-Gift Cards",
      icon: "gift",
      iconBg: "#8a2be2",
      description: "Send digital gift cards instantly via email or SMS. Perfect for last-minute gifts!",
      tags: ["Instant Delivery", "Digital"]
    },
    {
      name: "Physical Gift Cards",
      icon: "gift",
      iconBg: "#ff69b4",
      description: "Beautiful physical gift cards delivered to your doorstep. Perfect for special occasions.",
      tags: ["Physical Card", "Home Delivery"]
    }
  ]

  return (
    <section className="gift-cards-section card section-active" id="gift-cards">
      <div className="card-header">
        <div className="card-title">Gift Cards</div>
      </div>
      <div className="platform-grid">
        {giftCards.map((card, index) => (
          <div key={index} className="platform-card">
            <div className="platform-header">
              <div className="platform-icon" style={{backgroundColor: card.iconBg}}>
                <i className={`fas fa-${card.icon}`} style={{color: '#fff'}}></i>
              </div>
              <div className="platform-name">{card.name}</div>
            </div>
            <div className="platform-description">
              {card.description}
            </div>
            <div className="platform-tags">
              {card.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="platform-tag">{tag}</span>
              ))}
            </div>
            <div className="platform-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GiftCardsSection