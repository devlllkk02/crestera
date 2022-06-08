import { faX, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './UserCircleUpdatePopup.scss';

const UserCircleUpdatePopup = ({ trigger, settrigger, children }) => {
  return trigger ? (
    <div className="popup">
        <div className="usercircleupdate_popup_body">
          <button className="closebtn" onClick={() => settrigger(false)}>
            <FontAwesomeIcon icon={faX} />
          </button>
          {children}
          <div className="usercircleupdate_header">
            <h1>UPDATE USER CIRCLE</h1>
          </div>
          <div className="usercircleupdate__box">
            <input
              type="text"
              placeholder="Circle 01"
            />
          </div>
          <div className="usercircleupdate_type_box">
            <select name="" id="">
              <option value="">Public</option>
              <option value="">Private</option>
            </select>
            <div className="usercircleupdate_type_box__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <button className="usercircleupdate_button">
            <span>UPDATE CIRCLE</span>
          </button>

        </div>
      </div>
  ) : (
    <></>
  );
};

export default UserCircleUpdatePopup;
