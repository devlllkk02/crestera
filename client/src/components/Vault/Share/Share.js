import React from 'react';
import '@fontsource/roboto';
import './Share.scss';
import { useState } from 'react';

//Images
import fileicon from '../../../assets/images/Vault icons/FileIcon.png';
import foldericon from '../../../assets/images/Vault icons/FolderIcon.png';

//Font Awesome
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Share() {
  return (
    <div className="vaultshare">
      <div className="vaultshare_header">
        <p>SHARE</p>
      </div>
      <div className="vaultshare_details">
        <div className="vaultshare__folderIcon">
          <img src={foldericon} alt="" />
        </div>
        <div className="vaultshare_details_list">
          <div className="vaultshare_details_name">
            <p1>Name :</p1>&nbsp;
            <p2>Folder 01</p2>
          </div>
          <div className="vaultshare_details_type">
            <p1>Type :</p1>&nbsp;
            <p2>Folder</p2>
          </div>
          <div className="vaultshare_details_size">
            <p1>Size:</p1>&nbsp;
            <p2>2.5 GB</p2>
          </div>
          <div className="vaultshare_details_datemodified">
            <p1>Date Modified :</p1>&nbsp;
            <p2>Jan 12, 2022</p2>
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
              type="text"
              placeholder="https://www.crestera.com/vault/SpN2EDHFdKjywdmwixcI"
            />
          </div>
          <div className="vaultshare__linkaccessbox">
            <select name="" id="">
              <option value="">Restricted</option>
              <option value="">Allow</option>
            </select>
            <div className="vaultshare__linkaccessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <button className="vaultshare_link_button">
            <span>COPY LINK</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
