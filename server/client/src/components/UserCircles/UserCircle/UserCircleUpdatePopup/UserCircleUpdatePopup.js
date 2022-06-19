import { faX } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

import './UserCircleUpdatePopup.scss';

//Auth Service
import { updateCircle } from '../../../../services/AuthService';

const UserCircleUpdatePopup = ({ trigger, settrigger, usercircle}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await updateCircle({
        _id: usercircle._id,
        name: e.target.title.value,
        isPublic : e.target.isPublic.value,
      });
      settrigger(false);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return trigger ? (
    <div className="popup">
      <div className="popup-body">
        <button className="closebtn" onClick={() => settrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className='update_usercircle'>
            <div className='update_usercircle_box'>
              <form onSubmit={handleSubmit}>
              <h5>UPDATE USER CIRCLE</h5>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Update User Circle Name'
                    defaultValue={usercircle.name}
                    size='60'
                    maxLength='100'
                  />
        <div className="usercircle_type_box">
            <select name="isPublic" id="isPublic" defaultValue={usercircle.isPublic}>
              <option value="false">Private</option>
              <option value="true">Public</option>
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