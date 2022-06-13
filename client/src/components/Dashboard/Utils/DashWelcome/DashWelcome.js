// ------ Dashwelcome  ------
import React, { useEffect } from "react";
import "./DashWelcome.scss";

//Images
import cresteraIconsV2Board from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png";
import cresteraIconsV2Note from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png";
function DashWelcome() {
  return (
    <div className="dashWelcome">
      <div className="dashWelcome__title">
        <p>Welcome to Crestera!</p>
      </div>
      <div className="dashWelcome__text">
        <p>Start Creating Files To Get Recommendations</p>
      </div>
      <div className="dashWelcome__images">
        <img src={cresteraIconsV2Note} alt="" />
        <img src={cresteraIconsV2Board} alt="" />
      </div>
    </div>
  );
}

export default DashWelcome;
