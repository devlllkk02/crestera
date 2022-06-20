import React, { useState, useEffect } from "react";
import "./Taskbar.scss";

//Imports
import profilePic from "../../../assets/images/other/profilePicture.jpg";

//Pacakages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Taskbar({ fileName, onlineUsers }) {
  return (
    <div className="taskbar">
      <div className="taskbar__container">
        <div className="taskbar__fileName">
          <p>{fileName}</p>
        </div>
        <div className="taskbar__users">
          <div className="taskbar__users__online">
            {onlineUsers &&
              onlineUsers.slice(0, 3).map((user, key) => {
                return (
                  <div className="taskbar__user" key={key}>
                    <img src={user.user.image} alt="" />
                  </div>
                );
              })}
          </div>
          <div className="taskbar__defaultUsers">
            {onlineUsers &&
              onlineUsers.slice(0, 3).map((user, key) => {
                // console.log(user);
                return (
                  <div className="taskbar__defaultUser" key={key}>
                    <p>{onlineUsers.length}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="taskbar__share">
        <Link to="/share">
        <button>SHARE</button>
          </Link>
        </div>
        <div className="taskbar__settings">
          <div className="taskbar__settings__icon">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskbar;
