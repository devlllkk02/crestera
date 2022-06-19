// ------ DashSearch  ------
import React, { useEffect } from "react";
import "./DashSearch.scss";

//Font Awesome
import {
  faChevronDown,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function DashSearch({
  page,
  search,
  setSearch,
  dropdown,
  setDropdown,
  popup,
  setPopup,
}) {
  //Styles
  const setCreateButtonBorderStyles = () => {
    if (page === "board") {
      return { border: "3px solid #582753" };
    }
    if (page === "note") {
      return { border: "3px solid #7d292b" };
    }
  };

  const setCreateButtonColorStyles = () => {
    if (page === "board") {
      return { color: "#582753" };
    }
    if (page === "note") {
      return { color: "#7d292b" };
    }
  };

  const setCreateButtonText = () => {
    if (page === "board") {
      return "Create Board";
    }
    if (page === "note") {
      return "Create Note";
    }
  };

  const setCreateButtonLink = () => {
    if (page === "board") {
      return "/board";
    }
    if (page === "note") {
      return "/note";
    }
  };

  return (
    <div className="dashSearch">
      <div className="dashSearch__button">
        {page != "crestera" && (
          <button
            style={setCreateButtonBorderStyles()}
            onClick={() => setPopup("flex")}
          >
            <div
              className="dashSearch__button__icon"
              style={setCreateButtonColorStyles()}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="dashSearch__button__text">
              <p style={setCreateButtonColorStyles()}>
                {setCreateButtonText()}
              </p>
            </div>
          </button>
        )}
      </div>
      <div className="dashSearch__searchbox1">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="dashSearch__searchbox1__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="dashSearch__searchbox2">
        <select
          name=""
          id=""
          onChange={(e) => setDropdown(e.target.value)}
          value={dropdown}
        >
          <option value="All Documents">All Documents</option>
          <option value="Shared With Me">Shared With Me</option>
          <option value="Favourites">Favourites</option>
        </select>
        <div className="dashSearch__searchbox2__icon">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}

export default DashSearch;
