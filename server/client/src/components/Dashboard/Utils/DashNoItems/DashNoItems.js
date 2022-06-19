// ------ DashNoItems  ------
import React, { useEffect } from "react";
import "./DashNoItems.scss";

//Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleExclamation,
  faFileLines,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function DashNoItems() {
  return (
    <div className="dashNoItems">
      <div className="dashNoItems__icon">
        <FontAwesomeIcon icon={faFileLines} />
      </div>
      <div className="dashNoItems__text">
        <p>No files Found!</p>
      </div>
    </div>
  );
}

export default DashNoItems;
