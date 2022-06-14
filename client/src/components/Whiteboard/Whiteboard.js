import React from "react";
import "./Whiteboard.scss";
import Canvas from "./Drawables";
import Navbar from "../Navbar/Navbar";

function Whiteboard() {
  return (
    <div className="whiteboard">
      <Navbar page="crestera" />
      <div className="whiteboard__canvas__container">
        <div className="whiteboard__canvas">
          <Canvas />
        </div>
      </div>
    </div>
  );
}

export default Whiteboard;
