import React from 'react';
import '@fontsource/roboto';
import './UserCirclesPublic.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function UserCirclesPublic() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="usercircles">
      <div className="usercircles_header">
        <p>USER CIRCLES</p>
      </div>
      <div className="usercircles_header_container">
        <Link to="/UserCirclesCreate" style={{ textDecoration: 'none' }}>
          <button className="usercircles_button">
            <FontAwesomeIcon className="plus_button " icon={faPlus} />
            <span>Create Circle</span>
          </button>
        </Link>
        <div className="usercircles_search_box">
          <div className="usercircles_search_form">
            <form>
              <input type="text" name="search" placeholder="Search.."></input>
            </form>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="usercircles_filter_box">
          <div className="usercircles_filter_dropdown">
            <div
              className="usercircles_filter_dropdown_button"
              onClick={(e) => setIsActive(!isActive)}
            >
              <p>Public Circles</p>
              <div className="dropdown_icon">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            {isActive && (
              <div className="usercircles_filter_dropdown_content">
                <Link
                  to="/UserCirclesPrivate"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="usercircles_filter_dropdown_item">
                    <p>Private Circles</p>
                  </div>
                </Link>
                <Link to="/UserCirclesAll" style={{ textDecoration: 'none' }}>
                  <div className="usercircles_filter_dropdown_item">
                    <p>All Circles</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCirclesPublic;
