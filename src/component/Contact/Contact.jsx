import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <h2 className="contact-main-title">
          Contact <span className="highlight-text">Me!</span>
        </h2>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <input type="tel" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>

          <textarea 
            rows="8" 
            placeholder="Your Message" 
            required
          ></textarea>

          <div className="btn-wrapper">
            <button type="submit" className="btn-send">Send Message</button>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Contact;