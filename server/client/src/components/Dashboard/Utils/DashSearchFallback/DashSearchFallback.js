// ------ DashSearchFallback  ------
import React, { useEffect } from "react";
import "./DashSearchFallback.scss";

//Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleExclamation,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function DashSearchFallback() {
  return (
    <div className="dashSearchFallback">
      <div className="dashSearchFallback__icon">
        <FontAwesomeIcon icon={faFileCircleExclamation} />
      </div>
      <div className="dashSearchFallback__text">
        <p>File not Found!</p>
      </div>
    </div>
  );
}

export default DashSearchFallback;
