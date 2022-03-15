// ------ Navbar  ------
import React from "react";
import "./Navbar.scss";

//Images
import profilePic from "../../assets/images/other/profilePicture.jpg"
import cresteraLogo from "../../assets/images/logos/Crestera-Logo.png"

//Fontawesome
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
          <img src={cresteraLogo} alt="" />
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
          <img src={profilePic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
