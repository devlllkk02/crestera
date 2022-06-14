// ------ usercirclesSearch  ------
import React from 'react';
import './UserCirclesSearch.scss';

//Font Awesome
import {
  faChevronDown,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function usercirclesSearch({ page, search,
  setSearch, dropdown,
  setDropdown }) {
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

  return (
    <div className="usercirclesSearch">
      <div className="usercirclesSearch__button">
        {page != 'crestera' && (
          <button style={setCreateButtonBorderStyles()}>
            <div
              className="usercirclesSearch__button__icon"
              style={setCreateButtonColorStyles()}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="usercirclesSearch__button__text">
              <p style={setCreateButtonColorStyles()}>
                {setCreateButtonText()}
              </p>
            </div>
          </button>
        )}
      </div>
      <div className="usercirclesSearch__searchbox1">
        <input type="text" placeholder="Search" value={search}
          onChange={(e) => setSearch(e.target.value)}/>
        <div className="usercirclesSearch__searchbox1__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="usercirclesSearch__searchbox2">
      <select
          name=""
          id=""
          onChange={(e) => setDropdown(e.target.value)}
          value={dropdown}
        >
          <option value="All Circles">All Circles</option>
          <option value="Public Circles">Public Circles</option>
          <option value="Private Circles">Private Circles</option>
        </select>
        <div className="usercirclesSearch__searchbox2__icon">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}

export default usercirclesSearch;
