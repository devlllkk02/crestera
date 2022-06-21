//------ User Profile Edit Page ------
import React, {useEffect, useState} from "react";
import "./UserEdit.scss";
import { useContext } from "react";

import { UserContext } from "../../App";
import { Link } from "react-router-dom";

import profilepic from "../../assets/images/other/profilePicture.jpg"
import { getUser } from "../../services/AuthService";



const UserEdit = () => {
  
  const { state, dispatch } = useContext(UserContext);
  const[user, setUser] = useState();


  return (
    <div className="edit_page">
      <div className="profile__container">
        <div className="profile__pic">
          <img src={`${state?.image}`} alt=""/>
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
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
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
                    placeholder="Last Name"
                    id="lastName"
                    defaultValue={`${state?.lastName}`}
                  />
                </label>
              </div>
            </div>
            <div className="user__email">
              <label>Email</label>
              <input
                type="text"
                name="userName"
                defaultValue={`${state?.email}`}
                placeholder="Email"
              />
            </div>
            <div className="buttons">
              <Link to="/profile">
              <button className="cancel">CANCEL</button>
              </Link>

              <button className="save" type="submit">
                SAVE
              </button>
            </div>
            <br></br>
           
            <div className="password__heading">
          <p1>CHANGE PASSWORD</p1>
          <hr />
        </div>
              <div className="current_password">
                <label>
                  Current Password
                  <input
                    type="text"
                    name="current_password"
                    placeholder="Current Password"
                  />
                </label>
              </div>
              <div className="new_password">
                <label>
                  New Password
                  <br></br>
                  <input
                    type="text"
                    name="new_password"
                    placeholder="New Password"
                  />
                </label>
              </div>
              <div className="confirm_password">
                <label>
                  Confirm Password
                  <input
                    type="text"
                    name="confirm_password"
                    placeholder="Confirm Password"
                  />
                </label>
            </div>
            <div className="buttons">
              {/* <button className="cancel">CANCEL</button> */}

              <button className="save" type="submit">
                CHANGE PASSWORD
              </button>
            </div>
            
          </form>
        </div>

        {/* <div className="profile__heading">
          <p1>DELETE ACCOUNT</p1>
          <hr />
          <p2>
            If you wish to delete your account, please enter your email address
            to confirm your decision.
            <br />
            Please note that this action is irreversible.
          </p2>
          <input type="email" name="email" placeholder="Email" />
          <button className="delete" type="submit">
            DELETE
          </button>
        </div> */}
      </div>
    </div>
  );

};

export default UserEdit;