import React, { useState } from "react";

export const Contact = () => {
  // =====================
  // CONTACT FORM STATE
  // =====================
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  //  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [showFillMessage, setShowFillMessage] = useState(false); 

  // =====================
  // NEWSLETTER STATE
  // =====================
  const [subscriberEmail, setSubscriberEmail] = useState("");

  // =====================
  // CONTACT HANDLER
  // =====================
  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitContactForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (res.ok) {
        alert("Contact details submitted successfully!");
        setContact({ fullName: "", email: "", mobile: "", city: "" });
      }
    } catch (error) {
      alert("Server error");
    }
  };

  // =====================
  

  return (
    <section id="contact">
      {/* ================= CTA ================= */}
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

      {/* ================= CONTACT FORM ================= */}
      <div className="contact-form-section">
        <div className="container">
          <h2 className="text-center">Get Free Consultation</h2>
          {showFillMessage && (
      <p className="fill-message">
        Please fill the consultation form below 👇
      </p>
    )}

          <form className="contact-form" onSubmit={submitContactForm}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={contact.fullName}
              onChange={handleContactChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={contact.email}
              onChange={handleContactChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={contact.mobile}
              onChange={handleContactChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={contact.city}
              onChange={handleContactChange}
              required
            />

            <button type="submit" className="btn btn-custom">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* ================= NEWSLETTER ================= */}
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
            <input
              type="email"
              placeholder="Email Address"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
            />
            <button href="#contact" onClick={() => {
    setShowFillMessage(true);

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-left">
            © 2026 Real Trust. All Rights Reserved.
          </div>

          <div className="footer-center">
            <img
              src="img/task/images/logo.svg"
              alt="Real Trust Logo"
              className="footer-logo"
            />
          </div>

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
export default Contact;