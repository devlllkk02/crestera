import React, { useState } from 'react';
import '@fontsource/roboto';
import './UserCircle.scss';
import PopUp from '../../PopUp/PopUp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faAngleDown,
  faUsersGear,
  faUserPlus,
  faEdit,
  faPencil,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function UserCircle() {
  const [btnpopup, setbtnpopup] = useState(false);

  return (
    <div className="usercircle">
      <div className="usercircle_header">
        <p>Circle 01</p>
        <button className="btnEdit">
          <FontAwesomeIcon
            className="user_circle_edit_icon"
            icon={faPen}
            onClick={() => setbtnpopup(true)}
          />
        </button>
        <PopUp trigger={btnpopup} settrigger={setbtnpopup}></PopUp>
        <FontAwesomeIcon className="user_gear_icon" icon={faUsersGear} />
      </div>
      <div className="usercircles_header_container">
        <div className="circle_type">
          <p1>Type: </p1>
          <p2>Private</p2>
        </div>
        <div className="usercircles_search_box">
          <div className="usercircles_search_form">
            <form>
              <input type="text" name="search" placeholder="Search.."></input>
            </form>
          </div>
          <div className="search_icon">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
        </div>
        <div className="usercircles_filter_box">
          <div className="usercircles_filter_dropdown">
            <select>
              <option value="0">All Circles</option>

              <NavLink to="/SignIn">
                <option value="1">Public Circles</option>
              </NavLink>
              <option value="2">Private Circles</option>
            </select>
          </div>
          <div className="dropdown_icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCircle;
