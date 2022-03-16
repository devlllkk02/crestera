// ------ DashHeader  ------
import React from "react";
import "./DashHeader.scss";

function DashHeader() {
  return (
    <div className="dashHeader">
        <div className="dashHeader__fileIcon"></div>
        <div className="dashHeader__fileName"><p>Name</p></div>
        <div className="dashHeader__middleIcon"></div>
        <div className="dashHeader__title1"><p>Owned By</p></div>
        <div className="dashHeader__title2"><p>Date Modified</p></div>
        <div className="dashHeader__setings"></div>
    </div>
  )
}

export default DashHeader