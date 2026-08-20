import React from 'react';
import './Footer.css';

function Footer() {
  // Sahifaning eng tepasiga ravon (smooth) ko'tarilish funksiyasi
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COPYRIGHT TEXT */}
        <p className="footer-text">
          Copyright &copy; 2023 by Codehal | All Rights Reserved.
        </p>

        {/* SCROLL TO TOP BUTTON */}
        <button onClick={scrollToTop} className="btn-top" aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>

      </div>
    </footer>
  );
}

export default Footer;