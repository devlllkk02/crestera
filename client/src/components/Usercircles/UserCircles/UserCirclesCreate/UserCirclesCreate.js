import React from 'react';
import './UserCirclesCreate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

const UserCirclesCreate = () => {
  return (
    <div className="usercircles_create">
      <div className="usercircles_create_container">
        <div className="usercircles_create_header">
          <h1>CREATE A USER CIRCLE</h1>
        </div>
        <div className="usercircles_create_name_box">
          <div className="usercircles_create_name_form">
            <form>
              <input
                type="text"
                name="Circle Name"
                placeholder="Circle Name"
              ></input>
            </form>
          </div>
        </div>
        <div className="usercircles_create_name_box">
          <div className="usercircles_create_name_form">
            <form>
              <input
                type="text"
                name="Circle Type"
                placeholder="Circle Type"
              ></input>
            </form>
          </div>
          <div className="dropdown_icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <button className="usercircles_button">
          <span>Create Circle</span>
        </button>
      </div>
    </div>
  );
}

export default UserCirclesCreate;
