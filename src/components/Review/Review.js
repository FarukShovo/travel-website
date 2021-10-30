import React from "react";
import "./Review.css";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section class="review" id="review">
        <h1 class="heading">
          <span>r</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
        </h1>

        <div class="swiper-container review-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic1.png" alt="" />
                <h3>nataile portman</h3>
                <p>So excited to touch you...........</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic2.png" alt="" />
                <h3>john abest</h3>
                <p>Ahhh.......what an exciting ride it was.....</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic3.png" alt="" />
                <h3>rici ben</h3>
                <p>Yay......I wish I could go again and again...</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="box">
                <img src="images/pic4.png" alt="" />
                <h3>nathan leg</h3>
                <p>Excellent! Mind blowing.....just out of the world.......</p>
                <div class="stars">
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                  <i class="fas fa-star">
                    <FaStar></FaStar>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
