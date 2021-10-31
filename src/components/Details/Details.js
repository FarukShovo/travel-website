import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://chilling-demon-70491.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  const { id } = useParams();
  const details = packages.find((p) => parseInt(p.id) === parseInt(id));
  console.log(details);
  return (
    <div className="box">
      {details && <img src={details.picture} alt="" />}
      <h3>{details && details.name}</h3>
      <p>{details && details.description}</p>
    </div>
  );
};

export default Details;
