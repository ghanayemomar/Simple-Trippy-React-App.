import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons">
        <button
          onClick={clickHandler}
          className={clicked ? "fas fa-times" : "fas fa-bars"}
        ></button>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </NavLink>
            </li>
          );
        })}
        <button className="Sign-Up">Sign up</button>
      </ul>
    </nav>
  );
};
export default Navbar;
