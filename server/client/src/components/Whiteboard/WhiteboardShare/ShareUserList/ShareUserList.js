import React, { useEffect, useState, useContext } from 'react';
import './ShareUserList.scss';
import { updateMember, removeMember } from '../../../../services/AuthService';
import { UserContext } from '../../../../App';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faUserFriends,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';

const ShareUserList = ({ shareMembers , shareId, refresh , setRefresh}) => {
    const { state, dispatch } = useContext(UserContext);
    const [members, setMembers] = useState([]);
    const [admin, setAdmin] = useState([]);
  
    useEffect(() => {
      setMembers(shareMembers);
      //console.log(shareMembers);
    }, [shareMembers]);
  
    const handleUpdateMember = async (memberId, isAdmin) => {
      try {
        const response = await updateMember({
          memberId: memberId,
          isAdmin: isAdmin,
        });
        //console.log(response);
        setRefresh(!refresh);
      } catch (e) {
        console.log(e);
      }
    };
    
    const handleRemoveMember = async (memberId) => {
      console.log(memberId)
      await removeMember({
        members: memberId,
        id: shareId,
      });
      setRefresh(!refresh);
    }
  
    return (
      <div>
        {members &&
          members.map((member) => (
            <>
              <div key={member._id} className="shareItem" disabled>
                <div className="shareItem__fileIcon">
                  {console.log(member)}
              <img src={member.member && member.member.image}/>
                </div>
                <div className="shareItem__fileName">
                  <p>
                    {member.member && member.member.firstName}{' '}
                    {member.member && member.member.lastName}
                  </p>
                </div>

                <div className="shareItem__setings">
                  <div className="shareItem__setings__container">
                    <button className="share_remove_button" onClick={() => handleRemoveMember(member.member._id)}>
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
  
