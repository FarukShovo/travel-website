import React from "react";
import Gallery from "../Gallery/Gallery";
import Packages from "../Packages/Packages";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="content">
          <h3>adventure is worthwhile</h3>
          <p>dicover new places with us, adventure awaits</p>
          <a href="#" class="btn">
            discover more
          </a>
        </div>

        <div class="controls">
          <span class="vid-btn active" data-src="images/vid-1.mp4"></span>
        </div>

        <div class="video-container">
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
