import React from 'react';
import './UserCirclesCreate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faAngleDown,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const UserCirclesCreate = () => {
  return (
    <div className="usercircles_create">
      <div className="usercircles_create_container">
        {/* <div className="usercircles_create_header">
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
        </button> */}
        <div className='create_usercircle'>
            <div className='create_usercircle_box'>
              <form >
              <h5>CREATE A USER CIRCLE</h5>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Add User Circle Name'
                    defaultValue=""
                    size='60'
                    maxLength='100'
                  />
        <div className="usercircle_type_box">
            <select name="" id="">
              <option value="">Public</option>
              <option value="">Private</option>
            </select>
            <div className="usercircle_type_box__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
                <input type='submit' value='CREATE CIRCLE'></input>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
}

export default UserCirclesCreate;
