import React, { useEffect, useState } from "react";
import { faX, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MultiSelect } from "react-multi-select-component";
import "./SharePopup.scss";

import { addMember, getUsers } from "../../../services/AuthService";
import {
  addUserToNote,
  getANoteUsers,
  removeUserFromNote,
} from "./SharePopupAPI";

import { useNavigate } from "react-router-dom";

const SharePopup = ({
  trigger,
  settrigger,
  ID,
  shareMembers,
  fileType,
  Id,
}) => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);

  //Get Users
  useEffect(() => {
    if (fileType === "note") {
      getANoteUsers(Id, setUsers);
    } else {
      // getABoard(Id, setFile);
    }
  }, []);

  //Add User
  const handleAddUser = (userId) => {
    if (fileType === "note") {
      console.log(userId);
      addUserToNote(Id, userId, setUpdate);
    } else {
      // getABoard(Id, setFile);
    }
  };

  //Remove User
  const handleRemoveUser = (userId) => {
    if (fileType === "note") {
      console.log(userId);
      removeUserFromNote(Id, userId, setUpdate);
    } else {
      // getABoard(Id, setFile);
    }
  };
  //Updating DOM
  useEffect(() => {
    if (update) {
      navigate(0);
    }
  }, [update]);

  //!---------------------------

  const GetUsers = async () => {
    try {
      const response = await getUsers();
      // console.log(response.data.data);
      // setUsers(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addmember = async (member) => {
    try {
      const response = await addMember({
        members: member,
        id: ID,
      });
      settrigger(false);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = () => {
    const members = [];
    selected.map((select) => members.push(select["value"]));
    console.log(members);

    members.map((member) => addmember(member));
  };

  return trigger ? (
    <div className="popup">
      <div className="popup_body">
        <button className="closebtn" onClick={() => settrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className="invite_container">
          <div onSubmit={handleSubmit}>
            <div className="share_header">
              <h1>INVITE PEOPLES & GROUPS</h1>
            </div>
            {users && (
              <div className="share_popup_body">
                {users.users &&
                  users.users.map((user, key) => {
                    return (
                      <div className="share_popup_item" key={key}>
                        <div className="share_popup_item__image">
                          <img src={user.image} alt="" />
                        </div>
                        <div className="share_popup_item__name">
                          <p>{`${user.firstName} ${user.lastName}`}</p>
                        </div>
                        <div className="share_popup_item__button">
                          <button onClick={() => handleAddUser(user._id)}>
                            INVITE
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}

            {/* <div className="share__searchbox1">
              <MultiSelect
                options={users.map((user) => ({
                  value: user._id,
                  label: `${user.firstName} ${user.lastName} `,
                }))}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
              <div className="share__searchbox1__icon">
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
            </div> */}
            {/* <div className="share_group_buttons">
              <button
                className="share_group_button1"
                onClick={() => settrigger(false)}
              >
                <span>CANCEL</span>
              </button>

              <button className="share_group_button2">
                <span type="submit">SHARE</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SharePopup;
