import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row hero-row">

              {/* LEFT CONTENT */}
              <div className="col-md-7 hero-left">
                <h1>
                  Consulting & <br /> Marketing
                </h1>
                <p>
                  We help businesses grow with strategy, design and technology.
                </p>
                <a href="#contact" className="btn btn-custom btn-lg">
                  Get Free Consultation
                </a>
              </div>

              {/* RIGHT FORM */}
              <div className="col-md-5 hero-right">
                <div className="hero-form">
                  <h3>Get a Free Consultation</h3>

                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />

                    <select className="form-control">
                      <option>Select Service</option>
                      <option>Consulting</option>
                      <option>Marketing</option>
                      <option>Design</option>
                    </select>

                    <button href="#contact" className="btn btn-form">
                      Get Free Consultation
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
