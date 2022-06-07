// ------ usercirclesItem  ------
import React from 'react';
import './UserCirclesItem.scss';

//Images
import cresteraIconsV2Board from '../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png';
import cresteraIconsV2Note from '../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png';

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

function usercirclesItem({ fileIcon, fileName, title1, title2, shared }) {
  return (
    <div className="usercirclesItem">
      <div className="usercirclesItem__fileIcon"></div>
      <div className="usercirclesItem__fileName">
        <p>{fileName}</p>
      </div>
      <div className="usercirclesItem__middleIcon">
        <div className="usercirclesItem__middleIcon__container">
          {shared && <FontAwesomeIcon icon={faUserFriends} />}
        </div>
      </div>
      <div className="usercirclesItem__title1">
        <p>{title1}</p>
      </div>
      <div className="usercirclesItem__title2">
        <p>{title2}</p>
      </div>
      <div className="usercirclesItem__setings">
        <div className="usercirclesItem__setings__container">
          <p>10</p>
        </div>
      </div>
    </div>
  );
}

export default usercirclesItem;
