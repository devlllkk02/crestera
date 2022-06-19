// ------ DashHeader  ------
import React from "react";
import "./DashHeader.scss";

function DashHeader({ title1, title2, title3 }) {
  return (
    <div className="dashHeader">
      <div className="dashHeader__fileIcon"></div>
      <div className="dashHeader__title1">
        <p>{title1}</p>
      </div>
      <div className="dashHeader__middleIcon"></div>
      <div className="dashHeader__title2">
        <p>{title2}</p>
      </div>
      <div className="dashHeader__title3">
        <p>{title3}</p>
      </div>
      <div className="dashHeader__setings"></div>
    </div>
  );
}

export default DashHeader;
