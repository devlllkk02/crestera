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
    await navigator.clipboard.writeText("http://crestera.herokuapp.com/downloadpage/"+`${file._id}`);
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
          {/* <div className="vaultshare_details_datemodified">
            <p1>Date Modified :</p1>&nbsp;
            <p2>{getDateTime(file.addedOn)}</p2>
          </div> */}
        </div>
      </div>
      <div className="vaultshare_link">
        <div className="vaultshare_link_header">
          <p>GET LINK</p>
        </div>
        <div className="vaultshare_link_body">
          <div className="vaultshare__linkbox">
            <input
              placeholder={"http://crestera.herokuapp.com/downloadpage/"+`${file._id}`}
              type="text" disabled
            />
          </div>
          {/* <div className="vaultshare__linkaccessbox">
            <select name="" id="">
              <option value="">Restricted</option>
              <option value="">Allow</option>
            </select>
            <div className="vaultshare__linkaccessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div> */}
          <button className="vaultshare_link_button" onClick={copy} >
            <span>COPY LINK</span>
          </button>
        </div>
      </div>
      {/* <div className="vaultshare_link_group">
        <div className="vaultshare_link_group_header">
          <p>SHARE WITH PEOPLES & GROUPS</p>
        </div>
        <button className="vaultshare_link_group_button" onClick={() => setbtnpopup(true)}>
          <span>INVITE PEOPLES & GROUPS</span>
        </button>
        <VaultSharePopup
          trigger={btnpopup}
          settrigger={setbtnpopup}
        ></VaultSharePopup>
      </div>
      <div className="vaultshare_list_header">
        <div className="vaultshare_list_header_title1">
          <p>Username</p>
        </div>
        <div className="vaultshare_list_header_title2">
          <p>Permission</p>
        </div>
      </div>
      <div className="vaultshare_list_items">
      <div className="vaultshare_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="vaultshare_list_item__Name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="vaultshare__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="vaultshare__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="vaultshare__list_item__remove__container">
          <button className="vaultshare__list_item__remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="vaultshare_list_items">
      <div className="vaultshare_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="vaultshare_list_item__Name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="vaultshare__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="vaultshare__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="vaultshare__list_item__remove__container">
          <button className="vaultshare__list_item__remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="vaultshare_list_items">
      <div className="vaultshare_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="vaultshare_list_item__Name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="vaultshare__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="vaultshare__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="vaultshare__list_item__remove__container">
          <button className="vaultshare__list_item__remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="vaultshare_list_items">
      <div className="vaultshare_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="vaultshare_list_item__Name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="vaultshare__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="vaultshare__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="vaultshare__list_item__remove__container">
          <button className="vaultshare__list_item__remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="vaultshare_list_items">
      <div className="vaultshare_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="vaultshare_list_item__Name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="vaultshare__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="vaultshare__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="vaultshare__list_item__remove__container">
          <button className="vaultshare__list_item__remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default FileShare;
