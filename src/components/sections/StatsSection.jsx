import React from 'react'

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats">
        <div className="stat-item card">
          <div className="stat-number">427M</div>
          <div className="stat-label">Projected Online Shoppers by 2027</div>
        </div>
        <div className="stat-item card">
          <div className="stat-number">60%</div>
          <div className="stat-label">Orders from Tier 2+ Cities</div>
        </div>
        <div className="stat-item card">
          <div className="stat-number">81%</div>
          <div className="stat-label">Mobile Shopping Dominance</div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection