import React from "react";
import "./NoteBar.scss";

//Imports
import profilePic from "../../../assets/images/other/profilePicture.jpg";

//Pacakages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function NoteBar({ fileName }) {
  return (
    <div className="noteBar">
      <div className="noteBar__container">
        <div className="noteBar__fileName">
          <p>{fileName}</p>
        </div>
        <div className="noteBar__users">
          <div className="noteBar__users__online">
            <div className="noteBar__user">
              <img src={profilePic} alt="" />
            </div>
            <div className="noteBar__user">
              <img src={profilePic} alt="" />
            </div>
            <div className="noteBar__user">
              <img src={profilePic} alt="" />
            </div>
          </div>
          <div className="noteBar__defaultUser">
            <div>
              <p>10</p>
            </div>
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
