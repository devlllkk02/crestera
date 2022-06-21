// ------ foldershareItem  ------
import React, { useEffect, useState, useContext } from 'react';
import './FolderShareMembers.scss';
import { updateMember, removeFolderMember} from '../../../../../services/AuthService';
import { UserContext } from '../../../../../App';

//Images
import cresteraIconsV2Board from '../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Board.png';
import cresteraIconsV2Note from '../../../../../assets/images/cresteraIconsV2/cresteraIconsV2-Note.png';
import profilePic from '../../../../../assets/images/other/profilePicture.jpg';

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faUserFriends,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';

const FolderShareMembers = ({ folderMembers, folderId ,refresh , setRefresh}) => {
  const { state, dispatch } = useContext(UserContext);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(folderMembers);
    console.log(folderMembers);
  }, [folderMembers]);


  const handleRemoveMember = async (memberId) => {
    try{
      const response = await removeFolderMember({
          id: folderId,
          memberId: memberId,
      });
      console.log(response);
      window.location.reload(false);
     }
     catch(e){
      console.log(e);
     }
  }

  return (
    <div className='foldershare_box'>
      {members &&
        members.map((member) => (
          < >
            <div key={member._id} className="foldershareItem" disabled>
              <div className="foldershareItem__fileIcon">
            <img src={member.member && member.member.image}/> 
              </div>
              <div className="foldershareItem__fileName">
                <p>
                  {member.member && member.member.firstName}{' '}
                  {member.member && member.member.lastName}
                </p>
              </div>
              <div className="foldershareItem__middleIcon">
                <div className="foldershareItem__middleIcon__container">
                  <FontAwesomeIcon icon={faUserFriends} />
                </div>
              </div>
              <div className="foldershareItem__setings">
                <div className="foldershareItem__setings__container">
                  <button className="foldershare_remove_button" onClick={() => handleRemoveMember(member.member._id)} >
                    <span>REMOVE</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default FolderShareMembers;
