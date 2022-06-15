<<<<<<< HEAD
import React from 'react'
import "./Whiteboard.scss"
import Canvas from './WhiteboardEditor/Canvas'
import ToolBar from "./WhiteboardEditor/ToolBar"
import Navbar from '../Navbar/Navbar'

=======
import React from "react";
import "./Whiteboard.scss";
import Canvas from "./Drawables";
import Navbar from "../Navbar/Navbar";
>>>>>>> 52094427b68528f5ae9a7804a36d254d7ec2521d

function Whiteboard() {
  return (
    <div className="whiteboard">
      <Navbar page="crestera" />
<<<<<<< HEAD
      <div className='whiteboard__canvas'>
      <ToolBar/>
      <Canvas/>
=======
      <div className="whiteboard__canvas__container">
        <div className="whiteboard__canvas">
          <Canvas />
        </div>
>>>>>>> 52094427b68528f5ae9a7804a36d254d7ec2521d
      </div>
    </div>
  );
}

export default Whiteboard;
