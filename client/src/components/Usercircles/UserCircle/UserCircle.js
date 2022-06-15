import React, { useState, useEffect  } from 'react';
// import '@fontsource/roboto';
import './UserCircle.scss';
import UserCircleUpdatePopup from './UserCircleUpdatePopup/UserCircleUpdatePopup';
// import VaultDetailsPopup from '../../Vault/VaultDetailsPopup/VaultDetailsPopup';
// import VaultRenamePopup from '../../Vault/VaultRenamePopup/VaultRenamePopup';
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

import UserCircleSearch from './Utils/UserCircleSearch/UserCircleSearch';
import UserCircleHeader from './Utils/UserCircleHeader/UserCircleHeader';
import UserCircleItem from './Utils/UserCircleItem/UserCircleItem';

import { useParams } from 'react-router';
import { getCircle } from '../../../services/AuthService'


function UserCircle() {
  const [btnpopup, setbtnpopup] = useState(false);
  const { usercircleId } = useParams();
  const [usercircle, setUserCircle] = useState([]);

  useEffect(() => {
    loadUserCircle();
  }, []);
  useEffect(() => {
    loadUserCircle();
  }, [btnpopup]);

//load folder by id
  const loadUserCircle = async () => {
    try {
      console.log(usercircleId)
      const response = await getCircle(usercircleId);
      console.log(response.data.data);
      setUserCircle(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  

  return (
    <div className="usercircle">
      <div className="usercircle_header">
        <p>{usercircle.name}</p>
        <button className="btnEdit">
          <FontAwesomeIcon
            className="user_circle_edit_icon"
            icon={faPen}
            onClick={() => setbtnpopup(true)}
          />
        </button>
        <UserCircleUpdatePopup
          trigger={btnpopup}
          settrigger={setbtnpopup}
          usercircle={usercircle}/>
        <FontAwesomeIcon className="user_gear_icon" icon={faUsersGear} />
      </div>
      <div className="usercircles_header_container">
        <div className="circle_type">
          <p1>Type: </p1>
          <p2>{usercircle.isPublic ? 'public':'private'}</p2>
        </div>
        {/* <div className="usercircles_search_box">
          <div className="usercircles_search_form">
            <form>
              <input type="text" name="search" placeholder="Add User"></input>
            </form>
          </div>
          <div className="search_icon">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
        </div> */}
        <div className="usercircle__search">
          <UserCircleSearch page="crestera" />
        </div>
        {/* <div className="usercircles_filter_box">
          <div className="usercircles_filter_dropdown">
            <select>
              <option value="0">Search User</option>

              <NavLink to="/SignIn">
                <option value="1">Public Circles</option>
              </NavLink>
              <option value="2">Private Circles</option>
            </select>
          </div>
          <div className="dropdown_icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div> */}
      </div>
      <div className="User_Circles_List">
        <div className="usercircle__header">
          <UserCircleHeader
            title1="Username"
            title2="Type"
            title3="Modified Date"
          />
        </div>
        <div className="usercircle__items">
          <UserCircleItem
            fileIcon="note"
            fileName="Naveen Liyanage"
            image={true}
            owner={true}
            shared={false}
            title1="Owner"
            title2="Jan 12, 2022"
          />
          <UserCircleItem
            fileIcon="board"
            fileName="Heshani Wickramarachchi"
            shared={false}
            image={true}
            icon={true}
            title1="Member"
            title2="Jan 10, 2022"
          />
          <UserCircleItem
            fileIcon="note"
            fileName="Uththara Dushani"
            shared={false}
            image={true}
            icon={true}
            title1="Member"
            title2="Jan 08, 2022"
          />
          <UserCircleItem
            fileIcon="note"
            fileName="Vidith Welihinda"
            shared={false}
            image={true}
            icon={true}
            title1="Member"
            title2="Jan 07, 2022"
          />

          <UserCircleItem
            fileIcon="board"
            fileName="Naveen Liyanage"
            shared={false}
            image={true}
            icon={true}
            title1="Member"
            title2="Jan 07, 2022"
          />
          <UserCircleItem
            fileIcon="note"
            fileName="Naveen Liyanage"
            icon={true}
            image={true}
            title1="Member"
            title2="Jan 05, 2022"
          />
          <UserCircleItem
            fileIcon="note"
            fileName="Naveen Liyanage"
            icon={true}
            image={true}
            title1="Member"
            title2="Jan 17, 2022"
          />
        </div>
      </div>
    </div>
  );
}

export default UserCircle;
