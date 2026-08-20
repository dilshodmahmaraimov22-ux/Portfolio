import React from 'react';
import Man from "./Images/Man.png"
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h3 className="hero-subtitle">Hello It's Me</h3>
          <h1 className="hero-title">John Kendric</h1>
          <h2 className="hero-profession">
            And I'm a <span className="highlight-text">Frontend Develo|</span>
          </h2>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla libero labore exercitationem, iste iusto unde eos.
          </p>

          <div className="social-icons">
            <a href="#" className="social-btn">f</a>
            <a href="#" className="social-btn">t</a>
            <a href="#" className="social-btn">i</a>
            <a href="#" className="social-btn">in</a>
          </div>

          <a href="#" className="btn-download">Download CV</a>
        </div>

        <div className="hero-image-wrapper">
          <div className="hexagon-shape">
            <img 
              src={Man} 
              alt="John Kendric" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;