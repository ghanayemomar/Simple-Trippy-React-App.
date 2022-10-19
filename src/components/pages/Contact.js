import React from "react";
import Hero from "../Hero";
import ContactPic from '../../assets/10.jpg'
const Contact = () => {
    return(
        <React.Fragment>
        <Hero
          cName="hero-about"
          heroImg={ContactPic}
          title="Contact"
        />
      </React.Fragment>
    );
};
export default Contact;
