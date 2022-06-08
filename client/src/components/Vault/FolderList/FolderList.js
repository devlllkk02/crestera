import React from 'react';
import { getDateTime } from '../../../helpers/TimeHelper';
import VaultPopover from "../VaultPopover/VaultPopover";

//Images
import foldericon from '../../../assets/images/Vault icons/FolderIcon.png'

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsisVertical,faUserFriends,} from "@fortawesome/free-solid-svg-icons";

function FolderList(props) {
  return (
    <div>
         <div className="dashItem">
            <div className="dashItem__fileIcon">
              <img
                src={foldericon}
                alt=""
              />
            </div>
            <div className="dashItem__fileName">
              <p>{props.folder.name}</p>
            </div>
            <div className="dashItem__middleIcon">
              <div className="dashItem__middleIcon__container">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
            </div>
            <div className="dashItem__title1">
              <p>{props.folder.size}MB</p>
            </div>
            <div className="dashItem__title2">
              <p>{getDateTime(props.folder.addedOn)}</p>
            </div>
            <div className="dashItem__setings">
              <div className="dashItem__setings__container">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </div>
          </div>
    </div>
  )
}


export default FolderList
