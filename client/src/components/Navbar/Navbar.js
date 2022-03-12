// ------ Navbar  ------
import React from "react";
import "./Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__menu">
          <div className="navbar__menu__container">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="navbar__logo">
          <img src="./images/logos/Crestera-Logo.png" alt="" />
        </div>
        <div className="navbar__username">
          <p>Janice Brownwell</p>
        </div>
        <div className="navbar__notification">
          <div className="navbar__notification__container">
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>
        <div className="navbar__userimage">
          <img src="./images/other/profilePicture.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
