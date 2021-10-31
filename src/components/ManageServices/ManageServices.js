import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/places/${id}`;
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
    <div style={{ marginTop: 150 }}>
      <h2>manage services</h2>
      {places.map((place) => (
        <div key={place._id}>
          <h3>{place.name}</h3>
          <button onClick={() => handleDelete(place._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
