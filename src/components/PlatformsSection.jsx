import React, { useState, useEffect } from 'react'

const PlatformsSection = ({ activeTab, setActiveTab }) => {
  const [platforms, setPlatforms] = useState([])
  const [filteredPlatforms, setFilteredPlatforms] = useState([])

  const platformData = [
    {
      id: 1,
      name: "Amazon India",
      description: "Largest online marketplace with extensive product range from groceries to electronics.",
      url: "https://www.amazon.in",
      category: "all",
      tags: ["Electronics", "Fashion", "Groceries", "Home"],
      popular: true
    },
    {
      id: 2,
      name: "Flipkart",
      description: "Homegrown e-commerce giant strong in electronics, fashion, and home appliances.",
      url: "https://www.flipkart.com",
      category: "electronics",
      tags: ["Electronics", "Fashion", "Home Appliances"],
      popular: true
    },
    {
      id: 3,
      name: "Myntra",
      description: "Leading fashion and lifestyle destination with wide range of clothing and accessories.",
      url: "https://www.myntra.com",
      category: "fashion",
      tags: ["Fashion", "Clothing", "Accessories"],
      popular: true
    },
    {
      id: 4,
      name: "BigBasket",
      description: "Leading online grocery platform with wide range of fresh produce and household essentials.",
      url: "https://www.bigbasket.com",
      category: "grocery",
      tags: ["Groceries", "Household", "Fresh Produce"],
      popular: false
    },
    {
      id: 5,
      name: "Nykaa",
      description: "Beauty and wellness platform offering cosmetics, skincare, and personal care products.",
      url: "https://www.nykaa.com",
      category: "fashion",
      tags: ["Beauty", "Cosmetics", "Wellness"],
      popular: true
    },
    {
      id: 6,
      name: "Ajio",
      description: "Fashion platform with wide range of clothing, accessories, and footwear.",
      url: "https://www.ajio.com",
      category: "fashion",
      tags: ["Fashion", "Clothing", "Accessories"],
      popular: false
    },
    {
      id: 7,
      name: "FirstCry",
      description: "Largest online store for baby and kids products including apparel, toys, and maternity care.",
      url: "https://www.firstcry.com",
      category: "home",
      tags: ["Baby Care", "Kids", "Toys"],
      popular: true
    },
    {
      id: 8,
      name: "Pepperfry",
      description: "Furniture and home decor marketplace with wide selection for home interiors.",
      url: "https://www.pepperfry.com",
      category: "home",
      tags: ["Furniture", "Home Decor", "Lighting"],
      popular: false
    },
    {
      id: 9,
      name: "IndiaMART",
      description: "B2B marketplace connecting buyers with suppliers across various product categories.",
      url: "https://www.indiamart.com",
      category: "other",
      tags: ["B2B", "Industrial", "Wholesale"],
      popular: false
    },
    {
      id: 10,
      name: "Meesho",
      description: "Social commerce platform enabling reselling with zero commission fees.",
      url: "https://www.meesho.com",
      category: "fashion",
      tags: ["Fashion", "Home", "Reselling"],
      popular: false
    },
    {
      id: 11,
      name: "Swiggy",
      description: "Leading food delivery platform with extensive restaurant network and quick delivery.",
      url: "https://www.swiggy.com",
      category: "food",
      tags: ["Food Delivery", "Restaurants", "Groceries"],
      popular: true
    },
    {
      id: 12,
      name: "Zomato",
      description: "Food delivery and restaurant discovery platform with reviews and ratings.",
      url: "https://www.zomato.com",
      category: "food",
      tags: ["Food Delivery", "Restaurants", "Reviews"],
      popular: true
    },
    {
      id: 13,
      name: "MakeMyTrip",
      description: "Leading online travel company for flight, hotel, and holiday bookings.",
      url: "https://www.makemytrip.com",
      category: "travel",
      tags: ["Flights", "Hotels", "Holidays"],
      popular: true
    },
    {
      id: 14,
      name: "Goibibo",
      description: "Online travel booking platform for flights, hotels, buses, and holiday packages.",
      url: "https://www.goibibo.com",
      category: "travel",
      tags: ["Flights", "Hotels", "Buses"],
      popular: false
    },
    {
      id: 15,
      name: "Ola Cabs",
      description: "Popular ride-hailing service offering cab, auto, and bike rentals.",
      url: "https://www.olacabs.com",
      category: "services",
      tags: ["Cab", "Auto", "Bike", "Rental"],
      popular: true
    },
    {
      id: 16,
      name: "Uber",
      description: "Global ride-hailing service offering cab, auto, and bike rentals.",
      url: "https://www.uber.com",
      category: "services",
      tags: ["Cab", "Auto", "Bike", "Rental"],
      popular: true
    },
    {
      id: 17,
      name: "Urban Company",
      description: "Platform for booking home services like cleaning, plumbing, and beauty services.",
      url: "https://www.urbancompany.com",
      category: "services",
      tags: ["Home Services", "Beauty", "Repairs"],
      popular: true
    },
    {
      id: 18,
      name: "Practo",
      description: "Healthcare platform for booking doctor appointments, online consultations, and lab tests.",
      url: "https://www.practo.com",
      category: "healthcare",
      tags: ["Doctors", "Appointments", "Consultations", "Lab Tests"],
      popular: true
    },
    {
      id: 19,
      name: "PharmEasy",
      description: "Online pharmacy and healthcare platform for medicine delivery and diagnostic tests.",
      url: "https://www.pharmeasy.in",
      category: "healthcare",
      tags: ["Medicines", "Lab Tests", "Healthcare"],
      popular: false
    },
    {
      id: 20,
      name: "Netmeds",
      description: "Online pharmacy for medicine delivery and healthcare products.",
      url: "https://www.netmeds.com",
      category: "healthcare",
      tags: ["Medicines", "Healthcare", "Wellness"],
      popular: false
    },
    {
      id: 21,
      name: "BookMyShow",
      description: "Leading entertainment platform for booking movie tickets, events, and shows.",
      url: "https://www.bookmyshow.com",
      category: "services",
      tags: ["Movies", "Events", "Shows"],
      popular: true
    },
    {
      id: 22,
      name: "OYO",
      description: "Hotel booking platform offering budget to premium accommodations worldwide.",
      url: "https://www.oyorooms.com",
      category: "travel",
      tags: ["Hotels", "Budget Stays", "Travel"],
      popular: true
    },
    {
      id: 23,
      name: "Paytm",
      description: "Digital payments and financial services platform with shopping, bill payments, and more.",
      url: "https://www.paytm.com",
      category: "other",
      tags: ["Payments", "Shopping", "Bill Payments", "Financial Services"],
      popular: true
    },
    {
      id: 24,
      name: "PhonePe",
      description: "Digital payments platform for UPI, bill payments, recharges, and financial services.",
      url: "https://www.phonepe.com",
      category: "other",
      tags: ["UPI", "Payments", "Recharge", "Financial Services"],
      popular: true
    },
    {
      id: 25,
      name: "Google Pay",
      description: "Digital payments platform for UPI, bill payments, and recharges.",
      url: "https://pay.google.com",
      category: "other",
      tags: ["UPI", "Payments", "Recharge"],
      popular: true
    },
    {
      id: 26,
      name: "Byju's",
      description: "Leading online learning platform for K-12, JEE, NEET, and competitive exams.",
      url: "https://www.byjus.com",
      category: "other",
      tags: ["Learning", "K-12", "JEE", "NEET"],
      popular: true
    },
    {
      id: 27,
      name: "Unacademy",
      description: "Online learning platform for competitive exams, UPSC, and skill development.",
      url: "https://www.unacademy.com",
      category: "other",
      tags: ["Learning", "UPSC", "Competitive Exams", "Skills"],
      popular: true
    },
    {
      id: 28,
      name: "Cred",
      description: "Credit card bill payment platform with rewards and financial services.",
      url: "https://www.cred.club",
      category: "other",
      tags: ["Credit Card", "Bill Payment", "Rewards"],
      popular: false
    },
    {
      id: 29,
      name: "Spotify",
      description: "Music streaming platform with millions of songs and podcasts.",
      url: "https://www.spotify.com",
      category: "other",
      tags: ["Music", "Podcasts", "Streaming"],
      popular: true
    },
    {
      id: 30,
      name: "Netflix",
      description: "Streaming service for movies, TV shows, and original content.",
      url: "https://www.netflix.com",
      category: "other",
      tags: ["Movies", "TV Shows", "Streaming"],
      popular: true
    },
    {
      id: 31,
      name: "Airbnb",
      description: "Online marketplace for lodging, primarily homestays for vacation rentals.",
      url: "https://www.airbnb.com",
      category: "travel",
      tags: ["Vacation Rentals", "Homestays", "Travel"],
      popular: true
    },
    {
      id: 32,
      name: "UrbanClap",
      description: "Platform connecting customers with service professionals for home services.",
      url: "https://www.urbanclap.com",
      category: "services",
      tags: ["Home Services", "Professionals", "Repairs"],
      popular: false
    },
    {
      id: 33,
      name: "1mg",
      description: "Online pharmacy and healthcare platform for medicines, diagnostics, and consultations.",
      url: "https://www.1mg.com",
      category: "healthcare",
      tags: ["Medicines", "Diagnostics", "Consultations"],
      popular: false
    },
    {
      id: 34,
      name: "Dunzo",
      description: "Hyperlocal delivery service for groceries, food, and other essentials.",
      url: "https://www.dunzo.com",
      category: "services",
      tags: ["Delivery", "Groceries", "Essentials"],
      popular: false
    }
  ]

  const tabs = [
    { id: 'all', name: 'All Platforms' },
    { id: 'grocery', name: 'Grocery' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home' },
    { id: 'travel', name: 'Travel' },
    { id: 'food', name: 'Food' },
    { id: 'services', name: 'Services' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'other', name: 'Others' }
  ]

  useEffect(() => {
    setPlatforms(platformData)
  }, [])

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredPlatforms(platforms)
    } else {
      const filtered = platforms.filter(platform => 
        platform.category === activeTab || 
        platform.tags.some(tag => tag.toLowerCase().includes(activeTab.toLowerCase()))
      )
      setFilteredPlatforms(filtered)
    }
  }, [activeTab, platforms])

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const handleViewAll = (e) => {
    e.preventDefault()
    setActiveTab('all')
  }

  const savePlatform = (platformId) => {
    const platform = platforms.find(p => p.id === platformId)
    alert(`Added ${platform.name} to your saved platforms!`)
  }

  return (
    <section className="platforms-section section-active" id="platforms">
      <div className="card">
        <div className="card-header">
          <div className="card-title">Popular Shopping Platforms</div>
          <a href="#" className="see-all" onClick={handleViewAll}>See all</a>
        </div>
        
        <div className="platform-tabs">
          {tabs.map(tab => (
            <div 
              key={tab.id}
              className={`platform-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        
        <div className="platform-grid">
          {filteredPlatforms.length > 0 ? (
            filteredPlatforms.map(platform => (
              <div key={platform.id} className="platform-card">
                <div className="platform-header">
                  <div className="platform-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="platform-name">{platform.name}</div>
                </div>
                <div className="platform-description">
                  {platform.description}
                </div>
                <div className="platform-tags">
                  {platform.tags.map((tag, index) => (
                    <span key={index} className="platform-tag">{tag}</span>
                  ))}
                  {platform.popular && (
                    <span className="platform-tag" style={{background: '#fef3c7', color: '#d97706'}}>
                      Popular
                    </span>
                  )}
                </div>
                <div className="platform-actions">
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fas fa-external-link-alt"></i>
                    Visit Site
                  </a>
                  <button className="btn" onClick={() => savePlatform(platform.id)}>
                    <i className="far fa-bookmark"></i>
                    Save
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results" style={{gridColumn: '1 / -1', textAlign: 'center', padding: '40px'}}>
              <i className="fas fa-search" style={{fontSize: '3rem', color: '#cbd5e1', marginBottom: '1rem'}}></i>
              <h3>No platforms found</h3>
              <p>Try selecting a different category or search term</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PlatformsSection