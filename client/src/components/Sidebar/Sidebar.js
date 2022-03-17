// ------ Sidebar  ------
import React from "react";
import "./Sidebar.scss";

import { Link } from "react-router-dom";

//Images
import CresteraBoard from "../../assets/images/logos/Crestera-Board.png";
import CresteraNote from "../../assets/images/logos/Crestera-Note.png";
import CresteraVault from "../../assets/images/logos/Crestera-Vault.png";

//Font Awesome
import {
  faHome,
  faSignOutAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar({ page }) {
  const setSidebarColors = (active) => {
    if (page === "crestera" && active) {
      return { backgroundColor: "#0f96c3" };
    } else if (page === "board" && active) {
      return { backgroundColor: "#582753" };
    } else if (page === "note" && active) {
      return { backgroundColor: "#7d292b" };
    } else if (page === "vault" && active) {
      return { backgroundColor: "#0b572e" };
    } else {
      return { backgroundColor: "#ffffff" };
    }
  };

  return (
    <div className="sidebar">
      {/* Dashboard */}
      <div className="sidebar__item">
        <div className="sidebar__item__container">
          <div className="sidebar__item__icon">
            <Link to="/dashboard">
              <div className="sidebar__item__icon__container">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </Link>
          </div>
          <div className="sidebar__item__text">
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <p>Dashboard</p>
            </Link>
          </div>
          <div
            className="sidebar__item__border"
            style={setSidebarColors(page === "crestera" ? true : false)}
          ></div>
        </div>
      </div>
      {/* Board */}
      <div className="sidebar__item2">
        <div className="sidebar__item2__container">
          <div className="sidebar__item2__icon">
            <Link to="/dashboard/board">
              <img src={CresteraBoard} alt="" />
            </Link>
          </div>
          <div className="sidebar__item2__text"></div>
          <div
            className="sidebar__item2__border"
            style={setSidebarColors(page === "board" ? true : false)}
          ></div>
        </div>
      </div>
      {/* Note */}
      <div className="sidebar__item2">
        <div className="sidebar__item2__container">
          <div className="sidebar__item2__icon">
            <Link to="/dashboard/note">
              <img src={CresteraNote} alt="" />
            </Link>
          </div>
          <div className="sidebar__item2__text"></div>
          <div
            className="sidebar__item2__border"
            style={setSidebarColors(page === "note" ? true : false)}
          ></div>
        </div>
      </div>
      {/* Vault */}
      <div className="sidebar__item2">
        <div className="sidebar__item2__container">
          <div className="sidebar__item2__icon">
            <Link to="/dashboard/vault">
              <img src={CresteraVault} alt="" />
            </Link>
          </div>
          <div className="sidebar__item2__text"></div>
          <div
            className="sidebar__item2__border"
            style={setSidebarColors(page === "vault" ? true : false)}
          ></div>
        </div>
      </div>
      {/* User Circles */}
      <div className="sidebar__item">
        <div className="sidebar__item__container">
          <div className="sidebar__item__icon">
            <div className="sidebar__item__icon__container">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
          </div>
          <div className="sidebar__item__text">
            <p>User Circles</p>
          </div>
          <div
            className="sidebar__item__border"
            style={setSidebarColors(page === "userCircles" ? true : false)}
          ></div>
        </div>
      </div>
      {/* Logout */}
      <div className="sidebar__item">
        <div className="sidebar__item__container">
          <div className="sidebar__item__icon">
            <div className="sidebar__item__icon__container">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
          </div>
          <div className="sidebar__item__text">
            <p>Logout</p>
          </div>
          <div
            className="sidebar__item__border"
            style={setSidebarColors(page === "logout" ? true : false)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
