import React, { useEffect, useState } from "react";
import {
  faX,
  faUserPlus,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MultiSelect } from "react-multi-select-component";
import "./SharePopup.scss";

//Images
import profilePic from "../../assets/images/other/profilePicture.jpg";
import { addMember, getUsers } from "../../services/AuthService";

const SharePopup = ({ trigger, settrigger, ID, shareMembers }) => {
  const [selected, setSelected] = useState([]);
  const [users, setUsers] = useState([]);

  //Users
  useEffect(() => {
    GetUsers();
    console.log(shareMembers);
  }, []);

  const GetUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data.data);
      setUsers(response.data.data);
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
          <form onSubmit={handleSubmit}>
            <div className="share_header">
              <h1>INVITE PEOPLES & GROUPS</h1>
            </div>
            <div className="share__searchbox1">
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
            </div>
            <div className="share_group_buttons">
              <button
                className="share_group_button1"
                onClick={() => settrigger(false)}
              >
                <span>CANCEL</span>
              </button>

              <button className="share_group_button2">
                <span type="submit">SHARE</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SharePopup;
