import React from 'react'

const CategorySection = ({ setActiveTab }) => {
  const categories = [
    { name: 'Grocery', icon: 'shopping-basket', category: 'grocery' },
    { name: 'Electronics', icon: 'mobile-alt', category: 'electronics' },
    { name: 'Fashion', icon: 'tshirt', category: 'fashion' },
    { name: 'Home', icon: 'home', category: 'home' },
    { name: 'Travel', icon: 'plane', category: 'travel' },
    { name: 'Food', icon: 'utensils', category: 'food' },
    { name: 'Services', icon: 'concierge-bell', category: 'services' },
    { name: 'Healthcare', icon: 'heartbeat', category: 'healthcare' },
    { name: 'Others', icon: 'ellipsis-h', category: 'other' }
  ]

  const handleCategoryClick = (category) => {
    setActiveTab(category)
    document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleViewAll = (e) => {
    e.preventDefault()
    setActiveTab('all')
    document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="category-section section-active" id="categories">
      <div className="card">
        <div className="card-header">
          <div className="card-title">Browse by Category</div>
          <a href="#" className="see-all" onClick={handleViewAll}>View all</a>
        </div>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="category-card" 
              data-category={cat.category}
              onClick={() => handleCategoryClick(cat.category)}
            >
              <div className="category-icon">
                <i className={`fas fa-${cat.icon}`}></i>
              </div>
              <div className="category-name">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection