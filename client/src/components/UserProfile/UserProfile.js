//------ User Profile Page ------
import React from "react";
import "./UserProfile.scss";

//images
import profilePic from "../../assets/images/other/profilePicture.jpg";

//packages
import { Link } from "react-router-dom";

function UserProfile() {
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
              <p2>Janice</p2>
              <hr />
            </div>
            <div className="container">
              <h3>LAST NAME</h3>
              <p2>Brownwell</p2>
              <hr />
            </div>
          </div>
          <div className="container">
            <h3>EMAIL</h3>
            <p2>janicebrownwell@gmail.com</p2>
            <hr />
          </div>
          <div className="bio">
            <div className="container">
              <h3>BIO</h3>
              <p2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p2>
              <hr />
            </div>
          </div>
          <div className="container">
            <h3>DOB</h3>
            <p2>12/07/1997</p2>
            <hr />
          </div>
          <div className="container">
            <h3>GENDER</h3>
            <p2>Female</p2>
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
