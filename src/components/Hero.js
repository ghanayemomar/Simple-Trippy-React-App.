import "./HeroStyle.css";
import React from "react";
import { NavLink } from "react-router-dom";
const Hero = (props) => {
  return (
    <React.Fragment>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <NavLink to={props.url} className={props.btnClass}>
            {props.buttonText}
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Hero;
