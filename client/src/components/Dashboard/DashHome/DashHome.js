// ------ DashHome  ------
import React from "react";
import "./DashHome.scss";

//Components
import DashCard from "../Utils/DashCard/DashCard";

function DashHome() {
  return (
    <div className="dashHome">
      <div className="dashHome__l1">
        <p>Good Morning, Janice</p>
      </div>
      <div className="dashHome__l2">
        <p>Recommended</p>
      </div>
      <div className="dashHome__cards">
        <DashCard />
      </div>
      <div className="dashHome__search"></div>
      <div className="dashHome__header"></div>
      <div className="dashHome__items"></div>
    </div>
  );
}

export default DashHome;
