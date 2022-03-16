// ------ Navbar  ------
import React, { useState } from "react";
import "./Navbar.scss";

//Images
import profilePic from "../../assets/images/other/profilePicture.jpg";
import cresteraLogo from "../../assets/images/logos/Crestera-Logo.png";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faClose } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(!false);

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__menu">
            <div
              className="navbar__menu__container"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faClose} />
              )}
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
        {isOpen && (
          <div className="navbar__sidebar">
            <Sidebar />
            <div className="sidebar__rightBorder"></div>
          </div>
        )}
      </div>
      <div className="navbar__filler"></div>
    </>
  );
}

export default Navbar;
