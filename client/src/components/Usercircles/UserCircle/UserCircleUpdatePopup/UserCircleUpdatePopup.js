import { faX } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './UserCircleUpdatePopup.scss';

const UserCircleUpdatePopup = ({ trigger, settrigger, children }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-body">
        <button className="closebtn" onClick={() => settrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </button>
        {children}
        <div className="usercircles_update_header">
          <h1>UPDATE USER CIRCLE</h1>
        </div>
        <div className="usercircles_update_name_box">
          <div className="usercircles_update_name_form">
            <form>
              <input
                type="text"
                name="Circle Name"
                placeholder="Circle Name"
              ></input>
            </form>
          </div>
        </div>
        <div className="usercircles_update_name_box">
          <div className="usercircles_update_name_form">
            <form>
              <input
                type="text"
                name="Circle Type"
                placeholder="Circle Type"
              ></input>
            </form>
          </div>
        </div>
        <button className="usercircles_button">
          <span>Update Circle</span>
        </button>{' '}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UserCircleUpdatePopup;
