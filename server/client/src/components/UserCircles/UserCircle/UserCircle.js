import React, { useState, useEffect } from 'react';
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
import { getCircle, getUsers} from '../../../services/AuthService';

function UserCircle() {
  const [btnpopup, setbtnpopup] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { usercircleId } = useParams();
  const [usercircle, setUserCircle] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUserCircle();
    GetUsers();
    console.log(usercircle.members)
  }, []);
  useEffect(() => {
    loadUserCircle();
  }, [btnpopup,refresh]);

  //load folder by id
  const loadUserCircle = async () => {
    try {
      console.log(usercircleId);
      const response = await getCircle(usercircleId);
      console.log(response.data.data);
      setUserCircle(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  //get Users
  //Get Users
  const GetUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data.data);
      setUsers(response.data.data);
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
          usercircle={usercircle}
        />
        <FontAwesomeIcon className="user_gear_icon" icon={faUsersGear} />
      </div>
      <div className="usercircles_header_container">
        <div className="circle_type">
          <p1>Type: </p1>
          <p2>{usercircle.isPublic ? 'public' : 'private'}</p2>
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
          <UserCircleSearch page="crestera" ID={usercircleId}  search={search}
          setSearch={setSearch}/>
        </div>
      </div>
      <div className="User_Circles_List">
        <div className="usercircle__header">
          <UserCircleHeader
            title1="Username"
            title2="Type"
          />
        </div>
        <div className="usercircle__items">
          <UserCircleItem
            usercircleMembers={usercircle.members}
            usercircleId={usercircle._id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </div>
      </div>
    </div>
  );
}

export default UserCircle;
