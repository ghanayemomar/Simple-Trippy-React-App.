import React from "react";
import "./footerStyle.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="top">
          <div>
            <h1>Trippy</h1>
            <p>Choose Your Favourite Destination.</p>
          </div>
          <div>
            <a src="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a src="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a src="/">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a src="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
