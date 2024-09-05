import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logoimage from "../Assets/Site-logo.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logoimage} className="nav-logo-img" alt="abc..." />
        <p className="nav-logoname">AYUSH</p>
      </div>
      <div>
        <ul className="nav-menu">
          <li className="nav-menu-items" onClick={() => setMenu("home")}>
            <Link to="/">home</Link> {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            className="nav-menu-items"
            onClick={() => setMenu("recommendation")}
          >
            <Link to="/Recommendation">recommendation</Link>
            {menu === "recommendation" ? <hr /> : <></>}
          </li>
          <li className="nav-menu-items" onClick={() => setMenu("support")}>
            <Link to="/support"> support</Link>
            {menu === "support" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="nav-login">
        <button className="nav-login-button">login</button>
      </div>
    </div>
  );
};

export default Navbar;
