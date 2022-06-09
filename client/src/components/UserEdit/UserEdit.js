//------ User Profile Edit Page ------
import React, { useState, useContext } from 'react';
import "./UserEdit.scss";
import profilePic from "../../assets/images/other/profilePicture.jpg";

import { UserContext } from '../../App';



const UserEdit = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  return (
    <div className="edit_page">
      <div className="profile__container">
        <div className="profile__pic">
          <img src={profilePic} />
        </div>
        <div className="profile__heading">
          <p1>PUBLIC PROFILE</p1>
          <hr />
        </div>
        <div className="profile__form">
          <form>
            <div className="profile__name">
              <div className="first__name">
                <label>
                  First Name
                  <input type="text" name="firstName" placeholder={`${state?.firstName}`} />
                </label>
              </div>
              <div className="last__name">
                <label>
                  Last name
                  <input type="text" name="lastName" placeholder={`${state?.lastName}`} />
                </label>
              </div>
            </div>
            <div className="user__name">
              <label>Email</label>
              <input
                type="text"
                name="userName"
                placeholder={`${state?.email}`}
              />
            </div>
            <div className="profile__bio">
              <label>Bio</label>
              <textarea>{`${state?.bio}`}</textarea>
            </div>
            <div className="container">
            <div className="profile__dob">
              <label>Date Of Birth</label>
              <input type="date"/>
            </div>
            <div className="profile__gender">
              <label>Gender</label>
              <br></br>
              <select>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            </div>
          </form>
        </div>
        <div className="buttons">
          <button className="cancel">CANCEL</button>

          <button className="save">SAVE</button>
        </div>

        <div className="profile__heading">
          <p1>DELETE ACCOUNT</p1>
          <hr />
          <p2>
            If you wish to delete your account, please enter your email address
            to confirm your decision.
            <br />
            Please note that this acction is irreversible.
          </p2>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <button className="delete">DELETE</button>
      </div>
    </div>
  );
}

export default UserEdit;
