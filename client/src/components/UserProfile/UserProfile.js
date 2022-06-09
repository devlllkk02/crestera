//------ User Profile Page ------
import React, { useState, useContext } from 'react';

import "./UserProfile.scss";
//import {useGlobalUser} from '../../contexts/UserContext.js'

//images
import profilePic from "../../assets/images/other/profilePicture.jpg";

//packages
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const UserProfile = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="profile__page">
      <div className="profile__container">
        <div className="profile__pic">
          <img src={profilePic} />
        </div>
        <div className="profile__heading">
          <p>PUBLIC PROFILE</p>
          <hr />
        </div>
        <div className="profile__details">
          <div className="profile__name">
            <div className="container">
              <h3>FIRST NAME</h3>
              <p2>{`${state?.firstName}`}</p2>
              <hr />
            </div>
            <div className="container">
              <h3>LAST NAME</h3>
              <p2>{`${state?.lastName}`}</p2>
              <hr />
            </div>
          </div>
          <div className="container">
            <h3>EMAIL</h3>
            <p2>{`${state?.email}`}</p2>
            <hr />
          </div>
          <div className="bio">
            <div className="container">
              <h3>BIO</h3>
              <p2>{`${state?.bio}`}
              </p2>
              <hr />
            </div>
          </div>
          <div className="container">
            <h3>DOB</h3>
            <p2>{`${state?.dob}`}</p2>
            <hr />
          </div>
          <div className="container">
            <h3>GENDER</h3>
            <p2>{`${state?.gender}`}</p2>
            <hr />
          </div>
        </div>
        <div className="buttons">
          <Link to="/edit">
          <button className="edit">EDIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
