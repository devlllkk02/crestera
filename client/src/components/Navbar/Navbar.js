// ------ Navbar  ------
import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

//Packages
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

//Images
import profilePic from "../../assets/images/other/profilePicture.jpg";
import cresteraLogo from "../../assets/images/logos/Crestera-Logo.png";

//Fontawesome
import ProfilePic from "../../assets/images/other/profilePicture.jpg";
import CresteraLogo from "../../assets/images/logos/Crestera-Logo.png";
import CresteraBoardLogo from "../../assets/images/logos/Crestera-Board.png";
import CresteraNoteLogo from "../../assets/images/logos/Crestera-Note.png";
import CresteraVaultLogo from "../../assets/images/logos/Crestera-Vault.png";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faClose } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";

function Navbar({ page }) {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  const [isOpen, setIsOpen] = useState(false);

  const setLogo = () => {
    if (page == "board") {
      return CresteraBoardLogo;
    } else if (page == "note") {
      return CresteraNoteLogo;
    } else if (page == "vault") {
      return CresteraVaultLogo;
    } else {
      return CresteraLogo;
    }
  };

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
            <img src={setLogo()} alt="" />
          </div>
          <div className="navbar__username">
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <p>{`${state?.firstName} ${state?.lastName}`}</p>
            </Link>
          </div>
          <div className="navbar__notification">
            <div className="navbar__notification__container">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
          <div className="navbar__userimage">
            <Link to="/profile">
              <img src={state?.image} alt="" />
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="navbar__sidebar">
            <Sidebar page={page} />
            <div className="sidebar__rightBorder"></div>
          </div>
        )}
      </div>
      <div className="navbar__filler"></div>
    </>
  );
}

export default Navbar;
