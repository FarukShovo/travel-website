import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import Packages from "../Packages/Packages";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>Where the journey begins!</h3>
          <p>
            No matter where you're going from, we take you there just at a
            glimpse
          </p>
          <Link to="#" className="btn">
            discover more
          </Link>
        </div>

        <div className="controls">
          <span className="vid-btn active" data-src="images/vid-1.mp4"></span>
        </div>

        <div className="video-container">
          <video
            src="images/vid-1.mp4"
            id="video-slider"
            loop
            autoplay
            muted
          ></video>
        </div>
      </section>
      <Services></Services>
      <Packages></Packages>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
