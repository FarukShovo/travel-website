import React from "react";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section className="gallery" id="gallery">
        <h1 className="heading">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>y</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/g-1.jpg" alt="" />
            <div className="content">
              <h3>ocean</h3>
              <p>Ocean is just calling you...........</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-2.jpg" alt="" />
            <div className="content">
              <h3>Boat</h3>
              <p>Sleepy blue ocean by boat..............</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-3.jpg" alt="" />
            <div className="content">
              <h3>Monuments</h3>
              <p>Monuments are calling........</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-4.jpg" alt="" />
            <div className="content">
              <h3>Roads in forest</h3>
              <p>Forests are calling......</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-5.jpg" alt="" />
            <div className="content">
              <h3>blue sky</h3>
              <p>Ahhhh.......calling...</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-6.jpg" alt="" />
            <div className="content">
              <h3>sunrise</h3>
              <p>A new promise is calling........</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-7.jpg" alt="" />
            <div className="content">
              <h3>color in life</h3>
              <p>can you hear the color.......?</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-8.jpg" alt="" />
            <div className="content">
              <h3>lap of nature</h3>
              <p>How exciting night stay close to nature.....</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/g-9.jpg" alt="" />
            <div className="content">
              <h3>pyramid</h3>
              <p>the oldest tomb in the world.......</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
