import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
      {/* ===== CTA SECTION ===== */}
      <div className="contact-cta">
        <div className="overlay">
          <div className="container text-center">
            <h2>
              Learn more about our listing process, as well as our additional
              staging and design work.
            </h2>
            <a href="#services" className="btn btn-light">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* ===== NEWSLETTER SECTION ===== */}
      <div className="newsletter-section">
        <div className="container newsletter-flex">
          <ul className="footer-links">
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>

          <div className="newsletter-box">
            <span>Subscribe to</span>
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="footer-bottom">
  <div className="footer-container">
    
    {/* LEFT */}
    <div className="footer-left">
      © 2026 Real Trust. All Rights Reserved.
    </div>

    {/* CENTER */}
    <div className="footer-center">
      <img
        src="img/task/images/logo.svg"
        alt="Real Trust Logo"
        className="footer-logo"
      />
    </div>

    {/* RIGHT */}
    <div className="footer-right">
      <i className="fa fa-facebook"></i>
      <i className="fa fa-twitter"></i>
      <i className="fa fa-instagram"></i>
      <i className="fa fa-linkedin"></i>
    </div>

  </div>
</div>

    </section>
  );
};
