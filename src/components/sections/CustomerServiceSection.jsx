import React from 'react'

const CustomerServiceSection = () => {
  const services = [
    { name: 'Help Center', icon: 'headset' },
    { name: 'Track Orders', icon: 'shipping-fast' },
    { name: 'Returns & Refunds', icon: 'undo' },
    { name: 'Security', icon: 'shield-alt' },
    { name: 'Payment Options', icon: 'credit-card' },
    { name: 'Feedback', icon: 'comments' }
  ]

  return (
    <section className="customer-service-section card section-active" id="customer-service">
      <div className="card-header">
        <div className="card-title">Customer Service</div>
      </div>
      <div className="category-grid">
        {services.map((service, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">
              <i className={`fas fa-${service.icon}`}></i>
            </div>
            <div className="category-name">{service.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomerServiceSection