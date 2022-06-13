import React, { useState, useEffect } from "react";
import "./NoteBar.scss";

//Imports
import profilePic from "../../../assets/images/other/profilePicture.jpg";

//Pacakages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function NoteBar({ fileName, onlineUsers }) {
  return (
    <div className="noteBar">
      <div className="noteBar__container">
        <div className="noteBar__fileName">
          <p>{fileName}</p>
        </div>
        <div className="noteBar__users">
          <div className="noteBar__users__online">
            {onlineUsers &&
              onlineUsers.slice(0, 3).map((user, key) => {
                return (
                  <div className="noteBar__user" key={key}>
                    <img src={user.user.image} alt="" />
                  </div>
                );
              })}
          </div>
          <div className="noteBar__defaultUsers">
            {onlineUsers &&
              onlineUsers.slice(0, 3).map((user, key) => {
                console.log(user);
                return (
                  <div className="noteBar__defaultUser" key={key}>
                    <p>{onlineUsers.length}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="noteBar__share">
          <button>SHARE</button>
        </div>
        <div className="noteBar__settings">
          <div className="noteBar__settings__icon">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteBar;
