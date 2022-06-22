// ------ usercirclesItem  ------
import React from "react";
import { Link } from "react-router-dom";
import "./UserCirclesItem.scss";

//Images
import cresteraIconsV2Board from "../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png";
import cresteraIconsV2Note from "../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png";
import usergroupicon from "../../../../../assets/images/Icons/user group.png";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

function usercirclesItem(props) {
  return (
    <div className="usercirclesItem">
      <div className="usercirclesItem__fileIcon">
        <img src={usergroupicon} />
      </div>
      <div className="usercirclesItem__fileName">
        <Link
          to={`/usercircle/${props.usercircle._id}`}
          style={{ textDecoration: "none" }}
        >
          <p>{props.usercircle.name}</p>
        </Link>
      </div>
      <div className="usercirclesItem__middleIcon">
        <div className="usercirclesItem__middleIcon__container">
          {/* {shared && <FontAwesomeIcon icon={faUserFriends} />} */}
        </div>
      </div>
      <div className="usercirclesItem__title1">
        <p>{props.usercircle.isPublic ? "public" : "private"}</p>
      </div>
      <div className="usercirclesItem__title2">
        <p>{`${props.usercircle.addedBy?.firstName} ${props.usercircle.addedBy?.lastName} `}</p>
      </div>
      <div className="usercirclesItem__setings">
        <div className="usercirclesItem__setings__container">
          <p>{props.usercircle.members.length}</p>
        </div>
      </div>
    </div>
  );
}

export default usercirclesItem;
