//------ User Profile Edit Page ------
import React, { useState, useContext } from "react";
import "./UserEdit.scss";
import profilePic from "../../assets/images/other/profilePicture.jpg";
import { updateuser } from "../../services/AuthService";

import { UserContext } from "../../App";

const UserEdit = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateuser({
        id: state._id,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        bio: e.target.bio.value,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="edit_page">
      <div className="profile__container">
        <div className="profile__pic">
        <img src={state?.image} alt="" />
        </div>
        <div className="profile__heading">
          <p1>PUBLIC PROFILE</p1>
          <hr />
        </div>
        <div className="profile__form">
          <form onSubmit={handleSubmit}>
            <div className="profile__name">
              <div className="first__name">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    id="firstName"
                    defaultValue={`${state?.firstName}`}
                  />
                </label>
              </div>
              <div className="last__name">
                <label>
                  Last name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="lastName"
                    id="lastName"
                    defaultValue={`${state?.lastName}`}
                  />
                </label>
              </div>
            </div>
            <div className="user__name">
              <label>Email</label>
              <input
                type="text"
                name="userName"
                defaultValue={`${state?.email}`}
                placeholder="email"
              />
            </div>
            <div className="profile__bio">
              <label>Bio</label>
              <textarea
                defaultValue={`${state?.bio}`}
                type="text"
                placeholder="Bio"
                name="bio"
                id="bio"
              />
            </div>
            <div className="container">
              <div className="profile__dob">
                <label>Date Of Birth</label>
                <input type="date" />
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
            <div className="buttons">
              <button className="cancel">CANCEL</button>

              <button className="save" type="submit">
                SAVE
              </button>
            </div>
          </form>
        </div>

        <div className="profile__heading">
          <p1>DELETE ACCOUNT</p1>
          <hr />
          <p2>
            If you wish to delete your account, please enter your email address
            to confirm your decision.
            <br />
            Please note that this action is irreversible.
          </p2>
          <input type="email" name="email" placeholder="Email" />
          <button className="delete" type="submit">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
