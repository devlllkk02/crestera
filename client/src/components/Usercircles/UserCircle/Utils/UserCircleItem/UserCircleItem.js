// ------ usercircleItem  ------
import React from 'react';
import './UserCircleItem.scss';

//Images
import cresteraIconsV2Board from '../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png';
import cresteraIconsV2Note from '../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png';
import profilePic from '../../../../../assets/images/other/profilePicture.jpg';

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faUserFriends,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';

function usercircleItem({ fileIcon, fileName, title1, title2, shared, owner }) {
  return (
    <div className="usercircleItem">
      <div className="usercircleItem__fileIcon">
        <img src={profilePic} alt="" />
      </div>
      <div className="usercircleItem__fileName">
        <p>{fileName}</p>
      </div>
      <div className="usercircleItem__middleIcon">
        <div className="usercircleItem__middleIcon__container">
          {shared && <FontAwesomeIcon icon={faUserFriends} />}
        </div>
      </div>
      <div className="usercircleItem__title1">
        <p>{title1}</p>
        {owner && <FontAwesomeIcon className="user_owner" icon={faCrown} />}
      </div>
      <div className="usercircleItem__title2">
        <p>{title2}</p>
      </div>
      <div className="usercircleItem__setings">
        <div className="usercircleItem__setings__container">
          <button className="usercircle_remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default usercircleItem;
