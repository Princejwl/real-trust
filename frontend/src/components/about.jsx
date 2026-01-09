import React from "react";

export const About = (props) => {
  return (
    <section id="about" className="about-section">
      <div className="container text-center">
        {/* IMAGE COLLAGE */}
        <div className="about-images">
          <img src="img/task/images/pexels-andres-ayrton-6578391.svg" alt="about-1" className="img img-1" />
          <img src="img/task/images/pexels-brett-sayles-2881232-1.svg" alt="about-2" className="img img-2" />
          <img src="img/task/images/pexels-brett-sayles-2881232.svg" alt="about-3" className="img img-3" />
        </div>

        {/* TEXT */}
        <div className="about-text">
          <h2>About Us</h2>
          <span className="underline"></span>

          <p>
            {props.data ? props.data.paragraph : "Loading..."}
          </p>

          <a href="#projects" className="btn btn-custom btn-lg">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
