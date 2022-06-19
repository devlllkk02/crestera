// ------ DashCard  ------
import React from "react";
import "./DashCard.scss";

//Images
import CresteraBoardIcon from "../../../../assets/images/cresteraIconsV1/cresteraIconsV1-Board.png";
import CresteraNoteIcon from "../../../../assets/images/cresteraIconsV1/cresteraIconsV1-Note.png";

//Pacakages
import { Link } from "react-router-dom";

function DashCard({ _id, fileType, fileName, username }) {
  const setFileIcon = () => {
    if (fileType === "board") {
      return CresteraBoardIcon;
    } else if (fileType === "note") {
      return CresteraNoteIcon;
    }
  };

  return (
    <div className="dashCard">
      <div className="dashCard__container">
        <div className="dashCard__image">
          <img src={setFileIcon()} alt="" />
        </div>
        <div className="dashCard__icon">
          <img src={setFileIcon()} alt="" />
        </div>
        <div className="dashCard__name">
          <Link
            to={`/${fileType}/${_id}`}
            style={{ textDecorationLine: "none" }}
          >
            <p>{fileName}</p>
          </Link>
        </div>
        <div className="dashCard__username">
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
}

export default DashCard;
