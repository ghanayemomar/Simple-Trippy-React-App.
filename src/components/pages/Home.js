import React from "react";
import Hero from "../Hero";
import Destination from "../Destination";
import HomePic from "../../assets/12.jpg";
import Trip from "../Trip";
const Home = () => {
  return (
    <React.Fragment>
      <Hero
        cName="hero"
        heroImg={HomePic}
        title="Your Journey Your Story."
        text="Choose Your Favourite Destination."
        btnClass="show"
        buttonText="Travel Plan"
        url="/"
      />
      <Destination />
      <Trip />
    </React.Fragment>
  );
};
export default Home;
