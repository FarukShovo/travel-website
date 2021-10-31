import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { _id, img, name, description, price } = props.package;

  return (
    <div className="col service-card">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h3 className="text-center">{name}</h3>
          <h5>Description:{description}</h5>
          <h5>Price:{price}</h5>

          <Link to={`/details/${_id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Package;
