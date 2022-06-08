import React from "react";
import '@fontsource/roboto';
import './WhiteboardShare.scss';

//images
import slideicon from '../../../assets/images/Whiteboard/slideicon.png';

//Font Awesome
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WhiteboardShare() {
  return (
    <div className="boardshare">
      <div className="boardshare_header">
        <p>SHARE</p>
      </div>
      <div className="boardshare_details">
        <div className="boardshare_icon">
          <img src={slideicon} alt="" />
        </div>
        <div className="boardshare_details_list">
          <div className="boardshare_detail">
            <p1>Name :</p1>&nbsp;
            <p2>Board 01</p2>
          </div>
          <div className="boardshare_detail">
            <p1>Type :</p1>&nbsp;
            <p2>png</p2>
          </div>
          <div className="boardshare_detail">
            <p1>Size:</p1>&nbsp;
            <p2>11.5 MB</p2>
          </div>
          <div className="boardshare_details_datemodified">
            <p1>Date Modified :</p1>&nbsp;
            <p2>Jan 12, 2022</p2>
          </div>
        </div>
      </div>

      <div className="boardshare_download">
        <div className="boardshare_download_header">
          <p>DOWNLOAD</p>
        </div>
        <div className="boardshare_download_body">
            <p2>File Type</p2>
          <div className="boardshare__filetypebox">
            <select name="" id="">
              <option value="">PNG</option>
              <option value="">JPG</option>
              <option value="">PDF</option>
            </select>
            <div className="boardshare__linkaccessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <button className="boardshare_download_button">
            <span>DOWNLOAD</span>
          </button>
        </div>
      </div>
      <div className="boardshare_getlink">
        <div className="boardshare_getlink_header">
          <p>GET LINK</p>
        </div>
        <div className="boardshare_getlink_body">
          <div className="boardshare__linkbox">
            <input
              type="text"
              placeholder="https://www.crestera.com/vault/SpN2EDHFdKjywdmwixcI"
            />
          </div>
          <div className="boardshare__linkaccessbox">
            <select name="" id="">
              <option value="">Restricted</option>
              <option value="">Any one with the link</option>
            </select>
            <div className="boardshare__linkaccessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <button className="boardshare_getlink_button">
            <span>COPY LINK</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhiteboardShare; 
