import React from 'react'

const SellSection = () => {
  const sellOptions = [
    { name: 'Become a Seller', icon: 'store' },
    { name: 'Business Insights', icon: 'chart-line' },
    { name: 'Fulfillment', icon: 'shipping-fast' },
    { name: 'Seller Tools', icon: 'tools' },
    { name: 'Pricing', icon: 'hand-holding-usd' },
    { name: 'Seller University', icon: 'graduation-cap' }
  ]

  return (
    <section className="sell-section card section-active" id="sell">
      <div className="card-header">
        <div className="card-title">Start Selling on INDSHOPSIDE</div>
      </div>
      <div className="category-grid">
        {sellOptions.map((option, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">
              <i className={`fas fa-${option.icon}`}></i>
            </div>
            <div className="category-name">{option.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SellSection