import React from 'react';
import { useParams } from 'react-router';
import '@fontsource/roboto';
import './Share.scss';
import { useState, useEffect } from 'react';
import { getDateTime } from '../../../helpers/TimeHelper';
import { getFolder } from '../../../services/AuthService';

//Images
import fileicon from '../../../assets/images/Vault icons/FileIcon.png';
import foldericon from '../../../assets/images/Vault icons/FolderIcon.png';
import profilePic from '../../../assets/images/other/profilePicture.jpg';

//Font Awesome
import { faChevronDown, faUserFriends, faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import VaultSharePopup from '../VaultSharePopup/VaultSharePopup';

const FolderShare = () => {
  const { folderId } = useParams();
  const [btnpopup, setbtnpopup] = useState(false);
  const [folder, setFolder] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    loadFolder();
  }, [folderId]);

  useEffect(() => {
    setMembers(folder.members);
  }, [folder.members]);

  //load folder by id
  const loadFolder = async () => {
    try {
      console.log(folderId);
      const response = await getFolder(folderId);
      console.log(response.data.data);
      setFolder(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

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
            <p2>{folder.name}</p2>
          </div>
          <div className="vaultshare_details_type">
            <p1>Type :</p1>&nbsp;
            <p2>Folder</p2>
          </div>
          {/* <div className="vaultshare_details_size">
            <p1>Size:</p1>&nbsp;
            <p2> GB</p2>
          </div> */}
          <div className="vaultshare_details_datemodified">
            <p1>Date Modified :</p1>&nbsp;
            <p2>
              {' '}
              {folder.addedOn && <p2> {getDateTime(folder.addedOn)}</p2>}
            </p2>
          </div>
        </div>
      </div>
      <div className="vaultshare_link_group">
        <div className="vaultshare_link_group_header">
          <p>SHARE WITH PEOPLES & GROUPS</p>
        </div>
        <button
          className="vaultshare_link_group_button"
          onClick={() => setbtnpopup(true)}
        >
          <span>INVITE PEOPLES & GROUPS</span>
        </button>
        <VaultSharePopup
          trigger={btnpopup}
          settrigger={setbtnpopup}
          ID={folder._id}
        ></VaultSharePopup>
      </div>
      <div className='foldershare__header__list'>
      <div className="foldershare__header__container">
      <div className="foldershare__Header">
      <div className="foldershare__Header__fileIcon"></div>
      <div className="foldershare__Header__title1">
        <p>Username</p>
      </div>
      <div className="foldershare__Header__middleIcon"></div>
      <div className="foldershare__Header__title2">
        <p>type</p>
      </div>
      <div className="foldershare__Header__title3">
        <p></p>
      </div>
      <div className="foldershare__Header__setings"></div>
    </div>
    </div>
    </div>

    <div className="foldershare__items">
    <div>
      {members &&
        members.map((member) => (
          <>
            <div key={member._id} className="foldershare__Item" disabled>
              <div className="foldershare__Item__fileIcon">
            <img src={member.member && member.member.image}/> 
            {/* name={`${member.member && member.member.firstName} ${member.member && member.member.lastName} `}
        /> */}
              </div>
              <div className="foldershare__Item__fileName">
                <p>
                  {member.member && member.member.firstName}{' '}
                  {member.member && member.member.lastName}
                </p>
              </div>
              <div className="foldershare__Item__middleIcon">
                <div className="foldershare__Item__middleIcon__container">
                  <FontAwesomeIcon icon={faUserFriends} />
                </div>
              </div>
              <div className="foldershare__Item__title1">
                <p>
                  {member.isOwner
                    ? 'Owner'
                    : member.isAdmin
                    ? 'Admin'
                    : member.isPending
                    ? 'Pending'
                    : 'Member'}
                </p>

                {member.isOwner == true && (
                  <FontAwesomeIcon className="user_owner" icon={faCrown} />
                )}
              </div>
              <div className="foldershare__Item__title2">
                {member.isAdmin == false && member.isOwner == false && (
                  <button >
                    Make Admin
                  </button>
                )}
                {member.isAdmin == true && member.isOwner == false && (
                  <button >
                    Remove Admin
                  </button>
                )}
              </div>
              <div className="foldershare__Item__setings">
                <div className="foldershare__Item__setings__container">
                  <button className="foldershare___remove_button" >
                    <span>REMOVE</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
    </div>
    </div>
  );
};

export default FolderShare;
