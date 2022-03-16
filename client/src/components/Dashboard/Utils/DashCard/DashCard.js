// ------ DashCard  ------
import React from "react";
import "./DashCard.scss";

//Images
import CresteraBoardIcon from "../../../../assets/images/cresteraIconsV1/cresteraIconsV1-Board.png";
import CresteraNoteIcon from "../../../../assets/images/cresteraIconsV1/cresteraIconsV1-Note.png";

function DashCard() {
  return (
    <div className="dashCard">
      <div className="dashCard__container">
        <div className="dashCard__image">
          <img src="" alt="" />
        </div>
        <div className="dashCard__icon">
          <img src={CresteraBoardIcon} alt="" />
        </div>
        <div className="dashCard__name">
          <p>Note 01</p>
        </div>
        <div className="dashCard__username">
          <p>Naveen Liyanage</p>
        </div>
      </div>
    </div>
  );
}

export default DashCard;
