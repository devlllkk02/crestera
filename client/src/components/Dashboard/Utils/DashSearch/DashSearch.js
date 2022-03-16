// ------ DashSearch  ------
import React from "react";
import "./DashSearch.scss";

//Font Awesome
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashSearch() {
  return (
    <div className="dashSearch">
      <div className="dashSearch__button"></div>
      <div className="dashSearch__searchbox1">
        <input type="text" placeholder="Search" />
        <div className="dashSearch__searchbox1__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="dashSearch__searchbox2">
        <select name="" id="">
          <option value="">All Documents</option>
          <option value="">Shared With Me</option>
          <option value="">Favourites</option>
        </select>
        <div className="dashSearch__searchbox2__icon">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}

export default DashSearch;
