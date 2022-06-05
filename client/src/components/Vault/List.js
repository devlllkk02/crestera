import React, { useEffect, useState } from "react";
import './List.scss';
import { getDateTime } from '../../helpers/TimeHelper';

//Images
import fileicon from '../../assets/images/Vault icons/FileIcon.png'
import foldericon from '../../assets/images/Vault icons/FolderIcon.png'
//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const List = ({ currentFolder }) => {

  const [folder, setFolder] = useState(currentFolder);
  useEffect(() => setFolder(currentFolder), [currentFolder]);

  //Folder
  const [folders, setFolders] = useState(Array(5).fill(0).map(e => ({
    name: 'Folder',
    addedOn: Date.now() - Math.floor(Math.random() * 1000000000),
    size: Math.floor(Math.random() * 1000)
  })));

  //File
  const [files, setFiles] = useState(Array(4).fill(0).map(e => ({
    name: 'File',
    addedOn: Date.now() - Math.floor(Math.random() * 1000000000),
    size: Math.floor(Math.random() * 1000)
  })));



  return (
    <div className="box">

      {/* Header */}
      <div className="dashHeader">
        <div className="dashHeader__fileIcon"></div>
        <div className="dashHeader__title1">
          <p>Name</p>
        </div>
        <div className="dashHeader__middleIcon"></div>
        <div className="dashHeader__title2">
          <p>Size</p>
        </div>
        <div className="dashHeader__title3">
          <p>Date Modified</p>
        </div>
        <div className="dashHeader__setings"></div>
      </div>

      {/* Folder list */}
      {
        folders.map((folder) =>
          <div className="dashItem">
            <div className="dashItem__fileIcon">
              <img
                src={foldericon}
                alt=""
              />
            </div>
            <div className="dashItem__fileName">
              <p>{folder.name}</p>
            </div>
            <div className="dashItem__middleIcon">
              <div className="dashItem__middleIcon__container">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
            </div>
            <div className="dashItem__title1">
              <p>{folder.size}MB</p>
            </div>
            <div className="dashItem__title2">
              <p>{getDateTime(folder.addedOn)}</p>
            </div>
            <div className="dashItem__setings">
              <div className="dashItem__setings__container">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </div>
          </div>
        )
      }

      {/* File list */}
      {
        files.map((file) =>
          <div className="dashItem">
            <div className="dashItem__fileIcon">
              <img
                src={fileicon}
                alt=""
              />
            </div>
            <div className="dashItem__fileName">
              <p>{file.name}</p>
            </div>
            <div className="dashItem__middleIcon">
              <div className="dashItem__middleIcon__container">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
            </div>
            <div className="dashItem__title1">
              <p>{file.size}MB</p>
            </div>
            <div className="dashItem__title2">
              <p>{getDateTime(file.addedOn)}</p>
            </div>
            <div className="dashItem__setings">
              <div className="dashItem__setings__container">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default List;