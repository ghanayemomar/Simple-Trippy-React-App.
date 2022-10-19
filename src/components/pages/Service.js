import React from "react";
import Hero from "../Hero";
import ServicePic from "../../assets/4.jpg";
const Service = () => {
  return (
    <React.Fragment>
      <Hero cName="hero-about" heroImg={ServicePic} title="Service" />
    </React.Fragment>
  );
};
export default Service;
