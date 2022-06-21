import React  from 'react';
import { useParams } from 'react-router';
import '@fontsource/roboto';
import './Share.scss';
import { useState, useEffect } from 'react';
import { getDateTime } from '../../../helpers/TimeHelper';
import { getFolder,  getUsers, removeFolderMember } from '../../../services/AuthService';

//Images
import fileicon from '../../../assets/images/Vault icons/FileIcon.png';
import foldericon from '../../../assets/images/Vault icons/FolderIcon.png';
import profilePic from '../../../assets/images/other/profilePicture.jpg';

//Font Awesome
import { faChevronDown, faUserFriends, faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import VaultSharePopup from '../VaultSharePopup/VaultSharePopup';
import FolderShareMembers from './Utils/FolderShareMembers/FolderShareMembers';

const FolderShare = () => {
  const { folderId } = useParams();
  const [btnpopup, setbtnpopup] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [folder, setFolder] = useState([]);
  const [members, setMembers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadFolder();
    GetUsers();
  }, [folderId]);



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
  //get Users
  //Get Users
  const GetUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data.data);
      setUsers(response.data.data);
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
          <p>SHARE WITH PEOPLES</p>
        </div>
        <button
          className="vaultshare_link_group_button"
          onClick={() => setbtnpopup(true)}
        >
          <span>INVITE PEOPLES</span>
        </button>
        <VaultSharePopup
          trigger={btnpopup}
          settrigger={setbtnpopup}
          ID={folder._id}
        ></VaultSharePopup>
      </div>

    <div className="foldershare__items">
    <FolderShareMembers
            folderMembers={folder.members}
            folderId={folder._id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
    </div>
    </div>
  );
};

export default FolderShare;
