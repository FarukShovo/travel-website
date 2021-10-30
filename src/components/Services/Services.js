import React from "react";
import "./Services.css";
import { FaHotel, FaUtensils, FaPlane, FaHiking } from "react-icons/fa";
import { MdSafetyDivider } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
// import { MdSafetyDivider } from "react-icons/md";
const Services = () => {
  return (
    <section style={{ marginTop: 50 }} class="services" id="services">
      <h1 class="heading">
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-hotel">
            <FaHotel></FaHotel>
          </i>
          <h3>affordable hotels</h3>
          <p>
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided inside a hotel room may range
            from a modest-quality mattress in a small room to large suite.......
          </p>
        </div>
        <div class="box">
          <i class="fas fa-utensils">
            <FaUtensils></FaUtensils>
          </i>
          <h3>food and drinks</h3>
          <p>
            A drink is a liquid intended for human consumption. In addition to
            their basic function of satisfying thirst, drinks play important
            roles in human culture. Common types of drink...........
          </p>
        </div>
        <div class="box">
          <i class="fas fa-bullhorn">
            <MdSafetyDivider></MdSafetyDivider>
          </i>
          <h3>safety guide</h3>
          <p>
            Safety is the state of being "safe", the condition of being
            protected from harm or other danger. Safety can also refer to the
            control of recognized hazards in order to achieve......
          </p>
        </div>
        <div class="box">
          <i class="fas fa-globe-asia">
            {" "}
            <BiWorld></BiWorld>
          </i>
          <h3>around the world</h3>
          <p>
            In its most general sense, the term "world" refers to the totality
            of entities, the world has been conceptualized differently in
            different fields. Some conceptions see.........
          </p>
        </div>
        <div class="box">
          <i class="fas fa-plane">
            <FaPlane></FaPlane>
          </i>
          <h3>fastest travel</h3>
          <p>
            Travel is the movement of people between distant geographical
            locations. Travel can be done by foot, bicycle, automobile, train,
            boat, bus, airplane, ship or other means, with or without luggage,
            and can be one way or round the...............
          </p>
        </div>
        <div class="box">
          <i class="fas fa-hiking">
            <FaHiking></FaHiking>
          </i>
          <h3>adventures</h3>
          <p>
            An adventure is an exciting experience or undertaking that is
            typically bold, sometimes risky. Adventures may be activities with
            some potential for physical danger........
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
