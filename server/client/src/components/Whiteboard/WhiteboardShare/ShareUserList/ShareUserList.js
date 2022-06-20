import React, { useEffect, useState, useContext } from 'react';
import './ShareUserList.scss';
import { updateMember } from '../../../../services/AuthService';
import { UserContext } from '../../../../App';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faUserFriends,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';

const ShareUserList = ({ shareMembers, shareId ,refresh , setRefresh}) => {
    const { state, dispatch } = useContext(UserContext);
    const [members, setMembers] = useState([]);
    const [admin, setAdmin] = useState([]);
  
    useEffect(() => {
      setMembers(shareMembers);
      console.log(shareMembers);
    }, [shareMembers]);
  
    const handleUpdateMember = async (memberId, isAdmin) => {
      try {
        const response = await updateMember({
          memberId: memberId,
          isAdmin: isAdmin,
        });
        console.log(response);
        setRefresh(!refresh);
      } catch (e) {
        console.log(e);
      }
    };
  
    return (
      <div>
        {members &&
          members.map((member) => (
            <>
              <div key={member._id} className="shareItem" disabled>
                <div className="shareItem__fileIcon">
                  {console.log(member)}
              <img src={member.member && member.member.image}/> 
              {/* name={`${member.member && member.member.firstName} ${member.member && member.member.lastName} `}
          /> */}
                </div>
                <div className="shareItem__fileName">
                  <p>
                    {member.member && member.member.firstName}{' '}
                    {member.member && member.member.lastName}
                  </p>
                </div>
                <div className="shareItem__middleIcon">
                  <div className="shareItem__middleIcon__container">
                    <FontAwesomeIcon icon={faUserFriends} />
                  </div>
                </div>
                <div className="shareItem__title1">
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
                <div className="shareItem__title2">
                  {member.isAdmin == false && member.isOwner == false && (
                    <button onClick={() => handleUpdateMember(member._id, true)}>
                      Make Admin
                    </button>
                  )}
                  {member.isAdmin == true && member.isOwner == false && (
                    <button onClick={() => handleUpdateMember(member._id, false)}>
                      Remove Admin
                    </button>
                  )}
                </div>
                <div className="shareItem__setings">
                  <div className="shareItem__setings__container">
                    <button className="share_remove_button">
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
  
  export default ShareUserList;
  
