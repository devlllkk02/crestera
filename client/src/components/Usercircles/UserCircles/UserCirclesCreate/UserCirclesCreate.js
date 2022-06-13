import React, { useContext } from 'react';
import './UserCirclesCreate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faAngleDown,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import { newCircle ,addMember} from '../../../../services/AuthService';
import { UserContext } from '../../../../App';
import { useNavigate } from 'react-router-dom';

const UserCirclesCreate = () => {
  let navigate = useNavigate();
  const currentDate = new Date();
  const { state, dispatch } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newCircle({
        addedBy: state._id,
        name: e.target.title.value,
        addedOn: currentDate,
        isPublic: e.target.isPublic.value,
      });
      try {
        const response1 = await addMember({
          id: response.data.data._id,
          member: state._id,
          isAdmin: true,
          isPending: false,
        });
        console.log(response1);
      } catch (e) {
        console.log(e);
      }
      navigate('/usercircles');
    } catch (e) {
      console.log(e);
    }
  };

  

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
        <div className="create_usercircle">
          <div className="create_usercircle_box">
            <form onSubmit={handleSubmit}>
              <h5>CREATE A USER CIRCLE</h5>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Add User Circle Name"
                defaultValue=""
                size="60"
                maxLength="100"
              />
              <div className="usercircle_type_box">
                <select name="isPublic" id="isPublic">
                  <option value="true">Public</option>
                  <option value="false">Private</option>
                </select>
                <div className="usercircle_type_box__icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <input type="submit" value="CREATE CIRCLE"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCirclesCreate;
