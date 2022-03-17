//------ User Profile  ------
import React from "react";
import "./UserProfile.scss";
import profilePic from "../../assets/images/other/profilePicture.jpg";

function UserProfile() {
  return (
    <div className="profile__page">
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
                  <input type="text" name="firstName" placeholder="Janice" />
                </label>
              </div>
              <div className="last__name">
                <label>
                  Last name
                  <input type="text" name="lastName" placeholder="Brownwell" />
                </label>
              </div>
            </div>
            <div className="user__name">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="janicebrownwell@gmail.com"
              />
            </div>
            <div className="profile__bio">
              <label>Bio</label>
              <textarea>Bio</textarea>
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

export default UserProfile;
