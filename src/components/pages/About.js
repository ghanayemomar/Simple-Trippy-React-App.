import React from "react";
import Hero from "../Hero";
import AboutPic from '../../assets/night.jpg'
const About = () => {
    return (
        <React.Fragment>
          <Hero
            cName="hero-about"
            heroImg={AboutPic}
            title="About"
            // text="Choose Your Favourite Destination."
            // btnClass="show"
            // buttonText="Travel Plan"
            // url="/"
          />
        </React.Fragment>
      );
};
export default About;
