import React from "react";

export const Gallery = (props) => {
  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        {/* TITLE */}
        <div className="section-title text-center">
          <h2>Our Projects</h2>
          <p>
            We know what buyers are looking for and suggest projects that bring
            top value.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="row">
          {props.data && props.data.length > 0
            ? props.data.map((project, index) => (
                <div key={index} className="col-md-4">
                  <div className="project-card">
                    <div className="project-img">
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    </div>

                    <div className="project-content">
                      <h4>{project.title}</h4>
                      <a href="#contact" className="btn btn-custom">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
