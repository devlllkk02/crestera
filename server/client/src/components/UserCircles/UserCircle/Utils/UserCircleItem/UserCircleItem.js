// ------ usercircleItem  ------
import React, { useEffect, useState, useContext } from 'react';
import './UserCircleItem.scss';
import {
  updateMember,
  removeMember,
} from '../../../../../services/AuthService';
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

const UserCircleItem = ({
  usercircleMembers,
  usercircleId,
  refresh,
  setRefresh,
}) => {
  const { state, dispatch } = useContext(UserContext);
  const [loguserAdmin, setloguserAdmin] = useState(false);
  const [loguserOwner, setloguserOwner] = useState(false);
  console.log(state);
  const [members, setMembers] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    setMembers(usercircleMembers);
    // console.log(usercircleMembers);
  }, [usercircleMembers]);

  useEffect(() => {
    console.log(loguserAdmin);
  }, [loguserAdmin]);

  useEffect(() => {
    if (members == null) return;
    console.log(members);
    members.forEach((member) => {
      if (member.member._id == state._id && member.isAdmin)
        setloguserAdmin(true);
    });
  }, [members]);

  useEffect(() => {
    if (members == null) return;
    console.log(members);
    members.forEach((member) => {
      if (member.member._id == state._id && member.isOwner)
        setloguserOwner(true);
    });
  }, [members]);

  const handleUpdateMember = async (memberId, isAdmin) => {
    try {
      const response = await updateMember({
        memberId: memberId,
        isAdmin: isAdmin,
      });
      // console.log(response);
      setRefresh(!refresh);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveMember = async (memberId) => {
    try {
      const response = await removeMember({
        id: usercircleId,
        memberId: memberId,
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
            <div key={member._id} className="usercircleItem" disabled>
              <div className="usercircleItem__fileIcon">
                <img src={member.member && member.member.image} />
              </div>
              <div className="usercircleItem__fileName">
                <p>
                  {member.member && member.member.firstName}{' '}
                  {member.member && member.member.lastName}
                </p>
              </div>
              <div className="usercircleItem__middleIcon">
                <div className="usercircleItem__middleIcon__container">
                  <FontAwesomeIcon icon={faUserFriends} />
                </div>
              </div>
              <div className="usercircleItem__title1">
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
              <div className="usercircleItem__title2">
                {/* {(member.member._id==state._id && member.isAdmin )=>setloguserAdmin(true)} */}
                {loguserAdmin && !member.isAdmin && (
                  <button className = "usercircle_admin"onClick={() => handleUpdateMember(member._id, true)}>
                    Make Admin
                  </button>
                )}
                {loguserOwner && !member.isOwner && member.isAdmin && (
                  <button className = "usercircle_admin" onClick={() => handleUpdateMember(member._id, false)}>
                    Remove Admin
                  </button>
                )}
              </div>
              <div className="usercircleItem__setings">
                <div className="usercircleItem__setings__container">
                  {loguserOwner && !member.isOwner && (
                    <button
                      className="usercircle_remove_button"
                      onClick={() => handleRemoveMember(member.member._id)}
                    >
                      <span>REMOVE</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default UserCircleItem;
