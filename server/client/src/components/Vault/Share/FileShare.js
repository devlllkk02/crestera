import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import '@fontsource/roboto';
import './Share.scss';

import { getDateTime } from '../../../helpers/TimeHelper';
import { formatBytes } from '../../../helpers/SizeHelper';
import { getFile } from '../../../services/AuthService';

//Images
import fileicon from '../../../assets/images/Vault icons/FileIcon.png';
import foldericon from '../../../assets/images/Vault icons/FolderIcon.png';
import profilePic from '../../../assets/images/other/profilePicture.jpg'

//Font Awesome
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import VaultSharePopup from '../VaultSharePopup/VaultSharePopup';

function FileShare() {
  const { fileId } = useParams();
  const [btnpopup, setbtnpopup] = useState(false);
  const [file, setFile] = useState([]);

  useEffect(() => {
    loadFile();
  },[]);



  const loadFile = async () => {
    try {
     // console.log(fileId);
      const response = await getFile(fileId);
      console.log(response.data.data);
      setFile(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText("http://localhost:3000/downloadpage/"+`${file._id}`);
    alert('Text copied');
  }

  // const inputHandler = event => {
  //   setText(event.target.value);
  // }
  

  return (
    <div className="vaultshare">
      <div className="vaultshare_header">
        <p>SHARE</p>
      </div>
      <div className="vaultshare_details">
        <div className="vaultshare__folderIcon">
          <img src={fileicon} alt="" />
        </div>
        <div className="vaultshare_details_list">
          <div className="vaultshare_details_name">
            <p1>Name :</p1>&nbsp;
            <p2>{file.name}</p2>
          </div>
          <div className="vaultshare_details_type">
            <p1>Type :</p1>&nbsp;
            <p2>{file.format}</p2>
          </div>
          <div className="vaultshare_details_size">
            <p1>Size:</p1>&nbsp;
            <p2>{formatBytes(file.size)}</p2>
          </div>
          <div className="vaultshare_details_datemodified">
            <p1>Date Modified :</p1>&nbsp;
            <p2>{file && getDateTime(file.addedOn)}</p2>
          </div>
        </div>
      </div>
      <div className="vaultshare_link">
        <div className="vaultshare_link_header">
          <p>GET LINK</p>
        </div>
        <div className="vaultshare_link_body">
          <div className="vaultshare__linkbox">
            <input
              placeholder="http://localhost:3000/downloadpage/62ae02ae41abdbd4c311ca4f"
              type="text" disabled
            />
          </div>
          <button className="vaultshare_link_button" onClick={copy} >
            <span>COPY LINK</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FileShare;
