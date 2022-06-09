import { faX } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

import './UserCircleUpdatePopup.scss';

const UserCircleUpdatePopup = ({ trigger, settrigger}) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-body">
        <button className="closebtn" onClick={() => settrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className='update_usercircle'>
            <div className='update_usercircle_box'>
              <form >
              <h5>UPDATE USER CIRCLE</h5>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Update User Circle Name'
                    defaultValue="Circle 01"
                    size='60'
                    maxLength='100'
                  />
        <div className="usercircle_type_box">
            <select name="" id="">
              <option value="">Private</option>
              <option value="">Public</option>
            </select>
            <div className="usercircle_type_box__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
                <input type='submit' value='UPDATE CIRCLE'></input>
              </form>
            </div>
          </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UserCircleUpdatePopup;