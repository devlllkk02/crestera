//------ User Profile Page ------
import React, { useState, useEffect } from "react";
import "./otherProfile.scss";
import { useParams } from "react-router-dom";
import { getUser } from "../../../services/AuthService";

const OtherProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  const GetUser = async () => {
    try {
      const response = await getUser(userId);
      console.log(response.data.data);
      setUser(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GetUser();
  });
  useEffect(() => {
    GetUser();
  }, [userId]);

  return (
    <div className="profile__page">
      <div className="profile__container">
        <div className="profile__pic">
          {/* <img src={user.image} alt="" /> */}
        </div>
        <div className="profile__heading">
          <p>PUBLIC PROFILE</p>
          <hr />
        </div>
        <div className="profile__details">
          <div className="profile__name">
            <div className="container">
              <h3>FIRST NAME</h3>
              <p2>{user.firstName}</p2>
              <hr />
            </div>
            <div className="container">
              <h3>LAST NAME</h3>
              <p2>{user.lastName}</p2>
              <hr />
            </div>
          </div>
          <div className="container">
            <h3>EMAIL</h3>
            <p2>{user.email}</p2>
            <hr />
          </div>
          <div className="bio">
            <div className="container">
              <h3>BIO</h3>
              <p2>{user.bio}</p2>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
