// ------ usercircleItem  ------
import React, { useEffect, useState } from 'react';
import './UserCircleItem.scss';
import { updateMember } from '../../../../../services/AuthService';

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

const UserCircleItem = ({
  usercircleMembers,
  usercircleId,
}) => {
  const [members, setMembers] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    setMembers(usercircleMembers);
    console.log(usercircleMembers);
  }, [usercircleMembers]);

  const handleUpdateMember = () => async (memberId) => {
    await updateMember({
      
    });
  }



  return (
    <div>
      
      {members&&
      members.map((member) => (
          <>
            <div key={member._id} className="usercircleItem">
              <div className="usercircleItem__fileIcon">
                <img src={profilePic} alt="" />
              </div>
              <div className="usercircleItem__fileName">
                <p>
                {member.member && member.member.firstName} {member.member && member.member.lastName}
                </p>
              </div>
              <div className="usercircleItem__middleIcon">
                <div className="usercircleItem__middleIcon__container">
                   <FontAwesomeIcon icon={faUserFriends} />
                </div>
              </div>
              <div className="usercircleItem__title1">
                <p>{member.isOwner ? 'Owner':member.isAdmin ? 'Admin':'Member'}</p>
               {/* {member.isAdmin == false && <button onClick={handleUpdateMember}>Make Admin</button>} */}
               {member.isAdmin == true && member.isOwner == false && <button onClick={member.isAdmin == true}>Remove Admin</button>}
              
                  {member.isOwner == true && <FontAwesomeIcon className="user_owner" icon={faCrown} />}
                  
                
              </div>
              <div className="usercircleItem__title2">
                <p>Jun 16, 2022 at 9:08 PM</p>
              </div>
              <div className="usercircleItem__setings">
                <div className="usercircleItem__setings__container">
                  <button className="usercircle_remove_button">
                    <span>REMOVE</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default UserCircleItem;
