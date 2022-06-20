import React, { useState } from "react";
import "@fontsource/roboto";
import "./WhiteboardShare.scss";

//images
import slideicon from "../../../assets/images/Whiteboard/slideicon.png";
import profilePic from "../../../assets/images/other/profilePicture.jpg";

//Font Awesome
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import SharePopup from "../../SharePopup/SharePopup";

function WhiteboardShare(props) {

  const[btnpopup, setbtnpopup] = useState(false);

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

      <div className="boardshare_getlink">
        <div className="boardshare_getlink_header">
          <p>GET LINK TO DOWNLOAD</p>
        </div>
        <div className="boardshare_getlink_body">
          <div className="boardshare__linkbox">
            <input
              type="text"
              placeholder="https://www.crestera.com/vault/SpN2EDHFdKjywdmwixcI"
            />
          </div>
          <button className="boardshare_getlink_button">
            <span>COPY LINK</span>
          </button>
        </div>
      </div>

      <div className="boardshare_linkgroup">
        <div className="boardshare_linkgroup_header">
          <p>SHARE WITH PEOPLE & GROUPS</p>
        </div>
        <button className="boardshare_linkgroup_button" onClick={() => setbtnpopup(true)}>
          <span>INVITE PEOPLE & GROUPS</span>
        </button>
        <SharePopup
          trigger={btnpopup}
          settrigger={setbtnpopup}>
        </SharePopup>
      </div>
      <div className="boardshare_list_header">
        <div className="boardshare_list_header_title1">
          <p>Username</p>
        </div>
        <div className="boardshare_list_header_title2">
          <p>Permission</p>
        </div>
      </div>

      <div className="boardshare_list_items">
        <div className="boardshare_list_item__Icon">
          <img src={profilePic} alt="" />
        </div>
        <div className="boardshare_list_item__Name">
          <p>Janice Brownwell</p>
        </div>
        <div className="boardshare__list_item_accessbox">
          <select name="" id="">
            <option value="">Viewer</option>
            <option value="">Editor</option>
          </select>
          <div className="boardshare__list_item_accessbox__icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="boardshare_listitem_remove_container">
          <button className="boardshare_listitem_remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="boardshare_list_items">
        <div className="boardshare_list_item__Icon">
          <img src={profilePic} alt="" />
        </div>
        <div className="boardshare_list_item__Name">
          <p>Janice Brownwell</p>
        </div>
        <div className="boardshare__list_item_accessbox">
          <select name="" id="">
            <option value="">Viewer</option>
            <option value="">Editor</option>
          </select>
          <div className="boardshare__list_item_accessbox__icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="boardshare_listitem_remove_container">
          <button className="boardshare_listitem_remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="boardshare_list_items">
        <div className="boardshare_list_item__Icon">
          <img src={profilePic} alt="" />
        </div>
        <div className="boardshare_list_item__Name">
          <p>Janice Brownwell</p>
        </div>
        <div className="boardshare__list_item_accessbox">
          <select name="" id="">
            <option value="">Viewer</option>
            <option value="">Editor</option>
          </select>
          <div className="boardshare__list_item_accessbox__icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="boardshare_listitem_remove_container">
          <button className="boardshare_listitem_remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="boardshare_list_items">
        <div className="boardshare_list_item__Icon">
          <img src={profilePic} alt="" />
        </div>
        <div className="boardshare_list_item__Name">
          <p>Janice Brownwell</p>
        </div>
        <div className="boardshare__list_item_accessbox">
          <select name="" id="">
            <option value="">Viewer</option>
            <option value="">Editor</option>
          </select>
          <div className="boardshare__list_item_accessbox__icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="boardshare_listitem_remove_container">
          <button className="boardshare_listitem_remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
      <div className="boardshare_list_items">
        <div className="boardshare_list_item__Icon">
          <img src={profilePic} alt="" />
        </div>
        <div className="boardshare_list_item__Name">
          <p>Janice Brownwell</p>
        </div>
        <div className="boardshare__list_item_accessbox">
          <select name="" id="">
            <option value="">Viewer</option>
            <option value="">Editor</option>
          </select>
          <div className="boardshare__list_item_accessbox__icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="boardshare_listitem_remove_container">
          <button className="boardshare_listitem_remove_button">
            <span>REMOVE</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhiteboardShare;
