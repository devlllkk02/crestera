import React, { useEffect, useState } from 'react';
import { faX, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultiSelect } from 'react-multi-select-component';

//scss
import './AddUsersPopup.scss';
import { getUsers, addMember } from '../../../services/AuthService';

const AddUsersPopup = ({ trigger, settrigger, ID }) => {
  const [selected, setSelected] = useState([]);
  const [users, setUsers] = useState([]);

  //Users
  useEffect(() => {
    GetUsers();
  }, []);

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
   }
  const handleSubmit = () => {
    const members = [];
    selected.map((select) => members.push(select['value']));
    console.log(members);

    members.map((member) => (
     addmember(member)
    ))
  };

  return trigger ? (
    <div className="popup">
      <div className="addusers_popup_body">
        <button className="closebtn" onClick={() => settrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className="addusers_container">
          <form onSubmit={handleSubmit}>
            <div className="addusers_header">
              <h1>ADD USERS</h1>
            </div>
            <div className="addusers__searchbox1">
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

export default AddUsersPopup;
