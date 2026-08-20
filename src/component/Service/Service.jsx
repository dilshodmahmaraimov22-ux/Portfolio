import React from 'react';
import './Service.css';

function Service() {
  return (
    <section className="services-section">
      <div className="services-container">
        
        <h2 className="services-main-title">
          Our <span className="highlight-text">Services</span>
        </h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="service-card-title">Web Development</h3>
            <p className="service-card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure nisi dolor recusandae voluptas et voluptatibus explicabo ducimus magni at!
            </p>
            <a href="#" className="btn-read-more">Read More</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
              </svg>
            </div>
            <h3 className="service-card-title">Graphic Design</h3>
            <p className="service-card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure nisi dolor recusandae voluptas et voluptatibus explicabo ducimus magni at!
            </p>
            <a href="#" className="btn-read-more">Read More</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h3 className="service-card-title">Digital Marketing</h3>
            <p className="service-card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iure nisi dolor recusandae voluptas et voluptatibus explicabo ducimus magni at!
            </p>
            <a href="#" className="btn-read-more">Read More</a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Service;