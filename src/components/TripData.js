import React from "react";
const TripData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.img} alt="image" />
      </div>
      <h4>{props.header}</h4>
      <p>{props.text}</p>
    </div>
  );
};
export default TripData;
