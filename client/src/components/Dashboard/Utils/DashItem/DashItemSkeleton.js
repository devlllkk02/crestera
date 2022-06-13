// ------ DashItemSkeleton  ------
import React from "react";
import "./DashItem.scss";

//Images
import cresteraIconsV2Board from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png";
import cresteraIconsV2Note from "../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png";

//Pacakages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DashItemSkeleton({ fileIcon, fileName, title1, title2, shared }) {
  return (
    <div className="dashItem">
      <div className="dashItem__fileIcon">
        <Skeleton height={20}  width={20}/>
      </div>
      <div className="dashItem__fileName">
        <Skeleton width={100} height={20} />
      </div>
      <div className="dashItem__middleIcon">
        <div className="dashItem__middleIcon__container">
        <Skeleton height={20}  width={20}/>
        </div>
      </div>
      <div className="dashItem__title1">
        <Skeleton width={100} height={20} />
      </div>
      <div className="dashItem__title2">
        <Skeleton width={100} height={20} />
      </div>
      <div className="dashItem__setings">
        <div className="dashItem__setings__container"></div>
      </div>
    </div>
  );
}

export default DashItemSkeleton;
