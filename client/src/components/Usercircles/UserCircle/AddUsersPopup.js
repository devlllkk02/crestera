import React, { useEffect, useState } from 'react';
import { faX, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultiSelect } from 'react-multi-select-component';

//scss
import './AddUsersPopup.scss';
import { getUsers } from '../../../services/AuthService';

const AddUsersPopup = ({ trigger, settrigger }) => {
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
  return trigger ? (
    <div className="popup">
      <div className="addusers_popup_body">
        <button className="closebtn" onClick={() => settrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </button>
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
      </div>
    </div>
  ) : (
    <></>
  );
};

export default AddUsersPopup;
