import React, { useEffect, useState } from 'react';
import {
  faX,
  faUserPlus,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultiSelect } from 'react-multi-select-component';
import {addFolderMember } from '../../../services/AuthService';

import './VaultSharePopup.scss';

//Images
import profilePic from '../../../assets/images/other/profilePicture.jpg';

const VaultSharePopup = ({ trigger, settrigger, ID }) => {
  const [selected, setSelected] = useState([]);
  const [users, setUsers] = useState([]);

  //Users
  useEffect(() => {
    GetUsers();
    // console.log(circlemembers);
  }, []);

  //Get Users
  const GetUsers = () => {

    fetch(`/v1/crestera/folders/folder/${ID}`, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setUsers(result)
      })
      .catch((error) => console.log(error));
  };



  const addfoldermember = async (member) => {
    try {
      const response = await addFolderMember({
        members: member,
        id: ID,
      });
      settrigger(false);
      // console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = () => {
    const members = [];
    selected.map((select) => members.push(select['value']));
    console.log(members);

    members.map((member) => addfoldermember(member));
  };
  return trigger ? (
    <div className="popup">
      <div className="vaultshare_popup_body">
        <button className="closebtn" onClick={() => settrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className="foldershare_addusers_container">
          <form onSubmit={handleSubmit}>
            <div className="foldershare_addusers_header">
              <h1>INVITE PEOPLES</h1>
            </div>
            <div className="foldershare_addusers__searchbox1">
              <MultiSelect
              options={users.map((user) => ({
                value: user._id,
                label: `${user.firstName} ${user.lastName} `,
              }))}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
              />
            </div>
            <input type="submit" value="INVITE"></input>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default VaultSharePopup;
