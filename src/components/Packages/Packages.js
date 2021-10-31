import React from "react";
import "./Packages.css";
import { useEffect, useState } from "react";
import Package from "../Package/Package";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div style={{ marginTop: 90 }}>
      <h2 className="text-center">Packages</h2>
      <div className="row row-cols-md-3 g-3">
        {packages.map((p) => (
          <Package key={p.id} package={p}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;

// //  <div class="box-container">
// <div class="box">
// <img src="images/p-1.jpg" alt="" />
// <div class="content">
//   <h3>
//     <i class="fas fa-map-marker-alt"></i> fantastic mumbai
//   </h3>
//   <p>
//     Mumbai is the centre of the Mumbai Metropolitan Region, the sixth
//     most populous metropolitan area in the world with a population of
//     over 23 million. Mumbai lies ...
//   </p>
//   <div class="stars">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="far fa-star"></i>
//   </div>
//   <div class="price">
//     $90.00 <span>$120.00</span>
//   </div>
//   <Link to="/placeorder" class="btn">
//     book now
//   </Link>
// </div>
// </div>

// <div class="box">
// <img src="images/p-2.jpg" alt="" />
// <div class="content">
//   <h3>
//     <i class="fas fa-map-marker-alt"></i> mind blowing hawaii
//   </h3>
//   <p>
//     Hawaii is a state in the Western United States located in the
//     Pacific Ocean about 2,000 miles from the U.S. mainland. It is the
//     only state outside North America, the only state that is
//     an................
//   </p>
//   <div class="stars">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="far fa-star"></i>
//   </div>
//   <div class="price">
//     $90.00 <span>$120.00</span>
//   </div>
//   <Link to="#" class="btn">
//     book now
//   </Link>
// </div>
// </div>

// <div class="box">
// <img src="images/p-3.jpg" alt="" />
// <div class="content">
//   <h3>
//     <i class="fas fa-map-marker-alt"></i> skyscraper sydney
//   </h3>
//   <p>
//     Sydney, capital of New South Wales and one of Australia's largest
//     cities, is best known for its harbourfront Sydney Opera House,
//     with a distinctive sail-like design. Massive Darling Harbour and
//     the smaller............
//   </p>
//   <div class="stars">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="far fa-star"></i>
//   </div>
//   <div class="price">
//     $90.00 <span>$120.00</span>
//   </div>
//   <Link to="#" class="btn">
//     book now
//   </Link>
// </div>
// </div>

// <div class="box">
// <img src="images/p-4.jpg" alt="" />
// <div class="content">
//   <h3>
//     <i class="fas fa-map-marker-alt"></i>dazzling paris
//   </h3>
//   <p>
//     Paris is the capital and most populous city of France, with an
//     estimated population of 2,175,601 residents as of 2018, in an area
//     of more than 105 square ...
//   </p>
//   <div class="stars">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="far fa-star"></i>
//   </div>
//   <div class="price">
//     $90.00 <span>$120.00</span>
//   </div>
//   <Link to="#" class="btn">
//     book now
//   </Link>
// </div>
// </div>

// <div class="box">
// <img src="images/p-5.jpg" alt="" />
// <div class="content">
//   <h3>
//     <i class="fas fa-map-marker-alt"></i> eye-catching tokyo
//   </h3>
//   <p>
//     Tokyo, Japan’s busy capital, mixes the ultramodern and the
//     traditional, from neon-lit skyscrapers to historic temples. The
//     opulent Meiji Shinto Shrine is known for its towering gate and
//     surrounding woods.....
//   </p>
//   <div class="stars">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="far fa-star"></i>
//   </div>
//   <div class="price">
//     $90.00 <span>$120.00</span>
//   </div>
//   <Link to="#" class="btn">
//     book now
//   </Link>
// </div>
// </div>

// <div class="box">
// <img src="images/p-6.jpg" alt="" />
// <div class="content">
//   <h3>
//     <i class="fas fa-map-marker-alt"></i>ancient cairo
//   </h3>
//   <p>
//     Cairo, Egypt’s sprawling capital, is set on the Nile River. At its
//     heart is Tahrir Square and the vast Egyptian Museum, a trove of
//     antiquities including royal mummies and gilded ........
//   </p>
//   <div class="stars">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="far fa-star"></i>
//   </div>
//   <div class="price">
//     $90.00 <span>$120.00</span>
//   </div>
//   <Link to="#" class="btn">
//     book now
//   </Link>
// </div>
// </div>
// </div>
