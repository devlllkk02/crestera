//------ User Profile Page ------
import React, { useState, useContext } from 'react';

import "./otherProfile.scss";

//images

//packages
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const UserProfile = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);


  return (
    <div className="profile__page">
      <div className="profile__container">
        <div className="profile__pic">
        <img src={state?.image} alt="" />
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
