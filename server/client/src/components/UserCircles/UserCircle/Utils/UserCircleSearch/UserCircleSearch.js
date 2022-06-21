// ------ usercircleSearch  ------
import React, { useState } from 'react';
import './UserCircleSearch.scss';

//Font Awesome
import {
  faChevronDown,
  faPlus,
  faSearch,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddUsersPopup from '../../AddUsersPopup';

function UserCircleSearch({ page, ID, usercircleMembers }) {
  const setCreateButtonBorderStyles = () => {
    if (page === 'board') {
      return { border: '3px solid #582753' };
    }
    if (page === 'note') {
      return { border: '3px solid #7d292b' };
    }
  };

  const setCreateButtonColorStyles = () => {
    if (page === 'board') {
      return { color: '#582753' };
    }
    if (page === 'note') {
      return { color: '#7d292b' };
    }
  };

  const setCreateButtonText = () => {
    if (page === 'board') {
      return 'Create Board';
    }
    if (page === 'note') {
      return 'Create Note';
    }
  };

  const [btnpopup, setbtnpopup] = useState(false);

  return (
    <div className="usercircleSearch">
      <div className="usercircleSearch__button">
        {page != 'crestera' && (
          <button style={setCreateButtonBorderStyles()}>
            <div
              className="usercircleSearch__button__icon"
              style={setCreateButtonColorStyles()}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="usercircleSearch__button__text">
              <p style={setCreateButtonColorStyles()}>
                {setCreateButtonText()}
              </p>
            </div>
          </button>
        )}
      </div>
      {/* <div className="usercircleSearch__searchbox1">
        <select name="" id="">
          <option value="0">Add Users</option>
          <option value="1">Naveen Liyanage</option>
          <option value="2">Janith Thenuka</option>
          <option value="3">Uththara Dushani</option>
        </select>
        <div className="usercircleSearch__searchbox2__icon">
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
          <h1>Select Fruits</h1>
       <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      </div> */}
      <button
        className="usercircle_addusers_button"
        onClick={() => setbtnpopup(true)}
      >
        <span>ADD USERS</span>
      </button>
      <AddUsersPopup
        trigger={btnpopup}
        settrigger={setbtnpopup}
        ID={ID}
        circlemembers={usercircleMembers}
      ></AddUsersPopup>
      {/* <div className="usercircleSearch__searchbox2">
        <input type="text" placeholder="Search" />
        <div className="usercircleSearch__searchbox1__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div> */}
    </div>
  );
}

export default UserCircleSearch;
