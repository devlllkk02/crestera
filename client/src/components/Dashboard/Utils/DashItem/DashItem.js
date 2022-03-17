// ------ DashItem  ------
import React from "react";
import "./DashItem.scss";

//Images
import cresteraIconsV2Board from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png";
import cresteraIconsV2Note from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

function DashItem({ fileIcon, fileName, title1, title2, shared }) {
  return (
    <div className="dashItem">
      <div className="dashItem__fileIcon">
        <img
          src={fileIcon == "note" ? cresteraIconsV2Note : cresteraIconsV2Board}
          alt=""
        />
      </div>
      <div className="dashItem__fileName">
        <p>{fileName}</p>
      </div>
      <div className="dashItem__middleIcon">
        <div className="dashItem__middleIcon__container">
          {shared && <FontAwesomeIcon icon={faUserFriends} />}
        </div>
      </div>
      <div className="dashItem__title1">
        <p>{title1}</p>
      </div>
      <div className="dashItem__title2">
        <p>{title2}</p>
      </div>
      <div className="dashItem__setings">
        <div className="dashItem__setings__container">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
}

export default DashItem;
