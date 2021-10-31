import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MyOrder = () => {
  const { placeId } = useParams();
  const [place, setPlace] = useState({});
  useEffect(() => {
    fetch(`https://chilling-demon-70491.herokuapp.com/places/${placeId}`)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, []);
  return (
    <div style={{ marginTop: 200 }}>
      <h2>Details of:{place.name}</h2>
      <h2>This is booking:{placeId}</h2>
    </div>
  );
};

export default MyOrder;
