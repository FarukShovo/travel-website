import React from "react";
import "./Packages.css";
import { useEffect, useState } from "react";
import Package from "../Package/Package";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://chilling-demon-70491.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div style={{ marginTop: 90 }}>
      <h2 className="text-center bg-warning">Packages</h2>
      <div className="row row-cols-md-3 g-3">
        {packages.map((p) => (
          <Package key={p.id} package={p}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
