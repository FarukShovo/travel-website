import React from "react";

import "./Package.css";

const Package = (props) => {
  const { img, name, description, price } = props.package;

  return (
    <div className="col service-card">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h3 className="text-center">{name}</h3>
          <h5>Description:{description}</h5>
          <h5>Price:{price}</h5>

          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Package;
