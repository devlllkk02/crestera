import React from 'react'
import "./Whiteboard.scss"
import Canvas from './WhiteboardEditor/Canvas'
import ToolBar from "./WhiteboardEditor/ToolBar"
import Navbar from '../Navbar/Navbar'


function Whiteboard() {
  return (
    <div className='whiteboard'>
      <Navbar page="crestera" />
      <div className='whiteboard__canvas'>
      <ToolBar/>
      <Canvas/>
      </div>
    </div>
  )
}

export default Whiteboard