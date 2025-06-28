import React from "react";
import "./Profile.css";
import girl from "../../asset/girl.png";
import vector from "../../asset/vector.png";
import vector2 from "../../asset/vector2.png";

function Profile() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="text-content">
          <span className="commas">🙶</span>
          <p className="qoute">
            Jenny's exceptional product design ensures our website's success.
            Highly Recommended
          </p>
        </div>

        <div className="heading">
          <div className="badge-container">
            <img className="vector-badge" src={vector} alt="image" />
            <span className="badge">Hello!</span>
          </div>
          <div className="heading-text-container">
            <h1>
              I'm <span className="highlight">Jenny</span>,<br />
              Product Designer
            </h1>
            <img className="vector-text" src={vector2} alt="image" />
          </div>

          <div className="image-wrapper">
            <div className="semi-circle"></div>
            <img className="image" src={girl} alt="Jenny" />

            <div className="button-group">
              <button className="portfolio-btn">Portfolio</button>
              <button className="hire-btn">Hire me</button>
            </div>
          </div>
        </div>

        <div className="experience-box">
          <div className="stars">{"⭐".repeat(5)}</div>
          <h2 className="years">10 Years</h2>
          <p className="experience">Experience</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
