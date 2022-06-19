import React from 'react'
import { faX, faUserPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SharePopup.scss';

//Images
import profilePic from '../../assets/images/other/profilePicture.jpg'

const SharePopup = ({ trigger, settrigger}) => {
    return trigger ? (
      <div className="popup">
        <div className="popup_body">
          <button className="closebtn" onClick={() => settrigger(false)}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <div className="vaultshare_header">
            <h1>INVITE PEOPLES & GROUPS</h1>
          </div>
          <div className="share__searchbox1">
        <select name="" id="">
          <option value="0">Add Users</option>
          <option value="1">Naveen Liyanage</option>
          <option value="2">Janith Thenuka</option>
          <option value="3">Uththara Dushani</option>
        </select>
        <div className="share__searchbox1__icon">
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
      </div>
      <div className="share_group_list_items">
      <div className="share_group_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="share_group_list_item__name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="share_group__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="share_group__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
      </div>
      <div className="share_group_list_items">
      <div className="share_group_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="share_group_list_item__name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="share_group__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="share_group__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
      </div>
      <div className="share_group_list_items">
      <div className="share_group_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="share_group_list_item__name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="share_group__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="share_group__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
      </div>
      <div className="share_group_list_items">
      <div className="share_group_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="share_group_list_item__name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="share_group__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="share_group__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
      </div>
      <div className="share_group_list_items">
      <div className="share_group_list_item__Icon">
        <img src={profilePic} alt="" />
      </div>
      <div className="share_group_list_item__name">
        <p>Naveen Liyanage</p>
      </div>
      <div className="share_group__list_item_accessbox">
            <select name="" id="">
              <option value="">Viewer</option>
              <option value="">Editor</option>
            </select>
            <div className="share_group__list_item_accessbox__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
      </div>
      <div className='share_group_buttons'>
      <button className="share_group_button1">
            <span>CANCEL</span>
          </button>
          <button className="share_group_button2">
            <span>INVITE</span>
          </button>
      </div>
        </div>
      </div>
    ) : (
      <></>
    );
  };

export default SharePopup;