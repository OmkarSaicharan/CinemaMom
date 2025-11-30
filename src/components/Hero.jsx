import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-slide active">
        <div className="hero-content">
          <h1>Your Gateway to Indian E-Commerce</h1>
          <p>Discover the best online shopping platforms across India. Find exactly what you need with our curated directory of trusted e-commerce sites.</p>
          <div className="hero-btns">
            <a href="#platforms" className="btn btn-primary">
              <i className="fas fa-shopping-bag"></i>
              Explore Platforms
            </a>
            <a href="#categories" className="btn btn-outline">
              <i className="fas fa-list"></i>
              Browse Categories
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero