import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("https://chilling-demon-70491.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://chilling-demon-70491.herokuapp.com/places/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted successfully");

          const remaining = places.filter((place) => place._id !== id);
          setPlaces(remaining);
        }
      });
  };

  return (
    <div style={{ marginTop: 100 }}>
      <h2 className="text-center mb-3">manage services</h2>
      {places.map((place) => (
        <div className="text-center mb-3" key={place._id}>
          <h3>{place.name}</h3>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(place._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
