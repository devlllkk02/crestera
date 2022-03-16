// ------ Sidebar  ------
import React from "react";
import "./Sidebar.scss";

//Images
import CresteraBoard from "../../assets/images/logos/Crestera-Board.png";
import CresteraNote from "../../assets/images/logos/Crestera-Note.png";
import CresteraVault from "../../assets/images/logos/Crestera-Vault.png";

//Font Awesome
import {
  faChevronDown,
  faHome,
  faSearch,
  faSignOutAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Dashboard */}
      <div className="sidebar__item">
        <div className="sidebar__item__container">
          <div className="sidebar__item__icon">
            <div className="sidebar__item__icon__container">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </div>
          <div className="sidebar__item__text">
            <p>Dashboard</p>
          </div>
          <div className="sidebar__item__border"></div>
        </div>
      </div>
      {/* Board */}
      <div className="sidebar__item">
        <div className="sidebar__item__container">
          <div className="sidebar__item__icon">
            <img src={CresteraBoard} alt="" />
          </div>
          <div className="sidebar__item__text"></div>
          <div className="sidebar__item__border"></div>
        </div>
      </div>
      {/* Note */}
      <div className="sidebar__item">
        <div className="sidebar__item__container">
          <div className="sidebar__item__icon">
            <img src={CresteraNote} alt="" />
          </div>
          <div className="sidebar__item__text"></div>
          <div className="sidebar__item__border"></div>
        </div>
      </div>
      {/* Vault */}
      <div className="sidebar__item">
        <div className="sidebar__item__container">
          <div className="sidebar__item__icon">
            <img src={CresteraVault} alt="" />
          </div>
          <div className="sidebar__item__text"></div>
          <div className="sidebar__item__border"></div>
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
          <div className="sidebar__item__border"></div>
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
          <div className="sidebar__item__border"></div>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
