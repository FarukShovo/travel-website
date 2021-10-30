import React from "react";
import { Link } from "react-router-dom";
import "./Packages.css";
const Packages = () => {
  return (
    <section style={{ marginTop: 50 }} class="packages" id="packages">
      <h1 class="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="images/p-1.jpg" alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i> mumbai
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">
              $90.00 <span>$120.00</span>
            </div>
            <Link to="/placeorder" class="btn">
              book now
            </Link>
          </div>
        </div>

        <div class="box">
          <img src="images/p-2.jpg" alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i> hawaii
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">
              $90.00 <span>$120.00</span>
            </div>
            <Link to="#" class="btn">
              book now
            </Link>
          </div>
        </div>

        <div class="box">
          <img src="images/p-3.jpg" alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i> sydney
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">
              $90.00 <span>$120.00</span>
            </div>
            <Link to="#" class="btn">
              book now
            </Link>
          </div>
        </div>

        <div class="box">
          <img src="images/p-4.jpg" alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i> paris
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">
              $90.00 <span>$120.00</span>
            </div>
            <Link to="#" class="btn">
              book now
            </Link>
          </div>
        </div>

        <div class="box">
          <img src="images/p-5.jpg" alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i> tokyo
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">
              $90.00 <span>$120.00</span>
            </div>
            <Link to="#" class="btn">
              book now
            </Link>
          </div>
        </div>

        <div class="box">
          <img src="images/p-6.jpg" alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i> eypt
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">
              $90.00 <span>$120.00</span>
            </div>
            <Link to="#" class="btn">
              book now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
