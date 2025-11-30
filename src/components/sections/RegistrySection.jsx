import React from 'react'

const RegistrySection = () => {
  const registries = [
    {
      name: "Wedding Registry",
      icon: "heart",
      iconBg: "#ff6b6b",
      description: "Create your perfect wedding registry and get gifts you'll truly love from any store.",
      tags: ["Wedding", "Gifts"]
    },
    {
      name: "Baby Registry",
      icon: "baby",
      iconBg: "#4ecdc4",
      description: "Create a baby registry to get everything you need for your new arrival.",
      tags: ["Baby", "Newborn"]
    },
    {
      name: "Birthday Registry",
      icon: "birthday-cake",
      iconBg: "#45b7d1",
      description: "Create a birthday registry and get the gifts you really want for your special day.",
      tags: ["Birthday", "Celebration"]
    }
  ]

  return (
    <section className="registry-section card section-active" id="registry">
      <div className="card-header">
        <div className="card-title">Create a Registry</div>
      </div>
      <div className="platform-grid">
        {registries.map((registry, index) => (
          <div key={index} className="platform-card">
            <div className="platform-header">
              <div className="platform-icon" style={{backgroundColor: registry.iconBg}}>
                <i className={`fas fa-${registry.icon}`} style={{color: '#fff'}}></i>
              </div>
              <div className="platform-name">{registry.name}</div>
            </div>
            <div className="platform-description">
              {registry.description}
            </div>
            <div className="platform-tags">
              {registry.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="platform-tag">{tag}</span>
              ))}
            </div>
            <div className="platform-actions">
              <button className="btn btn-primary">Create Registry</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RegistrySection