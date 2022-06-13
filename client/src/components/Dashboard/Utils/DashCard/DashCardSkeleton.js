// ------ DashCard Skeleton  ------
import React from "react";
import "./DashCard.scss";

//Pacakages
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//Images
import CresteraBoardIcon from "../../../../assets/images/cresteraIconsV1/cresteraIconsV1-Board.png";
import CresteraNoteIcon from "../../../../assets/images/cresteraIconsV1/cresteraIconsV1-Note.png";

function DashCardSkeleton({ fileType, fileName, username }) {
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
          <Skeleton height={180} width={180} />
        </div>
        <div className="dashCard__icon"></div>
        <div className="dashCard__name">
          <Skeleton width={70} height={14} />
        </div>
        <div className="dashCard__username">
          <Skeleton width={100} height={14} />
        </div>
      </div>
    </div>
  );
}

export default DashCardSkeleton;
