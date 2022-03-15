// ------ DashCard  ------
import React from "react";
import "./DashCard.scss";

function DashCard() {
  return (
    <div className="dashCard">
      <div className="dashCard__container">
        <div className="dashCard__image"></div>
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
