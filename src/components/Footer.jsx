import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">INDSHOPSIDE Science</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect with Us</h3>
            <p>© 2025 INDSHOPSIDE. All Rights Reserved.<br /> $ CSE-AIDS T.Omkar Saicharan.<br /> ~KL University</p>
            <a href="https://www.instagram.com/zl_omkar_sai_charan?igsh=MXBsZGFrbXBwNjBubA==" target="_blank" style={{textDecoration:'none', color:'inherit'}}>
              <i className="fa-brands fa-instagram" style={{fontSize:'22px', marginRight:'8px'}}></i>
              Follow us on Instagram
            </a><br />
            <a href="https://www.linkedin.com/in/thornala-omkar-saicharan-a913702b7" target="_blank" style={{textDecoration:'none', color:'inherit'}}>
              <i className="fa-brands fa-linkedin" style={{fontSize:'22px', marginRight:'8px'}}></i>
              Connect on LinkedIn
            </a>
            <p><a href="#">Privacy</a> | <a href="#">Terms</a></p>
          </div>
          
          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <ul className="footer-links">
              <li><a href="#">Sell on INDSHOPSIDE</a></li>
              <li><a href="#">Sell under INDSHOPSIDE Accelerator</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Fulfilment by INDSHOPSIDE</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <ul className="footer-links">
              <li><a href="#">COVID-19 and INDSHOPSIDE</a></li>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Returns Centre</a></li>
              <li><a href="#">100% Purchase Protection</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="logo">
            <i className="fas fa-store" style={{fontSize: '1.5rem', color: 'var(--secondary)'}}></i>
            <div className="logo-text">INDSHOPSIDE</div>
          </div>
          <p>&copy; 2025 INDSHOPSIDE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer