import React from "react";

export const Services = (props) => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* TITLE */}
        <div className="section-title text-center">
          <h2>Our Services</h2>
          <p>
            We provide end-to-end solutions to help businesses grow and scale.
          </p>
        </div>

        {/* SERVICES */}
        <div className="row">
          {props.data
            ? props.data.map((service, index) => (
                <div key={index} className="col-md-4">
                  <div className="service-box">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
